
import { motion } from "framer-motion";
import { Globe, Smartphone } from "lucide-react";
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
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <div className="flex justify-center items-center gap-2 mb-6">
          <Smartphone className="w-8 h-8" />
          <h1 className="text-4xl font-bold gradient-text">Мобильные Приложения</h1>
        </div>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Создаем инновационные мобильные решения для ваших задач
        </p>
      </motion.section>

      {/* Apps Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-8 text-center gradient-text">Наши Приложения</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {apps.map((app, index) => (
            <AppCard key={index} {...app} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-6">
            <Globe className="w-6 h-6" />
            <h2 className="text-2xl font-semibold gradient-text">Техническая Поддержка</h2>
          </div>
          <p className="text-gray-400">
            Есть вопросы? Мы всегда готовы помочь!
          </p>
        </div>
        <ContactForm />
      </section>
    </div>
  );
};

export default Index;
