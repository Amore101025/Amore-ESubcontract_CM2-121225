import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from 'recharts';
import { CheckCircle2, Circle, Check } from 'lucide-react';
import { scopeData, flowSteps, casesData, timelineData, docsItems, paymentMethods, i18n } from '../constants';
import { Language } from '../types';

interface BaseProps {
  lang: Language;
}

// 1. Scope Chart
export const ScopeChart: React.FC<BaseProps> = ({ lang }) => {
  const [activeKey, setActiveKey] = useState<string>(scopeData[0].key);
  const activeItem = scopeData.find(i => i.key === activeKey) || scopeData[0];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div className="flex flex-col gap-3">
        {scopeData.map((item) => (
          <div
            key={item.key}
            onClick={() => setActiveKey(item.key)}
            className={`cursor-pointer group flex items-center gap-3 transition-transform ${activeKey === item.key ? 'scale-[1.02]' : 'hover:scale-[1.01]'}`}
          >
            <div className="text-xs font-medium w-36 md:w-40 shrink-0 text-text">
              {lang === 'zh-Hant' ? item.zh : item.en}
            </div>
            <div className="flex-1 h-5 rounded-full bg-accent-soft relative overflow-hidden">
               <div 
                 className="absolute top-0 left-0 h-full bg-accent transition-all duration-500 ease-out"
                 style={{ width: `${item.percent}%`, opacity: activeKey === item.key ? 1 : 0.7 }}
               />
            </div>
            <div className="text-xs font-bold text-muted-text w-10 text-right">{item.percent}%</div>
          </div>
        ))}
      </div>
      <div className="min-h-[80px] p-4 rounded-lg bg-bg border border-border text-sm text-muted-text shadow-sm">
        {lang === 'zh-Hant' ? activeItem.detail_zh : activeItem.detail_en}
      </div>
    </div>
  );
};

// 2. Flow Stepper
export const FlowStepper: React.FC<BaseProps> = ({ lang }) => {
  const [activeId, setActiveId] = useState<number>(1);
  const activeStep = flowSteps.find(s => s.id === activeId) || flowSteps[0];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        {flowSteps.map((step) => (
          <div
            key={step.id}
            onClick={() => setActiveId(step.id)}
            className={`
              flex-1 min-w-[120px] flex items-center gap-2 px-3 py-2 rounded-full border cursor-pointer transition-all duration-200
              ${activeId === step.id ? 'bg-accent-soft border-accent shadow-sm' : 'bg-bg/50 border-border hover:bg-bg'}
            `}
          >
            <span className="w-5 h-5 rounded-full flex items-center justify-center bg-accent text-bg-alt text-xs font-bold">
              {step.id}
            </span>
            <span className="text-xs font-medium text-text truncate">
              {lang === 'zh-Hant' ? '步驟 ' + step.id : 'Step ' + step.id}
            </span>
          </div>
        ))}
      </div>
      <div className="p-4 rounded-lg bg-bg border border-border min-h-[60px] flex items-center text-sm text-muted-text">
        {lang === 'zh-Hant' ? activeStep.zh : activeStep.en}
      </div>
    </div>
  );
};

// 3. Cases Chart
export const CasesChart: React.FC<BaseProps> = ({ lang }) => {
  const [activeYear, setActiveYear] = useState<number>(2025);
  const activeData = casesData.find(c => c.year === activeYear) || casesData[casesData.length-1];

  const total = activeData.newCase + activeData.change + activeData.cancel;

  return (
    <div className="flex flex-col gap-4">
      <div className="h-[200px] w-full text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={casesData} 
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            onClick={(state) => {
              if (state && state.activePayload && state.activePayload[0]) {
                setActiveYear(state.activePayload[0].payload.year);
              }
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-color)" opacity={0.5} />
            <XAxis dataKey="year" tick={{fill: 'var(--muted-text)'}} axisLine={false} tickLine={false} />
            <YAxis tick={{fill: 'var(--muted-text)'}} axisLine={false} tickLine={false} />
            <Tooltip 
              cursor={{fill: 'var(--accent-soft)', opacity: 0.2}}
              contentStyle={{ borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-alt)' }}
            />
            <Legend />
            <Bar dataKey="newCase" name={i18n.legendNew[lang]} stackId="a" fill="rgba(56, 189, 248, 0.9)" />
            <Bar dataKey="change" name={i18n.legendChange[lang]} stackId="a" fill="rgba(74, 222, 128, 0.9)" />
            <Bar dataKey="cancel" name={i18n.legendCancel[lang]} stackId="a" fill="rgba(248, 113, 113, 0.95)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="text-sm text-muted-text p-3 bg-bg rounded-lg border border-border">
        <span className="font-bold text-accent">{activeYear}</span>: 
        {lang === 'zh-Hant' 
          ? ` 共 ${total} 件 (新案 ${activeData.newCase}, 變更 ${activeData.change}, 廢止 ${activeData.cancel})` 
          : ` Total ${total} (New ${activeData.newCase}, Change ${activeData.change}, Cancel ${activeData.cancel})`}
      </div>
    </div>
  );
};

// 4. Timeline
export const Timeline: React.FC<BaseProps> = ({ lang }) => {
  const [activeId, setActiveId] = useState<number>(1);
  
  return (
    <div className="relative pl-4">
      <div className="absolute left-[21px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-accent to-border/40"></div>
      <div className="flex flex-col gap-6">
        {timelineData.map((item) => (
          <div 
            key={item.id} 
            onClick={() => setActiveId(item.id)}
            className={`relative pl-8 cursor-pointer group transition-all ${activeId === item.id ? 'opacity-100' : 'opacity-60 hover:opacity-90'}`}
          >
            <div className={`absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-accent transition-colors ${activeId === item.id ? 'bg-accent' : 'bg-bg-alt'}`}></div>
            <div>
              <div className="text-xs font-bold text-accent mb-0.5">
                {lang === 'zh-Hant' ? item.date_zh : item.date_en}
              </div>
              <div className="text-sm text-text leading-snug">
                {lang === 'zh-Hant' ? item.zh : item.en}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 5. Decision Wizard
export const DecisionWizard: React.FC<BaseProps> = ({ lang }) => {
  const [q1, setQ1] = useState<string | null>(null);
  const [q2, setQ2] = useState<string | null>(null);

  const getResult = () => {
    if (!q1) return lang === 'zh-Hant' ? "請選擇作業內容" : "Select activity first";
    if (q1 === 'other') return i18n.w_no_need[lang];
    if (!q2) return lang === 'zh-Hant' ? "請選擇受託者狀態" : "Select contractor status";
    if (q2 === 'no') return i18n.w_qms_missing[lang];
    if (q1 === 'full') return i18n.w_need_full[lang];
    return i18n.w_need_partial[lang];
  };

  const OptionBtn = ({ label, active, onClick }: { label: string, active: boolean, onClick: () => void }) => (
    <button 
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-xs border transition-all ${active ? 'bg-accent-soft border-accent text-text font-medium' : 'bg-bg/50 border-border text-muted-text hover:bg-bg'}`}
    >
      {label}
    </button>
  );

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h4 className="text-sm font-semibold mb-2">{i18n.wizardQ1[lang]}</h4>
        <div className="flex flex-wrap gap-2">
          <OptionBtn label={lang === 'zh-Hant' ? "全部製程" : "Full Process"} active={q1 === 'full'} onClick={() => setQ1('full')} />
          <OptionBtn label={lang === 'zh-Hant' ? "僅製造" : "Mfg Only"} active={q1 === 'mfg'} onClick={() => setQ1('mfg')} />
          <OptionBtn label={lang === 'zh-Hant' ? "僅滅菌" : "Sterile Only"} active={q1 === 'sterile'} onClick={() => setQ1('sterile')} />
          <OptionBtn label={lang === 'zh-Hant' ? "僅包裝/貼標" : "Pkg/Label Only"} active={q1 === 'other'} onClick={() => { setQ1('other'); setQ2(null); }} />
        </div>
      </div>
      
      {q1 && q1 !== 'other' && (
        <div className="animate-in fade-in slide-in-from-top-2 duration-300">
          <h4 className="text-sm font-semibold mb-2">{i18n.wizardQ2[lang]}</h4>
          <div className="flex flex-wrap gap-2">
            <OptionBtn label={lang === 'zh-Hant' ? "是" : "Yes"} active={q2 === 'yes'} onClick={() => setQ2('yes')} />
            <OptionBtn label={lang === 'zh-Hant' ? "部分" : "Partial"} active={q2 === 'partial'} onClick={() => setQ2('partial')} />
            <OptionBtn label={lang === 'zh-Hant' ? "否" : "No"} active={q2 === 'no'} onClick={() => setQ2('no')} />
          </div>
        </div>
      )}

      <div className="mt-2 p-3 border-t border-dashed border-border text-sm text-muted-text min-h-[50px] flex items-center">
         {getResult()}
      </div>
    </div>
  );
};

// 6. Documents Checklist
export const DocChecklist: React.FC<BaseProps> = ({ lang }) => {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (key: string) => {
    const next = new Set(checked);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    setChecked(next);
  };

  const pct = Math.round((checked.size / docsItems.length) * 100);

  return (
    <div>
      <div className="flex flex-col gap-2 mb-4">
        {docsItems.map((doc) => (
          <div 
            key={doc.key} 
            onClick={() => toggle(doc.key)}
            className="flex items-start gap-2 cursor-pointer group"
          >
            <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center transition-colors ${checked.has(doc.key) ? 'bg-accent border-accent text-white' : 'border-border bg-bg group-hover:border-accent'}`}>
              {checked.has(doc.key) && <Check size={12} />}
            </div>
            <span className={`text-sm transition-colors ${checked.has(doc.key) ? 'text-text' : 'text-muted-text'}`}>
              {lang === 'zh-Hant' ? doc.zh : doc.en}
            </span>
          </div>
        ))}
      </div>
      <div className="relative h-2 bg-bg border border-border rounded-full overflow-hidden">
        <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent to-green-500 transition-all duration-500" style={{ width: `${pct}%` }}></div>
      </div>
      <div className="text-right text-xs text-muted-text mt-1">
        {pct}% {lang === 'zh-Hant' ? "完成" : "Ready"}
      </div>
    </div>
  );
};

// 7. Payment Methods
export const PaymentMethods: React.FC<BaseProps> = ({ lang }) => {
  const [activeKey, setActiveKey] = useState<string>(paymentMethods[0].key);
  const activeMethod = paymentMethods.find(m => m.key === activeKey) || paymentMethods[0];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
        {paymentMethods.map((m) => (
          <div
            key={m.key}
            onClick={() => setActiveKey(m.key)}
            className={`
              p-2 rounded-lg border text-sm cursor-pointer transition-all
              ${activeKey === m.key ? 'bg-accent-soft border-accent shadow-sm' : 'bg-bg/50 border-border hover:bg-bg'}
            `}
          >
            <div className="font-semibold text-text">{lang === 'zh-Hant' ? m.zh_title : m.en_title}</div>
            <div className="text-[10px] text-muted-text opacity-80">{lang === 'zh-Hant' ? '點擊查看詳情' : 'Click for details'}</div>
          </div>
        ))}
      </div>
      <div className="p-3 bg-bg border border-border rounded-lg text-sm text-muted-text">
        {lang === 'zh-Hant' ? activeMethod.zh : activeMethod.en}
      </div>
    </div>
  );
};
