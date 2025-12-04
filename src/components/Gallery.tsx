import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const collections = [
  {
    title: "BluntDAO Genesis",
    image: "/assets/nfts/ethblunt.gif",
    description: "The original collection that started it all. 4200 unique blunts."
  },
  {
    title: "Sesh Passes",
    image: "/assets/nfts/proofofseshethccbruseelspoap.jpeg",
    description: "Exclusive access passes to IRL events worldwide."
  },
  {
    title: "Validator Badges",
    image: "/assets/nfts/proofofseshindiablockchainweek2024poap.webp",
    description: "Soulbound tokens for active community validators."
  },
  {
    title: "Community Drops",
    image: "/assets/nfts/valentine.png",
    description: "Limited edition drops from our community artists."
  },
  {
    title: "IRL Moments",
    image: "/assets/nfts/miami.png",
    description: "Captured moments from our legendary sesh events."
  },
  {
    title: "Science Week NYC",
    image: "/assets/nfts/scienceweek.jpeg",
    description: "BluntDAO Science Week NYC 2024"
  },
  {
    title: "Devcon 2024",
    image: "/assets/nfts/devcon2024.jpeg",
    description: "Memories from Devcon 2024"
  },
  {
    title: "Solana Summer Camp",
    image: "/assets/nfts/solanasummercamp.jpeg",
    description: "Vibes from Solana Summer Camp"
  }
];

const loopedCollections = [...collections, ...collections];

const Gallery = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
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

  const scroll = (direction: 'left' | 'right') => {
    const amount = 400;
    offsetRef.current += direction === 'left' ? -amount : amount;
    lastScrollTimeRef.current = Date.now();
    const el = trackRef.current;
    if (el) {
      el.style.transform = `translateX(${-(progressRef.current) + offsetRef.current}px)`;
    }
  };

  // Autoplay + infinite loop
  useEffect(() => {
    let rafId: number;
    const speed = 0.6;
    const step = () => {
      const now = Date.now();
      const isRecentlyScrolled = now - lastScrollTimeRef.current < 800;
      if (!paused && !isDraggingRef.current && setWidthRef.current > 0 && !isRecentlyScrolled) {
        progressRef.current = (progressRef.current + speed) % setWidthRef.current;
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

  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.pageX;
  };

  const handleMouseLeave = () => {
    isDraggingRef.current = false;
    setPaused(false);
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    e.preventDefault();
    const dx = e.pageX - startXRef.current;
    offsetRef.current += dx;
    startXRef.current = e.pageX;
    if (setWidthRef.current > 0) {
      offsetRef.current = ((offsetRef.current % setWidthRef.current) + setWidthRef.current) % setWidthRef.current;
    }
  };

  return (
    <section id="shop" className="py-24 bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-5xl font-heading text-white mb-4">BluntDAO <span className="text-primary">Gallery</span></h2>
            <p className="text-gray-400 max-w-xl">
              The master list of all the NFT drops that have been minted or we got too high to mint.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => scroll('left')}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="p-3 rounded-full border border-white/10 hover:bg-white/10 text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="p-3 rounded-full border border-white/10 hover:bg-white/10 text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <button className="flex items-center gap-2 text-primary hover:text-white transition-colors font-heading text-xl ml-4">
              View All Collections <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div 
          ref={trackRef}
          className="flex gap-6 pb-8 will-change-transform cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setPaused(true)}
        >
          {[...Array(copies)].flatMap(() => loopedCollections).map((collection, index) => (
            <motion.div
              key={`${collection.title}-${index}`}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: (index % loopedCollections.length) * 0.1 }}
              viewport={{ once: true }}
              className="min-w-[240px] md:min-w-[400px] group relative bg-black rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={collection.image} 
                  alt={collection.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" 
                />
              </div>
              <div className="p-6 relative z-10 bg-gradient-to-t from-black via-black to-transparent -mt-20 pt-24">
                <h3 className="text-2xl font-heading text-white mb-2">{collection.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{collection.description}</p>
                <button className="w-full bg-white/10 hover:bg-primary hover:text-black text-white py-3 rounded-xl font-bold transition-all font-heading">
                  View Collection
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Controls */}
        <div className="flex justify-between items-center md:hidden mt-6">
           <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-white/10 hover:bg-white/10 text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-white/10 hover:bg-white/10 text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <button className="flex items-center gap-2 text-primary hover:text-white transition-colors font-heading text-xl">
            View All <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
