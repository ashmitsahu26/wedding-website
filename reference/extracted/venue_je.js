function je(){
let[e,t]=(0,b.useState)(!1),n=(0,b.useRef)(null),[r,i]=(0,b.useState)(`100%`);
return(0,b.useEffect)(()=>{
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
,[e]),(0,T.jsxs)(`div`,{
style:{
minHeight:`100vh`,background:`radial-gradient(ellipse at center, #2e1205 0%, #1a0c02 100%)`,display:`flex`,justifyContent:`center`,fontFamily:`'Cormorant Garamond', serif`,overflow:`hidden`
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
 transform:translateY(-50px) translateX(0) rotate(var(--rot));
 opacity:0;
 
}

          8%   {
 opacity:0.9;
 
}

          92%  {
 opacity:0.8;
 
}

          100% {
 transform:translateY(108vh) translateX(var(--pd)) rotate(calc(var(--rot)+480deg));
 opacity:0;
 
}

        
}

        @keyframes lanternRise {

          0%   {
 transform:translateY(108vh) translateX(0) scale(var(--ls));
 opacity:0;
 
}

          7%   {
 opacity:0.95;
 
}

          93%  {
 opacity:0.7;
 
}

          100% {
 transform:translateY(-100px) translateX(var(--ld)) scale(var(--ls));
 opacity:0;
 
}

        
}

        @keyframes butterflyDrift {

          0%   {
 transform:translateY(105vh) translateX(0) rotate(-5deg);
 opacity:0;
 
}

          6%   {
 opacity:0.85;
 
}

          50%  {
 transform:translateY(25vh) translateX(var(--bd)) rotate(5deg);
 opacity:0.8;
 
}

          94%  {
 opacity:0.5;
 
}

          100% {
 transform:translateY(-60px) translateX(calc(var(--bd)*1.5)) rotate(-4deg);
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
 opacity:0.1;
 
}
 50% {
 opacity:0.85;
 
}

        
}

        @keyframes shimmerBar {

          0%   {
 background-position:-200% center;
 
}

          100% {
 background-position:200% center;
 
}

        
}

        @keyframes goldPulse {

          0%,100% {
 text-shadow:0 0 5px rgba(201,169,110,0.2);
 
}

          50%     {
 text-shadow:0 0 22px rgba(201,169,110,0.95), 0 0 44px rgba(184,134,11,0.45);
 
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
 filter:drop-shadow(0 0 3px rgba(255,150,20,0.4));
 
}

          50%     {
 filter:drop-shadow(0 0 14px rgba(255,190,60,0.95));
 
}

        
}

        @keyframes mapReveal {

          from {
 opacity:0;
 transform:scale(0.97);
 
}

          to   {
 opacity:1;
 transform:scale(1);
 
}

        
}

        @keyframes borderPulse {

          0%,100% {
 box-shadow: 0 0 0 0 rgba(201,169,110,0.3), inset 0 0 0 0 rgba(201,169,110,0.1);
 
}

          50%     {
 box-shadow: 0 0 18px 4px rgba(201,169,110,0.45), inset 0 0 8px 0 rgba(201,169,110,0.12);
 
}

        
}

        @keyframes btnShimmer {

          0%   {
 background-position:-200% center;
 
}

          100% {
 background-position:200% center;
 
}

        
}

      `
}
),(0,T.jsxs)(`div`,{
style:{
position:`relative`,width:`100%`,maxWidth:480
}
,children:[(0,T.jsx)(`img`,{
src:Se,alt:``,"aria-hidden":`true`,style:{
position:`absolute`,top:0,left:0,width:`100%`,height:r,objectFit:`fill`,zIndex:0,pointerEvents:`none`
}

}
),(0,T.jsx)(`div`,{
style:{
position:`absolute`,top:0,left:0,width:`100%`,height:r,background:`linear-gradient(180deg,rgba(255,245,215,0.06) 0%,rgba(255,235,185,0.04) 60%,rgba(245,215,150,0.09) 100%)`,zIndex:1,pointerEvents:`none`
}

}
),(0,T.jsx)(`div`,{
style:{
position:`absolute`,inset:0,height:r,zIndex:2,pointerEvents:`none`,overflow:`hidden`
}
,children:De.map(e=>(0,T.jsx)(`div`,{
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
,children:we.map(e=>(0,T.jsx)(`div`,{
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
,children:Ce.map(e=>(0,T.jsx)(`div`,{
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
,children:Te.map(e=>(0,T.jsx)(`div`,{
style:{
position:`absolute`,left:`${
e.left
}
%`,bottom:`-60px`,fontSize:24,"--ld":`${
e.drift
}
px`,"--ls":e.scale,filter:`drop-shadow(0 0 8px rgba(255,165,35,0.85))`,animation:`lanternRise ${
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
,children:Ee.map(e=>(0,T.jsx)(`div`,{
style:{
position:`absolute`,left:`${
e.left
}
%`,bottom:0,fontSize:15,"--bd":`${
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
position:`relative`,zIndex:4,paddingTop:`14%`,paddingBottom:`14%`,paddingLeft:`9%`,paddingRight:`9%`,opacity:+!!e,transition:`opacity 1s ease`
}
,children:[(0,T.jsx)(ke,{
delay:.08,children:(0,T.jsx)(`div`,{
style:{
textAlign:`center`,marginBottom:10,animation:`floatBob 4s ease-in-out infinite`
}
,children:(0,T.jsx)(`span`,{
style:{
color:`#C9A96E`,fontSize:`clamp(13px,3.5vw,16px)`,letterSpacing:8
}
,children:`❧ ✦ ❧`
}
)
}
)
}
),(0,T.jsx)(ke,{
delay:.12,children:(0,T.jsx)(Ae,{
margin:`0 5% 14px`,delay:`0s`
}
)
}
),(0,T.jsx)(ke,{
delay:.2,children:(0,T.jsx)(`div`,{
style:{
textAlign:`center`,marginBottom:5
}
,children:(0,T.jsx)(`div`,{
style:{
fontFamily:`'Cinzel Decorative', serif`,fontSize:`clamp(26px,7.5vw,36px)`,fontWeight:900,color:`#1E0E00`,letterSpacing:`0.04em`,lineHeight:1.15,animation:`goldPulse 5s ease-in-out infinite`
}
,children:`✦ The Venue ✦`
}
)
}
)
}
),`s`,(0,T.jsx)(ke,{
delay:.24,children:(0,T.jsx)(Ae,{
margin:`10px 8% 18px`,delay:`0.5s`
}
)
}
),(0,T.jsx)(ke,{
delay:.28,children:(0,T.jsx)(`div`,{
style:{
textAlign:`center`,marginBottom:6
}
,children:(0,T.jsx)(`div`,{
style:{
fontFamily:`'Cormorant Garamond', serif`,fontStyle:`italic`,fontSize:`clamp(13px,3.6vw,16px)`,color:`#5C3A10`,fontWeight:700,letterSpacing:`0.06em`
}
,children:`Join us at`
}
)
}
)
}
),(0,T.jsx)(ke,{
delay:.33,children:(0,T.jsx)(`div`,{
style:{
textAlign:`center`,marginBottom:8
}
,children:(0,T.jsx)(`div`,{
style:{
fontFamily:`'Great Vibes', cursive`,fontSize:`clamp(36px,10.5vw,52px)`,color:`#1E0E00`,fontWeight:400,lineHeight:1.08,textShadow:`0 2px 16px rgba(184,134,11,0.28)`,animation:`goldPulse 4.5s 0.5s ease-in-out infinite`
}
,children:`The Bharat Palace`
}
)
}
)
}
),(0,T.jsx)(ke,{
delay:.4,children:(0,T.jsx)(Ae,{
margin:`0 12% 18px`,delay:`0.8s`
}
)
}
),(0,T.jsx)(ke,{
delay:.44,children:(0,T.jsxs)(`div`,{
style:{
textAlign:`center`,marginBottom:20
}
,children:[(0,T.jsx)(`div`,{
style:{
fontFamily:`'Cinzel', serif`,fontSize:`clamp(15px,2.1vw,10px)`,fontWeight:700,letterSpacing:`0.32em`,color:`#7B4A0A`,textTransform:`uppercase`,marginBottom:6
}
,children:`Address`
}
),(0,T.jsxs)(`div`,{
style:{
fontFamily:`'Cormorant Garamond', serif`,fontStyle:`italic`,fontSize:`clamp(20px,3.6vw,16px)`,color:`#3A1E00`,fontWeight:700,lineHeight:1.75,letterSpacing:`0.02em`
}
,children:[`Hill Town, Bhawanipatna,`,(0,T.jsx)(`br`,{

}
),`Odisha – 766001`]
}
)]
}
)
}
),(0,T.jsx)(ke,{
delay:.48,children:(0,T.jsx)(Ae,{
margin:`0 15% 20px`,delay:`1.2s`
}
)
}
),(0,T.jsx)(ke,{
delay:.52,children:(0,T.jsxs)(`div`,{
style:{
marginBottom:16
}
,children:[(0,T.jsx)(`div`,{
style:{
textAlign:`center`,marginBottom:10,fontFamily:`'Cinzel', serif`,fontSize:`clamp(8px,2.1vw,10px)`,fontWeight:700,letterSpacing:`0.32em`,color:`#7B4A0A`,textTransform:`uppercase`
}
,children:`📍 Location`
}
),(0,T.jsxs)(`div`,{
style:{
borderRadius:14,overflow:`hidden`,border:`1.5px solid rgba(201,169,110,0.55)`,animation:`borderPulse 4s ease-in-out infinite`,position:`relative`
}
,children:[[{
top:0,left:0,borderTop:`3px solid #B8860B`,borderLeft:`3px solid #B8860B`,borderRadius:`14px 0 0 0`
}
,{
top:0,right:0,borderTop:`3px solid #B8860B`,borderRight:`3px solid #B8860B`,borderRadius:`0 14px 0 0`
}
,{
bottom:0,left:0,borderBottom:`3px solid #B8860B`,borderLeft:`3px solid #B8860B`,borderRadius:`0 0 0 14px`
}
,{
bottom:0,right:0,borderBottom:`3px solid #B8860B`,borderRight:`3px solid #B8860B`,borderRadius:`0 0 14px 0`
}
].map((e,t)=>(0,T.jsx)(`div`,{
style:{
position:`absolute`,width:18,height:18,zIndex:2,...e
}

}
,t)),(0,T.jsx)(`iframe`,{
src:`https://maps.google.com/maps?q=The+Bharat+Palace+Hill+Town+Bhawanipatna+Odisha&t=k&z=16&ie=UTF8&iwloc=&output=embed`,width:`100%`,height:`220`,style:{
border:`none`,display:`block`,animation:`mapReveal 1s 0.8s ease both`,opacity:1
}
,allowFullScreen:``,loading:`lazy`,referrerPolicy:`no-referrer-when-downgrade`,title:`The Bharat Palace Location`
}
)]
}
)]
}
)
}
),(0,T.jsx)(ke,{
delay:.6,children:(0,T.jsx)