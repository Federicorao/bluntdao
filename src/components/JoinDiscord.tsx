import { motion } from 'framer-motion';
import { Disc } from 'lucide-react'; // Using Disc as Discord icon replacement or import proper SVG if needed

const JoinDiscord = () => {
  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-[#5865F2] rounded-3xl p-8 md:p-16">
          <div className="text-center lg:text-left max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-heading text-white mb-6">
              Join our Discord Server
            </h2>
            <p className="text-xl md:text-2xl text-white/90 font-heading leading-relaxed">
              Want to Join the IRL movement onboarding the next million users to Web3?
            </p>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="https://discord.gg/bluntdao" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#5865F2] px-8 py-5 rounded-full font-heading font-bold text-2xl shadow-xl hover:bg-gray-100 transition-colors"
            >
              <Disc className="w-8 h-8" />
              Join Discord
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinDiscord;
