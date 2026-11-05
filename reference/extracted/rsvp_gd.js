function gd(){
let[e,t]=(0,b.useState)({
name:sd(),attending:`yes`
}
),[n,r]=(0,b.useState)(!1),[i,a]=(0,b.useState)(!1),o=async t=>{
t.preventDefault(),a(!0);
try{
await fetch(`https://script.google.com/macros/s/AKfycbxcD3VqOcXZIvrxXw-2hFrDL_bqj0p2Cw4YPzn7qURkeYYFN-_NUrf1q-U4BppOrxDA/exec`,{
method:`POST`,body:JSON.stringify(e)
}
)
}
catch{

}
a(!1),r(!0)
}
;
return(0,T.jsxs)(T.Fragment,{
children:[(0,T.jsx)(ld,{

}
),(0,T.jsxs)(`section`,{
className:`rsvp-section`,style:{
backgroundImage:`url(${
cd
}
)`
}
,children:[(0,T.jsx)(`div`,{
"aria-hidden":`true`,style:{
position:`absolute`,inset:0,background:`linear-gradient(to bottom, rgba(253,248,238,0.45) 0%, rgba(253,248,238,0.28) 55%, transparent 78%)`,pointerEvents:`none`,zIndex:1
}

}
),(0,T.jsx)(ud,{
className:`rsvp-corner-left`,style:{
top:`1.2rem`,left:`1.2rem`
}

}
),(0,T.jsx)(ud,{
className:`rsvp-corner-right`,style:{
top:`1.2rem`,right:`1.2rem`,transform:`scaleX(-1)`
}

}
),(0,T.jsxs)(`div`,{
className:`rsvp-content`,children:[(0,T.jsxs)(`div`,{
style:{
textAlign:`center`,marginBottom:`1.2rem`
}
,children:[(0,T.jsx)(od.span,{
...hd(0),style:{
display:`block`,fontFamily:`'Great Vibes', cursive`,fontSize:`clamp(1rem, 4vw, 1.5rem)`,color:`#7a4f10`,letterSpacing:`0.06em`,marginBottom:`0.2rem`
}
,children:`You are cordially invited`
}
),(0,T.jsx)(od.h2,{
...hd(.12),style:{
fontFamily:`'Cormorant Garamond', serif`,fontSize:`clamp(1.6rem, 6vw, 3.2rem)`,fontWeight:400,color:`#3d2208`,letterSpacing:`0.14em`,margin:0,textShadow:`0 1px 8px rgba(255,248,230,0.9)`
}
,children:`R·S·V·P`
}
),(0,T.jsx)(od.div,{
...hd(.22),children:(0,T.jsx)(dd,{

}
)
}
),(0,T.jsx)(od.p,{
...hd(.38),style:{
fontFamily:`'Montserrat', sans-serif`,fontWeight:300,fontSize:`clamp(0.58rem, 1.8vw, 0.68rem)`,letterSpacing:`0.18em`,color:`rgba(80,45,10,0.65)`,textTransform:`uppercase`,margin:0
}
,children:`Please confirm your availability`
}
)]
}
),(0,T.jsx)(gl,{
mode:`wait`,children:n?(0,T.jsxs)(od.div,{
className:`rsvp-thanks`,initial:{
opacity:0,scale:.96
}
,animate:{
opacity:1,scale:1
}
,transition:{
duration:.9,ease:[.22,1,.36,1]
}
,children:[(0,T.jsx)(`div`,{
style:{
fontSize:`1.3rem`,color:`#8b6914`,marginBottom:`1rem`
}
,children:`✦`
}
),(0,T.jsxs)(`p`,{
style:{
fontFamily:`'Great Vibes', cursive`,fontSize:`clamp(1.5rem, 5vw, 2.4rem)`,color:`#5a3209`,marginBottom:`0.8rem`
}
,children:[`Thank you, `,e.name]
}
),(0,T.jsx)(dd,{
compact:!0
}
),(0,T.jsx)(`p`,{
style:{
fontFamily:`'Cormorant Garamond', serif`,fontSize:`clamp(0.9rem, 2.5vw, 1.05rem)`,fontWeight:400,fontStyle:`italic`,color:`rgba(61,42,8,0.7)`,lineHeight:1.9,marginTop:`0.8rem`
}
,children:e.attending===`yes`?`We are delighted to have you with us.
Your presence shall make our celebration complete.`:`We understand, and shall miss your presence dearly.
You will be in our hearts on this special day.`
}
),(0,T.jsx)(`div`,{
style:{
marginTop:`1.5rem`
}
,children:(0,T.jsx)(dd,{

}
)
}
),(0,T.jsx)(`p`,{
style:{
fontFamily:`'Cormorant Garamond', serif`,fontStyle:`italic`,fontWeight:300,fontSize:`clamp(0.85rem, 2.5vw, 1rem)`,color:`rgba(61,42,8,0.45)`,letterSpacing:`0.06em`
}
,children:`— Pragnya & Krutibas`
}
)]
}
,`thanks`):(0,T.jsx)(od.div,{
className:`rsvp-card`,initial:{
opacity:0,y:24
}
,animate:{
opacity:1,y:0
}
,exit:{
opacity:0,y:-16
}
,transition:{
duration:.75,delay:.42,ease:[.22,1,.36,1]
}
,children:(0,T.jsxs)(`form`,{
onSubmit:o,children:[(0,T.jsx)(md,{
label:`Your Name`,children:(0,T.jsx)(`input`,{
value:e.name,readOnly:!0,style:{
...fd,color:`rgba(61,42,8,0.55)`,cursor:`default`,background:`rgba(255,252,245,0.4)`
}

}
)
}
),(0,T.jsx)(md,{
label:`Will you be attending?`,children:(0,T.jsx)(`div`,{
className:`attending-grid`,children:[`yes`,`no`].map(n=>{
let r=e.attending===n;
return(0,T.jsx)(`button`,{
type:`button`,onClick:()=>t(e=>({
...e,attending:n
}
)),style:{
padding:`0.75rem 0.5rem`,fontFamily:`'Montserrat', sans-serif`,fontWeight:400,fontSize:`clamp(0.58rem, 1.8vw, 0.65rem)`,letterSpacing:`0.12em`,textTransform:`uppercase`,border:r?`0.7px solid rgba(139,105,20,0.85)`:`0.7px solid rgba(139,105,20,0.25)`,background:r?`rgba(139,105,20,0.12)`:`rgba(255,252,245,0.45)`,color:r?`#5a3209`:`rgba(80,50,10,0.45)`,borderRadius:3,cursor:`pointer`,transition:`all 0.3s ease`,backdropFilter:`blur(4px)`,touchAction:`manipulation`,minHeight:`2.75rem`,lineHeight:1.4
}
,children:n===`yes`?`✦ Delighted to Attend`:`✦ Sending our Blessings`
}
,n)
}
)
}
)
}
),(0,T.jsx)(dd,{
compact:!0
}
),(0,T.jsx)(`button`,{
type:`submit`,disabled:i,className:`rsvp-submit`,style:{
color:i?`rgba(90,55,10,0.4)`:`#3d2208`,background:i?`rgba(139,105,20,0.06)`:`rgba(139,105,20,0.13)`,cursor:i?`not-allowed`:`pointer`
}
,onMouseEnter:e=>{
i||(e.target.style.background=`rgba(139,105,20,0.22)`,e.target.style.letterSpacing=`0.28em`)
}
,onMouseLeave:e=>{
e.target.style.background=`rgba(139,105,20,0.13)`,e.target.style.letterSpacing=`0.22em`
}
,children:i?`Sending…`:`✦ Confirm Availability`
}
)]
}
)
}
,`form`)
}
),(0,T.jsxs)(od.div,{
...hd(.6),style:{
textAlign:`center`,marginTop:`1.8rem`
}
,children:[(0,T.jsx)(dd,{

}
),(0,T.jsx)(`p`,{
style:{
fontFamily:`'Cormorant Garamond', serif`,fontStyle:`italic`,fontWeight:300,fontSize:`clamp(0.82rem, 2vw, 0.98rem)`,color:`rgba(61,42,8,0.55)`,letterSpacing:`0.08em`,margin:`0 0 0.2rem`
}
,children:`With Best Compliments from:`
}
),(0,T.jsxs)(`p`,{
className:`rsvp-footer-name`,children:[(0,T.jsx)(`span`,{
style:{
fontSize:`clamp(1.6rem, 5vw, 2.2rem)`,fontWeight:`bold`
}
,children:`N`
}
),`ishank Family and Relatives`]
}
),(0,T.jsx)(`p`,{
style:{
fontFamily:`'Cormorant Garamond', serif`,fontSize:`clamp(1.1rem, 4vw, 1.5rem)`,color:`#8a6d3b`,marginTop:`0.15rem`,letterSpacing:`0.1em`
}
,children:`Sastri Nagar, Purna Pada`
}
),(0,T.jsx)(`p`,{
style:{
fontFamily:`'Times New Roman', serif`,fontSize:`clamp(0.85rem, 2.8vw, 1.1rem)`,color:`#8a6d3b`,marginTop:`0.15rem`,letterSpacing:`0.1em`
}
,children:`7978385839, 9437145754`
}
)]
}
)]
}
)]
}
)]
}
)
}
var _d=`/assets/reception3-C6_E2ro3.jpg`,Z=(e,t)=>Math.random()*(t-e)+e,vd=Array.from({
length:32
}
,(e,t)=>({
id:t,left:Z(0,100),size:Z(9,17),dur:Z(8,16),delay:Z(0,16),drift:Z(-110,110),rotate:Z(0,360),emoji:[`🌸`,`🌺`,`🌹`,`🌷`,`✿`,`❀`][Math.floor(Z(0,6))]
}
)),yd=Array.from({
length:10
}
,(e,t)=>({
id:t,left:Z(5,92),dur:Z(11,20),delay:Z(0,18),drift:Z(-55,55),scale:Z(.55,1.05)
}
)),Q=Array.from({
length:7
}
,(e,t)=>({
id:t,left:Z(5,88),dur:Z(14,22),delay:Z(0,18),drift:Z(-90,90)
}
)),bd=Array.from({
length:26
}
,(e,t)=>({
id:t,left:Z(2,98),top:Z(2,72),dur:Z(2,4.5),delay:Z(0,7),size:Z(8,15),char:[`✦`,`✧`,`⋆`,`✶`,`·`][Math.floor(Z(0,5))]
}
)),xd=Array.from({
length:12
}
,(e,t)=>({
id:t,left:Z(3,97),top:Z(1,50),dur:Z(3,6),delay:Z(0,8)
}
));
function Sd(e=.13){
let t=(0,b.useRef)(null),[n,r]=(0,b.useState)(!1);
return(0,b.useEffect)(()=>{
let n=new IntersectionObserver(([e])=>{
e.isIntersecting&&(r(!0),n.disconnect())
}
,{
threshold:e
}
);
return t.current&&n.observe(t.current),()=>n.disconnect()
}
,[]),[t,n]
}
function Cd({
children:e,delay:t=0
}
){
let[n,r]=Sd();
return(0,T.jsx)(`div`,{
ref:n,style:{
opacity:+!!r,transform:r?`translateY(0)`:`translateY(24px)`,transition:`opacity 0.85s ease ${
t
}
s, transform 0.85s ease ${
t
}
s`
}
,children:e
}
)
}
function wd(){
let[e,t]=(0,b.useState)(!1),n=(0,b.useRef)(null),[r,i]=(0,b.useState)(`100%`);
(0,b.useEffect)(()=>{
let e=setTimeout(()=>t(!0),80);
return()=>clearTimeout(e)
}
,[]),(0,b.useEffect)(()=>{
function e(){
n.current&&i(n.current.offsetHeight+`px`)
}
e(),window.addEventListener(`resize`,e);
let t=new ResizeObserver(e);
return n.current&&t.observe(n.current),()=>{
window.removeEventListener(`resize`,e),t.disconnect()
}

}
,[e]);
let a={
cinzelDeco:`'Cinzel Decorative', serif`,cinzel:`'Cinzel', serif`,vibes:`'Great Vibes', cursive`,cormB:`'Cormorant Garamond', serif`,gold:`#B8860B`,deepGold:`#C9A96E`,dark:`#1E0E00`,text:`#3A1E00`,muted:`#5C3A10`,soft:`#7B4A0A`
}
;
return(0,T.jsxs)(`div`,{
style:{
minHeight:`100vh`,background:`radial-gradient(ellipse at center, #2e1205 0%, #1a0c02 100%)`,display:`flex`,justifyContent:`center`,fontFamily:a.cormB,overflow:`hidden`
}
,children:[(0,T.jsx)(`style`,{
children:`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700;
900&family=Cinzel:wght@600;
700;
900&family=Great+Vibes&family=Cormorant+Garamond:ital,wght@0,600;
0,700;
1,600;
1,700&display=swap');


        @keyframes petalFall {

          0%   {
 transform: translateY(-50px) translateX(0) rotate(var(--rot));
 opacity:0;
 
}

          8%   {
 opacity:0.95;
 
}

          92%  {
 opacity:0.8;
 
}

          100% {
 transform: translateY(110vh) translateX(var(--pd)) rotate(calc(var(--rot) + 500deg));
 opacity:0;
 
}

        
}

        @keyframes lanternRise {

          0%   {
 transform: translateY(110vh) translateX(0) scale(var(--ls));
 opacity:0;
 
}

          7%   {
 opacity:1;
 
}

          93%  {
 opacity:0.75;
 
}

          100% {
 transform: translateY(-120px) translateX(var(--ld)) scale(var(--ls));
 opacity:0;
 
}

        
}

        @keyframes butterflyDrift {

          0%   {
 transform: translateY(105vh) translateX(0) rotate(-6deg);
 opacity:0;
 
}

          6%   {
 opacity:0.9;
 
}

          50%  {
 transform: translateY(30vh) translateX(var(--bd)) rotate(6deg);
 opacity:0.85;
 
}

          94%  {
 opacity:0.6;
 
}

          100% {
 transform: translateY(-60px) translateX(calc(var(--bd)*1.6)) rotate(-4deg);
 opacity:0;
 
}

        
}

        @keyframes sparkleTwinkle {

          0%,100% {
 opacity:0;
 transform:scale(0.15) rotate(0deg);
 
}

          50%     {
 opacity:1;
 transform:scale(1) rotate(180deg);
 
}

        
}

        @keyframes starBlink {

          0%,100% {
 opacity:0.15;
 
}
 50% {
 opacity:0.9;
 
}

        
}

        @keyframes fadeUp {

          from {
 opacity:0;
 transform:translateY(26px);
 
}

          to   {
 opacity:1;
 transform:translateY(0);
 
}

        
}

        @keyframes goldPulse {

          0%,100% {
 opacity:0.85;
 text-shadow: 0 0 6px rgba(201,169,110,0.25);
 
}

          50%     {
 opacity:1;
    text-shadow: 0 0 24px rgba(201,169,110,0.95), 0 0 48px rgba(184,134,11,0.5);
 
}

        
}

        @keyframes floatBob {

          0%,100% {
 transform:translateY(0);
 
}

          50%     {
 transform:translateY(-8px);
 
}

        
}

        @keyframes divaGlow {

          0%,100% {
 filter:drop-shadow(0 0 3px rgba(255,150,20,0.5));
 
}

          50%     {
 filter:drop-shadow(0 0 14px rgba(255,185,60,1));
 
}

        
}

        @keyframes divaFlicker {

          0%,100% {
 opacity:1;
 
}
 28%{
 opacity:0.4;
 
}
 55%{
 opacity:0.95;
 
}

        
}

        @keyframes shimmerBar {

          0%   {
 background-position: -200% center;
 
}

          100% {
 background-position: 200% center;
 
}

        
}

        @keyframes rotateSlow {

          from {
 transform: rotate(0deg);
 
}

          to   {
 transform: rotate(360deg);
 
}

        
}

      `
}
),(0,T.jsxs)(`div`,{
style:{
position:`relative`,width:`100%`,maxWidth:480
}
,children:[(0,T.jsx)(`img`,{
src:_d,alt:``,"aria-hidden":`true`,style:{
position:`absolute`,top:0,left:0,width:`100%`,height:r,objectFit:`fill`,zIndex:0,pointerEvents:`none`
}

}
),(0,T.jsx)(`div`,{
style:{
position:`absolute`,top:0,left:0,width:`100%`,height:r,background:`linear-gradient(180deg, rgba(255,240,210,0.08) 0%, rgba(255,235,195,0.06) 60%, rgba(250,220,160,0.10) 100%)`,zIndex:1,pointerEvents:`none`
}

}
),(0,T.jsx)(`div`,{
style:{
position:`absolute`,inset:0,height:r,zIndex:2,pointerEvents:`none`,overflow:`hidden`
}
,children:xd.map(e=>(0,T.jsx)(`div`,{
style:{
position:`absolute`,left:`${
e.left
}
%`,top:`${
e.top
}
%`,width:3,height:3,borderRadius:`50%`,background:`#C9A96E`,animation:`starBlink ${
e.dur
}
s ${
e.delay
}
s ease-in-out infinite`
}

}
,e.id))
}
),(0,T.jsx)(`div`,{
style:{
position:`absolute`,inset:0,height:r,zIndex:2,pointerEvents:`none`,overflow:`hidden`
}
,children:bd.map(e=>(0,T.jsx)(`div`,{
style:{
position:`absolute`,left:`${
e.left
}
%`,top:`${
e.top
}
%`,fontSize:e.size,color:`#C9A96E`,lineHeight:1,animation:`sparkleTwinkle ${
e.dur
}
s ${
e.delay
}
s ease-in-out infinite`
}
,children:e.char
}
,e.id))
}
),(0,T.jsx)(`div`,{
style:{
position:`absolute`,inset:0,height:r,zIndex:3,pointerEvents:`none`,overflow:`hidden`
}
,children:vd.map(e=>(0,T.jsx)(`div`,{
style:{
position:`absolute`,left:`${
e.left
}
%`,top:`-40px`,fontSize:e.size,"--pd":`${
e.drift
}
px`,"--rot":`${
e.rotate
}
deg`,animation:`petalFall ${
e.dur
}
s ${
e.delay
}
s ease-in-out infinite`
}
,children:e.emoji
}
,e.id))
}
),(0,T.jsx)(`div`,{
style:{
position:`absolute`,inset:0,height:r,zIndex:3,pointerEvents:`none`,overflow:`hidden`
}
,children:yd.map(e=>(0,T.jsx)(`div`,{
style:{
position:`absolute`,left:`${
e.left
}
%`,bottom:`-60px`,fontSize:26,"--ld":`${
e.drift
}
px`,"--ls":e.scale,filter:`drop-shadow(0 0 8px rgba(255,170,40,0.85))`,animation:`lanternRise ${
e.dur
}
s ${
e.delay
}
s ease-in-out infinite`
}
,children:`🏮`
}
,e.id))
}
),(0,T.jsx)(`div`,{
style:{
position:`absolute`,inset:0,height:r,zIndex:3,pointerEvents:`none`,overflow:`hidden`
}
,children:Q.map(e=>(0,T.jsx)(`div`,{
style:{
position:`absolute`,left:`${
e.left
}
%`,bottom:0,fontSize:16,"--bd":`${
e.drift
}
px`,animation:`butterflyDrift ${
e.dur
}
s ${
e.delay
}
s ease-in-out infinite`
}
,children:`🦋`
}
,e.id))
}
),(0,T.jsxs)(`div`,{
ref:n,style:{
position:`relative`,zIndex:4,paddingTop:`12%`,paddingBottom:`17%`,paddingLeft:`8%`,paddingRight:`8%`,opacity:+!!e,transition:`opacity 1s ease`
}
,children:[(0,T.jsx)(Cd,{
delay:.1,children:(0,T.jsx)(`div`,{
style:{
textAlign:`center`,marginBottom:4
}
,children:(0,T.jsx)(`span`,{
style:{
fontFamily:a.cinzel,fontSize:`clamp(9px,2.6vw,12px)`,fontWeight:700,letterSpacing:`0.24em`,color:a.soft,animation:`goldPulse 4s ease-in-out infinite`
}
,children:`ॐ शुभ विवाह · Shubh Vivah`
}
)
}
)
}
),(0,T.jsx)(Cd,{
delay:.15,children:(0,T.jsx)(`div`,{
style:{
textAlign:`center`,marginBottom:12,animation:`floatBob 3.5s ease-in-out infinite`
}
,children:(0,T.jsx)(`span`,{
style:{
color:a.deepGold,fontSize:`clamp(14px,3.8vw,18px)`,letterSpacing:10
}
,children:`❧ ✦ ❧`
}
)
}
)
}
),(0,T.jsx)(Cd,{
delay:.18,children:(0,T.jsx)(`div`,{
style:{
margin:`0 0 10px`,height:1,background:`linear-gradient(90deg,transparent 0%,#C9A96E 30%,#FFD700 50%,#C9A96E 70%,transparent 100%)`,backgroundSize:`200% auto`,animation:`shimmerBar 3s linear infinite`
}

}
)
}
),(0,T.jsx)(Cd,{
delay:.22,children:(0,T.jsx)(`div`,{
style:{
textAlign:`center`,marginBottom:6
}
,children:(0,T.jsx)(`div`,{
style:{
fontFamily:a.cinzelDeco,fontSize:`clamp(22px,6.8vw,33px)`,fontWeight:900,color:a.dark,lineHeight:1.18,letterSpacing:`0.04em`,animation:`goldPulse 5s 0.6s ease-in-out infinite`
}
,children:`Reception Night`
}
)
}
)
}
),(0,T.jsx)(Cd,{
delay:.28,children:(0,T.jsx)(`div`,{
style:{
textAlign:`center`,marginBottom:14
}
,children:(0,T.jsxs)(`div`,{
style:{
fontFamily:a.cormB,fontStyle:`italic`,fontSize:`clamp(12px,3.3vw,15px)`,color:a.muted,fontWeight:700,lineHeight:1.65
}
,children:[`An enchanted evening to celebrate`,(0,T.jsx)(`br`,{

}
),`a lifetime of togetherness`]
}
)
}
)
}
),(0,T.jsx)(Cd,{
delay:.3,children:(0,T.jsx)(`div`,{
style:{
margin:`0 5% 16px`,height:1,background:`linear-gradient(90deg,transparent 0%,#C9A96E 25%,#FFD700 50%,#C9A96E 75%,transparent 100%)`,backgroundSize:`200% auto`,animation:`shimmerBar 3.5s 0.5s linear infinite`
}

}
)
}
),(0,T.jsx)(Cd,{
delay:.34,children:(0,T.jsxs)(`div`,{
style:{
textAlign:`center`,marginBottom:14
}
,children:[(0,T.jsx)(`div`,{
style:{
fontFamily:a.cinzel,fontSize:`clamp(8px,2.1vw,10px)`,fontWeight:700,letterSpacing:`0.35em`,color:a.soft,textTransform:`uppercase`,marginBottom:5
}
,children:`Date & Time`
}
),(0,T.jsx)(`div`,{
style:{
fontFamily:`'Times New Roman ', serif`,fontSize:`clamp(18px,5.3vw,26px)`,fontWeight:700,color:a.dark,letterSpacing:`0.04em`,marginBottom:2,animation:`goldPulse 4.5s 1s ease-in-out infinite`
}
,children:`1st July 2026`
}
),(0,T.jsx)(`div`,{
style:{
fontFamily:a.cinzel,fontSize:`clamp(9px,2.4vw,11px)`,fontWeight:700,letterSpacing:`0.22em`,color:a.muted,marginBottom:4
}
,children:`Wednesday Evening`
}
),(0,T.jsx)(`div`,{
style:{
fontFamily:a.cormB,fontStyle:`italic`,fontSize:`clamp(21px,6vw,29px)`,fontWeight:700,color:a.gold,animation:`goldPulse 3.8s 0.8s ease-in-out infinite`
}
,children:`7:30 PM Onwards`
}
)]
}
)
}
),(0,T.jsx)(Cd,{
delay:.4,children:(0,T.jsx)(`div`,{
style:{
margin:`0 8% 16px`,height:1,background:`linear-gradient(90deg,transparent,#C9A96E 30%,#FFD700 50%,#C9A96E 70%,transparent)`,backgroundSize:`200% auto`,animation:`shimmerBar 4s 1s linear infinite`
}

}
)
}
),(0,T.jsx)(Cd,{
delay:.44,children:(0,T.jsxs)(`div`,{
style:{
textAlign:`center`,marginBottom:14
}
,children:[(0,T.jsx)(`div`,{
style:{
fontFamily:a.cinzel,fontSize:`clamp(8px,2.1vw,10px)`,fontWeight:700,letterSpacing:`0.35em`,color:a.soft,textTransform:`uppercase`,marginBottom:5
}
,children:`Venue`
}
),(0,T.jsx)(`div`,{
style:{
fontFamily:a.cinzelDeco,fontSize:`clamp(16px,4.8vw,22px)`,fontWeight:700,color:a.dark,lineHeight:1.28,letterSpacing:`0.03em`,marginBottom:2,animation:`goldPulse 4s 1.6s ease-in-out infinite`
}
,children:`The Bharat Palace`
}
),(0,T.jsx)(`div`,{
style:{
fontFamily:a.cormB,fontStyle:`italic`,fontSize:`clamp(13px,3.6vw,16px)`,fontWeight:700,color:a.muted
}
,children:`Hill Town, Bhawanipatna`
}
)]
}
)
}
),(0,T.jsx)(Cd,{
delay:.46,children:(0,T.jsx)(`div`,{
style:{
margin:`0 12% 16px`,height:1,background:`linear-gradient(90deg,transparent,#C9A96E 30%,#FFD700 50%,#C9A96E 70%,transparent)`,backgroundSize:`200% auto`,animation:`shimmerBar 3s 0.7s linear infinite`
}

}
)
}
),(0,T.jsx)(Cd,{
delay:.5,children:(0,T.jsx)(`div`,{
style:{
textAlign:`center`,marginBottom:14
}
,children:(0,T.jsx)(`div`,{
style:{
fontFamily:a.vibes,fontSize:`clamp(15px,7.6vw,30px)`,color:a.dark,fontWeight:400,lineHeight:1.3,textShadow:`0 2px 12px rgba(184,134,11,0.22)`
}
,children:`Your presence is our blessing`
}
)
}
)
}
),(0,T.jsx)(Cd,{
delay:.55,children:(0,T.jsxs)(`div`,{
style:{
textAlign:`center`,marginBottom:14
}
,children:[(0,T.jsx)(`div`,{
style:{
fontFamily:a.cinzelDeco,fontSize:`clamp(13px,3.8vw,17px)`,fontWeight:700,color:a.gold,letterSpacing:`0.1em`,marginBottom:3,animation:`goldPulse 4s 0.3s ease-in-out infinite`
}
,children:`सप्तपदी`
}
),(0,T.jsx)(`div`,{
style:{
fontFamily:a.cinzel,fontSize:`clamp(8px,2.1vw,10px)`,fontWeight:700,letterSpacing:`0.28em`,color:a.soft,textTransform:`uppercase`,marginBottom:4
}
,children:`The Seven Sacred Vows`
}
),(0,T.jsx)(`div`,{
style:{
fontFamily:a.cormB,fontStyle:`italic`,fontSize:`clamp(13px,3.5vw,15px)`,fontWeight:700,color:a.text
}
,children:`Binding two souls, forever as one`
}
)]
}
)
}
),(0,T.jsx)(Cd,{
delay:.58,children:(0,T.jsx)(`div`,{
style:{
margin:`0 15% 16px`,height:1,background:`linear-gradient(90deg,transparent,#C9A96E 30%,#FFD700 50%,#C9A96E 70%,transparent)`,backgroundSize:`200% auto`,animation:`shimmerBar 4.5s 0.2s linear infinite`
}

}
)
}
),(0,T.jsx)(Cd,{
delay:.62,children:(0,T.jsx)(`div`,{
style:{
textAlign:`center`,marginBottom:12
}
,children:(0,T.jsx)(`div`,{
style:{
fontFamily:a.cinzel,fontSize:`clamp(12px,3.5vw,16px)`,fontWeight:900,color:a.dark,letterSpacing:`0.05em`,animation:`goldPulse 3.5s 1.2s ease-in-out infinite`
}
,children:`#PragnyaWedsKrutibas`
}
)
}
)
}
),(0,T.jsx)(Cd,{
delay:.66,children:(0,T.jsx)(`div`,{
style:{
textAlign:`center`,marginTop:6,animation:`floatBob 4s ease-in-out infinite`
}
,children:(0,T.jsx)(`span`,{
style:{
fontFamily:a.cinzel,fontSize:`clamp(11px,3vw,14px)`,color:a.deepGold,letterSpacing:`0.32em`,fontWeight:700
}
,children:`✦ · ✦ · ✦`
}
)
}
)
}
)]
}
)]
}
)]
}
)
}
