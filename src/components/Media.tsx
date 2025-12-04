import { motion } from 'framer-motion';
import { Mail, Tv } from 'lucide-react';
import React from 'react';

type MediaProps = {
  videoUrl?: string;
};

const Media: React.FC<MediaProps> = ({ videoUrl }) => {
  return (
    <section className="py-24 bg-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading text-white mb-6">
              BluntDAO in the <span className="text-primary">Media</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              BluntDAO has been featured in media all over the world. We are always open to sharing our story and vision with the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:press@bluntdao.org" // Assuming an email, or just a generic contact action
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Contact for Inquiries
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black flex items-center justify-center">
              {videoUrl ? (
                <iframe
                  src={videoUrl}
                  title="Media Video"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                />
              ) : (
                <div className="relative w-full h-full flex items-center justify-center">
                  <Tv className="w-12 h-12 text-white/70 z-10" />
                  {/* Broken TV effect overlays */}
                  <div
                    className="absolute inset-0 opacity-25 mix-blend-screen"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 2px)',
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'radial-gradient(transparent 60%, rgba(0,0,0,0.6))',
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%25%27 height=%27100%25%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%272%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E")',
                      opacity: 0.04,
                      animation: 'tvNoise 1200ms infinite steps(8)'
                    }}
                  />
                </div>
              )}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Media;
