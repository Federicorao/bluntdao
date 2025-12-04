import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const tweetIds = [
  '1591211463305490433',
  '1589457951315853312',
  '1591637549444898816',
  '1566943218658574337',
  '1567343075629858818',
  '1566371345721880577',
  '1574825045951643651',
  '1598053293477232641',
  '1583874790363828224'
];
const loopedTweetIds = [...tweetIds, ...tweetIds];

const TwitterFeed = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const progressRef = useRef(0);
  const offsetRef = useRef(0);
  const setWidthRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
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
    const script = document.createElement('script');
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
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
    const amount = 350;
    const delta = direction === 'left' ? -amount : amount;
    arrowAnimatingRef.current = true;
    arrowStartTimeRef.current = Date.now();
    arrowStartOffsetRef.current = offsetRef.current;
    arrowEndOffsetRef.current = offsetRef.current + delta;
    lastScrollTimeRef.current = Date.now();
  };

  // Autoplay + infinite loop
  useEffect(() => {
    let rafId: number;
    const speed = 0.6;
    const step = () => {
      const now = Date.now();
      const isRecentlyScrolled = now - lastScrollTimeRef.current < 800;
      if (!paused && !isDraggingRef.current && setWidthRef.current > 0 && !isRecentlyScrolled && !arrowAnimatingRef.current) {
        progressRef.current = (progressRef.current + speed) % setWidthRef.current;
      }
      if (arrowAnimatingRef.current) {
        const t = Math.min(1, (now - arrowStartTimeRef.current) / arrowDurationMs);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - t, 3);
        offsetRef.current = arrowStartOffsetRef.current + (arrowEndOffsetRef.current - arrowStartOffsetRef.current) * eased;
        if (t >= 1) {
          arrowAnimatingRef.current = false;
        }
      }
      if (setWidthRef.current > 0) {
        // normalize values to prevent drift
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

  // Drag to scroll
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    arrowAnimatingRef.current = false;
    startXRef.current = e.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    const el = trackRef.current;
    if (el) el.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - startXRef.current;
    offsetRef.current = dragStartOffsetRef.current + dx;
    if (setWidthRef.current > 0) {
      offsetRef.current = ((offsetRef.current % setWidthRef.current) + setWidthRef.current) % setWidthRef.current;
    }
  };
  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = false;
    const el = trackRef.current;
    if (el) el.releasePointerCapture(e.pointerId);
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="ambient-glow absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="ambient-glow absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="text-center md:text-left w-full md:w-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-sm">
              <Twitter className="w-4 h-4 text-[#1DA1F2]" />
              <span className="text-sm font-medium text-gray-300">@BluntDAO</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-4">
              The Most Beloved <span className="text-primary">DAO</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              See how the streets love the world's biggest cannabis crew. Real vibes, real people.
            </p>
          </div>
          
          <div className="hidden md:flex items-center gap-4 mt-4 md:mt-0">
            <button 
              onClick={() => scroll('left')}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="group p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all hover:scale-110 active:scale-95 backdrop-blur-md"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scroll('right')}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="group p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all hover:scale-110 active:scale-95 backdrop-blur-md"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        
        <div className="relative group overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />
          <div 
            ref={trackRef}
            className="flex gap-8 pb-12 pt-4 px-4 items-start will-change-transform"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {[...Array(copies)].flatMap(() => loopedTweetIds).map((id, index) => (
              <motion.div
                key={`${id}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % loopedTweetIds.length) * 0.1 }}
                viewport={{ once: true }}
                className="min-w-[300px] max-w-[350px] relative"
              >
                <div className="bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors shadow-2xl shadow-black/50">
                  <blockquote className="twitter-tweet" data-theme="dark" data-conversation="none" data-cards="hidden">
                    <a href={`https://twitter.com/user/status/${id}`}></a>
                  </blockquote>
                </div>
                <div className="absolute -inset-0.5 bg-primary/20 rounded-2xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwitterFeed;
