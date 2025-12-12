import { PainterStyle, ScopeItem, FlowStep, CaseData, TimelineItem, DocItem, PaymentMethod } from './types';

export const painterStyles: Record<string, PainterStyle> = {
  vangogh: { accent: "#ffb703", accentSoft: "rgba(255,183,3,0.16)", border: "#1d3557" },
  monet: { accent: "#4f8fb8", accentSoft: "rgba(79,143,184,0.16)", border: "#9ac5e5" },
  davinci: { accent: "#b5853f", accentSoft: "rgba(181,133,63,0.18)", border: "#d2b48c" },
  michelangelo: { accent: "#c56c39", accentSoft: "rgba(197,108,57,0.16)", border: "#f4c7a3" },
  rembrandt: { accent: "#bf6b2c", accentSoft: "rgba(191,107,44,0.18)", border: "#6b3a0f" },
  vermeer: { accent: "#1d4ed8", accentSoft: "rgba(37,99,235,0.15)", border: "#93c5fd" },
  turner: { accent: "#f97316", accentSoft: "rgba(249,115,22,0.15)", border: "#fed7aa" },
  klimt: { accent: "#d97706", accentSoft: "rgba(217,119,6,0.2)", border: "#fbbf24" },
  kandinsky: { accent: "#ec4899", accentSoft: "rgba(236,72,153,0.18)", border: "#f9a8d4" },
  matisse: { accent: "#22c55e", accentSoft: "rgba(34,197,94,0.18)", border: "#86efac" },
  picasso: { accent: "#0ea5e9", accentSoft: "rgba(14,165,233,0.18)", border: "#67e8f9" },
  dali: { accent: "#e11d48", accentSoft: "rgba(225,29,72,0.18)", border: "#fecaca" },
  rothko: { accent: "#7c3aed", accentSoft: "rgba(124,58,237,0.2)", border: "#a855f7" },
  pollock: { accent: "#facc15", accentSoft: "rgba(250,204,21,0.2)", border: "#eab308" },
  hokusai: { accent: "#0f766e", accentSoft: "rgba(15,118,110,0.18)", border: "#14b8a6" },
  hiroshige: { accent: "#2563eb", accentSoft: "rgba(37,99,235,0.17)", border: "#60a5fa" },
  kahlo: { accent: "#db2777", accentSoft: "rgba(219,39,119,0.2)", border: "#fb7185" },
  okeeffe: { accent: "#16a34a", accentSoft: "rgba(22,163,74,0.18)", border: "#4ade80" },
  degas: { accent: "#f97316", accentSoft: "rgba(249,115,22,0.18)", border: "#fed7aa" },
  cezanne: { accent: "#3b82f6", accentSoft: "rgba(59,130,246,0.18)", border: "#93c5fd" }
};

export const i18n = {
  title: {
    "zh-Hant": "114年度食品藥物管理署「醫療器材委託製造線上申辦系統」",
    en: "TFDA Medical Device Contract Manufacturing Online Application System"
  },
  subtitle: {
    "zh-Hant": "案件申辦工作坊 · 2025-12-12",
    en: "Case Application Workshop · 2025-12-12"
  },
  labelTheme: { "zh-Hant": "主題", en: "Theme" },
  themeLight: { "zh-Hant": "淺色", en: "Light" },
  themeDark: { "zh-Hant": "深色", en: "Dark" },
  labelStyle: { "zh-Hant": "畫風主題", en: "Painter Style" },
  tagLaw: { "zh-Hant": "法規與範圍", en: "Regulation" },
  scopeTitle: { "zh-Hant": "什麼是「醫療器材委託製造」？", en: "What counts as “contract manufacturing”?" },
  tagFlow: { "zh-Hant": "流程", en: "Process" },
  flowTitle: { "zh-Hant": "線上申辦 4 步驟", en: "4-step online application" },
  tagStats: { "zh-Hant": "統計", en: "Statistics" },
  casesTitle: { "zh-Hant": "近年委託製造申辦情形", en: "Recent application volumes" },
  legendNew: { "zh-Hant": "新申請案", en: "New cases" },
  legendChange: { "zh-Hant": "變更申請案", en: "Change cases" },
  legendCancel: { "zh-Hant": "廢止申請案", en: "Cancellation cases" },
  tagTime: { "zh-Hant": "時程", en: "Timeline" },
  timelineTitle: { "zh-Hant": "重要時程與法規節點", en: "Key regulatory milestones" },
  tagDecision: { "zh-Hant": "判斷工具", en: "Decision" },
  wizardTitle: { "zh-Hant": "我需不需要申請委託製造？", en: "Do I need to apply for contract manufacturing?" },
  wizardQ1: { "zh-Hant": "Q1：你打算委託的作業內容為何？", en: "Q1. Which activities will you outsource?" },
  wizardQ2: { "zh-Hant": "Q2：受託者是否已取得對應之製造許可 (QMS/QSD) ？", en: "Q2. Does the contract manufacturer hold valid QMS/QSD?" },
  tagDoc: { "zh-Hant": "文件", en: "Documents" },
  docsTitle: { "zh-Hant": "委託製造許可申請文件 Checklist", en: "Application document checklist" },
  tagPay: { "zh-Hant": "繳費", en: "Payment" },
  payTitle: { "zh-Hant": "線上繳費方式與入帳時間說明", en: "Online payment options & posting time" },
  tagWorkshop: { "zh-Hant": "工作坊重點", en: "Workshop focus" },
  sideSummaryTitle: {
    "zh-Hant": "從法規到實作，一頁看懂委託製造申辦",
    en: "From law to practice: understand TFDA contract manufacturing on one page"
  },
  sideSummaryBody: {
    "zh-Hant": "本頁將 110 年發布之《醫療器材委託製造作業準則》與「醫療器材委託製造線上申辦系統」實務操作整合為七大互動圖表，協助業者快速理解適用範圍、文件準備、線上流程與常見問題。",
    en: "This page turns the 2021 TFDA Contract Manufacturing Guideline and the online system workflow into seven interactive visuals, so manufacturers and distributors can quickly grasp scope, documents, e-filing steps, fees and FAQs."
  },
  sideLawTitle: { "zh-Hant": "核心法規摘要", en: "Key legal bases" },
  sideLaw1Label: { "zh-Hant": "《醫療器材管理法》第 23 條：", en: "Medical Devices Act, Art. 23:" },
  sideLaw1: {
    "zh-Hant": "製造業者未經中央主管機關核准，不得委託或接受委託製造醫療器材；販賣業者不得自行製造，但經核准得委託醫療器材製造業者製造。",
    en: "Manufacturers may neither subcontract nor accept subcontracted manufacturing of medical devices without TFDA approval. Distributors may not manufacture devices, except when TFDA approves their subcontracting to a licensed manufacturer."
  },
  sideLaw2Label: { "zh-Hant": "《委託製造作業準則》第 2 條：", en: "Contract Manufacturing Guideline, Art. 2 (definition):" },
  sideLaw2: {
    "zh-Hant": "「委託製造」係指醫療器材商將製造、包裝、貼標、滅菌及最終驗放全部程序，或其中「製造」或「滅菌」程序，委由其他醫療器材製造業者執行之行為。",
    en: "Contract manufacturing means that a device firm outsources all processes (manufacturing, packaging, labelling, sterilization and final release) or only manufacturing/sterilization to another licensed medical device manufacturer."
  },
  sideLinksTitle: { "zh-Hant": "官方系統與資源連結", en: "Official systems & resources" },
  sideHelpTitle: { "zh-Hant": "諮詢管道", en: "Helpdesk" },
  
  // Wizard Outputs
  w_need_full: {
    "zh-Hant": "你屬於「全部製程」委託情形，需依第 2 條申請委託製造許可，且委託者須具有販賣業醫療器材商許可執照。",
    en: "Your case is “full-process” outsourcing. The principal must hold a distributor licence and apply for TFDA contract manufacturing approval."
  },
  w_need_partial: {
    "zh-Hant": "你委託的是「製造/滅菌」程序，須申請委託製造許可，並確認受託者之 QMS/QSD 已涵蓋對應品項與製程。",
    en: "You are outsourcing manufacturing/sterilization. Contract manufacturing approval is required and the contractor’s QMS/QSD must cover the products and processes."
  },
  w_no_need: {
    "zh-Hant": "若僅委託包裝或貼標、或僅零配件加工，於不涉及將材料轉變為醫療器材者，一般不屬《委託製造》申請範圍。",
    en: "If you only outsource packaging or labelling, or simple component processing without transforming materials into a medical device, it is usually outside the contract-manufacturing scope."
  },
  w_qms_missing: {
    "zh-Hant": "受託者尚未取得完整 QMS/QSD，建議先協助其取得或更換受託者後，再由委託者提出申請。",
    en: "The contractor does not yet have appropriate QMS/QSD. Obtain/adjust their licence or change contractor before submitting the application."
  }
};

export const scopeData: ScopeItem[] = [
  {
    key: "full",
    percent: 50,
    zh: "全部製程 (製造＋包裝＋貼標＋滅菌＋最終驗放)",
    en: "Full process (mfg + pkg + label + sterile + release)",
    detail_zh: "全部製程委託時，委託者須為醫療器材販賣業者，並向 TFDA 申請委託製造許可，將所有關鍵程序交由受託製造業者執行。",
    detail_en: "For full-process outsourcing, the principal must be a licensed distributor and apply for TFDA contract manufacturing approval covering all critical processes."
  },
  {
    key: "mfg",
    percent: 30,
    zh: "僅製造作業",
    en: "Manufacturing only",
    detail_zh: "僅委託製造成形、組裝等「將材料轉變為醫療器材」之製造程序，同樣須依準則申請委託製造。",
    detail_en: "When only the transformation/assembly manufacturing steps are outsourced, the case is still subject to contract manufacturing approval."
  },
  {
    key: "sterile",
    percent: 20,
    zh: "僅滅菌作業",
    en: "Sterilization only",
    detail_zh: "委託 EO、Gamma、E-beam 等滅菌作業時，建議一次申請該滅菌方法之全品項；若僅部分品項，須於系統中以「其他」文字敘明。",
    detail_en: "For outsourced EO, Gamma or E‑beam sterilization, TFDA recommends applying for all items using that method; if only some items, specify them in the system under “Others”."
  }
];

export const flowSteps: FlowStep[] = [
  { id: 1, zh: "工商憑證 IC 卡登入系統（免申請帳號）。", en: "Log in with corporate certificate (no separate account application)." },
  { id: 2, zh: "選擇案件類型（新案 / 變更），建立申請。", en: "Choose case type (new / change) and create an application." },
  { id: 3, zh: "依畫面填寫資料、上傳文件（含契約、QMS/QSD）。", en: "Fill in forms and upload required documents (contract, QMS/QSD, etc.)." },
  { id: 4, zh: "產生繳費單號並線上繳費，入帳後務必點選「送出申請」。", en: "Generate payment number, pay online, then click “Submit Application” after posting." }
];

export const casesData: CaseData[] = [
  { year: 2021, newCase: 323, change: 43, cancel: 3 },
  { year: 2022, newCase: 557, change: 113, cancel: 5 },
  { year: 2023, newCase: 356, change: 46, cancel: 6 },
  { year: 2024, newCase: 445, change: 56, cancel: 2 },
  { year: 2025, newCase: 445, change: 14, cancel: 1 }
];

export const timelineData: TimelineItem[] = [
  { id: 1, date_zh: "110-04-06", date_en: "2021‑04‑06", zh: "發布《醫療器材委託製造作業準則》。", en: "TFDA publishes the Contract Manufacturing Guideline." },
  { id: 2, date_zh: "110-05-01", date_en: "2021‑05‑01", zh: "準則正式施行，委託製造須依規定申請。", en: "Guideline enters into force; contract manufacturing requires approval." },
  { id: 3, date_zh: "110-07-01", date_en: "2021‑07‑01", zh: "公告「免取得醫療器材製造許可品項」。", en: "List of device items exempted from manufacturing licence announced." },
  { id: 4, date_zh: "110-07-16", date_en: "2021‑07‑16", zh: "明定部分免製造許可品項，受託者得免附 QMS/QSD。", en: "Certain exempted items may skip QMS/QSD for the contractor." }
];

export const docsItems: DocItem[] = [
  { key: "form", zh: "醫療器材委託製造申請書", en: "Contract manufacturing application form" },
  { key: "lic_principal", zh: "委託者之醫療器材商執照", en: "Licence of principal (device firm)" },
  { key: "lic_contractor", zh: "受託者之醫療器材商執照（國內受託者）", en: "Licence of contractor (domestic)" },
  { key: "qms", zh: "受託者之醫療器材製造許可（QMS/QSD）", en: "Contractor’s manufacturing licence (QMS/QSD)" },
  { key: "contract", zh: "委託製造契約（雙方名稱、品項、製程、權利義務）", en: "Contract (names, items, processes, rights & obligations)" }
];

export const paymentMethods: PaymentMethod[] = [
  { key: "debit", zh_title: "金融卡 / 帳戶轉帳", en_title: "Debit / Bank Transfer", zh: "利用網路金融卡或約定帳戶轉帳，通常當日或次一工作日入帳。", en: "Online debit card or bank account transfer; usually posted same or next business day." },
  { key: "bank", zh_title: "台灣銀行臨櫃繳費", en_title: "Taiwan Bank Counter", zh: "持繳費單至台灣銀行臨櫃繳納，入帳時間依銀行作業為準。", en: "Pay at Taiwan Bank counter; posting time depends on bank processing." },
  { key: "atm", zh_title: "ATM 轉帳", en_title: "ATM Transfer", zh: "使用 ATM 轉帳，系統顯示約 1–3 天入帳，請留意申請期限。", en: "ATM transfer typically posts within 1–3 days; watch your application deadline." },
  { key: "credit", zh_title: "信用卡繳費", en_title: "Credit Card", zh: "以信用卡線上刷卡，約 2–3 天入帳。", en: "Online credit card payment; usually posted within 2–3 days." },
  { key: "cstore", zh_title: "超商繳費", en_title: "Convenience Store", zh: "超商條碼繳費，入帳時間較長，最晚可達 7 天，務必預留時間。", en: "Convenience store barcode payment may take up to 7 days to post; plan ahead." }
];
