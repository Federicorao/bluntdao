import { motion } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const partners = [
  { name: 'Solana', url: 'https://solana.com/', icon: '/assets/solana.png' },
  { name: 'Base', url: 'https://base.org', icon: '/assets/base.png' },
  { name: 'Nouns', url: 'https://nouns.wtf', icon: '/assets/nouns.png' },
  { name: 'Near', url: 'https://near.org/', icon: '/assets/near.png' },
  { name: 'Squads', url: 'https://squads.so/', icon: '/assets/squads.png' },
  { name: 'Snapshot', url: 'https://snapshot.org/#/bluntdao.eth', icon: '/assets/snapshotlogo.png' },
  { name: 'POAP', url: 'https://moments.poap.xyz/drops/104320', icon: '/assets/poap.png' },
  { name: 'Guild', url: 'https://guild.xyz/@bluntdao', icon: 'https://pbs.twimg.com/profile_images/1610686276222652417/h0C2z5yO_400x400.jpg' },
  { name: 'Metaplex', url: 'https://www.metaplex.com/', icon: '/assets/metaplex.png' },
];
const looped = [...partners, ...partners];

const BuiltWith = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const progressRef = useRef(0);
  const offsetRef = useRef(0);
  const setWidthRef = useRef(0);
  const lastScrollTimeRef = useRef(0);
  const copies = 2;
  const recalcWidth = () => {
    const el = trackRef.current;
    if (!el) return;
    const total = el.scrollWidth;
    setWidthRef.current = total / copies;
  };
  const arrowAnimatingRef = useRef(false);
  const arrowStartTimeRef = useRef(0);
  const arrowStartOffsetRef = useRef(0);
  const arrowEndOffsetRef = useRef(0);
  const arrowDurationMs = 450;

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    recalcWidth();
    const ro = new ResizeObserver(() => recalcWidth());
    ro.observe(el);
    window.addEventListener('resize', recalcWidth);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', recalcWidth);
    };
  }, []);
  useEffect(() => {
    let rafId: number;
    const speed = 0.6;
    const step = () => {
      const now = Date.now();
      const isRecentlyScrolled = now - lastScrollTimeRef.current < 800;
      if (!paused && setWidthRef.current > 0 && !isRecentlyScrolled && !arrowAnimatingRef.current) {
        progressRef.current = (progressRef.current + speed) % setWidthRef.current;
      }
      if (arrowAnimatingRef.current) {
        const t = Math.min(1, (now - arrowStartTimeRef.current) / arrowDurationMs);
        const eased = 1 - Math.pow(1 - t, 3);
        offsetRef.current = arrowStartOffsetRef.current + (arrowEndOffsetRef.current - arrowStartOffsetRef.current) * eased;
        if (t >= 1) {
          arrowAnimatingRef.current = false;
        }
      }
      if (setWidthRef.current > 0) {
        progressRef.current = ((progressRef.current % setWidthRef.current) + setWidthRef.current) % setWidthRef.current;
        offsetRef.current = ((offsetRef.current % setWidthRef.current) + setWidthRef.current) % setWidthRef.current;
      }
      const el = trackRef.current;
      if (el) {
        el.style.transform = `translateX(${-(progressRef.current) + offsetRef.current}px)`;
      }
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [paused]);

  const scrollBy = (dir: 'left' | 'right') => {
    const amount = 300;
    const delta = dir === 'left' ? -amount : amount;
    arrowAnimatingRef.current = true;
    arrowStartTimeRef.current = Date.now();
    arrowStartOffsetRef.current = offsetRef.current;
    arrowEndOffsetRef.current = offsetRef.current + delta;
    lastScrollTimeRef.current = Date.now();
  };

  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div className="text-left">
            <h2 className="text-4xl font-heading text-white mb-4">Built With</h2>
            <p className="text-gray-400 max-w-2xl">
              BluntDAO's infrastructure is powered by blockchains, frameworks, tools, and integrations.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={() => scrollBy('left')} 
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollBy('right')} 
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none" />

          <div
            ref={trackRef}
            className="flex gap-6 pb-6 will-change-transform"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {[...Array(copies)].flatMap(() => looped).map((partner, index) => (
              <motion.a
                key={`${partner.name}-${index}`}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (index % looped.length) * 0.06 }}
                viewport={{ once: true }}
                className="min-w-[180px] group flex flex-col items-center justify-center p-6 rounded-2xl border border-white/10 bg-secondary/30 hover:bg-secondary/50 hover:border-primary/50 transition-all"
              >
                <div className="w-16 h-16 mb-3 rounded-xl bg-white/5 p-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <img
                    src={partner.icon}
                    alt={partner.name}
                    loading="lazy"
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `<span class='text-white text-2xl font-bold'>${partner.name[0]}</span>`;
                    }}
                  />
                </div>
                <div className="flex items-center gap-2 text-gray-400 group-hover:text-white">
                  <span className="font-medium">{partner.name}</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltWith;
