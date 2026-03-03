import { motion } from "motion/react";
import { ShieldCheck, Globe, FileText } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Patents() {
  const { t } = useLanguage();
  
  const patents = [
    {
      id: "PCT/DZ2024/050011",
      title: t('patent1_title'),
      description: t('patent1_desc'),
      status: t('patent_status_confirmed')
    },
    {
      id: "PCT/DZ2024/050003",
      title: t('patent2_title'),
      description: t('patent2_desc'),
      status: t('patent_status_confirmed')
    },
    {
      id: "PCT/DZ2024/050002",
      title: t('patent3_title'),
      description: t('patent3_desc'),
      status: t('patent_status_confirmed')
    }
  ];

  return (
    <section id="patents" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="mono-label">{t('patents_subtitle')}</span>
            <h2 className="section-title text-academic-blue">{t('patents_title')}</h2>
          </div>
          <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
            <ShieldCheck size={20} />
            <span className="text-sm font-bold uppercase tracking-tighter">{t('patent_confirmed_label')}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {patents.map((patent, index) => (
            <motion.div
              key={patent.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-academic-blue/5 rounded-lg text-academic-blue group-hover:bg-academic-blue group-hover:text-white transition-colors">
                  <Globe size={24} />
                </div>
                <span className="font-mono text-xs font-bold text-academic-gold bg-academic-gold/10 px-3 py-1 rounded">
                  {patent.id}
                </span>
              </div>
              <h3 className="text-2xl font-serif mb-4 group-hover:text-academic-blue transition-colors">{patent.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {patent.description}
              </p>
              <div className="flex items-center gap-3 pt-6 border-t border-slate-100">
                <FileText size={16} className="text-slate-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  {t('patent_status_label')}: {patent.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
