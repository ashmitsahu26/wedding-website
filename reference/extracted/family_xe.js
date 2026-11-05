function xe(){
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
 transform:translateY(-7px);
 
}

        
}

        @keyframes divaGlow {

          0%,100% {
 filter:drop-shadow(0 0 3px rgba(255,150,20,0.4));
 
}

          50%     {
 filter:drop-shadow(0 0 13px rgba(255,190,60,0.95));
 
}

        
}

        @keyframes fadeIn {

          from {
 opacity:0;
 
}
 to {
 opacity:1;
 
}

        
}

        @keyframes inkWrite {

          from {
 opacity:0;
 letter-spacing:0.35em;
 
}

          to   {
 opacity:1;
 letter-spacing:inherit;
 
}

        
}

      `
}
),(0,T.jsxs)(`div`,{
style:{
position:`relative`,width:`100%`,maxWidth:480
}
,children:[(0,T.jsx)(`img`,{
src:pe,alt:``,"aria-hidden":`true`,style:{
position:`absolute`,top:0,left:0,width:`100%`,height:r,objectFit:`fill`,zIndex:0,pointerEvents:`none`
}

}
),(0,T.jsx)(`div`,{
style:{
position:`absolute`,top:0,left:0,width:`100%`,height:r,background:`linear-gradient(180deg,rgba(255,245,220,0.06) 0%,rgba(255,235,195,0.04) 60%,rgba(245,215,150,0.08) 100%)`,zIndex:1,pointerEvents:`none`
}

}
),(0,T.jsx)(`div`,{
style:{
position:`absolute`,inset:0,height:r,zIndex:2,pointerEvents:`none`,overflow:`hidden`
}
,children:_e.map(e=>(0,T.jsx)(`div`,{
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
,children:me.map(e=>(0,T.jsx)(`div`,{
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
,children:k.map(e=>(0,T.jsx)(`div`,{
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
,children:he.map(e=>(0,T.jsx)(`div`,{
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
,children:ge.map(e=>(0,T.jsx)(`div`,{
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
position:`relative`,zIndex:4,paddingTop:`14%`,paddingBottom:`52%`,paddingLeft:`11%`,paddingRight:`11%`,opacity:+!!e,transition:`opacity 1s ease`,marginTop:`55px`
}
,children:[(0,T.jsx)(ye,{
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
),(0,T.jsx)(ye,{
delay:.12,children:(0,T.jsx)(be,{
margin:`0 5% 14px`,delay:`0s`
}
)
}
),(0,T.jsx)(ye,{
delay:.18,children:(0,T.jsx)(`div`,{
style:{
textAlign:`center`,marginBottom:8
}
,children:(0,T.jsx)(`div`,{
style:{
fontFamily:`'Cinzel Decorative', serif`,fontSize:`clamp(20px,6vw,28px)`,fontWeight:900,color:`#1E0E00`,lineHeight:1.2,letterSpacing:`0.04em`,animation:`goldPulse 5s ease-in-out infinite`
}
,children:`✦ A Note From Us ✦`
}
)
}
)
}
),(0,T.jsx)(ye,{
delay:.22,children:(0,T.jsx)(be,{
margin:`12px 8% 18px`,delay:`0.4s`
}
)
}
),(0,T.jsx)(ye,{
delay:.32,children:(0,T.jsx)(`div`,{
style:{
textAlign:`center`,marginBottom:22
}
,children:(0,T.jsxs)(`div`,{
style:{
fontFamily:`'Great Vibes', cursive`,fontSize:`clamp(24px,7vw,34px)`,color:`#1E0E00`,fontWeight:400,lineHeight:1.35,textShadow:`0 2px 12px rgba(184,134,11,0.2)`
}
,children:[`With hearts full of love`,(0,T.jsx)(`br`,{

}
),`and boundless joy`]
}
)
}
)
}
),(0,T.jsx)(ye,{
delay:.38,children:(0,T.jsx)(be,{
margin:`0 12% 20px`,delay:`0.8s`
}
)
}
),(0,T.jsx)(ye,{
delay:.44,children:(0,T.jsx)(`div`,{
style:{
textAlign:`center`,marginBottom:20
}
,children:(0,T.jsxs)(`div`,{
style:{
fontFamily:`'Cormorant Garamond', serif`,fontStyle:`italic`,fontSize:`clamp(13px,3.7vw,16px)`,color:`#3A1E00`,fontWeight:700,lineHeight:1.85,letterSpacing:`0.01em`
}
,children:[`We warmly invite you to grace our`,(0,T.jsx)(`br`,{

}
),`wedding ceremony with your presence.`]
}
)
}
)
}
),(0,T.jsx)(ye,{
delay:.5,children:(0,T.jsx)(`div`,{
style:{
textAlign:`center`,marginBottom:22
}
,children:(0,T.jsxs)(`div`,{
style:{
fontFamily:`'Cormorant Garamond', serif`,fontStyle:`italic`,fontSize:`clamp(12px,3.4vw,15px)`,color:`#5C3A10`,fontWeight:700,lineHeight:1.9,letterSpacing:`0.01em`
}
,children:[`Your presence will grace our union with`,(0,T.jsx)(`br`,{

}
),`warmth, laughter, and memories that`,(0,T.jsx)(`br`,{

}
),`shall endure a lifetime.`]
}
)
}
)
}
),(0,T.jsx)(ye,{
delay:.54,children:(0,T.jsx)(be,{
margin:`0 15% 20px`,delay:`1.2s`
}
)
}
),(0,T.jsx)(ye,{
delay:.58,children:(0,T.jsx)(`div`,{
style:{
textAlign:`center`,marginBottom:6
}
,children:(0,T.jsx)(`div`,{
style:{
fontFamily:`'Cinzel', serif`,fontSize:`clamp(8px,2.2vw,10px)`,fontWeight:700,letterSpacing:`0.38em`,color:`#7B4A0A`,textTransform:`uppercase`,marginBottom:12
}
,children:`With Love`
}
)
}
)
}
),(0,T.jsx)(ye,{
delay:.63,children:(0,T.jsxs)(`div`,{
style:{
textAlign:`center`,marginBottom:14
}
,children:[(0,T.jsx)(`div`,{
style:{
fontFamily:`'Great Vibes', cursive`,fontSize:`clamp(38px,11vw,54px)`,color:`#1E0E00`,fontWeight:400,lineHeight:1,textShadow:`0 2px 16px rgba(184,134,11,0.28)`,animation:`goldPulse 4.5s 0.6s ease-in-out infinite`
}
,children:`Pragnya`
}
),(0,T.jsx)(`div`,{
style:{
fontFamily:`'Cinzel', serif`,fontSize:`clamp(10px,2.8vw,13px)`,color:`#B8860B`,fontWeight:700,letterSpacing:`0.38em`,margin:`2px 0`,animation:`goldPulse 3.5s ease-in-out infinite`
}
,children:`&`
}
),(0,T.jsx)(`div`,{
style:{
fontFamily:`'Great Vibes', cursive`,fontSize:`clamp(38px,11vw,54px)`,color:`#1E0E00`,fontWeight:400,lineHeight:1,textShadow:`0 2px 16px rgba(184,134,11,0.28)`,animation:`goldPulse 4.5s 1s ease-in-out infinite`
}
,children:`Krutibas`
}
)]
}
)
}
),(0,T.jsxs)(ye,{
delay:.68,children:[(0,T.jsx)(be,{
margin:`6px 10% 12px`,delay:`1.6s`
}
),(0,T.jsx)(`div`,{
style:{
textAlign:`center`,marginTop:6,animation:`floatBob 4s ease-in-out infinite`
}
,children:(0,T.jsx)(`span`,{
style:{
fontFamily:`'Cinzel', serif`,color:`#C9A96E`,fontSize:`clamp(11px,3vw,14px)`,letterSpacing:`0.3em`,fontWeight:700
}
,children:`✦ · ✦ · ✦`
}
)
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
var Se=`/assets/venue-Bno2UHTn.jpg`,A=(e,t)=>Math.random()*(t-e)+e,Ce=Array.from({
length:20
}
,(e,t)=>({
id:t,left:A(0,100),size:A(9,16),dur:A(9,17),delay:A(0,18),drift:A(-90,90),rotate:A(0,360),emoji:[`🌸`,`🌺`,`🌷`,`✿`,`❀`][Math.floor(A(0,5))]
}
)),we=Array.from({
length:22
}
,(e,t)=>({
id:t,left:A(3,97),top:A(3,70),dur:A(2.5,5),delay:A(0,8),size:A(7,14),char:[`✦`,`✧`,`⋆`,`✶`,`·`][Math.floor(A(0,5))]
}
)),Te=Array.from({
length:7
}
,(e,t)=>({
id:t,left:A(6,92),dur:A(12,20),delay:A(0,16),drift:A(-45,45),scale:A(.5,.95)
}
)),Ee=Array.from({
length:5
}
,(e,t)=>({
id:t,left:A(5,88),dur:A(14,22),delay:A(0,18),drift:A(-70,70)
}
)),De=Array.from({
length:14
}
,(e,t)=>({
id:t,left:A(4,96),top:A(2,60),dur:A(3,6),delay:A(0,9)
}
));
function Oe(){
let e=(0,b.useRef)(null),[t,n]=(0,b.useState)(!1);
return(0,b.useEffect)(()=>{
let t=new IntersectionObserver(([e])=>{
e.isIntersecting&&(n(!0),t.disconnect())
}
,{
threshold:.1
}
);
return e.current&&t.observe(e.current),()=>t.disconnect()
}
,[]),[e,t]
}
function ke({
children:e,delay:t=0
}
){
let[n,r]=Oe();
return(0,T.jsx)(`div`,{
ref:n,style:{
opacity:+!!r,transform:r?`translateY(0)`:`translateY(22px)`,transition:`opacity 0.9s ease ${
t
}
s, transform 0.9s ease ${
t
}
s`
}
,children:e
}
)
}
function Ae({
margin:e=`0 10% 18px`,delay:t=`0s`
}
){
return(0,T.jsx)(`div`,{
style:{
margin:e,height:1,background:`linear-gradient(90deg,transparent,#C9A96E 25%,#FFD700 50%,#C9A96E 75%,transparent)`,backgroundSize:`200% auto`,animation:`shimmerBar 3.5s ${
t
}
 linear infinite`
}

}
)
}
