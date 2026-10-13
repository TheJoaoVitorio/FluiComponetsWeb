import { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { GoogleNavbar } from './components/GoogleNavbar';
import { AntigravityHero } from './components/AntigravityHero';
import { ShowcaseCarousel } from './components/ShowcaseCarousel';
import { DelphiFragmentSection } from './components/DelphiFragmentSection';
import { AntigravityIconArc } from './components/AntigravityIconArc';
import { DeveloperEditorial } from './components/DeveloperEditorial';
import { GooglePlayground } from './components/GooglePlayground';
import { GoogleComparisonTable } from './components/GoogleComparisonTable';
import { GoogleInstallation } from './components/GoogleInstallation';
import { GoogleFooter } from './components/GoogleFooter';
import { GeminiToastNotification } from './components/GeminiToastNotification';
import type { ToastItem, ToastType } from './types';

export function App() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const [activeSection, setActiveSection] = useState('components');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleTriggerToast = (
    title: string, 
    message: string, 
    type: ToastType = 'ftSuccess', 
    duration: number = 4000
  ) => {
    const id = `${Date.now()}-${Math.random()}`;
    const newToast: ToastItem = {
      id,
      title,
      message,
      type,
      duration,
      timestamp: Date.now()
    };

    setToasts((prev) => [newToast, ...prev].slice(0, 4));

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-white text-[#1f1f1f] flex flex-col font-sans antialiased selection:bg-[#1a73e8] selection:text-white">
      {/* 1. Top Announcement Bar (From Screenshot 1 & 2) */}
      <AnnouncementBar />

      {/* 2. Google Gemini Navbar with Underline Indicator */}
      <GoogleNavbar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* 3. Antigravity Hero with Particle Dispersion (Screenshot 2) */}
        <AntigravityHero 
          onTriggerToast={handleTriggerToast} 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* 4. Showcase Carousel: Componentes em Ação com GIFs reais (Screenshot 1) */}
        <div id="demonstracoes">
          <ShowcaseCarousel />
        </div>

        {/* 5. Delphi Helmet Antigravity Particles Section */}
        <DelphiFragmentSection />

        {/* 6. Antigravity Curved Icon Arc & Big Statement (Screenshot 3) */}
        <AntigravityIconArc />

        {/* 7. Developer Editorial Layout (Screenshot 3) */}
        <DeveloperEditorial />

        {/* 8. Clean Google Developer Playground */}
        <GooglePlayground onTriggerToast={handleTriggerToast} />

        {/* 9. Clean Google Comparison Table */}
        <GoogleComparisonTable />

        {/* 10. Google Installation Guide: Tradicional .DPK & Library Path */}
        <GoogleInstallation onTriggerToast={handleTriggerToast} />
      </main>

      {/* 11. Clean Google Footer with Massive Typography (Screenshot 2) */}
      <GoogleFooter />

      {/* 12. Live Material You Toast Notifications */}
      <GeminiToastNotification 
        toasts={toasts} 
        onDismiss={handleDismissToast} 
      />
    </div>
  );
}

export default App;
