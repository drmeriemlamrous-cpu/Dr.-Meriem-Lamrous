import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FileText, Eye, Download, X, Search, ChevronRight, BookOpen, Type, Info, Calendar, Tag, Award, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { useLanguage } from "../context/LanguageContext";

interface Document {
  id: string;
  title: string;
  category: string;
  date: string;
  url: string;
  description: string;
  pages?: string[];
  transcription?: string;
  abstract?: string;
  keywords?: string[];
  status?: string;
}

export default function ResearchLibrary() {
  const { t, language } = useLanguage();
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"original" | "study">("original");
  const [zoom, setZoom] = useState(100);
  const [currentPage, setCurrentPage] = useState(0);

  const initialDocuments: Document[] = [
  {
    id: "1",
    title: t('patent1_title'),
    category: t('library_category_patent'),
    date: "Nov 2024",
    url: "/documents/monitoring_device_pct.pdf",
    description: t('patent1_desc'),
    status: `${t('patent_confirmed_label')} (PCT/DZ2024/050011)`,
    keywords: ["Logistics", "IoT", "Warehouse Management", "Strategic Vigilance"],
    abstract: "This innovation introduces a specialized monitoring apparatus designed for high-precision data acquisition in warehouse environments. It integrates strategic vigilance tracking to optimize inventory and safety protocols.",
    pages: [
      "https://i.postimg.cc/G3zTjvZQ/photo-2026-03-03-19-33-20.jpg",
      "https://i.postimg.cc/VLdvBp9S/photo-2026-03-03-19-33-28.jpg"
    ],
    transcription: `
# International Patent: PCT/DZ2024/050011

## 1. Official Identification
*   **Title:** Monitoring Device (Warehouse monitoring device)
*   **Applicant:** Dr. LAMROUS, Meriem
*   **International Filing Date:** 28 July 2024
*   **Priority Date:** 21 January 2024
*   **Dispatch Date of Opinion:** 11 November 2024

## 2. Technical Classification
*   **G06Q 10/087:** Inventory management and logistics.
*   **G06Q 50/12:** Industrial monitoring systems.

## 3. Authority Opinion (ISA/237)
The International Searching Authority has issued a positive opinion on the following criteria for claims 1, 4, 6, and 7:

| Criteria | Result |
| :--- | :--- |
| **Novelty (Nouveauté)** | **YES (OUI)** |
| **Inventive Step (Activité inventive)** | **YES (OUI)** |
| **Industrial Applicability** | **YES (OUI)** |

## 4. Summary of Opinion
The declaration motivated under Rule 43bis.1.a)i) confirms that the invention meets the international standards for patentability. The device is recognized for its technical novelty and inventive application in the field of warehouse monitoring and strategic vigilance.
    `
  },
  {
    id: "2",
    title: t('patent2_title'),
    category: t('library_category_patent'),
    date: "Oct 2024",
    url: "/documents/bakery_machine_pct.pdf",
    description: t('patent2_desc'),
    status: `${t('patent_confirmed_label')} (PCT/DZ2024/050003)`,
    keywords: ["Food Processing", "Automation", "Industrial Design", "Bakery Technology"],
    abstract: "This innovation presents an advanced mechanical system for the precise and efficient cutting of bakery products. It optimizes industrial production lines while maintaining product integrity and safety standards.",
    pages: [
      "https://i.postimg.cc/7YRLh92h/photo-2026-03-03-19-52-06.jpg",
      "https://i.postimg.cc/CLRF386W/photo-2026-03-03-19-52-13.jpg"
    ],
    transcription: `
# International Patent: PCT/DZ2024/050003

## 1. Official Identification
*   **Title:** Bread and Bakery Products Cutting Machine
*   **Applicant:** Dr. LAMROUS, Meriem
*   **Publication Date:** October 2024
*   **International Filing Date:** 2024

## 2. Technical Classification
*   **A21C 15/04:** Cutting or slicing machines for bakery products.
*   **B26D 1/00:** Cutting machines; Details of cutting tools.

## 3. Authority Opinion (ISA/237)
The International Searching Authority has issued a comprehensive positive opinion (OUI) on all international criteria:

| Criteria | Result |
| :--- | :--- |
| **Novelty (Nouveauté)** | **YES (OUI)** |
| **Inventive Step (Activité inventive)** | **YES (OUI)** |
| **Industrial Applicability** | **YES (OUI)** |

## 4. Technical Strength
The machine is recognized for its innovative mechanical design that ensures uniform cutting with minimal waste, addressing key challenges in the industrial bakery sector.
    `
  },
  {
    id: "3",
    title: t('patent3_title'),
    category: t('library_category_patent'),
    date: "Sep 2024",
    url: "/documents/comprehensive_monitoring_pct.pdf",
    description: t('patent3_desc'),
    status: `${t('patent_confirmed_label')} (PCT/DZ2024/050002)`,
    keywords: ["Information Systems", "Agriculture", "Natural Resources", "Multi-Sectoral Monitoring"],
    abstract: "This innovation introduces a comprehensive monitoring device tailored for multi-sectoral information systems. It provides a robust framework for data collection and analysis across agriculture, natural resources, and raw materials sectors.",
    pages: [
      "https://i.postimg.cc/4dRPgpPX/photo-2026-03-03-19-57-26.jpg",
      "https://i.postimg.cc/fLscFDWb/photo-2026-03-03-19-57-47.jpg"
    ],
    transcription: `
# International Patent: PCT/DZ2024/050002

## 1. Official Identification
*   **Title:** Comprehensive Monitoring Device for Multi-Sectoral Information Systems
*   **Applicant:** Dr. LAMROUS, Meriem
*   **Publication Date:** September 2024
*   **International Filing Date:** 2024

## 2. Technical Classification
*   **G06Q 10/00:** Administration; Management.
*   **G06Q 50/02:** Agriculture; Fishing; Forestry.

## 3. Authority Opinion (ISA/237)
The International Searching Authority has issued a positive opinion on the following criteria:

| Criteria | Result |
| :--- | :--- |
| **Novelty (Nouveauté)** | **YES (OUI)** |
| **Inventive Step (Activité inventive)** | **YES (OUI)** |
| **Industrial Applicability** | **YES (OUI)** |

## 4. Summary
This comprehensive device is designed to serve multiple sectors, including agriculture and natural resources, by providing advanced monitoring capabilities for complex information systems. It is recognized for its novelty and inventive step in multi-sectoral data management.
    `
  }
];

  const filteredDocs = initialDocuments.filter(doc => 
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="library" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="mono-label">{t('library_subtitle')}</span>
            <h2 className="section-title text-academic-blue">{t('library_title')}</h2>
            <p className="text-slate-500 max-w-xl">
              Access full-text publications, patent documentation, and technical reports. 
              Select a document to view it directly in your browser.
            </p>
          </div>
          
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder={t('library_search_placeholder')} 
              className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-academic-gold/50 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc) => (
            <motion.div
              key={doc.id}
              layoutId={`doc-${doc.id}`}
              className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all cursor-pointer"
              onClick={() => setSelectedDoc(doc)}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-academic-blue/5 rounded-xl text-academic-blue group-hover:bg-academic-blue group-hover:text-white transition-colors">
                  <FileText size={24} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-academic-gold bg-academic-gold/10 px-2 py-1 rounded">
                  {doc.category}
                </span>
              </div>
              <h3 className="text-xl font-serif mb-2 group-hover:text-academic-blue transition-colors">{doc.title}</h3>
              <p className="text-sm text-slate-500 mb-6 line-clamp-2">{doc.description}</p>
              
              <div className="flex items-center justify-between pt-4 border-t border-slate-200/50">
                <span className="text-xs font-mono text-slate-400">{doc.date}</span>
                <div className="flex items-center gap-1 text-academic-blue font-bold text-xs uppercase tracking-tighter">
                  View Document <ChevronRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PDF Viewer Modal */}
        <AnimatePresence>
          {selectedDoc && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-md"
            >
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white w-[95vw] h-[90vh] md:w-[90vw] md:h-[95vh] rounded-2xl overflow-hidden flex flex-col shadow-2xl"
              >
                {/* Modal Header */}
                <div className="p-4 md:p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center bg-white gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-academic-blue text-white rounded-lg hidden md:block">
                      <FileText size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-serif text-academic-blue leading-tight">{selectedDoc.title}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-academic-gold bg-academic-gold/10 px-2 py-0.5 rounded">
                          {selectedDoc.category}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">{selectedDoc.date}</span>
                      </div>
                    </div>
                  </div>
                  
                    <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl w-full md:w-auto">
                      <button 
                        onClick={() => setViewMode("original")}
                        className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${viewMode === "original" ? "bg-white text-academic-blue shadow-sm" : "text-slate-500 hover:text-academic-blue"}`}
                      >
                        <BookOpen size={14} /> {t('library_view_original')}
                      </button>
                      {selectedDoc.transcription && (
                        <button 
                          onClick={() => setViewMode("study")}
                          className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${viewMode === "study" ? "bg-white text-academic-blue shadow-sm" : "text-slate-500 hover:text-academic-blue"}`}
                        >
                          <Type size={14} /> {t('library_study_mode')}
                        </button>
                      )}
                    </div>

                  {viewMode === "original" && selectedDoc.pages && (
                    <div className="hidden md:flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
                      <button 
                        onClick={() => setZoom(prev => Math.max(50, prev - 10))}
                        className="p-2 hover:bg-white rounded-lg text-slate-500 transition-all"
                        title="Zoom Out"
                      >
                        <ZoomOut size={16} />
                      </button>
                      <span className="text-[10px] font-mono font-bold w-12 text-center text-slate-600">{zoom}%</span>
                      <button 
                        onClick={() => setZoom(prev => Math.min(200, prev + 10))}
                        className="p-2 hover:bg-white rounded-lg text-slate-500 transition-all"
                        title="Zoom In"
                      >
                        <ZoomIn size={16} />
                      </button>
                    </div>
                  )}

                  <div className="flex items-center gap-2 ml-auto md:ml-0">
                    <a 
                      href={selectedDoc.url} 
                      download 
                      className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600"
                      title="Download PDF"
                    >
                      <Download size={20} />
                    </a>
                    <button 
                      onClick={() => setSelectedDoc(null)}
                      className="p-2 hover:bg-red-50 hover:text-red-500 rounded-full transition-colors text-slate-600"
                    >
                      <X size={24} />
                    </button>
                  </div>
                </div>

                <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                  {/* Sidebar Info */}
                  <div className="w-full md:w-80 border-r border-slate-100 bg-slate-50 overflow-y-auto p-6 hidden lg:block">
                    <div className="space-y-8">
                      {selectedDoc.status && (
                        <div>
                          <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                            <Award size={12} /> {t('library_status_label')}
                          </h4>
                          <p className="text-sm font-medium text-emerald-700 bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                            {selectedDoc.status}
                          </p>
                        </div>
                      )}

                      {selectedDoc.abstract && (
                        <div>
                          <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                            <Info size={12} /> {t('library_abstract_label')}
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed italic">
                            "{selectedDoc.abstract}"
                          </p>
                        </div>
                      )}

                      {selectedDoc.keywords && (
                        <div>
                          <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                            <Tag size={12} /> {t('library_keywords_label')}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedDoc.keywords.map(kw => (
                              <span key={kw} className="text-[10px] bg-white border border-slate-200 px-2 py-1 rounded text-slate-500">
                                {kw}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="pt-6 border-t border-slate-200">
                        <div className="flex items-center gap-3 text-slate-400">
                          <Calendar size={14} />
                          <span className="text-xs font-mono">Published: {selectedDoc.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="flex-1 bg-slate-200 relative flex flex-col overflow-y-auto custom-scrollbar">
                    {viewMode === "original" ? (
                      selectedDoc.pages ? (
                        <div className="flex flex-col items-center gap-8 p-4 md:p-12 transition-all duration-300">
                          {selectedDoc.pages.map((page, idx) => (
                            <div 
                              key={idx} 
                              className="relative shadow-2xl bg-white transition-all duration-300"
                              style={{ 
                                width: `${zoom}%`,
                                maxWidth: zoom > 100 ? 'none' : '56rem' // 56rem is max-w-4xl
                              }}
                            >
                              <img 
                                src={page} 
                                alt={`Page ${idx + 1}`} 
                                className="w-full h-auto block"
                                style={{ 
                                  imageRendering: 'auto',
                                  filter: 'contrast(1.05) brightness(1.02)'
                                }}
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-[10px] font-mono">
                                PAGE {idx + 1}
                              </div>
                              <a 
                                href={page} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="absolute bottom-4 right-4 p-2 bg-white/90 hover:bg-white text-academic-blue rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                                title="Open Full Resolution"
                              >
                                <Maximize2 size={16} />
                              </a>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex-1 flex items-center justify-center p-12 text-center">
                          <div className="max-w-md">
                            <FileText size={48} className="mx-auto text-slate-400 mb-4" />
                            <h4 className="text-lg font-serif text-slate-600 mb-2">Original Document Not Available</h4>
                            <p className="text-sm text-slate-500 mb-6">The visual scan for this document hasn't been uploaded yet. Please use the Study Mode to read the transcribed content.</p>
                            <button 
                              onClick={() => setViewMode("study")}
                              className="px-6 py-2 bg-academic-blue text-white rounded-lg text-sm font-bold"
                            >
                              Switch to Study Mode
                            </button>
                          </div>
                        </div>
                      )
                    ) : (
                      <div className="bg-white min-h-full p-6 md:p-16">
                        <div className="max-w-3xl mx-auto">
                          <div className="markdown-body">
                            <Markdown remarkPlugins={[remarkGfm]}>
                              {selectedDoc.transcription}
                            </Markdown>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="p-4 bg-white text-center border-t border-slate-100">
                  <p className="text-xs text-slate-400 italic">
                    Note: If the document doesn't appear, please ensure the PDF file exists in the project's public folder.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
