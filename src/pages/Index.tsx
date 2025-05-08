
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';
import { Separator } from "@/components/ui/separator";

const socialLinks = [
  { name: "Youtube", icon: "Youtube", url: "https://youtube.com", color: "#FF0000" },
  { name: "Telegram", icon: "Send", url: "https://t.me/yourchannel", color: "#0088cc" },
  { name: "Instagram", icon: "Instagram", url: "https://instagram.com", color: "#E1306C" },
  { name: "Twitter", icon: "Twitter", url: "https://twitter.com", color: "#1DA1F2" },
];

const Biography = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] to-[#2d254b] text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-playfair font-bold text-white">Имя Фамилия</h1>
          <div className="flex space-x-4">
            <Button variant="ghost" className="text-white hover:text-[#9b87f5]">Обо мне</Button>
            <Button variant="ghost" className="text-white hover:text-[#9b87f5]">Проекты</Button>
            <Button variant="ghost" className="text-white hover:text-[#9b87f5]">Контакты</Button>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#1A1F2C] opacity-70"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center"></div>
        </div>
        
        <div className={`container mx-auto px-4 z-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 text-white leading-tight">
              Привет, я <span className="text-[#9b87f5]">Имя Фамилия</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Краткое описание вашей личности, профессии или увлечений
            </p>
            <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-8 py-6 rounded-full text-lg transition-all shadow-lg shadow-purple-500/30">
              Связаться со мной
            </Button>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-[#1A1F2C]/80">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-playfair font-bold mb-8 text-center">
              <span className="text-[#9b87f5]">Моя</span> Биография
            </h2>
            
            <Card className="bg-[#2d254b]/70 border border-white/10 shadow-xl shadow-purple-500/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  <div className="md:col-span-1">
                    <div className="rounded-2xl overflow-hidden border-4 border-[#9b87f5]/40 shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop" 
                        alt="Profile" 
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold mb-4 text-[#E5DEFF]">Кто я такой</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Здесь вы можете написать подробную информацию о себе, своём опыте, образовании и достижениях. 
                      Это пространство для того, чтобы рассказать свою уникальную историю, поделиться своими ценностями и целями.
                    </p>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Можно рассказать о своём пути к нынешней деятельности, ключевых моментах жизни, которые повлияли 
                      на ваше формирование как личности и профессионала. 
                    </p>
                    
                    <Separator className="my-6 bg-white/10" />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-[#9b87f5] font-semibold mb-2">Образование</h4>
                        <p className="text-gray-300">Университет, факультет</p>
                        <p className="text-gray-400 text-sm">2015-2020</p>
                      </div>
                      <div>
                        <h4 className="text-[#9b87f5] font-semibold mb-2">Опыт работы</h4>
                        <p className="text-gray-300">Компания, должность</p>
                        <p className="text-gray-400 text-sm">2020-настоящее время</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Social Links Section */}
      <section className="py-16 bg-gradient-to-t from-[#1A1F2C] to-[#2d254b]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold mb-12 text-center">
            <span className="text-[#9b87f5]">Мои</span> Социальные сети
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {socialLinks.map((link) => (
              <Card key={link.name} className="bg-[#2d254b]/50 border border-white/10 hover:bg-[#2d254b]/70 transition-all duration-300 group">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${link.color}20`, color: link.color }}
                  >
                    <Icon name={link.icon} size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{link.name}</h3>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-2"
                  >
                    <Button 
                      className="bg-[#1A1F2C]/50 hover:bg-[#9b87f5] border border-white/10 transition-all duration-300"
                    >
                      Подписаться
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#1A1F2C] py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Имя Фамилия. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Biography;
