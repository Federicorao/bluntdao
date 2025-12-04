import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProofOfSesh from './components/ProofOfSesh';
import Gallery from './components/Gallery';
import TwitterFeed from './components/TwitterFeed';
import About from './components/About';
import BuiltWith from './components/BuiltWith';
import Media from './components/Media';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import JoinDiscord from './components/JoinDiscord';
import Footer from './components/Footer';
import LofiPlayer from './components/LofiPlayer';
import HotboxMode from './components/HotboxMode';
import Marquee420 from './components/Marquee420';
import TextMarquee from './components/TextMarquee';
// separators removed for cleaner flow

function App() {
  const [isHotboxActive, setIsHotboxActive] = useState(false);

  return (
    <div className="bg-secondary min-h-screen text-white selection:bg-primary selection:text-black font-body">
      <Navbar isHotboxActive={isHotboxActive} onToggleHotbox={() => setIsHotboxActive(!isHotboxActive)} />
      <LofiPlayer />
      <HotboxMode active={isHotboxActive} onToggle={() => setIsHotboxActive(!isHotboxActive)} />
      <Marquee420 />
      
      <main>
        <Hero />
        <TextMarquee />
        
        <section className="py-8 bg-black">
          <ProofOfSesh />
        </section>
        
        <Gallery />
        <TextMarquee text="SMOKE WEED EVERY DAY • PROOF OF SESH • BLUNTDAO •" direction="right" />
        
        <section className="py-8">
          <TwitterFeed />
        </section>

        <BuiltWith />
        <section className="py-8">
          <Media />
        </section>
        
        <About />
        <JoinDiscord />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
