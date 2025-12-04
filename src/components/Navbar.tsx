import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isHotboxActive?: boolean;
  onToggleHotbox?: () => void;
}

const Navbar = ({ isHotboxActive, onToggleHotbox }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    setIsConnected(!isConnected);
  };

  const navItems = [
    { name: "PROOF OF SESH", href: "#proof-of-sesh" },
    { name: "FUND", href: "#fund" },
    { name: "SHOP", href: "#shop" },
    { name: "VOTE", href: "#vote" },
    { name: "SESH WITH US", href: "#sesh-with-us" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <motion.a 
              href="#"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center flex-shrink-0"
            >
              <img src="/assets/BluntDAO.png" alt="BluntDAO" className="h-12 object-contain" />
            </motion.a>
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <a 
                    key={item.name}
                    href={item.href} 
                    className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-bold font-heading tracking-wider transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            {onToggleHotbox && (
              <button
                onClick={onToggleHotbox}
                className={`px-4 py-2 rounded-full border font-mono text-sm transition-all duration-500 glow-loop ${
                  isHotboxActive 
                    ? 'bg-green-900/80 border-green-500 text-green-400' 
                    : 'bg-black/50 border-white/10 text-gray-400 hover:bg-white/10'
                }`}
              >
                {isHotboxActive ? '4:20 ON' : '4:20'}
              </button>
            )}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleConnect}
              className={`${isConnected ? 'bg-green-600 text-white' : 'bg-primary text-black'} px-6 py-2 rounded-full font-heading font-bold text-lg hover:opacity-90 transition-all duration-300`}
            >
              {isConnected ? '0x12...3456' : 'Request Proof Of Sesh'}
            </motion.button>
          </div>
          <div className="-mr-2 flex items-center gap-2 lg:hidden">
            {onToggleHotbox && (
              <button
                onClick={onToggleHotbox}
                className={`px-3 py-1.5 rounded-full border font-mono text-xs transition-all duration-500 mr-2 glow-loop ${
                  isHotboxActive 
                    ? 'bg-green-900/80 border-green-500 text-green-400' 
                    : 'bg-black/50 border-white/10 text-gray-400 hover:bg-white/10'
                }`}
              >
                {isHotboxActive ? '4:20 ON' : '4:20'}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-xl font-heading font-bold"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button 
              onClick={() => {
                handleConnect();
                setIsOpen(false);
              }}
              className={`w-full mt-4 ${isConnected ? 'bg-green-600 text-white' : 'bg-primary text-black'} px-6 py-3 rounded-full font-heading font-bold text-xl transition-all`}
            >
              {isConnected ? '0x12...3456' : 'Request Proof Of Sesh'}
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
