import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black">
      {/* Background Gradient Blob */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content - Left Side */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold text-white tracking-wider">THE BIGGEST IRL ONBOARDING MOVEMENT</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-heading font-black text-white mb-6 leading-[0.9]">
                <span className="block">PROOF</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">OF SESH</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 font-body leading-relaxed">
                Join global cannabis communities, explore legal status worldwide, and connect with local OGs. Onboarding the next billion, 1 blunt/sesh at a time.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-black px-8 py-4 rounded-full font-heading font-bold text-xl flex items-center gap-2 shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-shadow"
                >
                  Request Proof Of Sesh <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/5 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full font-heading font-bold text-xl hover:bg-white/10 transition-colors"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* GIF Frame - Right Side */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
                {/* Decorative Frame Elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-3xl opacity-30 blur-xl animate-pulse" />
                
                <div className="relative bg-black border border-white/10 rounded-3xl overflow-hidden shadow-2xl aspect-square lg:aspect-[4/3]">
                    <div className="absolute inset-0 bg-[url('/img/grid.png')] opacity-20" /> {/* Optional grid texture if available, otherwise just black */}
                    
                    <img 
                      src="/img/banner.gif" 
                      alt="BluntDAO Banner" 
                      className="w-full h-full object-contain p-8" 
                    />

                    {/* Overlay Info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6">
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-primary font-bold text-sm tracking-wider mb-1">CURRENT STATUS</p>
                                <h3 className="text-white font-heading text-2xl">Sesh in Progress</h3>
                            </div>
                            <div className="flex -space-x-2">
                                {[1,2,3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-gray-800 border-2 border-black flex items-center justify-center text-xs text-white">
                                        🍁
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
