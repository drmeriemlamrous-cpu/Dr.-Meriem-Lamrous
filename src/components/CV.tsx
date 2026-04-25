import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Calendar, GraduationCap, Briefcase, BookOpen, FileText, Eye, 
  Award, Heart, Target, Users, Presentation, Scroll, Book, ExternalLink,
  Mail, X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Award as AwardIcon
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function CV() {
  const { t } = useLanguage();
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [zoom, setZoom] = useState(100);
  const [activeTab, setActiveTab] = useState("experience");

  const cvPages = [
    "https://i.postimg.cc/Df8Hn31M/photo-2026-03-03-20-06-22.jpg",
    "https://i.postimg.cc/pLxs9wnM/photo-2026-03-03-20-06-25.jpg",
    "https://i.postimg.cc/k4Vs39Lv/photo-2026-03-03-20-06-25-(2).jpg",
    "https://i.postimg.cc/150HZvY9/photo-2026-03-03-20-06-26.jpg",
    "https://i.postimg.cc/nzQ4S2Q5/photo-2026-03-03-20-06-26-(2).jpg"
  ];

  const sections = [
    { id: "experience", label: t('cv_section_experience'), icon: Briefcase },
    { id: "education", label: t('cv_section_education'), icon: GraduationCap },
    { id: "patents", label: t('cv_section_patents'), icon: Award },
    { id: "awards", label: t('cv_section_awards'), icon: AwardIcon },
    { id: "publications", label: t('cv_section_publications'), icon: BookOpen },
    { id: "teaching", label: t('cv_section_teaching'), icon: Book },
  ];

  const publications = [
    {
      year: "2024",
      title: "A critical study of the term \"influencers\" in the digital communication environment",
      journal: "Afak for Sciences Journal, University of Djelfa",
      link: "https://www.asjp.cerist.dz/en/article/253548",
      abstract: "This paper critically examines the growing phenomenon of \"digital influencers,\" questioning their role, impact, and credibility in the online communication environment."
    },
    {
      year: "2017",
      title: "The role of information systems in reinforcing strategic vigilance of the country",
      journal: "Journal of the History of Science, Algeria",
      link: "https://asjp.cerist.dz/en/downSomaitepdf/348/4/7/12626",
      abstract: "The study addresses how information systems support strategic vigilance at the national level, emphasizing their role in collecting and analyzing signals."
    },
    {
      year: "2019",
      title: "Types of strategic vigilance in modern institutions",
      journal: "Al-Midan Journal of Sports, Social and Human Studies",
      link: "https://asjp.cerist.dz/en/article/99005",
      abstract: "Defines strategic vigilance as a multidimensional process encompassing social, institutional, competitive, legal, and technological monitoring."
    },
    {
      year: "2019",
      title: "The policy of strategic vigilance in Algeria",
      journal: "Journal of Economic Studies, University of Djelfa",
      link: "https://asjp.cerist.dz/en/downArticle/417/13/2/98232",
      abstract: "Highlights strategic vigilance as a vital tool for Algerian institutions to cope with uncertainty and the \"information war.\""
    }
  ];

  return (
    <section id="cv" className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="mono-label">{t('cv_subtitle')}</span>
            <h2 className="section-title text-academic-blue leading-tight">{t('cv_title')}</h2>
          </div>
          <button 
            onClick={() => setIsViewerOpen(true)}
            className="flex items-center gap-2 px-6 py-3 bg-academic-blue text-white rounded-xl hover:bg-academic-gold transition-all shadow-lg hover:shadow-academic-gold/20 font-bold whitespace-nowrap"
          >
            <Eye size={20} /> {t('cv_view_full')}
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Section Navigation */}
          <div className="lg:col-span-3">
            <div className="bg-white p-4 rounded-3xl border border-slate-200 sticky top-24">
              <div className="mb-6 px-4 py-2 border-b border-slate-100 pb-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">{t('cv_section_personal')}</h3>
                <div className="flex items-center gap-3 mt-3 text-academic-blue">
                  <Mail size={16} />
                  <span className="text-xs font-mono font-medium truncate">lamrousmeriem@hotmail.fr</span>
                </div>
              </div>
              <div className="space-y-1">
                {sections.map(section => (
                  <button
                    key={section.id}
                    onClick={() => setActiveTab(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === section.id ? "bg-academic-blue text-white shadow-md shadow-academic-blue/10" : "text-slate-500 hover:bg-slate-50 hover:text-academic-blue"}`}
                  >
                    <section.icon size={18} />
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="bg-white rounded-4xl border border-slate-200 shadow-sm overflow-hidden"
              >
                {activeTab === "experience" && (
                  <div className="p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-10">
                      <div className="p-3 bg-academic-blue/5 text-academic-blue rounded-2xl">
                        <Briefcase size={28} />
                      </div>
                      <h3 className="text-2xl font-serif text-academic-blue">{t('cv_section_experience')}</h3>
                    </div>
                    <div className="space-y-10">
                      {[
                        {
                          year: "2021 – Present",
                          title: "Maîtresse de conférences \"A\"",
                          inst: "University of Algiers 3, Faculty of Information and Communication Sciences",
                        },
                        {
                          year: "2022 – Present",
                          title: "Member of the Scientific Committee for Selecting Innovative Projects",
                          inst: "Incubator, University of Algiers 3",
                        },
                        {
                          year: "2018 – Present",
                          title: "Member of Research Team \"Environmental Communication and Sustainable Development\"",
                          inst: "Badji Mokhtar University – Annaba",
                        },
                        {
                          year: "March 2018",
                          title: "Short-term Training",
                          inst: "University of Orléans – France",
                        }
                      ].map((exp, idx) => (
                        <div key={idx} className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-[-2.5rem] before:w-[2px] last:before:hidden before:bg-slate-100">
                          <div className="absolute left-[-5px] top-2 w-[12px] h-[12px] rounded-full border-2 border-academic-gold bg-white" />
                          <span className="text-xs font-mono font-bold text-academic-gold uppercase tracking-widest">{exp.year}</span>
                          <h4 className="text-xl font-serif mt-1 text-slate-800 leading-snug">{exp.title}</h4>
                          <p className="text-sm font-bold text-slate-400 mt-1">{exp.inst}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "education" && (
                  <div className="p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-10">
                      <div className="p-3 bg-academic-blue/5 text-academic-blue rounded-2xl">
                        <GraduationCap size={28} />
                      </div>
                      <h3 className="text-2xl font-serif text-academic-blue">{t('cv_section_education')}</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        { degree: "PhD in Communication and Development", inst: "National School of Political Science (ENSSP)", desc: "Thesis: Information systems in overall strategic intelligence", icon: Scroll },
                        { degree: "Master in Communication Management", inst: "Annaba University", desc: "Top of class distinction", icon: Target },
                        { degree: "Bachelor’s in Organizational Communication", inst: "Annaba University", desc: "", icon: FileText },
                        { degree: "Baccalaureate", inst: "Top of school", desc: "Distinction: \"Good\"", icon: AwardIcon }
                      ].map((edu, idx) => (
                        <div key={idx} className="p-6 border border-slate-100 rounded-3xl bg-slate-50/50 hover:border-academic-gold/30 transition-all">
                          <edu.icon size={24} className="text-academic-gold mb-4" />
                          <h4 className="text-lg font-serif text-academic-blue leading-tight">{edu.degree}</h4>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">{edu.inst}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "patents" && (
                  <div className="p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-10">
                      <div className="p-3 bg-academic-blue/5 text-academic-blue rounded-2xl">
                        <Award size={28} />
                      </div>
                      <h3 className="text-2xl font-serif text-academic-blue">{t('cv_section_patents')}</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="p-8 bg-academic-blue text-white rounded-3xl">
                        <h4 className="text-5xl font-serif text-academic-gold">02</h4>
                        <p className="text-sm font-bold uppercase tracking-widest text-white/70">National Patents</p>
                      </div>
                      <div className="p-8 border-2 border-academic-gold rounded-3xl">
                        <h4 className="text-5xl font-serif text-academic-gold">03</h4>
                        <p className="text-sm font-bold uppercase tracking-widest text-slate-400">International Patents</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "awards" && (
                  <div className="p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-10">
                      <div className="p-3 bg-academic-blue/5 text-academic-blue rounded-2xl">
                        <AwardIcon size={28} />
                      </div>
                      <h3 className="text-2xl font-serif text-academic-blue">{t('cv_section_awards')}</h3>
                    </div>
                    <div className="space-y-4">
                      {[ "Label \"Projet Innovant\"", "Label \"Startup\"", "Best Innovative Idea Award (COVID-19)" ].map((award, idx) => (
                        <div key={idx} className="flex items-center gap-5 p-6 border border-slate-100 rounded-2xl hover:border-academic-gold bg-white">
                          <Award size={28} className="text-academic-gold" />
                          <h4 className="text-xl font-serif text-slate-800">{award}</h4>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "publications" && (
                  <div className="p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-10">
                      <div className="p-3 bg-academic-blue/5 text-academic-blue rounded-2xl">
                        <BookOpen size={28} />
                      </div>
                      <h3 className="text-2xl font-serif text-academic-blue">{t('cv_section_publications')}</h3>
                    </div>
                    <div className="space-y-12">
                      {publications.map((pub, idx) => (
                        <div key={idx} className="group pb-8 border-b border-slate-100 last:border-0 last:pb-0">
                          <span className="text-xs font-mono font-bold text-academic-gold">{pub.year}</span>
                          <h4 className="text-xl font-serif text-slate-800 mt-1 leading-snug group-hover:text-academic-blue transition-colors">{pub.title}</h4>
                          <p className="text-xs font-bold text-slate-400 mt-1 italic tracking-tight">{pub.journal}</p>
                          <p className="text-sm text-slate-500 mt-4 leading-relaxed">{pub.abstract}</p>
                          <a href={pub.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-xs font-bold text-academic-blue underline decoration-academic-blue/30 underline-offset-4 hover:decoration-academic-gold transition-all">View Full Paper <ExternalLink size={12} /></a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "teaching" && (
                  <div className="p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-10">
                      <div className="p-3 bg-academic-blue/5 text-academic-blue rounded-2xl">
                        <Book size={28} />
                      </div>
                      <h3 className="text-2xl font-serif text-academic-blue">{t('cv_section_teaching')}</h3>
                    </div>
                    <div className="space-y-8">
                      <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 leading-relaxed">
                        <h4 className="text-xl font-serif text-slate-800 mb-4">Entrepreneurship Lectures</h4>
                        <p className="text-sm text-slate-600">Currently lecturing for Master 2 Organizational and Mass Communication students (since 2022). Expertise includes venture creation, strategic monitoring, and digital intelligence.</p>
                      </div>
                      <div className="flex items-start gap-4 p-6 bg-academic-blue text-white rounded-3xl">
                        <FileText size={24} className="text-academic-gold" />
                        <div>
                          <p className="font-serif italic text-lg">\"Entrepreneurship Booklet\"</p>
                          <p className="text-xs text-white/50 mt-1">Certified by Scientific Council (2023) for academic excellence.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isViewerOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative w-full h-full max-w-6xl flex flex-col">
              <div className="flex justify-between items-center mb-6 text-white">
                <div>
                  <h3 className="text-2xl font-serif">{t('cv_modal_title')}</h3>
                  <p className="text-xs text-slate-400 font-mono uppercase tracking-widest">{t('footer_name')} • Page {currentPage + 1} of {cvPages.length}</p>
                </div>
                <button onClick={() => setIsViewerOpen(false)} className="p-3 hover:bg-red-500/20 hover:text-red-500 rounded-full transition-colors text-slate-400"><X size={28} /></button>
              </div>
              <div className="flex-1 relative overflow-hidden bg-slate-900 rounded-3xl border border-white/10 flex items-center justify-center">
                <div className="w-full h-full overflow-auto custom-scrollbar flex items-start justify-center p-4">
                  <motion.div key={currentPage} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="shadow-2xl bg-white" style={{ width: `${zoom}%`, maxWidth: zoom > 100 ? "none" : "100%" }}>
                    <img src={cvPages[currentPage]} alt={`CV Page ${currentPage + 1}`} className="w-full h-auto" referrerPolicy="no-referrer" />
                  </motion.div>
                </div>
                <button onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))} disabled={currentPage === 0} className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-black/50 hover:bg-academic-gold text-white rounded-full transition-all disabled:opacity-20"><ChevronLeft size={24} /></button>
                <button onClick={() => setCurrentPage(prev => Math.min(cvPages.length - 1, prev + 1))} disabled={currentPage === cvPages.length - 1} className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-black/50 hover:bg-academic-gold text-white rounded-full transition-all disabled:opacity-20"><ChevronRight size={24} /></button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
