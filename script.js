const colorCards=document.querySelectorAll('.premium-color-card');
const previewBox=document.getElementById('liveColorPreview');
const colorName=document.getElementById('colorName');
const colorDescription=document.getElementById('colorDescription');

colorCards.forEach(card=>{

card.addEventListener('click',()=>{

const color=card.getAttribute('data-color');
const title=card.querySelector('h3').innerText;
const finish=card.querySelector('p').innerText;
const material=card.querySelector('.material').innerText;
const tag=card.querySelector('.tag').innerText;

previewBox.style.background=color;

colorName.innerText=title;
colorDescription.innerText=
`${finish} • ${material} • ${tag}`;

colorCards.forEach(item=>{
item.style.border=
'1px solid rgba(255,255,255,0.08)';
item.style.transform='scale(1)';
});

card.style.border=`2px solid ${color}`;
card.style.transform=
'translateY(-10px) scale(1.02)';

});

});


const faqQuestions=
document.querySelectorAll('.faq-question');

faqQuestions.forEach(question=>{

question.addEventListener('click',()=>{

const answer=
question.nextElementSibling;

if(answer.style.display==='block'){
answer.style.display='none';
}
else{
answer.style.display='block';
}

});

});


document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener('click',function(e){

e.preventDefault();

const targetId=
this.getAttribute('href');

const targetSection=
document.querySelector(targetId);

if(targetSection){
window.scrollTo({
top:targetSection.offsetTop-40,
behavior:'smooth'
});
}

});

});


document.querySelectorAll('.share-btn').forEach(btn=>{

btn.addEventListener('click',function(e){

e.stopPropagation();

const colorName=
this.dataset.colorName;

const colorSlug=
colorName
.toLowerCase()
.replace(/\s+/g,'-');

const shareLink=
window.location.origin+
window.location.pathname+
"#"+
colorSlug;

const text=
`I like the ${colorName} color from Printly — check it out: ${shareLink}`;

const whatsappURL=
`https://wa.me/?text=${encodeURIComponent(text)}`;

window.open(
whatsappURL,
'_blank'
);

});

});

window.addEventListener('load', ()=>{

const hash=window.location.hash;

if(!hash) return;

const targetCard=document.querySelector(hash);

if(!targetCard) return;


/* auto scroll */
setTimeout(()=>{
targetCard.scrollIntoView({
behavior:'smooth',
block:'center'
});
},500);


/* trigger existing click logic */
setTimeout(()=>{
targetCard.click();
},900);


/* premium highlight */
targetCard.classList.add('shared-highlight');


/* optional badge */
const badge=document.createElement('div');
badge.className='shared-badge';
badge.innerText='Selected';

targetCard.appendChild(badge);


/* remove after few sec */
setTimeout(()=>{
targetCard.classList.remove('shared-highlight');

if(badge){
badge.remove();
}

},8000);

});