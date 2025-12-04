import { useState, useRef, useEffect } from 'react';
import { Music, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LofiPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Chill Lofi Beat (Royalty Free)
  const STREAM_URL = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-end gap-2">
      <audio ref={audioRef} src={STREAM_URL} loop crossOrigin="anonymous" />
      
      {/* Main Player Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`relative group flex items-center justify-center w-14 h-14 rounded-full border border-white/10 backdrop-blur-xl transition-all duration-300 ${
          isPlaying ? 'bg-primary/20 border-primary/50' : 'bg-black/80 hover:bg-white/10'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Music className={`w-6 h-6 ${isPlaying ? 'text-primary animate-pulse' : 'text-gray-400'}`} />
        
        {/* Smoke Visualizer (CSS Animation) */}
        {isPlaying && (
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none">
            <div className="smoke-wave w-2 h-10 bg-primary/20 blur-md rounded-full absolute animate-smoke-1" />
            <div className="smoke-wave w-3 h-12 bg-white/10 blur-md rounded-full absolute animate-smoke-2 delay-75" />
            <div className="smoke-wave w-2 h-8 bg-purple-500/20 blur-md rounded-full absolute animate-smoke-3 delay-150" />
          </div>
        )}
      </motion.button>

      {/* Expanded Controls */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, width: 0, x: -20 }}
            animate={{ opacity: 1, width: 'auto', x: 0 }}
            exit={{ opacity: 0, width: 0, x: -20 }}
            className="flex items-center gap-2 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full p-2 pr-4 overflow-hidden"
          >
            <button 
              onClick={togglePlay}
              className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
            
            <button 
              onClick={toggleMute}
              className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
            
            <div className="flex flex-col justify-center min-w-[80px]">
              <span className="text-xs font-bold text-white leading-none">Lofi Radio</span>
              <span className="text-[10px] text-primary leading-none truncate">BluntDAO FM</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LofiPlayer;
