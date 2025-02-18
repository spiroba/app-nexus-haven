
import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ email, message });
  };

  return (
    <motion.form 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit} 
      className="glass-card p-8 max-w-md mx-auto"
    >
      <div className="flex items-center gap-3 mb-8">
        <MessageSquare className="w-6 h-6 text-white/80" />
        <h2 className="text-2xl font-semibold gradient-text">Связаться с нами</h2>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-md bg-white/5 border border-white/10 focus:border-white/30 outline-none transition-colors text-white"
            placeholder="your@email.com"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">Сообщение</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 rounded-md bg-white/5 border border-white/10 focus:border-white/30 outline-none transition-colors min-h-[120px] text-white"
            placeholder="Ваше сообщение..."
            required
          />
        </div>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-white/10 hover:bg-white/15 text-white font-medium py-3 px-4 rounded-md transition-colors"
        >
          Отправить
        </motion.button>
      </div>
    </motion.form>
  );
};
