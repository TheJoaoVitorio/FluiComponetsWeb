export function GeminiStar({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gemini-star-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a73e8" />
          <stop offset="35%" stopColor="#8ab4f8" />
          <stop offset="70%" stopColor="#c58af9" />
          <stop offset="100%" stopColor="#ea4335" />
        </linearGradient>
      </defs>
      <path
        d="M14 0C14 7.732 7.732 14 0 14C7.732 14 14 20.268 14 28C14 20.268 20.268 14 28 14C20.268 14 14 7.732 14 0Z"
        fill="url(#gemini-star-grad)"
      />
    </svg>
  );
}

export function AntigravityDelta({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 3L2 20H22L12 3Z"
        stroke="#1a73e8"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="14" r="2" fill="#1a73e8" />
    </svg>
  );
}
