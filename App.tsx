import React, { useState, useEffect } from 'react';
import { Palette, Moon, Sun, Globe } from 'lucide-react';
import { painterStyles, i18n } from './constants';
import { Language, Theme } from './types';
import { Sidebar } from './components/Sidebar';
import { 
  ScopeChart, 
  FlowStepper, 
  CasesChart, 
  Timeline, 
  DecisionWizard, 
  DocChecklist, 
  PaymentMethods 
} from './components/Infographics';

const SectionHeader = ({ tag, title }: { tag: string, title: string }) => (
  <h2 className="flex items-center gap-2 mb-3">
    <span className="px-2 py-0.5 rounded-full bg-accent-soft text-accent text-[10px] font-bold uppercase tracking-wider">
      {tag}
    </span>
    <span className="text-lg font-bold text-text">{title}</span>
  </h2>
);

const Card = ({ children }: { children?: React.ReactNode }) => (
  <div className="bg-bg-alt rounded-xl border border-border p-4 shadow-lg shadow-black/5 mb-8 transition-colors duration-300">
    {children}
  </div>
);

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('zh-Hant');
  const [theme, setTheme] = useState<Theme>('light');
  const [painter, setPainter] = useState<string>('vangogh');

  // Handle Theme Classes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Handle Painter Dynamic Styles
  const currentStyle = painterStyles[painter] || painterStyles.vangogh;
  const styleVariables = {
    '--accent': currentStyle.accent,
    '--accent-soft': currentStyle.accentSoft,
    '--border-color': currentStyle.border,
    '--bg-color': theme === 'light' ? '#f7f7fb' : '#020617',
    '--bg-alt': theme === 'light' ? '#ffffff' : '#0f172a',
    '--text-color': theme === 'light' ? '#222222' : '#f9fafb',
    '--muted-text': theme === 'light' ? '#555555' : '#94a3b8',
  } as React.CSSProperties;

  return (
    <div style={styleVariables} className="min-h-screen font-sans selection:bg-accent selection:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <h1 className="text-2xl font-extrabold text-text tracking-tight">{i18n.title[lang]}</h1>
            <p className="text-muted-text mt-1">{i18n.subtitle[lang]}</p>
          </div>
          
          <div className="flex flex-wrap gap-3 bg-bg-alt p-2 rounded-full border border-border shadow-sm">
            {/* Lang Toggle */}
            <button 
              onClick={() => setLang(l => l === 'zh-Hant' ? 'en' : 'zh-Hant')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-bg transition-colors text-xs font-medium text-muted-text"
            >
              <Globe size={14} />
              {lang === 'zh-Hant' ? 'English' : '繁體中文'}
            </button>

            {/* Theme Toggle */}
            <button 
              onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-bg transition-colors text-xs font-medium text-muted-text"
            >
              {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />}
              {i18n['theme' + (theme === 'light' ? 'Dark' : 'Light') as keyof typeof i18n][lang]}
            </button>

            {/* Painter Select */}
            <div className="flex items-center gap-2 px-3 py-1.5 border-l border-border pl-3">
              <Palette size={14} className="text-accent" />
              <select 
                value={painter} 
                onChange={(e) => setPainter(e.target.value)}
                className="bg-transparent text-xs font-medium text-text outline-none cursor-pointer"
              >
                {Object.keys(painterStyles).map(key => (
                  <option key={key} value={key} className="text-black">{key.charAt(0).toUpperCase() + key.slice(1)}</option>
                ))}
              </select>
            </div>
          </div>
        </header>

        {/* Main Grid */}
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Interactive Content */}
          <div className="lg:col-span-2 space-y-2">
            
            <section>
              <SectionHeader tag={i18n.tagLaw[lang]} title={i18n.scopeTitle[lang]} />
              <Card><ScopeChart lang={lang} /></Card>
            </section>

            <section>
              <SectionHeader tag={i18n.tagFlow[lang]} title={i18n.flowTitle[lang]} />
              <Card><FlowStepper lang={lang} /></Card>
            </section>

            <section>
              <SectionHeader tag={i18n.tagStats[lang]} title={i18n.casesTitle[lang]} />
              <Card><CasesChart lang={lang} /></Card>
            </section>

            <section>
              <SectionHeader tag={i18n.tagTime[lang]} title={i18n.timelineTitle[lang]} />
              <Card><Timeline lang={lang} /></Card>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section>
                <SectionHeader tag={i18n.tagDecision[lang]} title={i18n.tagDecision[lang]} />
                <Card>
                  <h3 className="text-sm font-bold mb-4">{i18n.wizardTitle[lang]}</h3>
                  <DecisionWizard lang={lang} />
                </Card>
              </section>

              <section>
                <SectionHeader tag={i18n.tagDoc[lang]} title={i18n.tagDoc[lang]} />
                <Card>
                  <h3 className="text-sm font-bold mb-4">{i18n.docsTitle[lang]}</h3>
                  <DocChecklist lang={lang} />
                </Card>
              </section>
            </div>

            <section>
              <SectionHeader tag={i18n.tagPay[lang]} title={i18n.payTitle[lang]} />
              <Card><PaymentMethods lang={lang} /></Card>
            </section>

          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <Sidebar lang={lang} />
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

export default App;