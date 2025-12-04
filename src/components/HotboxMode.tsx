import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HotboxModeProps {
  active: boolean;
  onToggle: () => void;
}

const HotboxMode = ({ active }: HotboxModeProps) => {
  
  useEffect(() => {
    if (active) {
      document.documentElement.classList.add('hotbox-active');
    } else {
      document.documentElement.classList.remove('hotbox-active');
    }
  }, [active]);

  // Generate multiple blunts with random starting positions and animations
  const blunts = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    // Random delay between 0 and 5 seconds
    delay: Math.random() * 5,
    // Random duration between 10 and 20 seconds
    duration: 10 + Math.random() * 10,
    // Random vertical start position (0 to 100%)
    top: `${Math.random() * 100}%`,
    // Random size scale (0.5 to 1.5)
    scale: 0.5 + Math.random(),
    // Random direction (left-to-right or right-to-left)
    direction: Math.random() > 0.5 ? 1 : -1,
    // Random rotation speed multiplier
    rotationSpeed: 0.5 + Math.random() * 1.5
  }));

  return (
    <>
      {/* Full Screen Fog Overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="fixed inset-0 z-[60] pointer-events-none overflow-hidden"
          >
            {/* Fog Layer 1 */}
            <div className="absolute inset-0 bg-fog-pattern opacity-40 animate-fog-flow-1 mix-blend-screen" />
            {/* Fog Layer 2 */}
            <div className="absolute inset-0 bg-fog-pattern opacity-30 animate-fog-flow-2 mix-blend-screen" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
            {/* Green Tint */}
            <div className="absolute inset-0 bg-green-900/20 mix-blend-overlay" />

            {/* Dancing Blunts */}
            <div className="absolute inset-0 pointer-events-none">
              {blunts.map((blunt) => (
                <motion.div
                  key={blunt.id}
                  initial={{ 
                    x: blunt.direction === 1 ? '-20vw' : '120vw', 
                    y: 0, 
                    rotate: 0 
                  }}
                  animate={{
                    x: blunt.direction === 1 ? '120vw' : '-20vw',
                    y: [0, -50, 50, 0], // Bobbing motion
                    rotate: blunt.direction === 1 ? 360 * blunt.rotationSpeed : -360 * blunt.rotationSpeed,
                  }}
                  transition={{
                    duration: blunt.duration,
                    delay: blunt.delay,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute"
                  style={{ 
                    top: blunt.top,
                    width: `${12 * blunt.scale}rem`, // Base size * scale
                    height: `${12 * blunt.scale}rem`
                  }}
                >
                  <div className="w-full h-full filter drop-shadow-[0_0_10px_rgba(0,255,0,0.8)]">
                    <img src="/assets/Blunt.png" alt="Floating Blunt" className="w-full h-full object-contain" />
                  </div>
                </motion.div>
              ))}
              
              {/* Snoop-style text marquee */}
              <div className="absolute bottom-20 w-full overflow-hidden">
                <motion.div
                  animate={{ x: ['100%', '-100%'] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="whitespace-nowrap text-4xl font-heading text-green-500 font-bold"
                >
                  SMOKE WEED EVERY DAY • BLUNTDAO • PROOF OF SESH • 420 • 
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HotboxMode;
