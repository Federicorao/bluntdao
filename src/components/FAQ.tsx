import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, MessageCircle, Wallet, Vote, HelpCircle, Link as LinkIcon } from 'lucide-react';

const faqs = [
  {
    question: "How Do I Join The BluntDAO?",
    answer: "Joining BluntDAO is easy! Start by joining our Discord server and introducing yourself. To become an official member, you'll need to participate in a 'Proof of Sesh' event or hold a BluntDAO NFT.",
    icon: <MessageCircle className="w-6 h-6 text-primary" />
  },
  {
    question: "Where Do You Have BluntDAO Chapters & Members?",
    answer: "We have chapters and members worldwide! From Los Angeles to Lisbon, our community is growing globally. Check our map (coming soon) to find a chapter near you.",
    icon: <LinkIcon className="w-6 h-6 text-primary" />
  },
  {
    question: "What Blockchain Is BluntDAO On?",
    answer: "BluntDAO primarily operates on Ethereum and Gnosis Chain for governance and NFT assets, but we are a multi-chain agnostic community exploring various L2s and networks.",
    icon: <Wallet className="w-6 h-6 text-primary" />
  },
  {
    question: "How Many BluntNFTs Are Part Of The First Mint?",
    answer: "The genesis collection consists of 4,200 unique Blunt NFTs, each granting governance rights and exclusive access to IRL events.",
    icon: <HelpCircle className="w-6 h-6 text-primary" />
  },
  {
    question: "What Is The Difference Between Sesh Fund Treasury + NFT And The OG Validators",
    answer: "The Sesh Fund Treasury is managed by the community through proposals. OG Validators are early contributors who help verify 'Proof of Sesh' events and maintain the integrity of the onboarding process.",
    icon: <Vote className="w-6 h-6 text-primary" />
  },
  {
    question: "How Do I Vote In The BluntDAO?",
    answer: "Voting takes place on Snapshot. You need to hold a BluntDAO NFT or governance token to cast your vote on proposals regarding treasury allocation and community initiatives.",
    icon: <Vote className="w-6 h-6 text-primary" />
  },
  {
    question: "What If I Can’t Smoke Blunts?",
    answer: "No problem! 'Proof of Sesh' is about community and connection, not just consumption. Edibles, vapes, or simply vibing with the community are all welcome ways to participate.",
    icon: <HelpCircle className="w-6 h-6 text-primary" />
  },
  {
    question: "Where Can I Find A Links About BluntDAO?",
    answer: "You can find all our official links on our Linktree, Twitter bio, and in the #official-links channel on our Discord.",
    icon: <LinkIcon className="w-6 h-6 text-primary" />
  },
  {
    question: "I Still Have A Question Not Answered In This FAQ, How Can I Find Out?",
    answer: "Hop into our Discord! Our community managers and OG members are always happy to help answer any questions you might have.",
    icon: <MessageCircle className="w-6 h-6 text-primary" />
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-heading text-white mb-4">Frequently Asked <span className="text-primary">Questions</span></h2>
          <p className="text-gray-400 text-lg font-body">Everything you need to know about the movement.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border border-white/10 rounded-2xl overflow-hidden bg-secondary/50 backdrop-blur-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="hidden sm:block bg-white/5 p-2 rounded-lg">
                    {faq.icon}
                  </div>
                  <span className="text-xl font-heading text-white">{faq.question}</span>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-primary" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 sm:pl-20 text-gray-300 font-body leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
