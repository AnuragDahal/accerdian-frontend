"use client";
import { motion } from "framer-motion";
import ReferralModal from "@/components/ReferralModal";
import BenefitCard from "@/components/BenefitCard";
import { Gift, DollarSign, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  const benefits = [
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Exclusive Rewards",
      description:
        "Get amazing rewards for every successful referral you make.",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cash Bonuses",
      description: "Earn cash bonuses when your friends join our platform.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Premium Access",
      description:
        "Unlock premium features and exclusive content through referrals.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className="container px-4 py-20 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 inline-block">
            Refer & Earn Program
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-800 mb-6 tracking-tight">
            Share the Knowledge, Earn Rewards
          </h1>
          <p className="text-lg text-neutral-600 mb-8">
            Refer your friends to our platform and earn exclusive rewards, cash
            bonuses, and premium access to courses.
          </p>
          <ReferralModal
            trigger={
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 animate-scale-in">
                Refer Now
              </Button>
            }
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <BenefitCard {...benefit} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
