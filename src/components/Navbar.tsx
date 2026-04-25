import { motion, AnimatePresence } from "motion/react";
import { Award, BookOpen, Image as ImageIcon, User, Mail, FileText, Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";

export default function Navbar() {
  const { t, setLanguage, language } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);

  const navItems = [
    { name: t('nav_identity'), href: "#identity", icon: User },
    { name: t('nav_cv'), href: "#cv", icon: BookOpen },
    { name: t('nav_gallery'), href: "#gallery", icon: ImageIcon },
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇩🇿' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass-card rounded-full px-4 md:px-6 py-2 flex items-center gap-4 md:gap-8"
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="group flex flex-col items-center gap-1 transition-colors hover:text-academic-gold"
          >
            <item.icon size={18} className="text-slate-400 group-hover:text-academic-gold transition-colors" />
            <span className="text-[10px] uppercase font-bold tracking-tighter hidden md:block">
              {item.name}
            </span>
          </a>
        ))}
        
        <div className="h-4 w-[1px] bg-slate-200 mx-1 hidden md:block" />

        {/* Language Switcher */}
        <div className="relative">
          <button 
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center gap-1 p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <Globe size={18} className="text-academic-blue" />
            <span className="text-[10px] font-bold uppercase text-academic-blue hidden sm:block">{language}</span>
            <ChevronDown size={12} className={`text-slate-400 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isLangOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-full right-0 mt-2 bg-white border border-slate-100 shadow-2xl rounded-2xl p-2 min-w-[140px] overflow-hidden"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as any);
                      setIsLangOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-colors ${language === lang.code ? 'bg-academic-blue text-white' : 'hover:bg-slate-50 text-slate-600'}`}
                  >
                    <span>{lang.name}</span>
                    <span className="text-lg">{lang.flag}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="h-4 w-[1px] bg-slate-200 mx-1 hidden md:block" />
        
        <a 
          href="mailto:lamrousmeriem@gmail.com"
          className="bg-academic-blue text-white p-2 rounded-full hover:bg-academic-gold transition-colors"
        >
          <Mail size={16} />
        </a>
      </motion.div>
    </nav>
  );
}
