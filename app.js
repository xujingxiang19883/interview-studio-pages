'use strict';
const interviewData=window.MY_INTERVIEW_DATA||[], optiverData=window.OPTIVER_DATA||[], optiverVi1Data=window.OPTIVER_VI_1_DATA||[], brevanHowardData=window.BREVAN_HOWARD_DATA||[], goldmanSachsData=window.GOLDMAN_SACHS_DATA||[], bofaData=window.BOFA_DATA||[], susquehannaVi1Data=window.SUSQUEHANA_VI_1_DATA||[], neubergerData=window.NEUBERGER_DATA||[], neubergerVi1Data=window.NEUBERGER_VI_1_DATA||[], neubergerVi2Data=window.NEUBERGER_VI_2_DATA||[], drwData=window.DRW_DATA||[], squarepointData=window.SQUAREPOINT_DATA||[], point72Data=window.POINT72_DATA||[], point72Interview1Data=window.POINT72_INTERVIEW_1_DATA||[], point72Interview2Data=window.POINT72_INTERVIEW_2_DATA||[], jefferiesData=window.JEFFERIES_DATA||[], flowTradersData=window.FLOW_TRADERS_DATA||[], invescoData=window.INVESCO_DATA||[], invescoInterview2Data=window.INVESCO_INTERVIEW_2_DATA||[], veritionData=window.VERITION_DATA||[], orieData=window.ORIE5600_DATA||[], data=[...interviewData,...optiverData,...optiverVi1Data,...brevanHowardData,...goldmanSachsData,...bofaData,...susquehannaVi1Data,...neubergerData,...neubergerVi1Data,...neubergerVi2Data,...drwData,...squarepointData,...point72Data,...point72Interview1Data,...point72Interview2Data,...jefferiesData,...flowTradersData,...invescoData,...invescoInterview2Data,...veritionData,...orieData,...window.INTERVIEW_DATA], byId=new Map(data.map(q=>[q.id,q])), groups=new Map();
for(const q of data){if(!groups.has(q.category))groups.set(q.category,[]);groups.get(q.category).push(q);}
const emptyPersonalCategories=['SUSQUEHANNA VIDEO INTERVIEW 1','OPTIVER VIDEO INTERVIEW 1','NEUBERGER VIDEO INTERVIEW 1','NEUBERGER VIDEO INTERVIEW 2','INVESCO INTERVIEW 2'];
for(const c of emptyPersonalCategories)if(!groups.has(c))groups.set(c,[]);
const priority=['SUSQUEHANNA','SUSQUEHANNA VIDEO INTERVIEW 1','OPTIVER','OPTIVER VIDEO INTERVIEW 1','BREVAN HOWARD','GOLDMAN SACHS','BOFA','NEUBERGER','NEUBERGER VIDEO INTERVIEW 1','NEUBERGER VIDEO INTERVIEW 2','DRW','SQUAREPOINT','POINT72','POINT72 INTERVIEW 1','POINT72 INTERVIEW 2','JEFFERIES','FLOW TRADERS','INVESCO','INVESCO INTERVIEW 2','VERITION','5600 Quant Questions','Behavioral','Technical','Mental Math','Quant/Brainteaser','Finance','Machine Learning','Probability','Data Science','Statistics','Coding','Markets','Ask Interviewer'];
const categories=[...groups.keys()].sort((a,b)=>(priority.includes(a)?priority.indexOf(a):100)-(priority.includes(b)?priority.indexOf(b):100)||a.localeCompare(b));
const index=new Map(data.map(q=>[q.id,[q.question,q.company,q.role,q.category].join(' ').toLocaleLowerCase()]));
const el=id=>document.getElementById(id);
function node(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;}
function restore(key,fallback=[]){try{return new Set(JSON.parse(localStorage.getItem(key)||JSON.stringify(fallback)).filter(id=>byId.has(id)));}catch{return new Set(fallback.filter(id=>byId.has(id)));}}
// One-time seed from the prior 8765 origin; a saved empty list still overrides it.
const saved=restore('interview-bookmarks-v1'),reviewed=restore('interview-reviewed-v1',location.port==='8775'?[373]:[]);
let remembered;try{remembered=Number(localStorage.getItem('interview-last-v1'));}catch{}
let selected=byId.get(Number(location.hash.slice(1)))||byId.get(remembered)||data.find(q=>q.category==='Behavioral')||data[0];
let category=selected.category,showAnswer=true,rows=[];
function persist(key,value){try{localStorage.setItem(key,JSON.stringify(value));}catch{el('reviewCount').textContent='Browser storage unavailable';}}
let readerFontSize=Math.min(24,Math.max(13,Number(localStorage.getItem('interview-font-size-v1'))||16));
function renderDisplaySettings(){
 const dark=document.documentElement.dataset.theme==='dark';
 el('themeToggle').setAttribute('aria-pressed',String(dark));el('themeIcon').textContent=dark?'☀':'☾';el('themeLabel').textContent=dark?'Light':'Dark';
 el('fontSize').textContent=readerFontSize+'px';el('fontDecrease').disabled=readerFontSize<=13;el('fontIncrease').disabled=readerFontSize>=24;
 document.documentElement.style.setProperty('--reader-font-size',readerFontSize+'px');
}
el('themeToggle').onclick=()=>{const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=theme;try{localStorage.setItem('interview-theme-v1',theme);}catch{}renderDisplaySettings();};
el('fontDecrease').onclick=()=>{readerFontSize=Math.max(13,readerFontSize-1);try{localStorage.setItem('interview-font-size-v1',String(readerFontSize));}catch{}renderDisplaySettings();};
el('fontIncrease').onclick=()=>{readerFontSize=Math.min(24,readerFontSize+1);try{localStorage.setItem('interview-font-size-v1',String(readerFontSize));}catch{}renderDisplaySettings();};
renderDisplaySettings();
function renderDiagram(target,type){
 const svgNS='http://www.w3.org/2000/svg';const svg=document.createElementNS(svgNS,'svg');svg.classList.add('problem-diagram');svg.setAttribute('role','img');
 if(type==='skyline'){svg.setAttribute('viewBox','0 0 400 330');svg.setAttribute('aria-label','Four by four building grid with shaded cells and three sight-line clues');svg.innerHTML='<text x=340 y=35 class=diagram-label>3 ↓</text><text x=350 y=140 class=diagram-label>← 3</text><text x=5 y=215 class=diagram-label>3 →</text><g transform="translate(70 50)"><rect width=240 height=240 class=grid-box/><path d="M60 0V240M120 0V240M180 0V240M0 60H240M0 120H240M0 180H240" class=grid-line/><rect x=60 y=60 width=60 height=60 class=shade/><rect x=180 y=120 width=60 height=60 class=shade/><text x=20 y=40>A</text><text x=140 y=40>B</text><text x=140 y=220>C</text></g>'; }
 else if(type==='mobile'){svg.setAttribute('viewBox','0 0 520 300');svg.setAttribute('aria-label','Balanced hanging mobile diagram');svg.innerHTML='<text x=235 y=22 class=diagram-label>128 lb</text><g class=mobile-line><path d="M260 30V55M120 55H400M120 55V90M400 55V90M70 90H170M70 90V130M170 90V130M140 130H200M140 130V170M200 130V170M115 170H165M140 170V210M400 90V120M330 120H470M330 120V160M470 120V160M305 160H355M470 160V195M440 195H500M440 195V230M500 195V230"/></g><g class=mobile-shape><circle cx=70 cy=145 r=14 class=orange/><circle cx=70 cy=180 r=13 class=pink/><circle cx=140 cy=225 r=13 class=purple/><circle cx=165 cy=225 r=13 class=purple/><path d="M200 190l-15 28h30z" class=green/><circle cx=200 cy=178 r=14 class=gray/><circle cx=400 cy=102 r=14 class=gray/><circle cx=330 cy=146 r=14 class=gray/><path d="M315 198l-15 28h30zM345 198l-15 28h30z" class=green/><circle cx=440 cy=180 r=14 class=red/><path d="M440 244l12-9 12 9-5 15h-14zM500 244l12-9 12 9-5 15h-14z" class=yellow/></g></g>'; }
 target.insertAdjacentElement('afterend',svg);
}
function inlineText(target,text){
 let from=0;const regex=/`([^`\n]+)`|(https?:\/\/[^\s<>]+)/g;let match;
 while((match=regex.exec(text))){target.append(document.createTextNode(text.slice(from,match.index)));
  if(match[1]!==undefined)target.append(node('code','',match[1]));
  else{const url=match[2].replace(/[.,)]+$/,'');try{const a=node('a','',new URL(url).hostname.replace(/^www\./,''));a.href=url;a.target='_blank';a.rel='noopener noreferrer';target.append(a);}catch{target.append(document.createTextNode(url));}}
  from=match.index+match[0].length;
 }
 target.append(document.createTextNode(text.slice(from)));
}
function richText(target,text){
 if(window.MathJax?.typesetClear)window.MathJax.typesetClear([target]);
 target.replaceChildren();
 text.split(/```(?:[a-zA-Z0-9_+]+)?\n([\s\S]*?)```/g).forEach((part,i)=>{
  if(i%2){const pre=node('pre');pre.append(node('code','',part.trimEnd()));target.append(pre);return;}
  for(let block of part.split(/\n\s*\n/).filter(Boolean)){
   if(block.startsWith('### ')){const lineEnd=block.indexOf('\n'),h=node('h4');inlineText(h,lineEnd<0?block.slice(4):block.slice(4,lineEnd));target.append(h);if(lineEnd<0)continue;block=block.slice(lineEnd+1).trim();if(!block)continue;}
   const lines=block.split('\n').filter(line=>line.trim());
   if(lines.length&&lines.every(line=>/^\s*-\s+/.test(line))){const list=node('ul');for(const line of lines){const li=node('li');inlineText(li,line.replace(/^\s*-\s+/,''));list.append(li);}target.append(list);continue;}
   if(lines.length&&lines.every(line=>/^\s*\d+\.\s+/.test(line))){const list=node('ol');for(const line of lines){const li=node('li');inlineText(li,line.replace(/^\s*\d+\.\s+/,''));list.append(li);}target.append(list);continue;}
   const p=node('p');inlineText(p,block);target.append(p);
  }
 });
}
function matches(q){const terms=el('search').value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);return terms.every(t=>index.get(q.id).includes(t))&&(!el('savedOnly').checked||saved.has(q.id));}
function nav(){
 const scroll=el('categories').scrollTop;el('categoryCount').textContent=categories.length;
 const button=c=>{const b=node('button','category'+(emptyPersonalCategories.includes(c)?' sub-category':'')+(category===c?' active':''));b.setAttribute('aria-current',String(c===category));b.append(node('span','',c),node('span','count',groups.get(c).filter(matches).length));b.onclick=()=>{category=c;el('allSearch').checked=false;showAnswer=true;refreshList(true);nav();};return b;};
 const personal=categories.filter(c=>emptyPersonalCategories.includes(c)||groups.get(c).some(q=>q.privateInterview));
 const library=categories.filter(c=>!personal.includes(c));
 el('categories').replaceChildren(node('div','nav-section','MY INTERVIEW'),...personal.map(button),node('div','nav-section','QUESTION LIBRARY'),...library.map(button));el('categories').scrollTop=scroll;
}
function refreshList(chooseFirst=false){
 rows=(el('allSearch').checked?data:groups.get(category)).filter(matches);
 el('categoryTitle').textContent=el('allSearch').checked?'All categories':category;el('categorySummary').textContent=rows.length.toLocaleString()+' questions · '+data.length.toLocaleString()+' in your library';
 if(chooseFirst||!rows.some(q=>q.id===selected.id)){if(rows.length)selected=rows[0];}
 const oldScroll=el('questions').scrollTop;
 el('questions').replaceChildren(...rows.map((q,i)=>{const b=node('button','question-item'+(q.id===selected.id?' active':''));b.dataset.id=q.id;b.setAttribute('aria-current',String(q.id===selected.id));const body=node('span');body.append(node('span','q-title',q.question),node('span','q-sub',(saved.has(q.id)?'★ · ':'')+(reviewed.has(q.id)?'Reviewed · ':'')+(el('allSearch').checked?q.category+' · ':'')+(q.company||q.sources[0].sheet)));b.append(node('span','q-number',String(i+1).padStart(2,'0')),body);b.onclick=()=>select(q,true);return b;}));
 if(!rows.length)el('questions').append(node('p','empty','No matching questions. Try another keyword or category.'));
 el('questions').scrollTop=chooseFirst?0:oldScroll;renderReader();
}
function select(q,focus=false){if(!q)return;selected=q;showAnswer=true;refreshList();}
function renderReader(){
 const pos=rows.findIndex(q=>q.id===selected.id),has=pos>=0;el('reader').querySelector('article').hidden=!has;el('position').textContent=has?'Question '+(pos+1)+' of '+rows.length:'No matching questions';el('previous').disabled=pos<=0;el('next').disabled=!has||pos===rows.length-1;el('reviewed').disabled=!has;if(!has)return;
 history.replaceState(null,'','#'+selected.id);persist('interview-last-v1',selected.id);el('questionCategory').textContent=selected.category;el('sourceYear').textContent=selected.sources[0].sheet;if(window.MathJax?.typesetClear)window.MathJax.typesetClear([el('questionTitle'),el('questionBody')]);el('questionTitle').textContent=selected.questionBody?(selected.displayTitle||selected.question):(selected.questionMath||selected.question);el('questionBody').hidden=!selected.questionBody;if(selected.questionBody)richText(el('questionBody'),selected.questionBody);else el('questionBody').replaceChildren();el('promptPane').querySelectorAll('.problem-diagram,.question-image').forEach(n=>n.remove());if(selected.diagram)renderDiagram(el('questionTitle'),selected.diagram);if(selected.questionImage){const img=node('img','question-image');img.src=selected.questionImage;img.alt=selected.imageAlt||'Original assessment screenshot';img.loading='lazy';(selected.questionBody?el('questionBody'):el('questionTitle')).insertAdjacentElement('afterend',img);}el('company').textContent=[selected.company,selected.role].filter(Boolean).join(' · ');el('answerKind').textContent=selected.kind;el('solutionHeading').textContent=selected.category==='Ask Interviewer'?'How to use this question':'Solution';richText(el('answer'),selected.solution);el('personalNote').hidden=!selected.note;el('personalNote').textContent=selected.note||'';el('original').hidden=!selected.originalAnswer||selected.solution===selected.originalAnswer;el('original').open=false;el('originalContent').textContent=selected.originalAnswer;
 el('provenance').textContent=(selected.orie5600?'Cornell ORIE 5600 · ':(selected.privateInterview?'My Interview · ':'Interview Questions Database 2026 · '))+selected.sources.map(s=>s.sheet+' · row '+s.row).join('; ')+(selected.originalCategory!==selected.category?' · Original category: '+selected.originalCategory:'');el('references').replaceChildren();const seen=new Set();
 for(const ref of selected.references||[]){try{const u=new URL(ref.url);if(!['http:','https:'].includes(u.protocol)||seen.has(u.href))continue;seen.add(u.href);const a=node('a','',(ref.title||'Reference')+' · '+u.hostname);a.href=u.href;a.target='_blank';a.rel='noopener noreferrer';el('references').append(a);}catch{}}
 el('bookmark').textContent=saved.has(selected.id)?'★ Bookmarked':'☆ Bookmark';el('bookmark').setAttribute('aria-pressed',String(saved.has(selected.id)));el('reviewed').textContent=reviewed.has(selected.id)?'Completed ✅':'Complete ✅';el('reviewed').setAttribute('aria-pressed',String(reviewed.has(selected.id)));el('reviewCount').textContent=reviewed.size.toLocaleString()+' completed';toggle();if(el('reader').dataset.questionId!==String(selected.id)){el('promptPane').scrollTop=0;el('solutionPane').scrollTop=0;el('reader').dataset.questionId=selected.id;}typesetReader();
}
function toggle(){el('solutionContent').hidden=!showAnswer;el('toggleAnswer').textContent=showAnswer?'Hide solution':'Show solution';el('toggleAnswer').setAttribute('aria-expanded',String(showAnswer));}
el('toggleAnswer').onclick=()=>{showAnswer=!showAnswer;toggle();};el('previous').onclick=()=>select(rows[rows.findIndex(q=>q.id===selected.id)-1]);el('next').onclick=()=>select(rows[rows.findIndex(q=>q.id===selected.id)+1]);
el('bookmark').onclick=()=>{saved.has(selected.id)?saved.delete(selected.id):saved.add(selected.id);persist('interview-bookmarks-v1',[...saved]);refreshList();nav();};el('reviewed').onclick=()=>{reviewed.has(selected.id)?reviewed.delete(selected.id):reviewed.add(selected.id);persist('interview-reviewed-v1',[...reviewed]);refreshList();};
let searchTimer;el('search').addEventListener('input',()=>{clearTimeout(searchTimer);searchTimer=setTimeout(()=>{showAnswer=true;refreshList(true);nav();},150);});for(const id of ['allSearch','savedOnly'])el(id).onchange=()=>{showAnswer=true;refreshList();nav();};
window.addEventListener('hashchange',()=>{const q=byId.get(Number(location.hash.slice(1)));if(q){selected=q;category=q.category;el('search').value='';el('savedOnly').checked=false;el('allSearch').checked=false;showAnswer=true;refreshList();nav();}});

let mathQueue=Promise.resolve();
function typesetReader(){
 if(!window.MathJax?.startup?.promise)return;
 const id=selected.id;
 mathQueue=mathQueue.catch(()=>{}).then(()=>MathJax.startup.promise).then(()=>{
  if(id!==selected.id)return;
  return MathJax.typesetPromise([el('questionTitle'),el('questionBody'),el('answer')]);
 }).catch(error=>{console.warn('Math rendering:',error.message);});
}
const panelState={categories:innerWidth<1100,questions:innerWidth<1100};
try{const previous=JSON.parse(localStorage.getItem('interview-panels-v1'));for(const key of Object.keys(panelState)){if(typeof previous?.[key]==='boolean')panelState[key]=previous[key];}}catch{}
function renderPanels(){
 for(const [key,id,panel,label] of [['categories','toggleCategories','categoryPanel','categories'],['questions','toggleQuestions','questionPanel','questions']]){
  el(panel).hidden=panelState[key];el(id).setAttribute('aria-expanded',String(!panelState[key]));el(id).textContent=(panelState[key]?'Show ':'Hide ')+label;
 }
}
for(const [key,id] of [['categories','toggleCategories'],['questions','toggleQuestions']])el(id).onclick=()=>{panelState[key]=!panelState[key];renderPanels();persist('interview-panels-v1',panelState);};
renderPanels();
window.addEventListener('load',typesetReader);

refreshList();nav();

// Keep the split independent of the current question and navigation panels.
const divider=el('studyDivider'),studyLayout=divider.parentElement;
let questionShare=25,dragPointer=null;
try{const stored=JSON.parse(localStorage.getItem('interview-split-v1'));if(typeof stored==='number'&&Number.isFinite(stored))questionShare=stored;}catch{}
function applySplit(value,save=false){
 questionShare=Math.min(75,Math.max(15,value));
 studyLayout.style.setProperty('--question-share',questionShare+'fr');
 studyLayout.style.setProperty('--solution-share',(100-questionShare)+'fr');
 divider.setAttribute('aria-valuenow',String(Math.round(questionShare)));
 divider.setAttribute('aria-valuetext',Math.round(questionShare)+'% question, '+Math.round(100-questionShare)+'% solution');
 if(save)persist('interview-split-v1',questionShare);
}
function stackedSplit(){return getComputedStyle(divider).cursor==='row-resize';}
new ResizeObserver(()=>divider.setAttribute('aria-orientation',stackedSplit()?'horizontal':'vertical')).observe(studyLayout);
divider.addEventListener('pointerdown',event=>{
 if(event.button!==0||dragPointer!==null)return;
 event.preventDefault();dragPointer=event.pointerId;divider.focus();divider.setPointerCapture(event.pointerId);document.body.classList.add('resizing-study');
});
divider.addEventListener('pointermove',event=>{
 if(event.pointerId!==dragPointer)return;
 const bounds=studyLayout.getBoundingClientRect(),stacked=stackedSplit();
 const length=(stacked?bounds.height:bounds.width)-10;
 if(length>0)applySplit(((stacked?event.clientY-bounds.top:event.clientX-bounds.left)-5)/length*100);
});
function finishSplit(event){if(event.pointerId!==dragPointer)return;dragPointer=null;document.body.classList.remove('resizing-study');applySplit(questionShare,true);}
divider.addEventListener('pointerup',finishSplit);divider.addEventListener('pointercancel',finishSplit);divider.addEventListener('lostpointercapture',finishSplit);
divider.addEventListener('dblclick',()=>applySplit(25,true));
divider.addEventListener('keydown',event=>{
 const step=event.shiftKey?5:1;
 const change={ArrowLeft:-step,ArrowUp:-step,ArrowRight:step,ArrowDown:step}[event.key];
 if(change!==undefined){event.preventDefault();applySplit(questionShare+change,true);}
 else if(event.key==='Home'||event.key==='End'){event.preventDefault();applySplit(event.key==='Home'?15:75,true);}
});
applySplit(questionShare);
