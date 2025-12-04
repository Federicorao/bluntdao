import { Twitter, Github, Disc, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="mb-4">
              <img src="/assets/BluntDAO.png" alt="BluntDAO" className="h-10 object-contain" />
            </div>
            <p className="text-gray-500 font-body">Onboarding the next billion, 1 blunt at a time.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Disc className="w-6 h-6" /> 
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-600 text-sm font-body">
          &copy; {new Date().getFullYear()} Rolled w/ ❤️ by BluntDAO.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
