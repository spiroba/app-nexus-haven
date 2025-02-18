
import { motion } from "framer-motion";

interface AppCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const AppCard = ({ title, description, imageUrl }: AppCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6 hover:bg-white/10 transition-all duration-300"
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold mb-2 gradient-text">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};
