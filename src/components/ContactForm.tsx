
import { useState } from "react";
import { MessageSquare } from "lucide-react";

export const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ email, message });
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card p-6 max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="w-5 h-5" />
        <h2 className="text-xl font-semibold gradient-text">Связаться с нами</h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-md bg-white/5 border border-white/10 focus:border-white/20 outline-none transition-colors"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Сообщение</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 rounded-md bg-white/5 border border-white/10 focus:border-white/20 outline-none transition-colors min-h-[120px]"
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-4 rounded-md transition-colors"
        >
          Отправить
        </button>
      </div>
    </form>
  );
};
