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