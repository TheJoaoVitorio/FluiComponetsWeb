import { useEffect, useRef, useState, useCallback } from 'react';
import { RefreshCw, ArrowRight } from 'lucide-react';
import delphiPointsRaw from '../data/delphiPoints.json';

interface SamplePoint {
  x: number;
  y: number;
  type: string;
  r: number;
  g: number;
  b: number;
}

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  baseAlpha: number;
  floatPhase: number;
  floatSpeed: number;
  type: string;
}

export function DelphiFragmentSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rightSlotRef = useRef<HTMLDivElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const ambientParticlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -1000, y: -1000, active: false });
  const [scattered, setScattered] = useState(false);

  // Inicializa partículas a partir dos pontos do Delphi posicionados na direita
  const initParticles = useCallback((width: number, height: number) => {
    const points = delphiPointsRaw as SamplePoint[];
    const isDesktop = width >= 1024;
    const isTablet = width >= 768 && width < 1024;

    // Calcula o centro exato da coluna da direita via DOM se disponível, ou por proporção
    let centerX = isDesktop ? width * 0.72 : width * 0.5;
    let centerY = isDesktop ? height * 0.5 : (isTablet ? height * 0.55 : height * 0.62);

    if (rightSlotRef.current && containerRef.current && isDesktop) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const slotRect = rightSlotRef.current.getBoundingClientRect();
      centerX = (slotRect.left - containerRect.left) + slotRect.width / 2;
      centerY = (slotRect.top - containerRect.top) + slotRect.height / 2;
    }

    // Escala responsiva do elmo do Delphi
    const scale = isDesktop 
      ? Math.min(width * 0.17, height * 0.36, 210) 
      : isTablet 
        ? 160 
        : Math.min(width * 0.34, 135);

    const colorsRed = [
      '#e53935', '#ef4444', '#dc2626', '#b71c1c', '#ff2a4b', '#d32f2f', '#c62828'
    ];
    const colorsEdge = ['#7f1d1d', '#991b1b', '#1f1f1f', '#b71c1c'];
    const colorsCircle = ['#ef4444', '#dc2626', '#1a73e8', '#e53935'];

    const newParticles: Particle[] = points.map((pt, i) => {
      const originX = centerX + pt.x * scale;
      const originY = centerY + pt.y * scale;

      let color = colorsRed[i % colorsRed.length];
      let radius = Math.random() * 1.5 + 1.2;
      let baseAlpha = 0.85;

      if (pt.type === 'edge') {
        color = colorsEdge[i % colorsEdge.length];
        radius = Math.random() * 1.8 + 1.4;
        baseAlpha = 0.95;
      } else if (pt.type === 'circle') {
        color = colorsCircle[i % colorsCircle.length];
        radius = Math.random() * 1.4 + 1.0;
        baseAlpha = 0.7;
      }

      // Leve dispersão orgânica de início
      const startScatter = 20;
      return {
        x: originX + (Math.random() - 0.5) * startScatter,
        y: originY + (Math.random() - 0.5) * startScatter,
        originX,
        originY,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius,
        color,
        alpha: baseAlpha,
        baseAlpha,
        floatPhase: Math.random() * Math.PI * 2,
        floatSpeed: 0.015 + Math.random() * 0.02,
        type: pt.type
      };
    });

    // Partículas de poeira estelar ambiente espalhadas por toda a tela (estilo Antigravity)
    const ambientCount = isDesktop ? 160 : 70;
    const ambient: Particle[] = [];
    for (let i = 0; i < ambientCount; i++) {
      const px = Math.random() * width;
      const py = Math.random() * height;
      const isGoogleBlue = Math.random() < 0.12;
      ambient.push({
        x: px,
        y: py,
        originX: px,
        originY: py,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.3 + 0.8,
        color: isGoogleBlue ? '#1a73e8' : (Math.random() < 0.3 ? '#e53935' : '#475569'),
        alpha: 0.35 + Math.random() * 0.25,
        baseAlpha: 0.35,
        floatPhase: Math.random() * Math.PI * 2,
        floatSpeed: 0.01 + Math.random() * 0.015,
        type: 'ambient'
      });
    }

    particlesRef.current = newParticles;
    ambientParticlesRef.current = ambient;
  }, []);

  // Dispersão com gravidade zero ou reorganização
  const handleToggleScatter = () => {
    setScattered((prev) => {
      const next = !prev;
      particlesRef.current.forEach((p) => {
        if (next) {
          const angle = Math.random() * Math.PI * 2;
          const force = 12 + Math.random() * 26;
          p.vx += Math.cos(angle) * force;
          p.vy += Math.sin(angle) * force;
        } else {
          p.vx = (Math.random() - 0.5) * 2;
          p.vy = (Math.random() - 0.5) * 2;
        }
      });
      return next;
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      initParticles(w, h);
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Loop de animação física (Antigravity physics)
    let time = 0;
    const render = () => {
      const rect = container.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);
      time += 0.02;

      const mouse = mouseRef.current;
      const repelDist = 120; // Raio de influência do mouse

      // 1. Partículas do Elmo do Delphi na Direita
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Flutuação orgânica senoidal (respiração em antigravidade)
        const floatX = Math.cos(time * p.floatSpeed * 50 + p.floatPhase) * 1.5;
        const floatY = Math.sin(time * p.floatSpeed * 50 + p.floatPhase) * 2.0;

        const targetX = p.originX + floatX;
        const targetY = p.originY + floatY;

        // Repulsão pelo cursor do mouse
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < repelDist && dist > 0) {
            const force = (1 - dist / repelDist) * 9;
            const angle = Math.atan2(dy, dx);
            p.vx += Math.cos(angle) * force;
            p.vy += Math.sin(angle) * force;
          }
        }

        // Força elástica de retorno para a forma do elmo
        const spring = scattered ? 0.003 : 0.055;
        p.vx += (targetX - p.x) * spring;
        p.vy += (targetY - p.y) * spring;

        // Amortecimento por atrito
        p.vx *= 0.92;
        p.vy *= 0.92;

        p.x += p.vx;
        p.y += p.vy;

        // Desenhar fragmento
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 2. Partículas de ambiente dispersas (Antigravity dust)
      const ambient = ambientParticlesRef.current;
      for (let i = 0; i < ambient.length; i++) {
        const ap = ambient[i];
        ap.x += Math.cos(time * 0.5 + ap.floatPhase) * 0.4;
        ap.y += Math.sin(time * 0.4 + ap.floatPhase) * 0.3;

        if (mouse.active) {
          const dx = ap.x - mouse.x;
          const dy = ap.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < repelDist) {
            const angle = Math.atan2(dy, dx);
            ap.x += Math.cos(angle) * 2;
            ap.y += Math.sin(angle) * 2;
          }
        }

        ctx.save();
        ctx.globalAlpha = ap.alpha;
        ctx.fillStyle = ap.color;
        ctx.beginPath();
        ctx.arc(ap.x, ap.y, ap.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [initParticles, scattered]);

  return (
    <section 
      id="components"
      ref={containerRef}
      className="relative py-24 md:py-32 bg-white overflow-hidden border-t border-[#e3e3e3] select-none"
    >
      {/* Interactive Antigravity Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto cursor-crosshair z-0"
        title="Mova o mouse para interagir com os fragmentos do elmo do Delphi"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[480px]">
          
          {/* Left Column (5 to 6 Cols): Content strictly on Left side */}
          <div className="lg:col-span-6 flex flex-col items-start text-left pointer-events-auto space-y-6 max-w-xl">
            
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#1f1f1f] font-google tracking-tight leading-[1.08]">
              Para desenvolvedores
            </h2>

            <p className="text-2xl sm:text-3xl text-[#5f6368] font-normal leading-snug">
              Alcance novos patamares
            </p>

            <p className="text-sm sm:text-base text-[#747775] leading-relaxed max-w-lg font-normal">
              Construa interfaces fluidas para Delphi VCL com renderização nativa GDI+, cantos suaves arredondados, máscaras inteligentes e Fluent API moderna sem quebrar a lógica de negócio existente.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://github.com/useflui"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1f1f1f] hover:bg-[#333333] text-white text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-sm transition-all hover:shadow hover:scale-105 active:scale-95"
              >
                <span>Baixar</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#installation"
                className="bg-white hover:bg-[#f8f9fa] text-[#1f1f1f] border border-[#dadce0] hover:border-[#1a73e8]/40 text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-xs transition-all hover:scale-105 active:scale-95"
              >
                <span>Leia mais</span>
              </a>
            </div>

          </div>

          {/* Right Column (6 Cols): Reserved exclusively for the Animated Delphi Helmet Fragments */}
          <div 
            ref={rightSlotRef}
            className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[360px] sm:min-h-[440px] pointer-events-auto"
          >
            {/* Top Interactive Scatter Control Pill located above the Helmet on the Right */}
            <div className="absolute top-0 right-4 z-20">
              <button
                onClick={handleToggleScatter}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#dadce0] text-xs font-medium text-[#444746] hover:text-[#1a73e8] hover:border-[#1a73e8]/40 shadow-xs transition-all hover:scale-105 active:scale-95"
                title="Clique para dispersar ou reagrupar as partículas"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${scattered ? 'animate-spin' : ''}`} />
                <span>{scattered ? 'Reconstruir Elmo' : 'Dispersar Fragmentos'}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#e53935] ml-1 animate-pulse" />
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
