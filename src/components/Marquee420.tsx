import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MarqueeItem {
  id: number;
  text: string;
  top: string;
  direction: 1 | -1; // 1 for right, -1 for left
}

const Marquee420 = () => {
  const [items, setItems] = useState<MarqueeItem[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newItem: MarqueeItem = {
        id: Date.now(),
        text: "420",
        top: `${Math.random() * 80 + 10}%`, // Avoid very top/bottom
        direction: Math.random() > 0.5 ? 1 : -1
      };
      setItems(prev => [...prev, newItem]);

      // Cleanup after animation
      setTimeout(() => {
        setItems(prev => prev.filter(item => item.id !== newItem.id));
      }, 15000); // Give enough time to cross screen
    }, 10000); // Every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[40] overflow-hidden">
      <AnimatePresence>
        {items.map(item => (
          <motion.div
            key={item.id}
            initial={{ x: item.direction === 1 ? '-100%' : '100%' }}
            animate={{ x: item.direction === 1 ? '100vw' : '-100vw' }}
            transition={{ duration: 10, ease: "linear" }}
            className="absolute font-heading font-bold text-6xl text-primary/20 select-none whitespace-nowrap"
            style={{ top: item.top }}
          >
            {item.text}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Marquee420;
