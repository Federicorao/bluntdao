
const TornPaperSeparator = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`w-full h-16 relative overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-full text-black fill-current absolute bottom-0 transform translate-y-1"
        style={{ transform: 'rotate(180deg)' }}
      >
        <path d="M0,0V46.29c47,24.5,94,38.29,158,60c70,28,138,36,209-46c47-55,124-103,191-114c72-11,146,66,239,75c82,8,164-52,220-63c42-8,119,15,183,29V0H0z" />
      </svg>
    </div>
  );
};

// Flip it for top vs bottom
export const TornPaperTop = ({ className = '' }: { className?: string }) => (
  <div className={`w-full h-16 relative overflow-hidden -mt-1 z-10 ${className}`}>
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="w-full h-full text-black fill-current"
    >
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
    </svg>
  </div>
);

export const TornPaperBottom = ({ className = '' }: { className?: string }) => (
  <div className={`w-full h-16 relative overflow-hidden -mb-1 z-10 ${className}`}>
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="w-full h-full text-black fill-current transform rotate-180"
    >
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
    </svg>
  </div>
);

export default TornPaperSeparator;
