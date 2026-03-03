import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export default function Gallery() {
  const { t } = useLanguage();
  
  const groups = [
    {
      title: t('gallery_group1_title'),
      images: [
        { url: "https://i.postimg.cc/cCSFQ25f/photo-2026-03-03-20-19-17.jpg", caption: t('gallery_cap_exhibition') },
        { url: "https://i.postimg.cc/Hs36yS0F/photo-2026-03-03-20-19-04.jpg", caption: t('gallery_cap_ministerial') },
        { url: "https://i.postimg.cc/D06P1ZGs/photo-2026-03-03-20-19-04-(3).jpg", caption: t('gallery_cap_ai_showcase') },
        { url: "https://i.postimg.cc/B6cTG6MN/photo-2026-03-03-20-19-04-(2).jpg", caption: t('gallery_cap_innovation_dialogue') }
      ]
    },
    {
      title: t('gallery_group2_title'),
      images: [
        { url: "https://i.postimg.cc/c13HC2SV/photo-2026-03-03-20-26-19.jpg", caption: t('gallery_cap_innovation_showcase') },
        { url: "https://i.postimg.cc/tTxX1ZL1/photo-2026-03-03-20-26-13.jpg", caption: t('gallery_cap_ministerial_meeting') },
        { url: "https://i.postimg.cc/MGcw4fKK/photo-2026-03-03-20-26-07.jpg", caption: t('gallery_cap_annaba') },
        { url: "https://i.postimg.cc/s2ZFKFwF/photo-2026-03-03-20-26-02.jpg", caption: t('gallery_cap_project_presentation') },
        { url: "https://i.postimg.cc/D0xYn5BX/photo-2026-03-03-20-25-55.jpg", caption: t('gallery_cap_exhibition_tour') },
        { url: "https://i.postimg.cc/k4cTvf3X/photo-2026-03-03-20-25-49.jpg", caption: t('gallery_cap_dialogue_startups') },
        { url: "https://i.postimg.cc/zvQSxQxP/photo-2026-03-03-20-25-42.jpg", caption: t('gallery_cap_innovation_ecosystem') }
      ]
    },
    {
      title: t('gallery_group3_title'),
      images: [
        { url: "https://i.postimg.cc/43NCk7fd/photo-2026-03-03-20-35-33.jpg", caption: t('gallery_cap_ministerial_meeting') }
      ]
    },
    {
      title: t('gallery_group4_title'),
      images: [
        { url: "https://i.postimg.cc/jjj13pcj/photo-2026-03-03-20-35-45.jpg", caption: t('gallery_cap_parliamentary') },
        { url: "https://i.postimg.cc/wjwfNWzt/photo-2026-03-03-20-35-39.jpg", caption: t('gallery_cap_diplomatic') }
      ]
    },
    {
      title: t('gallery_group5_title'),
      images: [
        { url: "https://i.postimg.cc/QdDC7bbJ/photo-2026-03-03-20-41-23.jpg", caption: t('gallery_cap_project_eval') },
        { url: "https://i.postimg.cc/Kz18bsZd/photo-2026-03-03-20-41-18.jpg", caption: t('gallery_cap_training') },
        { url: "https://i.postimg.cc/bNxNqnhw/photo-2026-03-03-20-41-13.jpg", caption: t('gallery_cap_economic_forum') },
        { url: "https://i.postimg.cc/26LrMbGB/photo-2026-03-03-20-41-07.jpg", caption: t('gallery_cap_scientific_conf') },
        { url: "https://i.postimg.cc/5NVbKtCv/photo-2026-03-03-20-40-59.jpg", caption: t('gallery_cap_research_pres') },
        { url: "https://i.postimg.cc/9fKjdX2m/photo-2026-03-03-20-40-50.jpg", caption: t('gallery_cap_intl_lecture') },
        { url: "https://i.postimg.cc/8zn8GkjX/photo-2026-03-03-20-40-44.jpg", caption: t('gallery_cap_innovation_dialogue') },
        { url: "https://i.postimg.cc/K8jV0XJv/photo-2026-03-03-20-40-37.jpg", caption: t('gallery_cap_academic_exchange') },
        { url: "https://i.postimg.cc/yx7p92DZ/photo-2026-03-03-20-40-30.jpg", caption: t('gallery_cap_prof_workshop') },
        { url: "https://i.postimg.cc/XJkQVxQH/photo-2026-03-03-20-40-17.jpg", caption: t('gallery_cap_scientific_theorization') }
      ]
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="mono-label">{t('gallery_subtitle')}</span>
          <h2 className="section-title text-academic-blue">{t('gallery_title')}</h2>
        </div>

        <div className="space-y-24">
          {groups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <div className="mb-10 max-w-3xl">
                <h3 className="text-2xl md:text-3xl font-serif text-academic-blue leading-tight mb-4">
                  {group.title}
                </h3>
                <div className="h-1 w-20 bg-academic-gold rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {group.images.map((img, imgIndex) => (
                  <motion.div
                    key={imgIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: imgIndex * 0.1 }}
                    className="relative group overflow-hidden rounded-3xl aspect-square shadow-lg"
                  >
                    <img 
                      src={img.url} 
                      alt={img.caption}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-white font-serif text-lg leading-tight">{img.caption}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
