import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, GraduationCap, Briefcase, BookOpen, FileText, Eye, Download, X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function CV() {
  const { t } = useLanguage();
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [zoom, setZoom] = useState(100);

  const cvPages = [
    "https://i.postimg.cc/Df8Hn31M/photo-2026-03-03-20-06-22.jpg",
    "https://i.postimg.cc/pLxs9wnM/photo-2026-03-03-20-06-25.jpg",
    "https://i.postimg.cc/k4Vs39Lv/photo-2026-03-03-20-06-25-(2).jpg",
    "https://i.postimg.cc/150HZvY9/photo-2026-03-03-20-06-26.jpg",
    "https://i.postimg.cc/nzQ4S2Q5/photo-2026-03-03-20-06-26-(2).jpg"
  ];

  const timeline = [
    {
      year: "2024",
      title: t('cv_timeline_1_title'),
      institution: t('cv_timeline_1_inst'),
      description: t('cv_timeline_1_desc'),
      icon: Calendar
    },
    {
      year: "2020 - Present",
      title: t('cv_timeline_2_title'),
      institution: t('cv_timeline_2_inst'),
      description: t('cv_timeline_2_desc'),
      icon: Briefcase
    },
    {
      year: "2018",
      title: t('cv_timeline_3_title'),
      institution: t('cv_timeline_3_inst'),
      description: t('cv_timeline_3_desc'),
      icon: GraduationCap
    }
  ];

  const publications = [
    t('cv_pub_1'),
    t('cv_pub_2'),
    t('cv_pub_3'),
    t('cv_pub_4')
  ];

  return (
    <section id="cv" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Timeline */}
          <div>
            <span className="mono-label">{t('cv_subtitle')}</span>
            <h2 className="section-title text-academic-blue">{t('cv_title')}</h2>
            
            <div className="space-y-12 mt-12 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-white border-2 border-academic-gold flex items-center justify-center z-10">
                    <item.icon size={18} className="text-academic-gold" />
                  </div>
                  <span className="font-mono text-sm font-bold text-academic-gold">{item.year}</span>
                  <h3 className="text-xl font-serif mt-1">{item.title}</h3>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-tighter mb-2">{item.institution}</p>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-academic-gold rounded-xl text-academic-blue">
                  <BookOpen size={24} />
                </div>
                <h2 className="text-3xl font-serif">{t('cv_publications')}</h2>
              </div>
              
              <div className="space-y-6">
                {publications.map((pub, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-default"
                  >
                    <div className="flex gap-4">
                      <span className="text-academic-gold font-mono">0{index + 1}</span>
                      <p className="text-lg text-slate-300 group-hover:text-white transition-colors leading-snug">
                        {pub}
                      </p>
                    </div>
                    <div className="h-[1px] w-full bg-white/10 mt-6" />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-12 space-y-6">
              <div className="p-6 border border-white/10 rounded-2xl bg-white/5">
                <p className="text-sm text-slate-400 italic">
                  {t('cv_dossier_info')}
                </p>
              </div>

              <button 
                onClick={() => setIsViewerOpen(true)}
                className="w-full py-4 bg-academic-gold text-academic-blue font-bold rounded-xl hover:bg-white transition-all flex items-center justify-center gap-3 shadow-lg shadow-academic-gold/20"
              >
                <Eye size={20} /> {t('cv_view_full')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CV Viewer Modal */}
      <AnimatePresence>
        {isViewerOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full max-w-6xl flex flex-col"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6 text-white">
                <div>
                  <h3 className="text-2xl font-serif">{t('cv_modal_title')}</h3>
                  <p className="text-xs text-slate-400 font-mono uppercase tracking-widest">{t('footer_name')} • {t('cv_modal_page')} {currentPage + 1} {t('cv_modal_of')} {cvPages.length}</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="hidden md:flex items-center gap-2 bg-white/10 p-1 rounded-xl">
                    <button 
                      onClick={() => setZoom(prev => Math.max(50, prev - 10))}
                      className="p-2 hover:bg-white/10 rounded-lg text-slate-300 transition-all"
                    >
                      <ZoomOut size={18} />
                    </button>
                    <span className="text-[10px] font-mono font-bold w-12 text-center text-slate-300">{zoom}%</span>
                    <button 
                      onClick={() => setZoom(prev => Math.min(200, prev + 10))}
                      className="p-2 hover:bg-white/10 rounded-lg text-slate-300 transition-all"
                    >
                      <ZoomIn size={18} />
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setIsViewerOpen(false)}
                      className="p-3 hover:bg-red-500/20 hover:text-red-500 rounded-full transition-colors text-slate-400"
                    >
                      <X size={28} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Viewer Area */}
              <div className="flex-1 relative overflow-hidden bg-slate-900 rounded-3xl border border-white/10 flex items-center justify-center">
                <div 
                  className="w-full h-full overflow-auto custom-scrollbar flex items-start justify-center p-4 md:p-8"
                >
                  <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="shadow-2xl bg-white transition-all duration-300"
                    style={{ 
                      width: `${zoom}%`,
                      maxWidth: zoom > 100 ? 'none' : '100%'
                    }}
                  >
                    <img 
                      src={cvPages[currentPage]} 
                      alt={`CV Page ${currentPage + 1}`} 
                      className="w-full h-auto"
                      referrerPolicy="no-referrer"
                      style={{ filter: 'contrast(1.05) brightness(1.02)' }}
                    />
                  </motion.div>
                </div>

                {/* Navigation Arrows */}
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                  disabled={currentPage === 0}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-black/50 hover:bg-academic-gold text-white rounded-full transition-all disabled:opacity-20 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={() => setCurrentPage(prev => Math.min(cvPages.length - 1, prev + 1))}
                  disabled={currentPage === cvPages.length - 1}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-black/50 hover:bg-academic-gold text-white rounded-full transition-all disabled:opacity-20 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Footer / Thumbnails */}
              <div className="mt-6 flex justify-center gap-2">
                {cvPages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx)}
                    className={`w-12 h-1.5 rounded-full transition-all ${currentPage === idx ? "bg-academic-gold w-20" : "bg-white/20 hover:bg-white/40"}`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
