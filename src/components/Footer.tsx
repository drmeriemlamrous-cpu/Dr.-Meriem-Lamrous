import { Linkedin, Mail, ExternalLink, Instagram } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-academic-blue text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-4xl mb-6">{t('footer_name')}</h2>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Advancing the frontiers of Strategic Vigilance through international innovation and rigorous academic research.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-academic-gold mb-6">{t('footer_contact')}</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://www.linkedin.com/search/results/all/?keywords=Dr.meriem%20Lamrous" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                  <Linkedin size={18} />
                  <span>Dr.meriem Lamrous</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/dr.meriem_lamrous?igsh=MXBmbHVkNTZ0MmxrNw==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                  <Instagram size={18} />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                  <ExternalLink size={18} />
                  <span>ResearchGate</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-academic-gold mb-6">{t('footer_location')}</h4>
            <a 
              href="mailto:lamrousmeriem@gmail.com" 
              className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
            >
              <Mail size={18} />
              <span>lamrousmeriem@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Dr. Meriem Lamrous. {t('footer_rights')}</p>
          <div className="flex gap-8">
            <a href="#identity" className="hover:text-white transition-colors">{t('nav_identity')}</a>
            <a href="#patents" className="hover:text-white transition-colors">{t('nav_patents')}</a>
            <a href="#cv" className="hover:text-white transition-colors">{t('nav_cv')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
