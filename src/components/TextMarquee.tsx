import { motion } from 'framer-motion';

interface TextMarqueeProps {
  text?: string;
  direction?: 'left' | 'right';
  className?: string;
}

const TextMarquee = ({ text = "BLUNTDAO • PROOF OF SESH • IRL EVENTS • COMMUNITY •", direction = 'left', className = "" }: TextMarqueeProps) => {
  return (
    <div className={`w-full overflow-hidden py-4 bg-primary/10 border-y border-primary/20 ${className}`}>
      <div className="relative flex whitespace-nowrap">
        <motion.div
          className="flex items-center gap-8 whitespace-nowrap"
          animate={{ x: direction === 'left' ? '-50%' : '50%' }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear",
            repeatType: "loop" 
          }}
          style={{ x: direction === 'left' ? 0 : '-50%' }} // Start position
        >
          {/* Repeat enough times to cover screen width and scroll seamlessly */}
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="text-4xl font-heading font-bold text-primary/50 uppercase tracking-wider">
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TextMarquee;
