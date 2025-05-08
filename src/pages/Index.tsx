
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const socialLinks = [
  {
    name: "Youtube",
    icon: "Youtube",
    url: "https://youtube.com",
  },
  {
    name: "Telegram",
    icon: "Send",
    url: "https://t.me/yourchannel",
  },
  {
    name: "Instagram",
    icon: "Instagram",
    url: "https://instagram.com",
  },
  {
    name: "Twitter",
    icon: "Twitter",
    url: "https://twitter.com",
  },
];

const Biography = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#0F0B1A] text-white">
      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center px-4 py-12">
        <div 
          className={`max-w-3xl w-full transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          {/* Glowing Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#9b87f5] text-shadow-glow">
              attacktrip
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] mx-auto rounded-full shadow-glow"></div>
          </div>

          {/* Bio Section */}
          <div className="mb-16 backdrop-blur-sm bg-[#231A3B]/30 p-8 rounded-lg border border-[#9b87f5]/20 shadow-glow-subtle">
            <h2 className="text-3xl font-bold mb-6 text-[#B69FFF]">Моя биография</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Здесь вы можете написать подробную информацию о себе,
              своём опыте, образовании и достижениях. Это пространство
              для того, чтобы рассказать свою уникальную историю,
              поделиться своими ценностями и целями.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Можно рассказать о своём пути к нынешней деятельности,
              ключевых моментах жизни, которые повлияли на ваше
              формирование как личности и профессионала.
            </p>
          </div>

          {/* Social Links */}
          <div className="backdrop-blur-sm bg-[#231A3B]/30 p-8 rounded-lg border border-[#9b87f5]/20 shadow-glow-subtle mb-16">
            <h2 className="text-3xl font-bold mb-8 text-[#B69FFF]">Мои социальные сети</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg bg-[#1A142E] border border-[#9b87f5]/20 hover:bg-[#2D1F4D] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4 bg-[#6E59A5]/20 text-[#9b87f5] group-hover:text-white group-hover:bg-[#9b87f5]/30 transition-all">
                    <Icon name={link.icon} size={20} />
                  </div>
                  <span className="text-lg font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Project Button */}
          <div className="text-center">
            <a
              href="https://t.me/fsqgoat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#6E59A5] hover:bg-[#9b87f5] text-white px-8 py-6 rounded-md text-lg transition-all shadow-glow-button">
                <Icon name="Rocket" className="mr-2" size={20} />
                Мой проект
              </Button>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400 border-t border-[#9b87f5]/10">
        <p>© {new Date().getFullYear()} attacktrip. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Biography;
