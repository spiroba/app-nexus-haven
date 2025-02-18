
import { motion } from "framer-motion";
import { Globe, Smartphone, Sparkles } from "lucide-react";
import { AppCard } from "@/components/AppCard";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  const apps = [
    {
      title: "Мобильное приложение 1",
      description: "Инновационное приложение для повышения продуктивности",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
    },
    {
      title: "Мобильное приложение 2",
      description: "Приложение для управления задачами и проектами",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="absolute inset-0 hero-gradient opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center gap-3 mb-8"
          >
            <Sparkles className="w-8 h-8 text-white/80 animate-float" />
            <h1 className="text-5xl font-bold gradient-text">Мобильные Приложения</h1>
            <Sparkles className="w-8 h-8 text-white/80 animate-float" />
          </motion.div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Создаем инновационные мобильные решения для ваших задач с использованием передовых технологий
          </p>
        </div>
      </motion.section>

      {/* Apps Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex justify-center items-center gap-2 mb-6">
              <Smartphone className="w-6 h-6 text-white/80" />
              <h2 className="text-3xl font-semibold gradient-text">Наши Приложения</h2>
            </div>
            <p className="text-gray-400">Познакомьтесь с нашими последними разработками</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {apps.map((app, index) => (
              <AppCard key={index} {...app} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex justify-center items-center gap-2 mb-6">
              <Globe className="w-6 h-6 text-white/80" />
              <h2 className="text-3xl font-semibold gradient-text">Техническая Поддержка</h2>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Есть вопросы? Наша команда экспертов готова помочь вам в любое время!
            </p>
          </motion.div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Index;
