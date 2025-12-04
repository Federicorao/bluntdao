import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { useRef } from 'react';

const Newsletter = () => {
  const confettiRef = useRef<HTMLDivElement>(null);

  const spawnConfetti = () => {
    const container = confettiRef.current;
    if (!container) return;
    for (let i = 0; i < 12; i++) {
      const el = document.createElement('span');
      el.textContent = ['🌿','🔥','✨','💨','🎉'][i % 5];
      el.style.position = 'absolute';
      el.style.left = Math.random() * 80 + '%';
      el.style.bottom = '0';
      el.style.fontSize = '20px';
      el.style.animation = 'confettiFloat 1000ms ease-out forwards';
      container.appendChild(el);
      setTimeout(() => el.remove(), 1100);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg_white/5 border border-white/10 rounded-3xl p-8 md:p-16 backdrop-blur-md relative">
          <div ref={confettiRef} className="pointer-events-none absolute inset-0"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-8">
                <Mail className="w-10 h-10 text-primary" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">
                Join our <span className="text-primary">Mailing List</span>
              </h2>
              <p className="text-xl text-gray-300 font-heading mb-8">
                Digital carepackages of love delivered straight to your inbox.
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-xl">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-black/50 border border-white/20 rounded-full px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors font-body"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text_black px-8 py-4 rounded-full font-heading font-bold text-xl hover:bg-primary/90 transition-colors whitespace-nowrap"
                  onClick={spawnConfetti}
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
            
            <div className="relative flex items-center justify-center">
              <img 
                src="/assets/contact-us-graph.png" 
                alt="Community Graph" 
                className="w-full max-w-[180px] md:max-w-md h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-500" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
