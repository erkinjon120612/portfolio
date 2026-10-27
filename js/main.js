const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const T={
uz:{nav_about:"Men haqimda",nav_skills:"Ko'nikmalar",nav_exp:"Tajriba",nav_work:"Loyihalar",nav_contact:"Aloqa",
role:"Frontend dasturchi",lead:"Tez, qulay va ishonchli veb-ilovalar yarataman. Toza kod va aniq natijaga e'tibor beraman.",
cta1:"Bog'lanish",cta2:"CV yuklab olish",status:"Yangi loyihalarga ochiq",
about_p1:"Men dasturchiman. Murakkab vazifalarni sodda, tushunarli va barqaror yechimlarga aylantiraman.",
about_p2:"Veb-ilovalarni noldan ishga tushirishgacha yarataman: dizayndan interfeysgacha, API bilan ishlashdan optimallashtirishgacha. Jamoada ishlashni va doimiy o'rganishni qadrlayman.",
tools_h:"Vositalar",d1:"2024 – hozir",d2:"2022 – 2024",
e1t:"Frontend dasturchi · Kompaniya nomi",e1p:"Veb-ilovalar interfeysini ishlab chiqish, kod sifatini nazorat qilish, jamoa bilan hamkorlik.",
e2t:"Kichik dasturchi · Kompaniya nomi",e2p:"Mijozlar uchun saytlar yaratish, xatolarni tuzatish va yangi funksiyalarni qo'shish.",
p1:"Loyiha tavsifi. Muammo, yechim va natijani qisqa yozing.",p2:"Loyiha tavsifi. Muammo, yechim va natijani qisqa yozing.",p3:"Loyiha tavsifi. Muammo, yechim va natijani qisqa yozing.",
ct_p:"Yangi loyiha yoki hamkorlik bo'yicha yozing. Odatda bir kun ichida javob beraman."},
en:{nav_about:"About",nav_skills:"Skills",nav_exp:"Experience",nav_work:"Projects",nav_contact:"Contact",
role:"Frontend Developer",lead:"I build fast, usable and reliable web applications, with a focus on clean code and clear results.",
cta1:"Get in touch",cta2:"Download CV",status:"Open to new projects",
about_p1:"I'm a developer who turns complex problems into simple, clear and stable solutions.",
about_p2:"I build web applications from scratch to launch: from design and interface to API integration and optimization. I value teamwork and continuous learning.",
tools_h:"Tools",d1:"2024 – present",d2:"2022 – 2024",
e1t:"Frontend Developer · Company name",e1p:"Building web application interfaces, maintaining code quality and collaborating with the team.",
e2t:"Junior Developer · Company name",e2p:"Building websites for clients, fixing bugs and shipping new features.",
p1:"Project description. Briefly state the problem, solution and result.",p2:"Project description. Briefly state the problem, solution and result.",p3:"Project description. Briefly state the problem, solution and result.",
ct_p:"Write to me about a new project or collaboration. I usually reply within a day."}};
const store=(k,v)=>{try{if(v!==undefined)localStorage.setItem(k,v);return localStorage.getItem(k)}catch(e){return null}};
let lang=store('lang')||'uz',theme=store('theme')||(matchMedia('(prefers-color-scheme:light)').matches?'light':'dark');
function apply(){
  const r=document.documentElement;r.dataset.theme=theme;r.lang=lang;
  $$('[data-i18n]').forEach(e=>e.textContent=T[lang][e.dataset.i18n]);
  $('#lang').textContent=lang==='uz'?'EN':'UZ';
}
$('#lang').onclick=()=>{lang=lang==='uz'?'en':'uz';store('lang',lang);apply()};
$('#theme').onclick=()=>{theme=theme==='dark'?'light':'dark';store('theme',theme);apply()};
apply();
