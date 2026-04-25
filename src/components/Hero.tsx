import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="identity" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-academic-gold/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-academic-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="mono-label mb-4 block">{t('hero_subtitle')}</span>
          <h1 className="font-serif text-6xl md:text-8xl leading-none mb-6 text-academic-blue">
            {t('hero_title_1')} <br />
            <span className="italic text-academic-gold">{t('hero_title_2')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-light max-w-lg leading-relaxed">
            {t('hero_desc')}
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4">
            <a 
              href="#cv"
              className="px-8 py-3 bg-academic-blue text-white font-bold rounded-xl hover:bg-academic-gold transition-all shadow-lg shadow-academic-blue/20"
            >
              {t('hero_view_cv')}
            </a>
            <div className="flex gap-4">
              <div className="border-l-2 border-academic-gold pl-4">
                <p className="text-sm font-bold uppercase tracking-widest text-slate-400">{t('hero_status_label')}</p>
                <p className="text-lg font-serif italic">{t('hero_status_value')}</p>
              </div>
              <div className="border-l-2 border-academic-gold pl-4">
                <p className="text-sm font-bold uppercase tracking-widest text-slate-400">{t('hero_focus_label')}</p>
                <p className="text-lg font-serif italic">{t('hero_focus_value')}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://i.postimg.cc/MH1hK45T/photo-2026-02-28-17-05-20.jpg" 
              alt="Dr. Meriem Lamrous" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-4 border-b-4 border-academic-gold" />
          <div className="absolute -top-6 -left-6 w-32 h-32 border-l-4 border-t-4 border-academic-blue" />
        </motion.div>
      </div>
    </section>
  );
}
