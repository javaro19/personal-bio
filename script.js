const D={
en:{title:"Amelia aka Mela",type:"{} developer.",intro:"I write modern C++ and build console systems and tools from scratch. Precision and personality, in that order.",now:"now",before:"before",role:"Co-founder & CEO, ShizWare Studio, 2 years",open:"Open to freelance and collaboration.",projects:"projects",p1:"C++ utility library for console, input, timing and more, under one namespace.",p2:"Console RPG in C++ with turn-based combat and a full storyline.",p3:"A console operating system written from scratch in C++."},
pl:{title:"Amelia aka Mela",type:"programistka {}.",intro:"Piszę nowoczesny C++ i od zera buduję systemy konsolowe oraz narzędzia. Precyzja i osobowość, w tej kolejności.",now:"teraz",before:"wcześniej",role:"Współzałożycielka i CEO, ShizWare Studio, 2 lata",open:"Otwarta na freelance i współpracę.",projects:"projekty",p1:"Biblioteka narzędziowa w C++ do konsoli, wejścia, czasu i nie tylko, w jednej przestrzeni nazw.",p2:"Konsolowe RPG w C++ z turową walką i pełną fabułą.",p3:"Konsolowy system operacyjny napisany od zera w C++."}
};
const c=document.getElementById("c");const W=["C++","JavaScript","Python"];let tm,n=0,tpl="";
function run(){
  clearTimeout(tm);
  const x=n++%W.length,t=tpl.replace("{}",W[x]);let i=0,d=1;
  (function k(){
    c.textContent=t.slice(0,i);
    if(d>0){if(i<t.length){i++;tm=setTimeout(k,70)}else{d=-1;tm=setTimeout(k,x===0?2800:1800)}}
    else if(i>0){i--;tm=setTimeout(k,35)}
    else tm=setTimeout(run,300);
  })();
}
function set(l,save){
  const d=D[l];document.documentElement.lang=l;document.title=d.title;
  document.querySelectorAll("[data-i]").forEach(e=>e.textContent=d[e.dataset.i]);
  document.querySelectorAll(".lang button").forEach(b=>b.classList.toggle("on",b.dataset.l===l));
  tpl=d.type;n=0;run();
  if(save){try{localStorage.setItem("lang",l)}catch(e){}}
}
document.querySelectorAll(".lang button").forEach(b=>b.onclick=()=>set(b.dataset.l,true));
let s=null;try{s=localStorage.getItem("lang")}catch(e){}
set(s&&D[s]?s:"en",false);