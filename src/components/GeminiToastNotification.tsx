import { CheckCircle2, AlertCircle, AlertTriangle, Info, X } from 'lucide-react';
import type { ToastItem } from '../types';

interface GeminiToastNotificationProps {
  toasts: ToastItem[];
  onDismiss: (id: string) => void;
}

export function GeminiToastNotification({ toasts, onDismiss }: GeminiToastNotificationProps) {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-white border border-[#dadce0] rounded-2xl p-4 shadow-xl flex items-start gap-3 transition-all duration-300 animate-in slide-in-from-bottom-4"
        >
          {/* Status Icon */}
          <div className="mt-0.5">
            {toast.type === 'ftSuccess' && (
              <div className="w-6 h-6 rounded-full bg-[#e6f4ea] text-[#137333] flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            )}
            {toast.type === 'ftError' && (
              <div className="w-6 h-6 rounded-full bg-[#fce8e6] text-[#c5221f] flex items-center justify-center">
                <AlertCircle className="w-4 h-4" />
              </div>
            )}
            {toast.type === 'ftWarning' && (
              <div className="w-6 h-6 rounded-full bg-[#fef7e0] text-[#b06000] flex items-center justify-center">
                <AlertTriangle className="w-4 h-4" />
              </div>
            )}
            {toast.type === 'ftInfo' && (
              <div className="w-6 h-6 rounded-full bg-[#e8f0fe] text-[#1a73e8] flex items-center justify-center">
                <Info className="w-4 h-4" />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-xs text-[#1f1f1f]">
                {toast.title}
              </span>
              <span className="text-[10px] text-[#747775] font-mono">
                FluiToast4D
              </span>
            </div>
            <p className="text-xs text-[#444746] mt-0.5 leading-snug">
              {toast.message}
            </p>
          </div>

          {/* Close button */}
          <button
            onClick={() => onDismiss(toast.id)}
            className="text-[#747775] hover:text-[#1f1f1f] p-1 rounded-full hover:bg-black/5"
            aria-label="Fechar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
}
