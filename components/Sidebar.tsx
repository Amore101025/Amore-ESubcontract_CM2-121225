import React from 'react';
import { ExternalLink, Phone, Mail } from 'lucide-react';
import { i18n } from '../constants';
import { Language } from '../types';

interface SidebarProps {
  lang: Language;
}

const Card: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-bg-alt rounded-xl p-4 border border-border shadow-sm mb-4">
    <h3 className="text-sm font-bold mb-3 border-b border-border pb-2 text-text">{title}</h3>
    {children}
  </div>
);

export const Sidebar: React.FC<SidebarProps> = ({ lang }) => {
  return (
    <aside className="space-y-4">
      <Card title={i18n.tagWorkshop[lang]}>
        <h4 className="font-semibold text-accent mb-2 text-sm">{i18n.sideSummaryTitle[lang]}</h4>
        <p className="text-sm text-muted-text leading-relaxed">
          {i18n.sideSummaryBody[lang]}
        </p>
      </Card>

      <Card title={i18n.sideLawTitle[lang]}>
        <ul className="space-y-3 text-sm text-muted-text">
          <li>
            <strong className="block text-text mb-1">{i18n.sideLaw1Label[lang]}</strong>
            {i18n.sideLaw1[lang]}
          </li>
          <li>
            <strong className="block text-text mb-1">{i18n.sideLaw2Label[lang]}</strong>
            {i18n.sideLaw2[lang]}
          </li>
        </ul>
      </Card>

      <Card title={i18n.sideLinksTitle[lang]}>
        <ul className="space-y-2 text-sm">
          {[
            { label: 'mdcm.fda.gov.tw', url: 'https://mdcm.fda.gov.tw' },
            { label: 'law.moj.gov.tw', url: 'https://law.moj.gov.tw' },
            { label: 'TFDA Portal', url: 'https://www.fda.gov.tw/TC/siteContent.aspx?sid=11649' },
          ].map((link, idx) => (
            <li key={idx}>
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent hover:underline">
                <ExternalLink size={14} />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Card>

      <Card title={i18n.sideHelpTitle[lang]}>
        <ul className="space-y-2 text-sm text-muted-text">
          <li className="flex items-center gap-2">
            <Phone size={14} className="text-accent" />
            <span>03-5732043 / 03-5743868</span>
          </li>
          <li className="flex items-center gap-2">
            <Mail size={14} className="text-accent" />
            <a href="mailto:jywu6@itri.org.tw" className="hover:text-accent transition-colors">jywu6@itri.org.tw</a>
          </li>
        </ul>
      </Card>
    </aside>
  );
};
