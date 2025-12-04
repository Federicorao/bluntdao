import { motion } from 'framer-motion';

const steps = [
  {
    image: '/assets/proof/roll-up.png',
    title: "Roll Up A Blunt",
    description: "A current OG Validator (BluntDAO Member) finds people to Proof of Sesh aka “Smoke with” and rolls up a Blunt. Now any SESH device will do IRL depending on the mint."
  },
  {
    image: '/assets/proof/burn.png',
    title: "Light Blunt",
    description: "Light the Blunt and hit it (or the sesh device)."
  },
  {
    image: '/assets/proof/init.png',
    title: "Init",
    description: "Initialize rotations and pass to prospective members. Once they have hit the Blunt (or Sesh Device) they are now allowed to be given the new BluntDAO member an OG Valiators NFT."
  },
  {
    image: '/assets/proof/token.png',
    title: "Create Wallet",
    description: "During the rotation while the Blunt (or sesh device) is lit, have the new prospective member download a wallet (Solana or NEAR w/ NEAR scan the Blunt DAO code) and have them join the BluntDAO telegram or discord."
  },
  {
    image: '/assets/proof/validation.png',
    title: "Validation",
    description: "Depending on if the new member is on Solana have them send you the address, or on NEAR/Polygon have them scan the link and claim NFT. Once they get the NFT Proof of Sesh is complete."
  },
  {
    image: '/assets/proof/request.png',
    title: "Onboard Others",
    description: "With great Blunts comes great responsibility. As a validator it is your job to explain Proof of Sesh, but also make sure new members are given a proper orientation of all our social medias & existing community."
  }
];

const ProofOfSesh = () => {
  return (
    <section id="proof-of-sesh" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Intro */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-heading text-white mb-6">
            What is <span className="text-primary">Proof of Sesh</span>?
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Proof of Sesh is the consensus mechanism for validating new “nodes” aka members to BluntDAO. It is how you become an OG Validator in the BluntDAO and earn the right to Proof of Sesh prospective members.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-3xl transform group-hover:scale-[1.02] transition-transform duration-300" />
              <div className="relative bg-secondary border border-white/10 p-8 rounded-3xl h-full hover:border-primary/30 transition-colors">
                <div className="w-20 h-20 bg-black rounded-2xl border border-white/10 flex items-center justify-center text-primary mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden p-2">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-heading text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
                
                {/* Step Number */}
                <div className="absolute top-8 right-8 text-6xl font-heading text-white/5 select-none">
                  {index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 max-w-3xl"
          >
            <h3 className="text-3xl font-heading text-white mb-4">Ready to become an OG Validator?</h3>
            <p className="text-gray-400 mb-8">
              Get your BluntDAO Soul Bound NFT by verifying your Blunt via Proof of Sesh by a validator in your area.
            </p>
            <button className="bg-primary text-black px-8 py-4 rounded-full font-heading font-bold text-xl hover:opacity-90 transition-opacity">
              Request a Blunt
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ProofOfSesh;
