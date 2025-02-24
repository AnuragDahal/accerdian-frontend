import { motion } from "framer-motion";
interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const BenefitCard = ({ title, description, icon }: BenefitCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-6 rounded-xl bg-white/90 backdrop-blur-sm border border-neutral-200 shadow-sm transition-all duration-300"
    >
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-neutral-800 mb-2">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </motion.div>
  );
};

export default BenefitCard;
