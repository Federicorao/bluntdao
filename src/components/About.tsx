import { motion } from 'framer-motion';
import { Users, Globe, Leaf, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Global Community",
    description: "Connect with like-minded individuals across the globe who share a passion for cannabis and Web3."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Proof of Sesh",
    description: "A unique validation mechanism to onboard users IRL. Verify your sesh and earn reputation."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Worldwide Events",
    description: "Participate in local and international events, meetups, and educational workshops."
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Cannabis Culture",
    description: "Preserving and promoting authentic cannabis culture while bridging it with decentralized technology."
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-heading text-white mb-4">What is <span className="text-primary">BluntDAO</span>?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We are building the infrastructure for the physical and digital cannabis world to coexist and thrive together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-heading text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
