fe=()=>{
let[e,t]=(0,b.useState)(null),n=(0,b.useRef)(null),[r,i]=(0,b.useState)(!1);
return(0,b.useEffect)(()=>{
let e=setTimeout(()=>i(!0),150);
return()=>clearTimeout(e)
}
,[]),(0,b.useEffect)(()=>{
let e=()=>{
n.current&&t(n.current.offsetHeight)
}
;
return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)
}
,[]),(0,T.jsxs)(T.Fragment,{
children:[(0,T.jsx)(`style`,{
children:`
        @import url('${
ae
}
');

        *, *::before, *::after {
 box-sizing: border-box;
 margin: 0;
 padding: 0;
 
}

        body {
 background: #1a0c02;
 
}

        .ev-root {
 -webkit-font-smoothing: antialiased;
 
}

      `
}
),(0,T.jsx)(`div`,{
className:`ev-root`,style:{
minHeight:`100vh`,width:`100%`,display:`flex`,justifyContent:`center`,alignItems:`flex-start`,background:`radial-gradient(ellipse at center,#2e1205 0%,#1a0c02 100%)`
}
,children:(0,T.jsxs)(`div`,{
style:{
position:`relative`,width:`100%`,maxWidth:480,minHeight:e||`auto`
}
,children:[(0,T.jsx)(`img`,{
src:ie,alt:``,style:{
position:`absolute`,inset:0,width:`100%`,height:e||`100%`,objectFit:`fill`,display:`block`,zIndex:0
}

}
),(0,T.jsx)(`div`,{
style:{
position:`absolute`,inset:0,background:`radial-gradient(ellipse 80% 65% at 50% 40%,rgba(255,255,255,0.22) 0%,transparent 70%)`,zIndex:1,pointerEvents:`none`
}

}
),(0,T.jsxs)(`div`,{
ref:n,style:{
position:`relative`,zIndex:2,width:`100%`,paddingTop:`12%`,paddingBottom:`17%`,paddingLeft:`7%`,paddingRight:`7%`,display:`flex`,flexDirection:`column`,alignItems:`center`
}
,children:[(0,T.jsxs)(`div`,{
style:{
width:`100%`,textAlign:`center`,marginBottom:22,opacity:+!!r,transform:r?`translateY(0)`:`translateY(20px)`,transition:`opacity 1s ease, transform 1s ease`
}
,children:[(0,T.jsx)(`p`,{
style:{
fontFamily:`'Cinzel',serif`,fontSize:`clamp(8px,2.2vw,10px)`,letterSpacing:`0.35em`,color:se.brown,textTransform:`uppercase`,marginBottom:9,opacity:.85
}
,children:`✦ \xA0Pragnya & Krutibas\xA0 ✦`
}
),(0,T.jsx)(de,{

}
),(0,T.jsx)(`div`,{
style:{
height:3
}

}
),(0,T.jsx)(de,{
op:.25
}
),(0,T.jsx)(`div`,{
style:{
height:14
}

}
),(0,T.jsx)(`h1`,{
style:{
fontFamily:`'Cinzel Decorative',serif`,fontSize:`clamp(19px,5.5vw,27px)`,fontWeight:700,color:se.dark,letterSpacing:`0.05em`,lineHeight:1.25,marginBottom:7
}
,children:`The Celebrations`
}
),(0,T.jsx)(`p`,{
style:{
fontFamily:`'Great Vibes',cursive`,fontSize:`clamp(22px,6vw,30px)`,color:se.brown,lineHeight:1.1,marginBottom:8
}
,children:`Join Our Special Moments`
}
),(0,T.jsx)(`p`,{
style:{
fontFamily:`'Cormorant Garamond',serif`,fontStyle:`italic`,fontWeight:600,fontSize:`clamp(12px,3vw,14px)`,color:se.muted,letterSpacing:`0.1em`,marginBottom:18
}
,children:`with joy & celebration`
}
),(0,T.jsx)(de,{
op:.4
}
)]
}
),(0,T.jsx)(`div`,{
style:{
width:`100%`,display:`flex`,flexDirection:`column`,gap:14,marginBottom:26
}
,children:ce.map((e,t)=>(0,T.jsx)(ue,{
event:e,index:t
}
,e.num))
}
),(0,T.jsxs)(`div`,{
style:{
width:`100%`,textAlign:`center`
}
,children:[(0,T.jsx)(de,{
op:.4
}
),(0,T.jsx)(`div`,{
style:{
height:4
}

}
),(0,T.jsx)(de,{
op:.18
}
),(0,T.jsx)(`div`,{
style:{
height:14
}

}
),(0,T.jsx)(`p`,{
style:{
fontFamily:`'Great Vibes',cursive`,fontSize:`clamp(20px,5.2vw,26px)`,color:se.brown,marginBottom:10
}
,children:`#PragnyaWedsKrutibas`
}
),(0,T.jsxs)(`div`,{
style:{
display:`flex`,gap:7,alignItems:`center`,justifyContent:`center`
}
,children:[(0,T.jsx)(`span`,{
style:{
color:se.gold,fontSize:9
}
,children:`✦`
}
),(0,T.jsx)(`span`,{
style:{
color:se.gold,fontSize:13
}
,children:`✦`
}
),(0,T.jsx)(`span`,{
style:{
color:se.gold,fontSize:9
}
,children:`✦`
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
)]
}
)
}
,pe=`/assets/note-8c8-Oiot.jpg`,O=(e,t)=>Math.random()*(t-e)+e,k=Array.from({
length:18
}
,(e,t)=>({
id:t,left:O(0,100),size:O(8,15),dur:O(9,17),delay:O(0,18),drift:O(-80,80),rotate:O(0,360),emoji:[`🌸`,`🌺`,`🌷`,`✿`,`❀`][Math.floor(O(0,5))]
}
)),me=Array.from({
length:20
}
,(e,t)=>({
id:t,left:O(3,97),top:O(3,68),dur:O(2.5,5),delay:O(0,8),size:O(7,14),char:[`✦`,`✧`,`⋆`,`✶`,`·`][Math.floor(O(0,5))]
}
)),he=Array.from({
length:6
}
,(e,t)=>({
id:t,left:O(8,90),dur:O(12,20),delay:O(0,16),drift:O(-45,45),scale:O(.5,.9)
}
)),ge=Array.from({
length:5
}
,(e,t)=>({
id:t,left:O(5,88),dur:O(14,22),delay:O(0,16),drift:O(-70,70)
}
)),_e=Array.from({
length:14
}
,(e,t)=>({
id:t,left:O(4,96),top:O(2,55),dur:O(3,6),delay:O(0,9)
}
));
function ve(){
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
function ye({
children:e,delay:t=0
}
){
let[n,r]=ve();
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
function be({
margin:e=`0 10% 18px`,delay:t=`0s`
}
){
return(0,T.jsx)(`div`,{
style:{
margin:e,height:1,background:`linear-gradient(90deg, transparent, #C9A96E 25%, #FFD700 50%, #C9A96E 75%, transparent)`,backgroundSize:`200% auto`,animation:`shimmerBar 3.5s ${
t
}
 linear infinite`
}

}
)
}
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
delay:.6,children:(0,T.jsx)(`div`,{
style:{
textAlign:`center`,marginBottom:18
}
,children:(0,T.jsx)(`a`,{
href:`https://maps.app.goo.gl/osGawco5avZ4jegP6`,target:`_blank`,rel:`noopener noreferrer`,style:{
display:`inline-block`,fontFamily:`'Cinzel', serif`,fontSize:`clamp(10px,2.8vw,13px)`,fontWeight:700,letterSpacing:`0.18em`,textDecoration:`none`,color:`#1E0E00`,padding:`11px 28px`,border:`1.5px solid rgba(184,134,11,0.7)`,borderRadius:8,background:`linear-gradient(90deg, rgba(255,249,230,0.88) 0%, rgba(255,240,195,0.92) 40%, rgba(255,249,230,0.88) 100%)`,backgroundSize:`200% auto`,animation:`btnShimmer 3s linear infinite`,boxShadow:`0 2px 12px rgba(184,134,11,0.18), inset 0 1px 0 rgba(255,255,255,0.5)`
}
,children:`\xA0 Open in Google Maps`
}
)
}
)
}
),(0,T.jsx)(ke,{
delay:.64,children:(0,T.jsx)(Ae,{
margin:`0 15% 14px`,delay:`1.6s`
}
)
}
),(0,T.jsx)(ke,{
delay:.68,children:(0,T.jsx)(`div`,{
style:{
textAlign:`center`,marginTop:4,animation:`floatBob 4s ease-in-out infinite`
}
,children:(0,T.jsx)(`span`,{
style:{
fontFamily:`'Cinzel', serif`,color:`#C9A96E`,fontSize:`clamp(11px,3vw,14px)`,letterSpacing:`0.3em`,fontWeight:700
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
var Me=(0,b.createContext)({

}
);
function Ne(e){
let t=(0,b.useRef)(null);
return t.current===null&&(t.current=e()),t.current
}
var Pe=typeof window<`u`?b.useLayoutEffect:b.useEffect,Fe=(0,b.createContext)(null);
function Ie(e,t){
e.indexOf(t)===-1&&e.push(t)
}
function Le(e,t){
let n=e.indexOf(t);
n>-1&&e.splice(n,1)
}
var Re=(e,t,n)=>n>t?t:n<e?e:n,ze={

}
,Be=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function Ve(e){
return typeof e==`object`&&!!e
}
var He=e=>/^0[^.\s]+$/u.test(e);
function Ue(e){
let t;
return()=>(t===void 0&&(t=e()),t)
}
var We=e=>e,Ge=(e,t)=>n=>t(e(n)),Ke=(...e)=>e.reduce(Ge),qe=(e,t,n)=>{
let r=t-e;
return r===0?1:(n-e)/r
}
,Je=class{
constructor(){
this.subscriptions=[]
}
add(e){
return Ie(this.subscriptions,e),()=>Le(this.subscriptions,e)
}
notify(e,t,n){
let r=this.subscriptions.length;
if(r)if(r===1)this.subscriptions[0](e,t,n);
else for(let i=0;
i<r;
i++){
let r=this.subscriptions[i];
r&&r(e,t,n)
}

}
getSize(){
return this.subscriptions.length
}
clear(){
this.subscriptions.length=0
}

}
,Ye=e=>e*1e3,Xe=e=>e/1e3;
function Ze(e,t){
return t?1e3/t*e:0
}
var Qe=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,$e=1e-7,et=12;
function tt(e,t,n,r,i){
let a,o,s=0;
do o=t+(n-t)/2,a=Qe(o,r,i)-e,a>0?n=o:t=o;
while(Math.abs(a)>$e&&++s<et);
return o
}
function nt(e,t,n,r){
if(e===t&&n===r)return We;
let i=t=>tt(t,0,1,e,n);
return e=>e===0||e===1?e:Qe(i(e),t,r)
}
var rt=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,it=e=>t=>1-e(1-t),at=nt(.33,1.53,.69,.99),ot=it(at),st=rt(ot),ct=e=>e>=1?1:(e*=2)<1?.5*ot(e):.5*(2-2**(-10*(e-1))),lt=e=>1-Math.sin(Math.acos(e)),ut=it(lt),dt=rt(lt),ft=nt(.42,0,1,1),pt=nt(0,0,.58,1),mt=nt(.42,0,.58,1),ht=e=>Array.isArray(e)&&typeof e[0]!=`number`,gt=e=>Array.isArray(e)&&typeof e[0]==`number`,_t={
linear:We,easeIn:ft,easeInOut:mt,easeOut:pt,circIn:lt,circInOut:dt,circOut:ut,backIn:ot,backInOut:st,backOut:at,anticipate:ct
}
,vt=e=>typeof e==`string`,yt=e=>{
if(gt(e)){
e.length;
let[t,n,r,i]=e;
return nt(t,n,r,i)
}
else if(vt(e))return _t[e],`${
e
}
`,_t[e];
return e
}
,bt=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`],xt={
value:null,addProjectionMetrics:null
}
;
function St(e,t){
let n=new Set,r=new Set,i=!1,a=!1,o=new WeakSet,s={
delta:0,timestamp:0,isProcessing:!1
}
,c=0;
function l(t){
o.has(t)&&(u.schedule(t),e()),c++,t(s)
}
let u={
schedule:(e,t=!1,a=!1)=>{
let s=a&&i?n:r;
return t&&o.add(e),s.add(e),e
}
,cancel:e=>{
r.delete(e),o.delete(e)
}
,process:e=>{
if(s=e,i){
a=!0;
return
}
i=!0;
let o=n;
n=r,r=o,n.forEach(l),t&&xt.value&&xt.value.frameloop[t].push(c),c=0,n.clear(),i=!1,a&&(a=!1,u.process(e))
}

}
;
return u
}
var Ct=40;
function wt(e,t){
let n=!1,r=!0,i={
delta:0,timestamp:0,isProcessing:!1
}
,a=()=>n=!0,o=bt.reduce((e,n)=>(e[n]=St(a,t?n:void 0),e),{

}
),{
setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m
}
=o,h=()=>{
let a=ze.useManualTiming,o=a?i.timestamp:performance.now();
n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,Ct),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))
}
,g=()=>{
n=!0,r=!0,i.isProcessing||e(h)
}
;
return{
schedule:bt.reduce((e,t)=>{
let r=o[t];
return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e
}
,{

}
),cancel:e=>{
for(let t=0;
t<bt.length;
t++)o[bt[t]].cancel(e)
}
,state:i,steps:o
}

}
var{
schedule:j,cancel:Tt,state:M,steps:Et
}
=wt(typeof requestAnimationFrame<`u`?requestAnimationFrame:We,!0),Dt;
function Ot(){
Dt=void 0
}
var kt={
now:()=>(Dt===void 0&&kt.set(M.isProcessing||ze.useManualTiming?M.timestamp:performance.now()),Dt),set:e=>{
Dt=e,queueMicrotask(Ot)
}

}
,At={
layout:0,mainThread:0,waapi:0
}
,jt=e=>t=>typeof t==`string`&&t.startsWith(e),Mt=jt(`--`),Nt=jt(`var(--`),Pt=e=>Nt(e)?Ft.test(e.split(`/*`)[0].trim()):!1,Ft=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function It(e){
return typeof e==`string`?e.split(`/*`)[0].includes(`var(--`):!1
}
var Lt={
test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e
}
,Rt={
...Lt,transform:e=>Re(0,1,e)
}
,zt={
...Lt,default:1
}
,Bt=e=>Math.round(e*1e5)/1e5,Vt=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Ht(e){
return e==null
}
var Ut=/^(?:#[\da-f]{
3,8
}
|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){
2
}
-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Wt=(e,t)=>n=>!!(typeof n==`string`&&Ut.test(n)&&n.startsWith(e)||t&&!Ht(n)&&Object.prototype.hasOwnProperty.call(n,t)),Gt=(e,t,n)=>r=>{
if(typeof r!=`string`)return r;
let[i,a,o,s]=r.match(Vt);
return{
[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)
}

}
,Kt=e=>Re(0,255,e),qt={
...Lt,transform:e=>Math.round(Kt(e))
}
,Jt={
test:Wt(`rgb`,`red`),parse:Gt(`red`,`green`,`blue`),transform:({
red:e,green:t,blue:n,alpha:r=1
}
)=>`rgba(`+qt.transform(e)+`, `+qt.transform(t)+`, `+qt.transform(n)+`, `+Bt(Rt.transform(r))+`)`
}
;
function Yt(e){
let t=``,n=``,r=``,i=``;
return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{
red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1
}

}
var Xt={
test:Wt(`#`),parse:Yt,transform:Jt.transform
}
,Zt=e=>({
test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${
t
}
${
e
}
`
}
),Qt=Zt(`deg`),$t=Zt(`%`),N=Zt(`px`),en=Zt(`vh`),tn=Zt(`vw`),nn={
...$t,parse:e=>$t.parse(e)/100,transform:e=>$t.transform(e*100)
}
,rn={
test:Wt(`hsl`,`hue`),parse:Gt(`hue`,`saturation`,`lightness`),transform:({
hue:e,saturation:t,lightness:n,alpha:r=1
}
)=>`hsla(`+Math.round(e)+`, `+$t.transform(Bt(t))+`, `+$t.transform(Bt(n))+`, `+Bt(Rt.transform(r))+`)`
}
,P={
test:e=>Jt.test(e)||Xt.test(e)||rn.test(e),parse:e=>Jt.test(e)?Jt.parse(e):rn.test(e)?rn.parse(e):Xt.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?Jt.transform(e):rn.transform(e),getAnimatableNone:e=>{
let t=P.parse(e);
return t.alpha=0,P.transform(t)
}

}
,an=/(?:#[\da-f]{
3,8
}
|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){
2
}
-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function on(e){
return isNaN(e)&&typeof e==`string`&&(e.match(Vt)?.length||0)+(e.match(an)?.length||0)>0
}
var sn=`number`,cn=`color`,ln=`var`,un=`var(`,dn="${

}
",fn=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{
3,8
}
|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){
2
}
-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function pn(e){
let t=e.toString(),n=[],r={
color:[],number:[],var:[]
}
,i=[],a=0;
return{
values:n,split:t.replace(fn,e=>(P.test(e)?(r.color.push(a),i.push(cn),n.push(P.parse(e))):e.startsWith(un)?(r.var.push(a),i.push(ln),n.push(e)):(r.number.push(a),i.push(sn),n.push(parseFloat(e))),++a,dn)).split(dn),indexes:r,types:i
}

}
function mn(e){
return pn(e).values
}
function hn({
split:e,types:t
}
){
let n=e.length;
return r=>{
let i=``;
for(let a=0;
a<n;
a++)if(i+=e[a],r[a]!==void 0){
let e=t[a];
e===sn?i+=Bt(r[a]):e===cn?i+=P.transform(r[a]):i+=r[a]
}
return i
}

}
function gn(e){
return hn(pn(e))
}
var _n=e=>typeof e==`number`?0:P.test(e)?P.getAnimatableNone(e):e,vn=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:_n(e);
function yn(e){
let t=pn(e);
return hn(t)(t.values.map((e,n)=>vn(e,t.split[n])))
}
var bn={
test:on,parse:mn,createTransformer:gn,getAnimatableNone:yn
}
;
function xn(e,t,n){
return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e
}
function Sn({
hue:e,saturation:t,lightness:n,alpha:r
}
){
e/=360,t/=100,n/=100;
let i=0,a=0,o=0;
if(!t)i=a=o=n;
else{
let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;
i=xn(s,r,e+1/3),a=xn(s,r,e),o=xn(s,r,e-1/3)
}
return{
red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r
}

}
function Cn(e,t){
return n=>n>0?t:e
}
var F=(e,t,n)=>e+(t-e)*n,wn=(e,t,n)=>{
let r=e*e,i=n*(t*t-r)+r;
return i<0?0:Math.sqrt(i)
}
,Tn=[Xt,Jt,rn],En=e=>Tn.find(t=>t.test(e));
function Dn(e){
let t=En(e);
if(`${
e
}
`,!t)return!1;
let n=t.parse(e);
return t===rn&&(n=Sn(n)),n
}
var On=(e,t)=>{
let n=Dn(e),r=Dn(t);
if(!n||!r)return Cn(e,t);
let i={
...n
}
;
return e=>(i.red=wn(n.red,r.red,e),i.green=wn(n.green,r.green,e),i.blue=wn(n.blue,r.blue,e),i.alpha=F(n.alpha,r.alpha,e),Jt.transform(i))
}
,kn=new Set([`none`,`hidden`]);
function An(e,t){
return kn.has(e)?n=>n<=0?e:t:n=>n>=1?t:e
}
function jn(e,t){
return n=>F(e,t,n)
}
function Mn(e){
return typeof e==`number`?jn:typeof e==`string`?Pt(e)?Cn:P.test(e)?On:In:Array.isArray(e)?Nn:typeof e==`object`?P.test(e)?On:Pn:Cn
}
function Nn(e,t){
let n=[...e],r=n.length,i=e.map((e,n)=>Mn(e)(e,t[n]));
return e=>{
for(let t=0;
t<r;
t++)n[t]=i[t](e);
return n
}

}
function Pn(e,t){
let n={
...e,...t
}
,r={

}
;
for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Mn(e[i])(e[i],t[i]));
return e=>{
for(let t in r)n[t]=r[t](e);
return n
}

}
function Fn(e,t){
let n=[],r={
color:0,var:0,number:0
}
;
for(let i=0;
i<t.values.length;
i++){
let a=t.types[i],o=e.indexes[a][r[a]];
n[i]=e.values[o]??0,r[a]++
}
return n
}
var In=(e,t)=>{
let n=bn.createTransformer(t),r=pn(e),i=pn(t);
return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?kn.has(e)&&!i.values.length||kn.has(t)&&!r.values.length?An(e,t):Ke(Nn(Fn(r,i),i.values),n):(`${
e
}
${
t
}
`,Cn(e,t))
}
;
function Ln(e,t,n){
return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?F(e,t,n):Mn(e)(e,t)
}
var Rn=e=>{
let t=({
timestamp:t
}
)=>e(t);
return{
start:(e=!0)=>j.update(t,e),stop:()=>Tt(t),now:()=>M.isProcessing?M.timestamp:kt.now()
}

}
,zn=(e,t,n=10)=>{
let r=``,i=Math.max(Math.round(t/n),2);
for(let t=0;
t<i;
t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;
return`linear(${
r.substring(0,r.length-2)
}
)`
}
,Bn=2e4;
function Vn(e){
let t=0,n=e.next(t);
for(;
!n.done&&t<2e4;
)t+=50,n=e.next(t);
return t>=2e4?1/0:t
}
function Hn(e,t=100,n){
let r=n({
...e,keyframes:[0,t]
}
),i=Math.min(Vn(r),Bn);
return{
type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:Xe(i)
}

}
var I={
stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{
granular:.01,default:2
}
,restDelta:{
granular:.005,default:.5
}
,minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1
}
;
function Un(e,t){
return e*Math.sqrt(1-t*t)
}
var Wn=12;
function Gn(e,t,n){
let r=n;
for(let n=1;
n<Wn;
n++)r-=e(r)/t(r);
return r
}
var Kn=.001;
function qn({
duration:e=I.duration,bounce:t=I.bounce,velocity:n=I.velocity,mass:r=I.mass
}
){
let i,a;
I.maxDuration;
let o=1-t;
o=Re(I.minDamping,I.maxDamping,o),e=Re(I.minDuration,I.maxDuration,Xe(e)),o<1?(i=t=>{
let r=t*o,i=r*e,a=r-n,s=Un(t,o),c=Math.exp(-i);
return Kn-a/s*c
}
,a=t=>{
let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=Un(t**2,o);
return(-i(t)+Kn>0?-1:1)*((a-s)*c)/l
}
):(i=t=>{
let r=Math.exp(-t*e),i=(t-n)*e+1;
return-Kn+r*i
}
,a=t=>Math.exp(-t*e)*((n-t)*(e*e)));
let s=5/e,c=Gn(i,a,s);
if(e=Ye(e),isNaN(c))return{
stiffness:I.stiffness,damping:I.damping,duration:e
}
;
{
let t=c**2*r;
return{
stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e
}

}

}
var Jn=[`duration`,`bounce`],Yn=[`stiffness`,`damping`,`mass`];
function Xn(e,t){
return t.some(t=>e[t]!==void 0)
}
function Zn(e){
let t={
velocity:I.velocity,stiffness:I.stiffness,damping:I.damping,mass:I.mass,isResolvedFromDuration:!1,...e
}
;
if(!Xn(e,Yn)&&Xn(e,Jn))if(t.velocity=0,e.visualDuration){
let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*Re(.05,1,1-(e.bounce||0))*Math.sqrt(i);
t={
...t,mass:I.mass,stiffness:i,damping:a
}

}
else{
let n=qn({
...e,velocity:0
}
);
t={
...t,...n,mass:I.mass
}
,t.isResolvedFromDuration=!0
}
return t
}
function Qn(e=I.visualDuration,t=I.bounce){
let n=typeof e==`object`?e:{
visualDuration:e,keyframes:[0,1],bounce:t
}
,{
restSpeed:r,restDelta:i
}
=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={
done:!1,value:a
}
,{
stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p
}
=Zn({
...n,velocity:-Xe(n.velocity||0)
}
),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=Xe(Math.sqrt(c/u)),v=Math.abs(g)<5;
r||=v?I.restSpeed.granular:I.restSpeed.default,i||=v?I.restDelta.granular:I.restDelta.default;
let y,b,x,S,C,w;
if(h<1)x=Un(_,h),S=(m+h*_*g)/x,y=e=>o-Math.exp(-h*_*e)*(S*Math.sin(x*e)+g*Math.cos(x*e)),C=h*_*S+g*x,w=h*_*g-S*x,b=e=>Math.exp(-h*_*e)*(C*Math.sin(x*e)+w*Math.cos(x*e));
else if(h===1){
y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);
let e=m+_*g;
b=t=>Math.exp(-_*t)*(_*e*t-m)
}
else{
let e=_*Math.sqrt(h*h-1);
y=t=>{
let n=Math.exp(-h*_*t),r=Math.min(e*t,300);
return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e
}
;
let t=(m+h*_*g)/e,n=h*_*t-g*e,r=h*_*g-t*e;
b=t=>{
let i=Math.exp(-h*_*t),a=Math.min(e*t,300);
return i*(n*Math.sinh(a)+r*Math.cosh(a))
}

}
let T={
calculatedDuration:p&&d||null,velocity:e=>Ye(b(e)),next:e=>{
if(!p&&h<1){
let t=Math.exp(-h*_*e),n=Math.sin(x*e),a=Math.cos(x*e),c=o-t*(S*n+g*a),l=Ye(t*(C*n+w*a));
return s.done=Math.abs(l)<=r&&Math.abs(o-c)<=i,s.value=s.done?o:c,s
}
let t=y(e);
if(p)s.done=e>=d;
else{
let n=Ye(b(e));
s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i
}
return s.value=s.done?o:t,s
}
,toString:()=>{
let e=Math.min(Vn(T),Bn),t=zn(t=>T.next(e*t).value,e,30);
return e+`ms `+t
}
,toTransition:()=>{

}

}
;
return T
}
Qn.applyToOptions=e=>{
let t=Hn(e,100,Qn);
return e.ease=t.ease,e.duration=Ye(t.duration),e.type=`keyframes`,e
}
;
var $n=5;
function er(e,t,n){
let r=Math.max(t-$n,0);
return Ze(n-e(r),t-r)
}
function tr({
keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u
}
){
let d=e[0],f={
done:!1,value:d
}
,p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);
_!==g&&(h=_-d);
let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{
let t=v(e),n=y(e);
f.done=Math.abs(t)<=l,f.value=f.done?_:n
}
,x,S,C=e=>{
p(f.value)&&(x=e,S=Qn({
keyframes:[f.value,m(f.value)],velocity:er(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u
}
))
}
;
return C(0),{
calculatedDuration:null,next:e=>{
let t=!1;
return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)
}

}

}
function nr(e,t,n){
let r=[],i=n||ze.mix||Ln,a=e.length-1;
for(let n=0;
n<a;
n++){
let a=i(e[n],e[n+1]);
t&&(a=Ke(Array.isArray(t)?t[n]||We:t,a)),r.push(a)
}
return r
}
function rr(e,t,{
clamp:n=!0,ease:r,mixer:i
}
={

}
){
let a=e.length;
if(t.length,a===1)return()=>t[0];
if(a===2&&t[0]===t[1])return()=>t[1];
let o=e[0]===e[1];
e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());
let s=nr(t,r,i),c=s.length,l=n=>{
if(o&&n<e[0])return t[0];
let r=0;
if(c>1)for(;
r<e.length-2&&!(n<e[r+1]);
r++);
let i=qe(e[r],e[r+1],n);
return s[r](i)
}
;
return n?t=>l(Re(e[0],e[a-1],t)):l
}
function ir(e,t){
let n=e[e.length-1];
for(let r=1;
r<=t;
r++){
let i=qe(0,t,r);
e.push(F(n,1,i))
}

}
function ar(e){
let t=[0];
return ir(t,e.length-1),t
}
function or(e,t){
return e.map(e=>e*t)
}
function sr(e,t){
return e.map(()=>t||mt).splice(0,e.length-1)
}
function cr({
duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`
}
){
let i=ht(r)?r.map(yt):yt(r),a={
done:!1,value:t[0]
}
,o=rr(or(n&&n.length===t.length?n:ar(t),e),t,{
ease:Array.isArray(i)?i:sr(t,i)
}
);
return{
calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)
}

}
var lr=e=>e!==null;
function ur(e,{
repeat:t,repeatType:n=`loop`
}
,r,i=1){
let a=e.filter(lr),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;
return!o||r===void 0?a[o]:r
}
var dr={
decay:tr,inertia:tr,tween:cr,keyframes:cr,spring:Qn
}
;
function fr(e){
typeof e.type==`string`&&(e.type=dr[e.type])
}
var pr=class{
constructor(){
this.updateFinished()
}
get finished(){
return this._finished
}
updateFinished(){
this._finished=new Promise(e=>{
this.resolve=e
}
)
}
notifyFinished(){
this.resolve()
}
then(e,t){
return this.finished.then(e,t)
}

}
,mr=e=>e/100,hr=class extends pr{
constructor(e){
super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={
done:!1,value:void 0
}
,this.stop=()=>{
let{
motionValue:e
}
=this.options;
e&&e.updatedAt!==kt.now()&&this.tick(kt.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())
}
,At.mainThread++,this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()
}
initAnimation(){
let{
options:e
}
=this;
fr(e);
let{
type:t=cr,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0
}
=e,{
keyframes:o
}
=e,s=t||cr;
s!==cr&&typeof o[0]!=`number`&&(this.mixKeyframes=Ke(mr,Ln(o[0],o[1])),o=[0,100]);
let c=s({
...e,keyframes:o
}
);
i===`mirror`&&(this.mirroredGenerator=s({
...e,keyframes:[...o].reverse(),velocity:-a
}
)),c.calculatedDuration===null&&(c.calculatedDuration=Vn(c));
let{
calculatedDuration:l
}
=c;
this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c
}
updateTime(e){
let t=Math.round(e-this.startTime)*this.playbackSpeed;
this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime
}
tick(e,t=!1){
let{
generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s
}
=this;
if(this.startTime===null)return n.next(0);
let{
delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h
}
=this.options;
this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);
let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;
this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);
let v=this.currentTime,y=n;
if(u){
let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;
!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=Re(0,1,n)*o
}
let b;
_?(this.delayState.value=l[0],b=this.delayState):b=y.next(v),i&&!_&&(b.value=i(b.value));
let{
done:x
}
=b;
!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);
let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);
return S&&p!==tr&&(b.value=ur(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b
}
then(e,t){
return this.finished.then(e,t)
}
get duration(){
return Xe(this.calculatedDuration)
}
get iterationDuration(){
let{
delay:e=0
}
=this.options||{

}
;
return this.duration+Xe(e)
}
get time(){
return Xe(this.currentTime)
}
set time(e){
e=Ye(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))
}
getGeneratorVelocity(){
let e=this.currentTime;
if(e<=0)return this.options.velocity||0;
if(this.generator.velocity)return this.generator.velocity(e);
let t=this.generator.next(e).value;
return er(e=>this.generator.next(e).value,e,t)
}
get speed(){
return this.playbackSpeed
}
set speed(e){
let t=this.playbackSpeed!==e;
t&&this.driver&&this.updateTime(kt.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=Xe(this.currentTime))
}
play(){
if(this.isStopped)return;
let{
driver:e=Rn,startTime:t
}
=this.options;
this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();
let n=this.driver.now();
this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()
}
pause(){
this.state=`paused`,this.updateTime(kt.now()),this.holdTime=this.currentTime
}
complete(){
this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null
}
finish(){
this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()
}
cancel(){
this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()
}
teardown(){
this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null,At.mainThread--
}
stopDriver(){
this.driver&&=(this.driver.stop(),void 0)
}
sample(e){
return this.startTime=0,this.tick(e,!0)
}
attachTimeline(e){
return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)
}

}
;
function gr(e){
for(let t=1;
t<e.length;
t++)e[t]??(e[t]=e[t-1])
}
var _r=e=>e*180/Math.PI,vr=e=>br(_r(Math.atan2(e[1],e[0]))),yr={
x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:vr,rotateZ:vr,skewX:e=>_r(Math.atan(e[1])),skewY:e=>_r(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2
}
,br=e=>(e%=360,e<0&&(e+=360),e),xr=vr,Sr=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Cr=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),wr={
x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Sr,scaleY:Cr,scale:e=>(Sr(e)+Cr(e))/2,rotateX:e=>br(_r(Math.atan2(e[6],e[5]))),rotateY:e=>br(_r(Math.atan2(-e[2],e[0]))),rotateZ:xr,rotate:xr,skewX:e=>_r(Math.atan(e[4])),skewY:e=>_r(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2
}
;
function Tr(e){
return+!!e.includes(`scale`)
}
function Er(e,t){
if(!e||e===`none`)return Tr(t);
let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;
if(n)r=wr,i=n;
else{
let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
r=yr,i=t
}
if(!i)return Tr(t);
let a=r[t],o=i[1].split(`,`).map(Or);
return typeof a==`function`?a(o):o[a]
}
var Dr=(e,t)=>{
let{
transform:n=`none`
}
=getComputedStyle(e);
return Er(n,t)
}
;
function Or(e){
return parseFloat(e.trim())
}
var kr=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],Ar=new Set(kr),jr=e=>e===Lt||e===N,Mr=new Set([`x`,`y`,`z`]),Nr=kr.filter(e=>!Mr.has(e));
function Pr(e){
let t=[];
return Nr.forEach(n=>{
let r=e.getValue(n);
r!==void 0&&(t.push([n,r.get()]),r.set(+!!n.startsWith(`scale`)))
}
),t
}
var Fr={
width:({
x:e
}
,{
paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r
}
)=>{
let i=e.max-e.min;
return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)
}
,height:({
y:e
}
,{
paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r
}
)=>{
let i=e.max-e.min;
return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)
}
,top:(e,{
top:t
}
)=>parseFloat(t),left:(e,{
left:t
}
)=>parseFloat(t),bottom:({
y:e
}
,{
top:t
}
)=>parseFloat(t)+(e.max-e.min),right:({
x:e
}
,{
left:t
}
)=>parseFloat(t)+(e.max-e.min),x:(e,{
transform:t
}
)=>Er(t,`x`),y:(e,{
transform:t
}
)=>Er(t,`y`)
}
;
Fr.translateX=Fr.x,Fr.translateY=Fr.y;
var Ir=new Set,Lr=!1,Rr=!1,zr=!1;
function Br(){
if(Rr){
let e=Array.from(Ir).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;
t.forEach(e=>{
let t=Pr(e);
t.length&&(n.set(e,t),e.render())
}
),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{
e.render();
let t=n.get(e);
t&&t.forEach(([t,n])=>{
e.getValue(t)?.set(n)
}
)
}
),e.forEach(e=>e.measureEndState()),e.forEach(e=>{
e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)
}
)
}
Rr=!1,Lr=!1,Ir.forEach(e=>e.complete(zr)),Ir.clear()
}
function Vr(){
Ir.forEach(e=>{
e.readKeyframes(),e.needsMeasurement&&(Rr=!0)
}
)
}
function Hr(){
zr=!0,Vr(),Br(),zr=!1
}
var Ur=class{
constructor(e,t,n,r,i,a=!1){
this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a
}
scheduleResolve(){
this.state=`scheduled`,this.isAsync?(Ir.add(this),Lr||(Lr=!0,j.read(Vr),j.resolveKeyframes(Br))):(this.readKeyframes(),this.complete())
}
readKeyframes(){
let{
unresolvedKeyframes:e,name:t,element:n,motionValue:r
}
=this;
if(e[0]===null){
let i=r?.get(),a=e[e.length-1];
if(i!==void 0)e[0]=i;
else if(n&&t){
let r=n.readValue(t,a);
r!=null&&(e[0]=r)
}
e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])
}
gr(e)
}
setFinalKeyframe(){

}
measureInitialState(){

}
renderEndStyles(){

}
measureEndState(){

}
complete(e=!1){
this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Ir.delete(this)
}
cancel(){
this.state===`scheduled`&&(Ir.delete(this),this.state=`pending`)
}
resume(){
this.state===`pending`&&this.scheduleResolve()
}

}
,Wr=e=>e.startsWith(`--`);
function Gr(e,t,n){
Wr(t)?e.style.setProperty(t,n):e.style[t]=n
}
var Kr={

}
;
function qr(e,t){
let n=Ue(e);
return()=>Kr[t]??n()
}
var Jr=qr(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),Yr=qr(()=>{
try{
document.createElement(`div`).animate({
opacity:0
}
,{
easing:`linear(0, 1)`
}
)
}
catch{
return!1
}
return!0
}
,`linearEasing`),Xr=([e,t,n,r])=>`cubic-bezier(${
e
}
, ${
t
}
, ${
n
}
, ${
r
}
)`,Zr={
linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:Xr([0,.65,.55,1]),circOut:Xr([.55,0,1,.45]),backIn:Xr([.31,.01,.66,-.59]),backOut:Xr([.33,1.53,.69,.99])
}
;
function Qr(e,t){
if(e)return typeof e==`function`?Yr()?zn(e,t):`ease-out`:gt(e)?Xr(e):Array.isArray(e)?e.map(e=>Qr(e,t)||Zr.easeOut):Zr[e]
}
function $r(e,t,n,{
delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c
}
={

}
,l=void 0){
let u={
[t]:n
}
;
c&&(u.offset=c);
let d=Qr(s,i);
Array.isArray(d)&&(u.easing=d),xt.value&&At.waapi++;
let f={
delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`
}
;
l&&(f.pseudoElement=l);
let p=e.animate(u,f);
return xt.value&&p.finished.finally(()=>{
At.waapi--
}
),p
}
function ei(e){
return typeof e==`function`&&`applyToOptions`in e
}
function ti({
type:e,...t
}
){
return ei(e)&&Yr()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)
}
var ni=class extends pr{
constructor(e){
if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;
let{
element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s
}
=e;
this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;
let c=ti(e);
this.animation=$r(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{
if(this.finishedTime=this.time,!i){
let e=ur(r,this.options,o,this.speed);
this.updateMotionValue&&this.updateMotionValue(e),Gr(t,n,e),this.animation.cancel()
}
s?.(),this.notifyFinished()
}

}
play(){
this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())
}
pause(){
this.animation.pause()
}
complete(){
this.animation.finish?.()
}
cancel(){
try{
this.animation.cancel()
}
catch{

}

}
stop(){
if(this.isStopped)return;
this.isStopped=!0;
let{
state:e
}
=this;
e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())
}
commitStyles(){
let e=this.options?.element;
!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()
}
get duration(){
let e=this.animation.effect?.getComputedTiming?.().duration||0;
return Xe(Number(e))
}
get iterationDuration(){
let{
delay:e=0
}
=this.options||{

}
;
return this.duration+Xe(e)
}
get time(){
return Xe(Number(this.animation.currentTime)||0)
}
set time(e){
let t=this.finishedTime!==null;
this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Ye(e),t&&this.animation.pause()
}
get speed(){
return this.animation.playbackRate
}
set speed(e){
e<0&&(this.finishedTime=null),this.animation.playbackRate=e
}
get state(){
return this.finishedTime===null?this.animation.playState:`finished`
}
get startTime(){
return this.manualStartTime??Number(this.animation.startTime)
}
set startTime(e){
this.manualStartTime=this.animation.startTime=e
}
attachTimeline({
timeline:e,rangeStart:t,rangeEnd:n,observe:r
}
){
return this.allowFlatten&&this.animation.effect?.updateTiming({
easing:`linear`
}
),this.animation.onfinish=null,e&&Jr()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),We):r(this)
}

}
,ri={
anticipate:ct,backInOut:st,circInOut:dt
}
;
function ii(e){
return e in ri
}
function ai(e){
typeof e.ease==`string`&&ii(e.ease)&&(e.ease=ri[e.ease])
}
var oi=10,si=class extends ni{
constructor(e){
ai(e),fr(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e
}
updateMotionValue(e){
let{
motionValue:t,onUpdate:n,onComplete:r,element:i,...a
}
=this.options;
if(!t)return;
if(e!==void 0){
t.set(e);
return
}
let o=new hr({
...a,autoplay:!1
}
),s=Math.max(oi,kt.now()-this.startTime),c=Re(0,oi,s-oi),l=o.sample(s).value,{
name:u
}
=this.options;
i&&u&&Gr(i,u,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()
}

}
,ci=(e,t)=>t===`zIndex`?!1:!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(bn.test(e)||e===`0`)&&!e.startsWith(`url(`));
function li(e){
let t=e[0];
if(e.length===1)return!0;
for(let n=0;
n<e.length;
n++)if(e[n]!==t)return!0
}
function ui(e,t,n,r){
let i=e[0];
if(i===null)return!1;
if(t===`display`||t===`visibility`)return!0;
let a=e[e.length-1],o=ci(i,t),s=ci(a,t);
return`${
t
}
${
i
}
${
a
}
${
o?a:i
}
`,!o||!s?!1:li(e)||(n===`spring`||ei(n))&&r
}
function di(e){
e.duration=0,e.type=`keyframes`
}
var fi=new Set([`opacity`,`clipPath`,`filter`,`transform`]),pi=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function mi(e){
for(let t=0;
t<e.length;
t++)if(typeof e[t]==`string`&&pi.test(e[t]))return!0;
return!1
}
var hi=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),gi=Ue(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));
function _i(e){
let{
motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s
}
=e;
if(!(t?.owner?.current instanceof HTMLElement))return!1;
let{
onUpdate:c,transformTemplate:l
}
=t.owner.getProps();
return gi()&&n&&(fi.has(n)||hi.has(n)&&mi(s))&&(n!==`transform`||!l)&&!c&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`
}
var vi=40,yi=class extends pr{
constructor({
autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u
}
){
super(),this.stop=()=>{
this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()
}
,this.createdAt=kt.now();
let d={
autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u
}
,f=l?.KeyframeResolver||Ur;
this.keyframeResolver=new f(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()
}
onKeyframesResolved(e,t,n,r){
this.keyframeResolver=void 0;
let{
name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l
}
=n;
this.resolvedAt=kt.now();
let u=!0;
ui(e,i,a,o)||(u=!1,(ze.instantAnimations||!s)&&l?.(ur(e,n,t)),e[0]=e[e.length-1],di(n),n.repeat=0);
let d={
startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>vi?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e
}
,f=u&&!c&&_i(d),p=d.motionValue?.owner?.current,m;
if(f)try{
m=new si({
...d,element:p
}
)
}
catch{
m=new hr(d)
}
else m=new hr(d);
m.finished.then(()=>{
this.notifyFinished()
}
).catch(We),this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m
}
get finished(){
return this._animation?this.animation.finished:this._finished
}
then(e,t){
return this.finished.finally(e).then(()=>{

}
)
}
get animation(){
return this._animation||(this.keyframeResolver?.resume(),Hr()),this._animation
}
get duration(){
return this.animation.duration
}
get iterationDuration(){
return this.animation.iterationDuration
}
get time(){
return this.animation.time
}
set time(e){
this.animation.time=e
}
get speed(){
return this.animation.speed
}
get state(){
return this.animation.state
}
set speed(e){
this.animation.speed=e
}
get startTime(){
return this.animation.startTime
}
attachTimeline(e){
return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()
}
play(){
this.animation.play()
}
pause(){
this.animation.pause()
}
complete(){
this.animation.complete()
}
cancel(){
this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()
}

}
;
function bi(e,t,n,r=0,i=1){
let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;
return typeof n==`function`?n(a,o):i===1?a*r:s-a*r
}
var xi=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Si(e){
let t=xi.exec(e);
if(!t)return[,];
let[,n,r,i]=t;
return[`--${
n??r
}
`,i]
}
function Ci(e,t,n=1){
`${
e
}
`;
let[r,i]=Si(e);
if(!r)return;
let a=window.getComputedStyle(t).getPropertyValue(r);
if(a){
let e=a.trim();
return Be(e)?parseFloat(e):e
}
return Pt(i)?Ci(i,t,n+1):i
}
var wi={
type:`spring`,stiffness:500,damping:25,restSpeed:10
}
,Ti=e=>({
type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10
}
),Ei={
type:`keyframes`,duration:.8
}
,Di={
type:`keyframes`,ease:[.25,.1,.35,1],duration:.3
}
,Oi=(e,{
keyframes:t
}
)=>t.length>2?Ei:Ar.has(e)?e.startsWith(`scale`)?Ti(t[1]):wi:Di;
function ki(e,t){
if(e?.inherit&&t){
let{
inherit:n,...r
}
=e;
return{
...t,...r
}

}
return e
}
function Ai(e,t){
let n=e?.[t]??e?.default??e;
return n===e?n:ki(n,e)
}
var ji=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);
function Mi(e){
for(let t in e)if(!ji.has(t))return!0;
return!1
}
var Ni=(e,t,n,r={

}
,i,a)=>o=>{
let s=Ai(r,e)||{

}
,c=s.delay||r.delay||0,{
elapsed:l=0
}
=r;
l-=Ye(c);
let u={
keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{
t.set(e),s.onUpdate&&s.onUpdate(e)
}
,onComplete:()=>{
o(),s.onComplete&&s.onComplete()
}
,name:e,motionValue:t,element:a?void 0:i
}
;
Mi(s)||Object.assign(u,Oi(e,u)),u.duration&&=Ye(u.duration),u.repeatDelay&&=Ye(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);
let d=!1;
if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(di(u),u.delay===0&&(d=!0)),(ze.instantAnimations||ze.skipAnimations||i?.shouldSkipAnimations)&&(d=!0,di(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){
let e=ur(u.keyframes,s);
if(e!==void 0){
j.update(()=>{
u.onUpdate(e),u.onComplete()
}
);
return
}

}
return s.isSync?new hr(u):new yi(u)
}
;
function Pi(e){
let t=[{

}
,{

}
];
return e?.values.forEach((e,n)=>{
t[0][n]=e.get(),t[1][n]=e.getVelocity()
}
),t
}
function Fi(e,t,n,r){
if(typeof t==`function`){
let[i,a]=Pi(r);
t=t(n===void 0?e.custom:n,i,a)
}
if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){
let[i,a]=Pi(r);
t=t(n===void 0?e.custom:n,i,a)
}
return t
}
function L(e,t,n){
let r=e.getProps();
return Fi(r,t,n===void 0?r.custom:n,e)
}
var R=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...kr]),Ii=30,Li=e=>!isNaN(parseFloat(e)),Ri={
current:void 0
}
,zi=class{
constructor(e,t={

}
){
this.canTrackVelocity=null,this.events={

}
,this.updateAndNotify=e=>{
let t=kt.now();
if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()
}
,this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner
}
setCurrent(e){
this.current=e,this.updatedAt=kt.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Li(this.current))
}
setPrevFrameValue(e=this.current){
this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt
}
onChange(e){
return this.on(`change`,e)
}
on(e,t){
this.events[e]||(this.events[e]=new Je);
let n=this.events[e].add(t);
return e===`change`?()=>{
n(),j.read(()=>{
this.events.change.getSize()||this.stop()
}
)
}
:n
}
clearListeners(){
for(let e in this.events)this.events[e].clear()
}
attach(e,t){
this.passiveEffect=e,this.stopPassiveEffect=t
}
set(e){
this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)
}
setWithVelocity(e,t,n){
this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n
}
jump(e,t=!0){
this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()
}
dirty(){
this.events.change?.notify(this.current)
}
addDependent(e){
this.dependents||=new Set,this.dependents.add(e)
}
removeDependent(e){
this.dependents&&this.dependents.delete(e)
}
get(){
return Ri.current&&Ri.current.push(this),this.current
}
getPrevious(){
return this.prev
}
getVelocity(){
let e=kt.now();
if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Ii)return 0;
let t=Math.min(this.updatedAt-this.prevUpdatedAt,Ii);
return Ze(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)
}
start(e){
return this.stop(),new Promise(t=>{
this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()
}
).then(()=>{
this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()
}
)
}
stop(){
this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()
}
isAnimating(){
return!!this.animation
}
clearAnimation(){
delete this.animation
}
destroy(){
this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()
}

}
;
function Bi(e,t){
return new zi(e,t)
}
var Vi=e=>Array.isArray(e);
function Hi(e,t,n){
e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Bi(n))
}
function Ui(e){
return Vi(e)?e[e.length-1]||0:e
}
function Wi(e,t){
let{
transitionEnd:n={

}
,transition:r={

}
,...i
}
=L(e,t)||{

}
;
i={
...i,...n
}
;
for(let t in i)Hi(e,t,Ui(i[t]))
}
var Gi=e=>!!(e&&e.getVelocity);
function Ki(e){
return!!(Gi(e)&&e.add)
}
function qi(e,t){
let n=e.getValue(`willChange`);
if(Ki(n))return n.add(t);
if(!n&&ze.WillChange){
let n=new ze.WillChange(`auto`);
e.addValue(`willChange`,n),n.add(t)
}

}
function Ji(e){
return e.replace(/([A-Z])/g,e=>`-${
e.toLowerCase()
}
`)
}
var Yi=`data-`+Ji(`framerAppearId`);
function Xi(e){
return e.props[Yi]
}
function Zi({
protectedKeys:e,needsAnimating:t
}
,n){
let r=e.hasOwnProperty(n)&&t[n]!==!0;
return t[n]=!1,r
}
function Qi(e,t,{
delay:n=0,transitionOverride:r,type:i
}
={

}
){
let{
transition:a,transitionEnd:o,...s
}
=t,c=e.getDefaultTransition();
a=a?ki(a,c):c;
let l=a?.reduceMotion;
r&&(a=r);
let u=[],d=i&&e.animationState&&e.animationState.getState()[i];
for(let t in s){
let r=e.getValue(t,e.latestValues[t]??null),i=s[t];
if(i===void 0||d&&Zi(d,t))continue;
let o={
delay:n,...Ai(a||{

}
,t)
}
,c=r.get();
if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){
j.update(()=>r.set(i));
continue
}
let f=!1;
if(window.MotionHandoffAnimation){
let n=Xi(e);
if(n){
let e=window.MotionHandoffAnimation(n,t,j);
e!==null&&(o.startTime=e,f=!0)
}

}
qi(e,t);
let p=l??e.shouldReduceMotion;
r.start(Ni(t,r,i,p&&R.has(t)?{
type:!1
}
:o,e,f));
let m=r.animation;
m&&u.push(m)
}
if(o){
let t=()=>j.update(()=>{
o&&Wi(e,o)
}
);
u.length?Promise.all(u).then(t):t()
}
return u
}
function $i(e,t,n={

}
){
let r=L(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{
transition:i=e.getDefaultTransition()||{

}

}
=r||{

}
;
n.transitionOverride&&(i=n.transitionOverride);
let a=r?()=>Promise.all(Qi(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{
let{
delayChildren:a=0,staggerChildren:o,staggerDirection:s
}
=i;
return ea(e,t,r,a,o,s,n)
}
:()=>Promise.resolve(),{
when:s
}
=i;
if(s){
let[e,t]=s===`beforeChildren`?[a,o]:[o,a];
return e().then(()=>t())
}
else return Promise.all([a(),o(n.delay)])
}
function ea(e,t,n=0,r=0,i=0,a=1,o){
let s=[];
for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push($i(c,t,{
...o,delay:n+(typeof r==`function`?0:r)+bi(e.variantChildren,c,r,i,a)
}
).then(()=>c.notify(`AnimationComplete`,t)));
return Promise.all(s)
}
function ta(e,t,n={

}
){
e.notify(`AnimationStart`,t);
let r;
if(Array.isArray(t)){
let i=t.map(t=>$i(e,t,n));
r=Promise.all(i)
}
else if(typeof t==`string`)r=$i(e,t,n);
else{
let i=typeof t==`function`?L(e,t,n.custom):t;
r=Promise.all(Qi(e,i,n))
}
return r.then(()=>{
e.notify(`AnimationComplete`,t)
}
)
}
var na={
test:e=>e===`auto`,parse:e=>e
}
,ra=e=>t=>t.test(e),ia=[Lt,N,$t,Qt,tn,en,na],aa=e=>ia.find(ra(e));
function oa(e){
return typeof e==`number`?e===0:e===null?!0:e===`none`||e===`0`||He(e)
}
var sa=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);
function ca(e){
let[t,n]=e.slice(0,-1).split(`(`);
if(t===`drop-shadow`)return e;
let[r]=n.match(Vt)||[];
if(!r)return e;
let i=n.replace(r,``),a=+!!sa.has(t);
return r!==n&&(a*=100),t+`(`+a+i+`)`
}
var la=/\b([a-z-]*)\(.*?\)/gu,ua={
...bn,getAnimatableNone:e=>{
let t=e.match(la);
return t?t.map(ca).join(` `):e
}

}
,da={
...bn,getAnimatableNone:e=>{
let t=bn.parse(e);
return bn.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{
...e,alpha:1
}
:e))
}

}
,fa={
...Lt,transform:Math.round
}
,pa={
borderWidth:N,borderTopWidth:N,borderRightWidth:N,borderBottomWidth:N,borderLeftWidth:N,borderRadius:N,borderTopLeftRadius:N,borderTopRightRadius:N,borderBottomRightRadius:N,borderBottomLeftRadius:N,width:N,maxWidth:N,height:N,maxHeight:N,top:N,right:N,bottom:N,left:N,inset:N,insetBlock:N,insetBlockStart:N,insetBlockEnd:N,insetInline:N,insetInlineStart:N,insetInlineEnd:N,padding:N,paddingTop:N,paddingRight:N,paddingBottom:N,paddingLeft:N,paddingBlock:N,paddingBlockStart:N,paddingBlockEnd:N,paddingInline:N,paddingInlineStart:N,paddingInlineEnd:N,margin:N,marginTop:N,marginRight:N,marginBottom:N,marginLeft:N,marginBlock:N,marginBlockStart:N,marginBlockEnd:N,marginInline:N,marginInlineStart:N,marginInlineEnd:N,fontSize:N,backgroundPositionX:N,backgroundPositionY:N,rotate:Qt,rotateX:Qt,rotateY:Qt,rotateZ:Qt,scale:zt,scaleX:zt,scaleY:zt,scaleZ:zt,skew:Qt,skewX:Qt,skewY:Qt,distance:N,translateX:N,translateY:N,translateZ:N,x:N,y:N,z:N,perspective:N,transformPerspective:N,opacity:Rt,originX:nn,originY:nn,originZ:N,zIndex:fa,fillOpacity:Rt,strokeOpacity:Rt,numOctaves:fa
}
,ma={
...pa,color:P,backgroundColor:P,outlineColor:P,fill:P,stroke:P,borderColor:P,borderTopColor:P,borderRightColor:P,borderBottomColor:P,borderLeftColor:P,filter:ua,WebkitFilter:ua,mask:da,WebkitMask:da
}
,ha=e=>ma[e],ga=new Set([ua,da]);
function _a(e,t){
let n=ha(e);
return ga.has(n)||(n=bn),n.getAnimatableNone?n.getAnimatableNone(t):void 0
}
var va=new Set([`auto`,`none`,`0`]);
function ya(e,t,n){
let r=0,i;
for(;
r<e.length&&!i;
){
let t=e[r];
typeof t==`string`&&!va.has(t)&&pn(t).values.length&&(i=e[r]),r++
}
if(i&&n)for(let r of t)e[r]=_a(n,i)
}
var ba=class extends Ur{
constructor(e,t,n,r,i){
super(e,t,n,r,i,!0)
}
readKeyframes(){
let{
unresolvedKeyframes:e,element:t,name:n
}
=this;
if(!t||!t.current)return;
super.readKeyframes();
for(let n=0;
n<e.length;
n++){
let r=e[n];
if(typeof r==`string`&&(r=r.trim(),Pt(r))){
let i=Ci(r,t.current);
i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)
}

}
if(this.resolveNoneKeyframes(),!R.has(n)||e.length!==2)return;
let[r,i]=e,a=aa(r),o=aa(i);
if(It(r)!==It(i)&&Fr[n]){
this.needsMeasurement=!0;
return
}
if(a!==o)if(jr(a)&&jr(o))for(let t=0;
t<e.length;
t++){
let n=e[t];
typeof n==`string`&&(e[t]=parseFloat(n))
}
else Fr[n]&&(this.needsMeasurement=!0)
}
resolveNoneKeyframes(){
let{
unresolvedKeyframes:e,name:t
}
=this,n=[];
for(let t=0;
t<e.length;
t++)(e[t]===null||oa(e[t]))&&n.push(t);
n.length&&ya(e,n,t)
}
measureInitialState(){
let{
element:e,unresolvedKeyframes:t,name:n
}
=this;
if(!e||!e.current)return;
n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Fr[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;
let r=t[t.length-1];
r!==void 0&&e.getValue(n,r).jump(r,!1)
}
measureEndState(){
let{
element:e,name:t,unresolvedKeyframes:n
}
=this;
if(!e||!e.current)return;
let r=e.getValue(t);
r&&r.jump(this.measuredOrigin,!1);
let i=n.length-1,a=n[i];
n[i]=Fr[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{
e.getValue(t).set(n)
}
),this.resolveNoneKeyframes()
}

}
;
function xa(e,t,n){
if(e==null)return[];
if(e instanceof EventTarget)return[e];
if(typeof e==`string`){
let r=document;
t&&(r=t.current);
let i=n?.[e]??r.querySelectorAll(e);
return i?Array.from(i):[]
}
return Array.from(e).filter(e=>e!=null)
}
var Sa=(e,t)=>t&&typeof e==`number`?t.transform(e):e;
function Ca(e){
return Ve(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)
}
var{
schedule:wa,cancel:Ta
}
=wt(queueMicrotask,!1),Ea={
x:!1,y:!1
}
;
function Da(){
return Ea.x||Ea.y
}
function Oa(e){
return e===`x`||e===`y`?Ea[e]?null:(Ea[e]=!0,()=>{
Ea[e]=!1
}
):Ea.x||Ea.y?null:(Ea.x=Ea.y=!0,()=>{
Ea.x=Ea.y=!1
}
)
}
function ka(e,t){
let n=xa(e),r=new AbortController;
return[n,{
passive:!0,...t,signal:r.signal
}
,()=>r.abort()]
}
function Aa(e){
return!(e.pointerType===`touch`||Da())
}
function ja(e,t,n={

}
){
let[r,i,a]=ka(e,n);
return r.forEach(e=>{
let n=!1,r=!1,a,o=()=>{
e.removeEventListener(`pointerleave`,u)
}
,s=e=>{
a&&=(a(e),void 0),o()
}
,c=e=>{
n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))
}
,l=()=>{
n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)
}
,u=e=>{
if(e.pointerType!==`touch`){
if(n){
r=!0;
return
}
s(e)
}

}
;
e.addEventListener(`pointerenter`,n=>{
if(!Aa(n))return;
r=!1;
let o=t(e,n);
typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))
}
,i),e.addEventListener(`pointerdown`,l,i)
}
),a
}
var Ma=(e,t)=>t?e===t?!0:Ma(e,t.parentElement):!1,Na=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,Pa=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);
function Fa(e){
return Pa.has(e.tagName)||e.isContentEditable===!0
}
var Ia=new Set([`INPUT`,`SELECT`,`TEXTAREA`]);
function La(e){
return Ia.has(e.tagName)||e.isContentEditable===!0
}
var Ra=new WeakSet;
function za(e){
return t=>{
t.key===`Enter`&&e(t)
}

}
function Ba(e,t){
e.dispatchEvent(new PointerEvent(`pointer`+t,{
isPrimary:!0,bubbles:!0
}
))
}
var Va=(e,t)=>{
let n=e.currentTarget;
if(!n)return;
let r=za(()=>{
if(Ra.has(n))return;
Ba(n,`down`);
let e=za(()=>{
Ba(n,`up`)
}
);
n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>Ba(n,`cancel`),t)
}
);
n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)
}
;
function Ha(e){
return Na(e)&&!Da()
}
var Ua=new WeakSet;
function Wa(e,t,n={

}
){
let[r,i,a]=ka(e,n),o=e=>{
let r=e.currentTarget;
if(!Ha(e)||Ua.has(e))return;
Ra.add(r),n.stopPropagation&&Ua.add(e);
let a=t(r,e),o=(e,t)=>{
window.removeEventListener(`pointerup`,s),window.removeEventListener(`pointercancel`,c),Ra.has(r)&&Ra.delete(r),Ha(e)&&typeof a==`function`&&a(e,{
success:t
}
)
}
,s=e=>{
o(e,r===window||r===document||n.useGlobalTarget||Ma(r,e.target))
}
,c=e=>{
o(e,!1)
}
;
window.addEventListener(`pointerup`,s,i),window.addEventListener(`pointercancel`,c,i)
}
;
return r.forEach(e=>{
(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),Ca(e)&&(e.addEventListener(`focus`,e=>Va(e,i)),!Fa(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))
}
),a
}
function Ga(e){
return Ve(e)&&`ownerSVGElement`in e
}
var Ka=new WeakMap,qa,Ja=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:Ga(r)&&`getBBox`in r?r.getBBox()[t]:r[n],Ya=Ja(`inline`,`width`,`offsetWidth`),Xa=Ja(`block`,`height`,`offsetHeight`);
function Za({
target:e,borderBoxSize:t
}
){
Ka.get(e)?.forEach(n=>{
n(e,{
get width(){
return Ya(e,t)
}
,get height(){
return Xa(e,t)
}

}
)
}
)
}
function Qa(e){
e.forEach(Za)
}
function $a(){
typeof ResizeObserver>`u`||(qa=new ResizeObserver(Qa))
}
function eo(e,t){
qa||$a();
let n=xa(e);
return n.forEach(e=>{
let n=Ka.get(e);
n||(n=new Set,Ka.set(e,n)),n.add(t),qa?.observe(e)
}
),()=>{
n.forEach(e=>{
let n=Ka.get(e);
n?.delete(t),n?.size||qa?.unobserve(e)
}
)
}

}
var to=new Set,no;
function ro(){
no=()=>{
let e={
get width(){
return window.innerWidth
}
,get height(){
return window.innerHeight
}

}
;
to.forEach(t=>t(e))
}
,window.addEventListener(`resize`,no)
}
function io(e){
return to.add(e),no||ro(),()=>{
to.delete(e),!to.size&&typeof no==`function`&&(window.removeEventListener(`resize`,no),no=void 0)
}

}
function ao(e,t){
return typeof e==`function`?io(e):eo(e,t)
}
function oo(e){
return Ga(e)&&e.tagName===`svg`
}
var so=[...ia,P,bn],co=e=>so.find(ra(e)),lo=()=>({
translate:0,scale:1,origin:0,originPoint:0
}
),uo=()=>({
x:lo(),y:lo()
}
),z=()=>({
min:0,max:0
}
),B=()=>({
x:z(),y:z()
}
),fo=new WeakMap;
function V(e){
return typeof e==`object`&&!!e&&typeof e.start==`function`
}
function H(e){
return typeof e==`string`||Array.isArray(e)
}
var po=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],mo=[`initial`,...po];
function ho(e){
return V(e.animate)||mo.some(t=>H(e[t]))
}
function go(e){
return!!(ho(e)||e.variants)
}
function _o(e,t,n){
for(let r in t){
let i=t[r],a=n[r];
if(Gi(i))e.addValue(r,i);
else if(Gi(a))e.addValue(r,Bi(i,{
owner:e
}
));
else if(a!==i)if(e.hasValue(r)){
let t=e.getValue(r);
t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)
}
else{
let t=e.getStaticValue(r);
e.addValue(r,Bi(t===void 0?i:t,{
owner:e
}
))
}

}
for(let r in n)t[r]===void 0&&e.removeValue(r);
return t
}
var vo={
current:null
}
,yo={
current:!1
}
,bo=typeof window<`u`;
function xo(){
if(yo.current=!0,bo)if(window.matchMedia){
let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>vo.current=e.matches;
e.addEventListener(`change`,t),t()
}
else vo.current=!1
}
var So=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],Co={

}
;
function wo(e){
Co=e
}
function To(){
return Co
}
var Eo=class{
scrapeMotionValuesFromProps(e,t,n){
return{

}

}
constructor({
parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o
}
,s={

}
){
this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Ur,this.features={

}
,this.valueSubscriptions=new Map,this.prevMotionValues={

}
,this.hasBeenMounted=!1,this.events={

}
,this.propEventSubscriptions={

}
,this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{
this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))
}
,this.renderScheduledAt=0,this.scheduleRender=()=>{
let e=kt.now();
this.renderScheduledAt<e&&(this.renderScheduledAt=e,j.render(this.render,!1,!0))
}
;
let{
latestValues:c,renderState:l
}
=o;
this.latestValues=c,this.baseTarget={
...c
}
,this.initialValues=t.initial?{
...c
}
:{

}
,this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=ho(t),this.isVariantNode=go(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);
let{
willChange:u,...d
}
=this.scrapeMotionValuesFromProps(t,{

}
,this);
for(let e in d){
let t=d[e];
c[e]!==void 0&&Gi(t)&&t.set(c[e])
}

}
mount(e){
if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];
this.current=e,fo.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(yo.current||xo(),this.shouldReduceMotion=vo.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0
}
unmount(){
this.projection&&this.projection.unmount(),Tt(this.notifyUpdate),Tt(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);
for(let e in this.events)this.events[e].clear();
for(let e in this.features){
let t=this.features[e];
t&&(t.unmount(),t.isMounted=!1)
}
this.current=null
}
addChild(e){
this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)
}
removeChild(e){
this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)
}
bindToMotionValue(e,t){
if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&fi.has(e)&&this.current instanceof HTMLElement){
let{
factory:n,keyframes:r,times:i,ease:a,duration:o
}
=t.accelerate,s=new ni({
element:this.current,name:e,keyframes:r,times:i,ease:a,duration:Ye(o)
}
),c=n(s);
this.valueSubscriptions.set(e,()=>{
c(),s.cancel()
}
);
return
}
let n=Ar.has(e);
n&&this.onBindTransform&&this.onBindTransform();
let r=t.on(`change`,t=>{
this.latestValues[e]=t,this.props.onUpdate&&j.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()
}
),i;
typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{
r(),i&&i(),t.owner&&t.stop()
}
)
}
sortNodePosition(e){
return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)
}
updateFeatures(){
let e=`animation`;
for(e in Co){
let t=Co[e];
if(!t)continue;
let{
isEnabled:n,Feature:r
}
=t;
if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){
let t=this.features[e];
t.isMounted?t.update():(t.mount(),t.isMounted=!0)
}

}

}
triggerBuild(){
this.build(this.renderState,this.latestValues,this.props)
}
measureViewportBox(){
return this.current?this.measureInstanceViewportBox(this.current,this.props):B()
}
getStaticValue(e){
return this.latestValues[e]
}
setStaticValue(e,t){
this.latestValues[e]=t
}
update(e,t){
(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;
for(let t=0;
t<So.length;
t++){
let n=So[t];
this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);
let r=e[`on`+n];
r&&(this.propEventSubscriptions[n]=this.on(n,r))
}
this.prevMotionValues=_o(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{

}
,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()
}
getProps(){
return this.props
}
getVariant(e){
return this.props.variants?this.props.variants[e]:void 0
}
getDefaultTransition(){
return this.props.transition
}
getTransformPagePoint(){
return this.props.transformPagePoint
}
getClosestVariantNode(){
return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0
}
addVariantChild(e){
let t=this.getClosestVariantNode();
if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)
}
addValue(e,t){
let n=this.values.get(e);
t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())
}
removeValue(e){
this.values.delete(e);
let t=this.valueSubscriptions.get(e);
t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)
}
hasValue(e){
return this.values.has(e)
}
getValue(e,t){
if(this.props.values&&this.props.values[e])return this.props.values[e];
let n=this.values.get(e);
return n===void 0&&t!==void 0&&(n=Bi(t===null?void 0:t,{
owner:this
}
),this.addValue(e,n)),n
}
readValue(e,t){
let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);
return n!=null&&(typeof n==`string`&&(Be(n)||He(n))?n=parseFloat(n):!co(n)&&bn.test(t)&&(n=_a(e,t)),this.setBaseTarget(e,Gi(n)?n.get():n)),Gi(n)?n.get():n
}
setBaseTarget(e,t){
this.baseTarget[e]=t
}
getBaseTarget(e){
let{
initial:t
}
=this.props,n;
if(typeof t==`string`||typeof t==`object`){
let r=Fi(this.props,t,this.presenceContext?.custom);
r&&(n=r[e])
}
if(t&&n!==void 0)return n;
let r=this.getBaseTargetFromProps(this.props,e);
return r!==void 0&&!Gi(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]
}
on(e,t){
return this.events[e]||(this.events[e]=new Je),this.events[e].add(t)
}
notify(e,...t){
this.events[e]&&this.events[e].notify(...t)
}
scheduleRenderMicrotask(){
wa.render(this.render)
}

}
,Do=class extends Eo{
constructor(){
super(...arguments),this.KeyframeResolver=ba
}
sortInstanceNodePosition(e,t){
return e.compareDocumentPosition(t)&2?1:-1
}
getBaseTargetFromProps(e,t){
let n=e.style;
return n?n[t]:void 0
}
removeValueFromRenderState(e,{
vars:t,style:n
}
){
delete t[e],delete n[e]
}
handleChildMotionValue(){
this.childSubscription&&(this.childSubscription(),delete this.childSubscription);
let{
children:e
}
=this.props;
Gi(e)&&(this.childSubscription=e.on(`change`,e=>{
this.current&&(this.current.textContent=`${
e
}
`)
}
))
}

}
,Oo=class{
constructor(e){
this.isMounted=!1,this.node=e
}
update(){

}

}
;
function ko({
top:e,left:t,right:n,bottom:r
}
){
return{
x:{
min:t,max:n
}
,y:{
min:e,max:r
}

}

}
function Ao({
x:e,y:t
}
){
return{
top:t.min,right:e.max,bottom:t.max,left:e.min
}

}
function jo(e,t){
if(!t)return e;
let n=t({
x:e.left,y:e.top
}
),r=t({
x:e.right,y:e.bottom
}
);
return{
top:n.y,left:n.x,bottom:r.y,right:r.x
}

}
function Mo(e){
return e===void 0||e===1
}
function No({
scale:e,scaleX:t,scaleY:n
}
){
return!Mo(e)||!Mo(t)||!Mo(n)
}
function Po(e){
return No(e)||Fo(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY
}
function Fo(e){
return Io(e.x)||Io(e.y)
}
function Io(e){
return e&&e!==`0%`
}
function Lo(e,t,n){
return n+t*(e-n)
}
function Ro(e,t,n,r,i){
return i!==void 0&&(e=Lo(e,i,r)),Lo(e,n,r)+t
}
function zo(e,t=0,n=1,r,i){
e.min=Ro(e.min,t,n,r,i),e.max=Ro(e.max,t,n,r,i)
}
function Bo(e,{
x:t,y:n
}
){
zo(e.x,t.translate,t.scale,t.originPoint),zo(e.y,n.translate,n.scale,n.originPoint)
}
var Vo=.999999999999,Ho=1.0000000000001;
function Uo(e,t,n,r=!1){
let i=n.length;
if(!i)return;
t.x=t.y=1;
let a,o;
for(let s=0;
s<i;
s++){
a=n[s],o=a.projectionDelta;
let{
visualElement:i
}
=a.options;
i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(Wo(e.x,-a.scroll.offset.x),Wo(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Bo(e,o)),r&&Po(a.latestValues)&&qo(e,a.latestValues,a.layout?.layoutBox))
}
t.x<Ho&&t.x>Vo&&(t.x=1),t.y<Ho&&t.y>Vo&&(t.y=1)
}
function Wo(e,t){
e.min+=t,e.max+=t
}
function Go(e,t,n,r,i=.5){
zo(e,t,n,F(e.min,e.max,i),r)
}
function Ko(e,t){
return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e
}
function qo(e,t,n){
let r=n??e;
Go(e.x,Ko(t.x,r.x),t.scaleX,t.scale,t.originX),Go(e.y,Ko(t.y,r.y),t.scaleY,t.scale,t.originY)
}
function Jo(e,t){
return ko(jo(e.getBoundingClientRect(),t))
}
function Yo(e,t,n){
let r=Jo(e,n),{
scroll:i
}
=t;
return i&&(Wo(r.x,i.offset.x),Wo(r.y,i.offset.y)),r
}
var Xo={
x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`
}
,Zo=kr.length;
function Qo(e,t,n){
let r=``,i=!0;
for(let a=0;
a<Zo;
a++){
let o=kr[a],s=e[o];
if(s===void 0)continue;
let c=!0;
if(typeof s==`number`)c=s===+!!o.startsWith(`scale`);
else{
let e=parseFloat(s);
c=o.startsWith(`scale`)?e===1:e===0
}
if(!c||n){
let e=Sa(s,pa[o]);
if(!c){
i=!1;
let t=Xo[o]||o;
r+=`${
t
}
(${
e
}
) `
}
n&&(t[o]=e)
}

}
return r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r
}
function $o(e,t,n){
let{
style:r,vars:i,transformOrigin:a
}
=e,o=!1,s=!1;
for(let e in t){
let n=t[e];
if(Ar.has(e)){
o=!0;
continue
}
else if(Mt(e)){
i[e]=n;
continue
}
else{
let t=Sa(n,pa[e]);
e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t
}

}
if(t.transform||(o||n?r.transform=Qo(t,e.transform,n):r.transform&&=`none`),s){
let{
originX:e=`50%`,originY:t=`50%`,originZ:n=0
}
=a;
r.transformOrigin=`${
e
}
 ${
t
}
 ${
n
}
`
}

}
function es(e,{
style:t,vars:n
}
,r,i){
let a=e.style,o;
for(o in t)a[o]=t[o];
for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])
}
function ts(e,t){
return t.max===t.min?0:e/(t.max-t.min)*100
}
var ns={
correct:(e,t)=>{
if(!t.target)return e;
if(typeof e==`string`)if(N.test(e))e=parseFloat(e);
else return e;
return`${
ts(e,t.target.x)
}
% ${
ts(e,t.target.y)
}
%`
}

}
,rs={
correct:(e,{
treeScale:t,projectionDelta:n
}
)=>{
let r=e,i=bn.parse(e);
if(i.length>5)return r;
let a=bn.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;
i[0+o]/=s,i[1+o]/=c;
let l=F(s,c,.5);
return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)
}

}
,is={
borderRadius:{
...ns,applyTo:[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`]
}
,borderTopLeftRadius:ns,borderTopRightRadius:ns,borderBottomLeftRadius:ns,borderBottomRightRadius:ns,boxShadow:rs
}
;
function as(e,{
layout:t,layoutId:n
}
){
return Ar.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!is[e]||e===`opacity`)
}
function os(e,t,n){
let r=e.style,i=t?.style,a={

}
;
if(!r)return a;
for(let t in r)(Gi(r[t])||i&&Gi(i[t])||as(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);
return a
}
function ss(e){
return window.getComputedStyle(e)
}
var cs=class extends Do{
constructor(){
super(...arguments),this.type=`html`,this.renderInstance=es
}
readValueFromInstance(e,t){
if(Ar.has(t))return this.projection?.isProjecting?Tr(t):Dr(e,t);
{
let n=ss(e),r=(Mt(t)?n.getPropertyValue(t):n[t])||0;
return typeof r==`string`?r.trim():r
}

}
measureInstanceViewportBox(e,{
transformPagePoint:t
}
){
return Jo(e,t)
}
build(e,t,n){
$o(e,t,n.transformTemplate)
}
scrapeMotionValuesFromProps(e,t,n){
return os(e,t,n)
}

}
,ls={
offset:`stroke-dashoffset`,array:`stroke-dasharray`
}
,us={
offset:`strokeDashoffset`,array:`strokeDasharray`
}
;
function ds(e,t,n=1,r=0,i=!0){
e.pathLength=1;
let a=i?ls:us;
e[a.offset]=`${
-r
}
`,e[a.array]=`${
t
}
 ${
n
}
`
}
var fs=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];
function ps(e,{
attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s
}
,c,l,u){
if($o(e,s,l),c){
e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);
return
}
e.attrs=e.style,e.style={

}
;
let{
attrs:d,style:f
}
=e;
d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);
for(let e of fs)d[e]!==void 0&&(f[e]=d[e],delete d[e]);
t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&ds(d,i,a,o,!1)
}
var ms=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),hs=e=>typeof e==`string`&&e.toLowerCase()===`svg`;
function gs(e,t,n,r){
es(e,t,void 0,r);
for(let n in t.attrs)e.setAttribute(ms.has(n)?n:Ji(n),t.attrs[n])
}
function _s(e,t,n){
let r=os(e,t,n);
for(let n in e)if(Gi(e[n])||Gi(t[n])){
let t=kr.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);
r[t]=e[n]
}
return r
}
var vs=class extends Do{
constructor(){
super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=B
}
getBaseTargetFromProps(e,t){
return e[t]
}
readValueFromInstance(e,t){
if(Ar.has(t)){
let e=ha(t);
return e&&e.default||0
}
return t=ms.has(t)?t:Ji(t),e.getAttribute(t)
}
scrapeMotionValuesFromProps(e,t,n){
return _s(e,t,n)
}
build(e,t,n){
ps(e,t,this.isSVGTag,n.transformTemplate,n.style)
}
renderInstance(e,t,n,r){
gs(e,t,n,r)
}
mount(e){
this.isSVGTag=hs(e.tagName),super.mount(e)
}

}
,ys=mo.length;
function bs(e){
if(!e)return;
if(!e.isControllingVariants){
let t=e.parent&&bs(e.parent)||{

}
;
return e.props.initial!==void 0&&(t.initial=e.props.initial),t
}
let t={

}
;
for(let n=0;
n<ys;
n++){
let r=mo[n],i=e.props[r];
(H(i)||i===!1)&&(t[r]=i)
}
return t
}
function xs(e,t){
if(!Array.isArray(t))return!1;
let n=t.length;
if(n!==e.length)return!1;
for(let r=0;
r<n;
r++)if(t[r]!==e[r])return!1;
return!0
}
var Ss=[...po].reverse(),Cs=po.length;
function ws(e){
return t=>Promise.all(t.map(({
animation:t,options:n
}
)=>ta(e,t,n)))
}
function Ts(e){
let t=ws(e),n=Os(),r=!0,i=!1,a=t=>(n,r)=>{
let i=L(e,r,t===`exit`?e.presenceContext?.custom:void 0);
if(i){
let{
transition:e,transitionEnd:t,...r
}
=i;
n={
...n,...r,...t
}

}
return n
}
;
function o(n){
t=n(e)
}
function s(o){
let{
props:s
}
=e,c=bs(e.parent)||{

}
,l=[],u=new Set,d={

}
,f=1/0;
for(let t=0;
t<Cs;
t++){
let p=Ss[t],m=n[p],h=s[p]===void 0?c[p]:s[p],g=H(h),_=p===o?m.isActive:null;
_===!1&&(f=t);
let v=h===c[p]&&h!==s[p]&&g;
if(v&&(r||i)&&e.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={
...d
}
,!m.isActive&&_===null||!h&&!m.prevProp||V(h)||typeof h==`boolean`)continue;
if(p===`exit`&&m.isActive&&_!==!0){
m.prevResolvedValues&&(d={
...d,...m.prevResolvedValues
}
);
continue
}
let y=Es(m.prevProp,h),b=y||p===o&&m.isActive&&!v&&g||t>f&&g,x=!1,S=Array.isArray(h)?h:[h],C=S.reduce(a(p),{

}
);
_===!1&&(C={

}
);
let{
prevResolvedValues:w={

}

}
=m,T={
...w,...C
}
,ee=t=>{
b=!0,u.has(t)&&(x=!0,u.delete(t)),m.needsAnimating[t]=!0;
let n=e.getValue(t);
n&&(n.liveStyle=!1)
}
;
for(let e in T){
let t=C[e],n=w[e];
if(d.hasOwnProperty(e))continue;
let r=!1;
r=Vi(t)&&Vi(n)?!xs(t,n):t!==n,r?t==null?u.add(e):ee(e):t!==void 0&&u.has(e)?ee(e):m.protectedKeys[e]=!0
}
m.prevProp=h,m.prevResolvedValues=C,m.isActive&&(d={
...d,...C
}
),(r||i)&&e.blockInitialAnimation&&(b=!1);
let te=v&&y;
b&&(!te||x)&&l.push(...S.map(t=>{
let n={
type:p
}
;
if(typeof t==`string`&&(r||i)&&!te&&e.manuallyAnimateOnMount&&e.parent){
let{
parent:r
}
=e,i=L(r,t);
if(r.enteringChildren&&i){
let{
delayChildren:t
}
=i.transition||{

}
;
n.delay=bi(r.enteringChildren,e,t)
}

}
return{
animation:t,options:n
}

}
))
}
if(u.size){
let t={

}
;
if(typeof s.initial!=`boolean`){
let n=L(e,Array.isArray(s.initial)?s.initial[0]:s.initial);
n&&n.transition&&(t.transition=n.transition)
}
u.forEach(n=>{
let r=e.getBaseTarget(n),i=e.getValue(n);
i&&(i.liveStyle=!0),t[n]=r??null
}
),l.push({
animation:t
}
)
}
let p=!!l.length;
return r&&(s.initial===!1||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,i=!1,p?t(l):Promise.resolve()
}
function c(t,r){
if(n[t].isActive===r)return Promise.resolve();
e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;
let i=s(t);
for(let e in n)n[e].protectedKeys={

}
;
return i
}
return{
animateChanges:s,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{
n=Os(),i=!0
}

}

}
function Es(e,t){
return typeof t==`string`?t!==e:Array.isArray(t)?!xs(t,e):!1
}
function Ds(e=!1){
return{
isActive:e,protectedKeys:{

}
,needsAnimating:{

}
,prevResolvedValues:{

}

}

}
function Os(){
return{
animate:Ds(!0),whileInView:Ds(),whileHover:Ds(),whileTap:Ds(),whileDrag:Ds(),whileFocus:Ds(),exit:Ds()
}

}
function ks(e,t){
e.min=t.min,e.max=t.max
}
function As(e,t){
ks(e.x,t.x),ks(e.y,t.y)
}
function js(e,t){
e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin
}
var Ms=1e-4,Ns=1-Ms,Ps=1+Ms,Fs=.01,Is=0-Fs,Ls=0+Fs;
function Rs(e){
return e.max-e.min
}
function zs(e,t,n){
return Math.abs(e-t)<=n
}
function Bs(e,t,n,r=.5){
e.origin=r,e.originPoint=F(t.min,t.max,e.origin),e.scale=Rs(n)/Rs(t),e.translate=F(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Ns&&e.scale<=Ps||isNaN(e.scale))&&(e.scale=1),(e.translate>=Is&&e.translate<=Ls||isNaN(e.translate))&&(e.translate=0)
}
function Vs(e,t,n,r){
Bs(e.x,t.x,n.x,r?r.originX:void 0),Bs(e.y,t.y,n.y,r?r.originY:void 0)
}
function Hs(e,t,n,r=0){
e.min=(r?F(n.min,n.max,r):n.min)+t.min,e.max=e.min+Rs(t)
}
function Us(e,t,n,r){
Hs(e.x,t.x,n.x,r?.x),Hs(e.y,t.y,n.y,r?.y)
}
function Ws(e,t,n,r=0){
let i=r?F(n.min,n.max,r):n.min;
e.min=t.min-i,e.max=e.min+Rs(t)
}
function Gs(e,t,n,r){
Ws(e.x,t.x,n.x,r?.x),Ws(e.y,t.y,n.y,r?.y)
}
function Ks(e,t,n,r,i){
return e-=t,e=Lo(e,1/n,r),i!==void 0&&(e=Lo(e,1/i,r)),e
}
function qs(e,t=0,n=1,r=.5,i,a=e,o=e){
if($t.test(t)&&(t=parseFloat(t),t=F(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;
let s=F(a.min,a.max,r);
e===a&&(s-=t),e.min=Ks(e.min,t,n,s,i),e.max=Ks(e.max,t,n,s,i)
}
function Js(e,t,[n,r,i],a,o){
qs(e,t[n],t[r],t[i],t.scale,a,o)
}
var Ys=[`x`,`scaleX`,`originX`],Xs=[`y`,`scaleY`,`originY`];
function Zs(e,t,n,r){
Js(e.x,t,Ys,n?n.x:void 0,r?r.x:void 0),Js(e.y,t,Xs,n?n.y:void 0,r?r.y:void 0)
}
function Qs(e){
return e.translate===0&&e.scale===1
}
function $s(e){
return Qs(e.x)&&Qs(e.y)
}
function ec(e,t){
return e.min===t.min&&e.max===t.max
}
function tc(e,t){
return ec(e.x,t.x)&&ec(e.y,t.y)
}
function nc(e,t){
return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)
}
function rc(e,t){
return nc(e.x,t.x)&&nc(e.y,t.y)
}
function ic(e){
return Rs(e.x)/Rs(e.y)
}
function ac(e,t){
return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint
}
function oc(e){
return[e(`x`),e(`y`)]
}
function sc(e,t,n){
let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;
if((i||a||o)&&(r=`translate3d(${
i
}
px, ${
a
}
px, ${
o
}
px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${
1/t.x
}
, ${
1/t.y
}
) `),n){
let{
transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s
}
=n;
e&&(r=`perspective(${
e
}
px) ${
r
}
`),t&&(r+=`rotate(${
t
}
deg) `),i&&(r+=`rotateX(${
i
}
deg) `),a&&(r+=`rotateY(${
a
}
deg) `),o&&(r+=`skewX(${
o
}
deg) `),s&&(r+=`skewY(${
s
}
deg) `)
}
let s=e.x.scale*t.x,c=e.y.scale*t.y;
return(s!==1||c!==1)&&(r+=`scale(${
s
}
, ${
c
}
)`),r||`none`
}
var cc=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`],lc=cc.length,uc=e=>typeof e==`string`?parseFloat(e):e,dc=e=>typeof e==`number`||N.test(e);
function fc(e,t,n,r,i,a){
i?(e.opacity=F(0,n.opacity??1,mc(r)),e.opacityExit=F(t.opacity??1,0,hc(r))):a&&(e.opacity=F(t.opacity??1,n.opacity??1,r));
for(let i=0;
i<lc;
i++){
let a=cc[i],o=pc(t,a),s=pc(n,a);
o===void 0&&s===void 0||(o||=0,s||=0,o===0||s===0||dc(o)===dc(s)?(e[a]=Math.max(F(uc(o),uc(s),r),0),($t.test(s)||$t.test(o))&&(e[a]+=`%`)):e[a]=s)
}
(t.rotate||n.rotate)&&(e.rotate=F(t.rotate||0,n.rotate||0,r))
}
function pc(e,t){
return e[t]===void 0?e.borderRadius:e[t]
}
var mc=gc(0,.5,ut),hc=gc(.5,.95,We);
function gc(e,t,n){
return r=>r<e?0:r>t?1:n(qe(e,t,r))
}
function _c(e,t,n){
let r=Gi(e)?e:Bi(e);
return r.start(Ni(``,r,t,n)),r.animation
}
function vc(e,t,n,r={
passive:!0
}
){
return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)
}
var yc=(e,t)=>e.depth-t.depth,bc=class{
constructor(){
this.children=[],this.isDirty=!1
}
add(e){
Ie(this.children,e),this.isDirty=!0
}
remove(e){
Le(this.children,e),this.isDirty=!0
}
forEach(e){
this.isDirty&&this.children.sort(yc),this.isDirty=!1,this.children.forEach(e)
}

}
;
function xc(e,t){
let n=kt.now(),r=({
timestamp:i
}
)=>{
let a=i-n;
a>=t&&(Tt(r),e(a-t))
}
;
return j.setup(r,!0),()=>Tt(r)
}
function Sc(e){
return Gi(e)?e.get():e
}
var Cc=class{
constructor(){
this.members=[]
}
add(e){
Ie(this.members,e);
for(let t=this.members.length-1;
t>=0;
t--){
let n=this.members[t];
if(n===e||n===this.lead||n===this.prevLead)continue;
let r=n.instance;
(!r||r.isConnected===!1)&&!n.snapshot&&(Le(this.members,n),n.unmount())
}
e.scheduleRender()
}
remove(e){
if(Le(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){
let e=this.members[this.members.length-1];
e&&this.promote(e)
}

}
relegate(e){
for(let t=this.members.indexOf(e)-1;
t>=0;
t--){
let e=this.members[t];
if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0
}
return!1
}
promote(e,t){
let n=this.lead;
if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){
n.updateSnapshot(),e.scheduleRender();
let{
layoutDependency:r
}
=n.options,{
layoutDependency:i
}
=e.options;
(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()
}

}
exitAnimationComplete(){
this.members.forEach(e=>{
e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()
}
)
}
scheduleRender(){
this.members.forEach(e=>e.instance&&e.scheduleRender(!1))
}
removeLeadSnapshot(){
this.lead?.snapshot&&(this.lead.snapshot=void 0)
}

}
,wc={
hasAnimatedSinceResize:!0,hasEverUpdated:!1
}
,Tc={
nodes:0,calculatedTargetDeltas:0,calculatedProjections:0
}
,Ec=[``,`X`,`Y`,`Z`],Dc=1e3,Oc=0;
function kc(e,t,n,r){
let{
latestValues:i
}
=t;
i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))
}
function Ac(e){
if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;
let{
visualElement:t
}
=e.options;
if(!t)return;
let n=Xi(t);
if(window.MotionHasOptimisedAnimation(n,`transform`)){
let{
layout:t,layoutId:r
}
=e.options;
window.MotionCancelOptimisedAnimation(n,`transform`,j,!(t||r))
}
let{
parent:r
}
=e;
r&&!r.hasCheckedOptimisedAppear&&Ac(r)
}
function jc({
attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i
}
){
return class{
constructor(e={

}
,n=t?.()){
this.id=Oc++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={

}
,this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={
x:1,y:1
}
,this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{
this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())
}
,this.updateProjection=()=>{
this.projectionUpdateScheduled=!1,xt.value&&(Tc.nodes=Tc.calculatedTargetDeltas=Tc.calculatedProjections=0),this.nodes.forEach(Pc),this.nodes.forEach(Hc),this.nodes.forEach(Uc),this.nodes.forEach(Fc),xt.addProjectionMetrics&&xt.addProjectionMetrics(Tc)
}
,this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;
for(let e=0;
e<this.path.length;
e++)this.path[e].shouldResetTransform=!0;
this.root===this&&(this.nodes=new bc)
}
addEventListener(e,t){
return this.eventHandlers.has(e)||this.eventHandlers.set(e,new Je),this.eventHandlers.get(e).add(t)
}
notifyListeners(e,...t){
let n=this.eventHandlers.get(e);
n&&n.notify(...t)
}
hasListeners(e){
return this.eventHandlers.has(e)
}
mount(t){
if(this.instance)return;
this.isSVG=Ga(t)&&!oo(t),this.instance=t;
let{
layoutId:n,layout:r,visualElement:i
}
=this.options;
if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){
let n,r=0,i=()=>this.root.updateBlockedByResize=!1;
j.read(()=>{
r=window.innerWidth
}
),e(t,()=>{
let e=window.innerWidth;
e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=xc(i,250),wc.hasAnimatedSinceResize&&(wc.hasAnimatedSinceResize=!1,this.nodes.forEach(Vc)))
}
)
}
n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({
delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r
}
)=>{
if(this.isTreeAnimationBlocked()){
this.target=void 0,this.relativeTarget=void 0;
return
}
let a=this.options.transition||i.getDefaultTransition()||Xc,{
onLayoutAnimationStart:o,onLayoutAnimationComplete:s
}
=i.getProps(),c=!this.targetLayout||!rc(this.targetLayout,r),l=!t&&n;
if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){
this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);
let t={
...Ai(a,`layout`),onPlay:o,onComplete:s
}
;
(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l)
}
else t||Vc(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();
this.targetLayout=r
}
)
}
unmount(){
this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);
let e=this.getStack();
e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Tt(this.updateProjection)
}
blockUpdate(){
this.updateManuallyBlocked=!0
}
unblockUpdate(){
this.updateManuallyBlocked=!1
}
isUpdateBlocked(){
return this.updateManuallyBlocked||this.updateBlockedByResize
}
isTreeAnimationBlocked(){
return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1
}
startUpdate(){
this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Wc),this.animationId++)
}
getTransformTemplate(){
let{
visualElement:e
}
=this.options;
return e&&e.getProps().transformTemplate
}
willUpdate(e=!0){
if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){
this.options.onExitComplete&&this.options.onExitComplete();
return
}
if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Ac(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;
this.isLayoutDirty=!0;
for(let e=0;
e<this.path.length;
e++){
let t=this.path[e];
t.shouldResetTransform=!0,(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)
}
let{
layoutId:t,layout:n
}
=this.options;
if(t===void 0&&!n)return;
let r=this.getTransformTemplate();
this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)
}
update(){
if(this.updateScheduled=!1,this.isUpdateBlocked()){
let e=this.updateBlockedByResize;
this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(Rc),this.nodes.forEach(Lc);
return
}
if(this.animationId<=this.animationCommitId){
this.nodes.forEach(U);
return
}
this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(zc),this.nodes.forEach(Bc),this.nodes.forEach(Mc),this.nodes.forEach(Nc)):this.nodes.forEach(U),this.clearAllSnapshots();
let e=kt.now();
M.delta=Re(0,1e3/60,e-M.timestamp),M.timestamp=e,M.isProcessing=!0,Et.update.process(M),Et.preRender.process(M),Et.render.process(M),M.isProcessing=!1
}
didUpdate(){
this.updateScheduled||(this.updateScheduled=!0,wa.read(this.scheduleUpdate))
}
clearAllSnapshots(){
this.nodes.forEach(Ic),this.sharedNodes.forEach(Gc)
}
scheduleUpdateProjection(){
this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,j.preRender(this.updateProjection,!1,!0))
}
scheduleCheckAfterUnmount(){
j.postRender(()=>{
this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()
}
)
}
updateSnapshot(){
this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Rs(this.snapshot.measuredBox.x)&&!Rs(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))
}
updateLayout(){
if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;
if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;
e<this.path.length;
e++)this.path[e].updateScroll();
let e=this.layout;
this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||=B(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);
let{
visualElement:t
}
=this.options;
t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)
}
updateScroll(e=`measure`){
let t=!!(this.options.layoutScroll&&this.instance);
if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){
let t=r(this.instance);
this.scroll={
animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t
}

}

}
resetTransform(){
if(!i)return;
let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!$s(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;
e&&this.instance&&(t||Po(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())
}
measure(e=!0){
let t=this.measurePageBox(),n=this.removeElementScroll(t);
return e&&(n=this.removeTransform(n)),el(n),{
animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{

}
,source:this.id
}

}
measurePageBox(){
let{
visualElement:e
}
=this.options;
if(!e)return B();
let t=e.measureViewportBox();
if(!(this.scroll?.wasRoot||this.path.some(nl))){
let{
scroll:e
}
=this.root;
e&&(Wo(t.x,e.offset.x),Wo(t.y,e.offset.y))
}
return t
}
removeElementScroll(e){
let t=B();
if(As(t,e),this.scroll?.wasRoot)return t;
for(let n=0;
n<this.path.length;
n++){
let r=this.path[n],{
scroll:i,options:a
}
=r;
r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&As(t,e),Wo(t.x,i.offset.x),Wo(t.y,i.offset.y))
}
return t
}
applyTransform(e,t=!1,n){
let r=n||B();
As(r,e);
for(let e=0;
e<this.path.length;
e++){
let n=this.path[e];
!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&(Wo(r.x,-n.scroll.offset.x),Wo(r.y,-n.scroll.offset.y)),Po(n.latestValues)&&qo(r,n.latestValues,n.layout?.layoutBox)
}
return Po(this.latestValues)&&qo(r,this.latestValues,this.layout?.layoutBox),r
}
removeTransform(e){
let t=B();
As(t,e);
for(let e=0;
e<this.path.length;
e++){
let n=this.path[e];
if(!Po(n.latestValues))continue;
let r;
n.instance&&(No(n.latestValues)&&n.updateSnapshot(),r=B(),As(r,n.measurePageBox())),Zs(t,n.latestValues,n.snapshot?.layoutBox,r)
}
return Po(this.latestValues)&&Zs(t,this.latestValues),t
}
setTargetDelta(e){
this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0
}
setOptions(e){
this.options={
...this.options,...e,crossfade:e.crossfade===void 0?!0:e.crossfade
}

}
clearMeasurements(){
this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1
}
forceRelativeParentToResolveTarget(){
this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==M.timestamp&&this.relativeParent.resolveTargetDelta(!0)
}
resolveTargetDelta(e=!1){
let t=this.getLead();
this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;
let n=!!this.resumingFrom||this!==t;
if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;
let{
layout:r,layoutId:i
}
=this.options;
if(!this.layout||!(r||i))return;
this.resolvedRelativeTargetAt=M.timestamp;
let a=this.getClosestProjectingParent();
a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=B(),this.targetWithTransforms=B()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Us(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):As(this.target,this.layout.layoutBox),Bo(this.target,this.targetDelta)):As(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),xt.value&&Tc.calculatedTargetDeltas++)
}
getClosestProjectingParent(){
if(!(!this.parent||No(this.parent.latestValues)||Fo(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()
}
isProjecting(){
return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)
}
createRelativeTarget(e,t,n){
this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=B(),this.relativeTargetOrigin=B(),Gs(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),As(this.relativeTarget,this.relativeTargetOrigin)
}
removeRelativeTarget(){
this.relativeParent=this.relativeTarget=void 0
}
calcProjection(){
let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;
if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===M.timestamp&&(n=!1),n)return;
let{
layout:r,layoutId:i
}
=this.options;
if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;
As(this.layoutCorrected,this.layout.layoutBox);
let a=this.treeScale.x,o=this.treeScale.y;
Uo(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=B());
let{
target:s
}
=e;
if(!s){
this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());
return
}
!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(js(this.prevProjectionDelta.x,this.projectionDelta.x),js(this.prevProjectionDelta.y,this.projectionDelta.y)),Vs(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!ac(this.projectionDelta.x,this.prevProjectionDelta.x)||!ac(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),xt.value&&Tc.calculatedProjections++
}
hide(){
this.isVisible=!1
}
show(){
this.isVisible=!0
}
scheduleRender(e=!0){
if(this.options.visualElement?.scheduleRender(),e){
let e=this.getStack();
e&&e.scheduleRender()
}
this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)
}
createProjectionDeltas(){
this.prevProjectionDelta=uo(),this.projectionDelta=uo(),this.projectionDeltaWithTransform=uo()
}
setAnimationOrigin(e,t=!1){
let n=this.snapshot,r=n?n.latestValues:{

}
,i={
...this.latestValues
}
,a=uo();
(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;
let o=B(),s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),c=this.getStack(),l=!c||c.members.length<=1,u=!!(s&&!l&&this.options.crossfade===!0&&!this.path.some(Yc));
this.animationProgress=0;
let d;
this.mixTargetDelta=t=>{
let n=t/1e3;
Kc(a.x,e.x,n),Kc(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Gs(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Jc(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&tc(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||=B(),As(d,this.relativeTarget)),s&&(this.animationValues=i,fc(i,r,this.latestValues,n,u,l)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n
}
,this.mixTargetDelta(this.options.layoutRoot?1e3:0)
}
startAnimation(e){
this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(Tt(this.pendingAnimation),void 0),this.pendingAnimation=j.update(()=>{
wc.hasAnimatedSinceResize=!0,At.layout++,this.motionValue||=Bi(0),this.motionValue.jump(0,!1),this.currentAnimation=_c(this.motionValue,[0,1e3],{
...e,velocity:0,isSync:!0,onUpdate:t=>{
this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)
}
,onStop:()=>{
At.layout--
}
,onComplete:()=>{
At.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()
}

}
),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0
}
)
}
completeAnimation(){
this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);
let e=this.getStack();
e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)
}
finishAnimation(){
this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Dc),this.currentAnimation.stop()),this.completeAnimation()
}
applyTransformsToTarget(){
let e=this.getLead(),{
targetWithTransforms:t,target:n,layout:r,latestValues:i
}
=e;
if(!(!t||!n||!r)){
if(this!==e&&this.layout&&r&&tl(this.options.animationType,this.layout.layoutBox,r.layoutBox)){
n=this.target||B();
let t=Rs(this.layout.layoutBox.x);
n.x.min=e.target.x.min,n.x.max=n.x.min+t;
let r=Rs(this.layout.layoutBox.y);
n.y.min=e.target.y.min,n.y.max=n.y.min+r
}
As(t,n),qo(t,i),Vs(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)
}

}
registerSharedNode(e,t){
this.sharedNodes.has(e)||this.sharedNodes.set(e,new Cc),this.sharedNodes.get(e).add(t);
let n=t.options.initialPromotionConfig;
t.promote({
transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0
}
)
}
isLead(){
let e=this.getStack();
return e?e.lead===this:!0
}
getLead(){
let{
layoutId:e
}
=this.options;
return e&&this.getStack()?.lead||this
}
getPrevLead(){
let{
layoutId:e
}
=this.options;
return e?this.getStack()?.prevLead:void 0
}
getStack(){
let{
layoutId:e
}
=this.options;
if(e)return this.root.sharedNodes.get(e)
}
promote({
needsReset:e,transition:t,preserveFollowOpacity:n
}
={

}
){
let r=this.getStack();
r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({
transition:t
}
)
}
relegate(){
let e=this.getStack();
return e?e.relegate(this):!1
}
resetSkewAndRotation(){
let{
visualElement:e
}
=this.options;
if(!e)return;
let t=!1,{
latestValues:n
}
=e;
if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;
let r={

}
;
n.z&&kc(`z`,e,r,this.animationValues);
for(let t=0;
t<Ec.length;
t++)kc(`rotate${
Ec[t]
}
`,e,r,this.animationValues),kc(`skew${
Ec[t]
}
`,e,r,this.animationValues);
e.render();
for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);
e.scheduleRender()
}
applyProjectionStyles(e,t){
if(!this.instance||this.isSVG)return;
if(!this.isVisible){
e.visibility=`hidden`;
return
}
let n=this.getTransformTemplate();
if(this.needsReset){
this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=Sc(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;
return
}
let r=this.getLead();
if(!this.projectionDelta||!this.layout||!r.target){
this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=Sc(t?.pointerEvents)||``),this.hasProjected&&!Po(this.latestValues)&&(e.transform=n?n({

}
,``):`none`,this.hasProjected=!1);
return
}
e.visibility=``;
let i=r.animationValues||r.latestValues;
this.applyTransformsToTarget();
let a=sc(this.projectionDeltaWithTransform,this.treeScale,i);
n&&(a=n(i,a)),e.transform=a;
let{
x:o,y:s
}
=this.projectionDelta;
e.transformOrigin=`${
o.origin*100
}
% ${
s.origin*100
}
% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;
for(let t in is){
if(i[t]===void 0)continue;
let{
correct:n,applyTo:o,isCSSVariable:s
}
=is[t],c=a===`none`?i[t]:n(i[t],r);
if(o){
let t=o.length;
for(let n=0;
n<t;
n++)e[o[n]]=c
}
else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c
}
this.options.layoutId&&(e.pointerEvents=r===this?Sc(t?.pointerEvents)||``:`none`)
}
clearSnapshot(){
this.resumeFrom=this.snapshot=void 0
}
resetTree(){
this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(Lc),this.root.sharedNodes.clear()
}

}

}
function Mc(e){
e.updateLayout()
}
function Nc(e){
let t=e.resumeFrom?.snapshot||e.snapshot;
if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){
let{
layoutBox:n,measuredBox:r
}
=e.layout,{
animationType:i
}
=e.options,a=t.source!==e.layout.source;
if(i===`size`)oc(e=>{
let r=a?t.measuredBox[e]:t.layoutBox[e],i=Rs(r);
r.min=n[e].min,r.max=r.min+i
}
);
else if(i===`x`||i===`y`){
let e=i===`x`?`y`:`x`;
ks(a?t.measuredBox[e]:t.layoutBox[e],n[e])
}
else tl(i,t.layoutBox,n)&&oc(r=>{
let i=a?t.measuredBox[r]:t.layoutBox[r],o=Rs(n[r]);
i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)
}
);
let o=uo();
Vs(o,n,t.layoutBox);
let s=uo();
a?Vs(s,e.applyTransform(r,!0),t.measuredBox):Vs(s,n,t.layoutBox);
let c=!$s(o),l=!1;
if(!e.resumeFrom){
let r=e.getClosestProjectingParent();
if(r&&!r.resumeFrom){
let{
snapshot:i,layout:a
}
=r;
if(i&&a){
let o=e.options.layoutAnchor||void 0,s=B();
Gs(s,t.layoutBox,i.layoutBox,o);
let c=B();
Gs(c,n,a.layoutBox,o),rc(s,c)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=s,e.relativeParent=r)
}

}

}
e.notifyListeners(`didUpdate`,{
layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l
}
)
}
else if(e.isLead()){
let{
onExitComplete:t
}
=e.options;
t&&t()
}
e.options.transition=void 0
}
function Pc(e){
xt.value&&Tc.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)
}
function Fc(e){
e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1
}
function Ic(e){
e.clearSnapshot()
}
function Lc(e){
e.clearMeasurements()
}
function Rc(e){
e.isLayoutDirty=!0,e.updateLayout()
}
function U(e){
e.isLayoutDirty=!1
}
function zc(e){
e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)
}
function Bc(e){
let{
visualElement:t
}
=e.options;
t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()
}
function Vc(e){
e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0
}
function Hc(e){
e.resolveTargetDelta()
}
function Uc(e){
e.calcProjection()
}
function Wc(e){
e.resetSkewAndRotation()
}
function Gc(e){
e.removeLeadSnapshot()
}
function Kc(e,t,n){
e.translate=F(t.translate,0,n),e.scale=F(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint
}
function qc(e,t,n,r){
e.min=F(t.min,n.min,r),e.max=F(t.max,n.max,r)
}
function Jc(e,t,n,r){
qc(e.x,t.x,n.x,r),qc(e.y,t.y,n.y,r)
}
function Yc(e){
return e.animationValues&&e.animationValues.opacityExit!==void 0
}
var Xc={
duration:.45,ease:[.4,0,.1,1]
}
,Zc=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Qc=Zc(`applewebkit/`)&&!Zc(`chrome/`)?Math.round:We;
function $c(e){
e.min=Qc(e.min),e.max=Qc(e.max)
}
function el(e){
$c(e.x),$c(e.y)
}
function tl(e,t,n){
return e===`position`||e===`preserve-aspect`&&!zs(ic(t),ic(n),.2)
}
function nl(e){
return e!==e.root&&e.scroll?.wasRoot
}
var rl=jc({
attachResizeListener:(e,t)=>vc(e,`resize`,t),measureScroll:()=>({
x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0
}
),checkIsScrollRoot:()=>!0
}
),il={
current:void 0
}
,al=jc({
measureScroll:e=>({
x:e.scrollLeft,y:e.scrollTop
}
),defaultParent:()=>{
if(!il.current){
let e=new rl({

}
);
e.mount(window),e.setOptions({
layoutScroll:!0
}
),il.current=e
}
return il.current
}
,resetTransform:(e,t)=>{
e.style.transform=t===void 0?`none`:t
}
,checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`
}
),ol=(0,b.createContext)({
transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`
}
);
function sl(e,t){
if(typeof e==`function`)return e(t);
e!=null&&(e.current=t)
}
function cl(...e){
return t=>{
let n=!1,r=e.map(e=>{
let r=sl(e,t);
return!n&&typeof r==`function`&&(n=!0),r
}
);
if(n)return()=>{
for(let t=0;
t<r.length;
t++){
let n=r[t];
typeof n==`function`?n():sl(e[t],null)
}

}

}

}
function W(...e){
return b.useCallback(cl(...e),e)
}
var ll=class extends b.Component{
getSnapshotBeforeUpdate(e){
let t=this.props.childRef.current;
if(Ca(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){
let e=t.offsetParent,n=Ca(e)&&e.offsetWidth||0,r=Ca(e)&&e.offsetHeight||0,i=getComputedStyle(t),a=this.props.sizeRef.current;
a.height=parseFloat(i.height),a.width=parseFloat(i.width),a.top=t.offsetTop,a.left=t.offsetLeft,a.right=n-a.width-a.left,a.bottom=r-a.height-a.top
}
return null
}
componentDidUpdate(){

}
render(){
return this.props.children
}

}
;
function ul({
children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:a
}
){
let o=(0,b.useId)(),s=(0,b.useRef)(null),c=(0,b.useRef)({
width:0,height:0,top:0,left:0,right:0,bottom:0
}
),{
nonce:l
}
=(0,b.useContext)(ol),u=W(s,e.props?.ref??e?.ref);
return(0,b.useInsertionEffect)(()=>{
let{
width:e,height:u,top:d,left:f,right:p,bottom:m
}
=c.current;
if(t||a===!1||!s.current||!e||!u)return;
let h=n===`left`?`left: ${
f
}
`:`right: ${
p
}
`,g=r===`bottom`?`bottom: ${
m
}
`:`top: ${
d
}
`;
s.current.dataset.motionPopId=o;
let _=document.createElement(`style`);
l&&(_.nonce=l);
let v=i??document.head;
return v.appendChild(_),_.sheet&&_.sheet.insertRule(`
          [data-motion-pop-id="${
o
}
"] {

            position: absolute !important;

            width: ${
e
}
px !important;

            height: ${
u
}
px !important;

            ${
h
}
px !important;

            ${
g
}
px !important;

          
}

        `),()=>{
s.current?.removeAttribute(`data-motion-pop-id`),v.contains(_)&&v.removeChild(_)
}

}
,[t]),(0,T.jsx)(ll,{
isPresent:t,childRef:s,sizeRef:c,pop:a,children:a===!1?e:b.cloneElement(e,{
ref:u
}
)
}
)
}
var dl=({
children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l
}
)=>{
let u=Ne(fl),d=(0,b.useId)(),f=!0,p=(0,b.useMemo)(()=>(f=!1,{
id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{
u.set(e,!0);
for(let e of u.values())if(!e)return;
r&&r()
}
,register:e=>(u.set(e,!1),()=>u.delete(e))
}
),[n,u,r]);
return a&&f&&(p={
...p
}
),(0,b.useMemo)(()=>{
u.forEach((e,t)=>u.set(t,!1))
}
,[n]),b.useEffect(()=>{
!n&&!u.size&&r&&r()
}
,[n]),e=(0,T.jsx)(ul,{
pop:o===`popLayout`,isPresent:n,anchorX:s,anchorY:c,root:l,children:e
}
),(0,T.jsx)(Fe.Provider,{
value:p,children:e
}
)
}
;
function fl(){
return new Map
}
function pl(e=!0){
let t=(0,b.useContext)(Fe);
if(t===null)return[!0,null];
let{
isPresent:n,onExitComplete:r,register:i
}
=t,a=(0,b.useId)();
(0,b.useEffect)(()=>{
if(e)return i(a)
}
,[e]);
let o=(0,b.useCallback)(()=>e&&r&&r(a),[a,r,e]);
return!n&&r?[!1,o]:[!0]
}
var ml=e=>e.key||``;
function hl(e){
let t=[];
return b.Children.forEach(e,e=>{
(0,b.isValidElement)(e)&&t.push(e)
}
),t
}
var gl=({
children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l
}
)=>{
let[u,d]=pl(o),f=(0,b.useMemo)(()=>hl(e),[e]),p=o&&!u?[]:f.map(ml),m=(0,b.useRef)(!0),h=(0,b.useRef)(f),g=Ne(()=>new Map),_=(0,b.useRef)(new Set),[v,y]=(0,b.useState)(f),[x,S]=(0,b.useState)(f);
Pe(()=>{
m.current=!1,h.current=f;
for(let e=0;
e<x.length;
e++){
let t=ml(x[e]);
p.includes(t)?(g.delete(t),_.current.delete(t)):g.get(t)!==!0&&g.set(t,!1)
}

}
,[x,p.length,p.join(`-`)]);
let C=[];
if(f!==v){
let e=[...f];
for(let t=0;
t<x.length;
t++){
let n=x[t],r=ml(n);
p.includes(r)||(e.splice(t,0,n),C.push(n))
}
return a===`wait`&&C.length&&(e=C),S(hl(e)),y(f),null
}
let{
forceRender:w
}
=(0,b.useContext)(Me);
return(0,T.jsx)(T.Fragment,{
children:x.map(e=>{
let v=ml(e),y=o&&!u?!1:f===x||p.includes(v);
return(0,T.jsx)(dl,{
isPresent:y,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:y?void 0:()=>{
if(_.current.has(v))return;
if(g.has(v))_.current.add(v),g.set(v,!0);
else return;
let e=!0;
g.forEach(t=>{
t||(e=!1)
}
),e&&(w?.(),S(h.current),o&&d?.(),r&&r())
}
,anchorX:s,anchorY:c,children:e
}
,v)
}
)
}
)
}
,_l=(0,b.createContext)({
strict:!1
}
),vl={
animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]
}
,yl=!1;
function bl(){
if(yl)return;
let e={

}
;
for(let t in vl)e[t]={
isEnabled:e=>vl[t].some(t=>!!e[t])
}
;
wo(e),yl=!0
}
function xl(){
return bl(),To()
}
function Sl(e){
let t=xl();
for(let n in e)t[n]={
...t[n],...e[n]
}
;
wo(t)
}
var Cl=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));
function wl(e){
return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||Cl.has(e)
}
var Tl=c({
default:()=>El
}
),El,Dl=o((()=>{
throw El={

}
,Error(`Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`)
}
)),Ol=e=>!wl(e);
function kl(e){
typeof e==`function`&&(Ol=t=>t.startsWith(`on`)?!wl(t):e(t))
}
try{
kl((Dl(),d(Tl)).default)
}
catch{

}
function Al(e,t,n){
let r={

}
;
for(let i in e)i===`values`&&typeof e.values==`object`||Gi(e[i])||(Ol(i)||n===!0&&wl(i)||!t&&!wl(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]);
return r
}
var jl=(0,b.createContext)({

}
);
function Ml(e,t){
if(ho(e)){
let{
initial:t,animate:n
}
=e;
return{
initial:t===!1||H(t)?t:void 0,animate:H(n)?n:void 0
}

}
return e.inherit===!1?{

}
:t
}
function Nl(e){
let{
initial:t,animate:n
}
=Ml(e,(0,b.useContext)(jl));
return(0,b.useMemo)(()=>({
initial:t,animate:n
}
),[Pl(t),Pl(n)])
}
function Pl(e){
return Array.isArray(e)?e.join(` `):e
}
var Fl=()=>({
style:{

}
,transform:{

}
,transformOrigin:{

}
,vars:{

}

}
);
function Il(e,t,n){
for(let r in t)!Gi(t[r])&&!as(r,n)&&(e[r]=t[r])
}
function Ll({
transformTemplate:e
}
,t){
return(0,b.useMemo)(()=>{
let n=Fl();
return $o(n,t,e),Object.assign({

}
,n.vars,n.style)
}
,[t])
}
function Rl(e,t){
let n=e.style||{

}
,r={

}
;
return Il(r,n,e),Object.assign(r,Ll(e,t)),r
}
function zl(e,t){
let n={

}
,r=Rl(e,t);
return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${
e.drag===`x`?`y`:`x`
}
`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n
}
var G=()=>({
...Fl(),attrs:{

}

}
);
function K(e,t,n,r){
let i=(0,b.useMemo)(()=>{
let n=G();
return ps(n,t,hs(r),e.transformTemplate,e.style),{
...n.attrs,style:{
...n.style
}

}

}
,[t]);
if(e.style){
let t={

}
;
Il(t,e.style,e),i.style={
...t,...i.style
}

}
return i
}
var q=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];
function J(e){
return typeof e!=`string`||e.includes(`-`)?!1:!!(q.indexOf(e)>-1||/[A-Z]/u.test(e))
}
function Y(e,t,n,{
latestValues:r
}
,i,a=!1,o){
let s=(o??J(e)?K:zl)(t,r,i,e),c=Al(t,typeof e==`string`,a),l=e===b.Fragment?{

}
:{
...c,...s,ref:n
}
,{
children:u
}
=t,d=(0,b.useMemo)(()=>Gi(u)?u.get():u,[u]);
return(0,b.createElement)(e,{
...l,children:d
}
)
}
function Bl({
scrapeMotionValuesFromProps:e,createRenderState:t
}
,n,r,i){
return{
latestValues:Vl(n,r,i,e),renderState:t()
}

}
function Vl(e,t,n,r){
let i={

}
,a=r(e,{

}
);
for(let e in a)i[e]=Sc(a[e]);
let{
initial:o,animate:s
}
=e,c=ho(e),l=go(e);
t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));
let u=n?n.initial===!1:!1;
u||=o===!1;
let d=u?s:o;
if(d&&typeof d!=`boolean`&&!V(d)){
let t=Array.isArray(d)?d:[d];
for(let n=0;
n<t.length;
n++){
let r=Fi(e,t[n]);
if(r){
let{
transitionEnd:e,transition:t,...n
}
=r;
for(let e in n){
let t=n[e];
if(Array.isArray(t)){
let e=u?t.length-1:0;
t=t[e]
}
t!==null&&(i[e]=t)
}
for(let t in e)i[t]=e[t]
}

}

}
return i
}
var Hl=e=>(t,n)=>{
let r=(0,b.useContext)(jl),i=(0,b.useContext)(Fe),a=()=>Bl(e,t,r,i);
return n?a():Ne(a)
}
,Ul=Hl({
scrapeMotionValuesFromProps:os,createRenderState:Fl
}
),Wl=Hl({
scrapeMotionValuesFromProps:_s,createRenderState:G
}
),Gl=Symbol.for(`motionComponentSymbol`);
function Kl(e,t,n){
let r=(0,b.useRef)(n);
(0,b.useInsertionEffect)(()=>{
r.current=n
}
);
let i=(0,b.useRef)(null);
return(0,b.useCallback)(n=>{
n&&e.onMount?.(n);
let a=r.current;
if(typeof a==`function`)if(n){
let e=a(n);
typeof e==`function`&&(i.current=e)
}
else i.current?(i.current(),i.current=null):a(n);
else a&&(a.current=n);
t&&(n?t.mount(n):t.unmount())
}
,[t])
}
var ql=(0,b.createContext)({

}
);
function Jl(e){
return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)
}
function Yl(e,t,n,r,i,a){
let{
visualElement:o
}
=(0,b.useContext)(jl),s=(0,b.useContext)(_l),c=(0,b.useContext)(Fe),l=(0,b.useContext)(ol),u=l.reducedMotion,d=l.skipAnimations,f=(0,b.useRef)(null),p=(0,b.useRef)(!1);
r||=s.renderer,!f.current&&r&&(f.current=r(e,{
visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a
}
),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));
let m=f.current,h=(0,b.useContext)(ql);
m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&Xl(f.current,n,i,h);
let g=(0,b.useRef)(!1);
(0,b.useInsertionEffect)(()=>{
m&&g.current&&m.update(n,c)
}
);
let _=n[Yi],v=(0,b.useRef)(!!_&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(_)&&window.MotionHasOptimisedAnimation?.(_));
return Pe(()=>{
p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())
}
),(0,b.useEffect)(()=>{
m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&=(queueMicrotask(()=>{
window.MotionHandoffMarkAsComplete?.(_)
}
),!1),m.enteringChildren=void 0)
}
),m
}
function Xl(e,t,n,r){
let{
layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutAnchor:u,layoutCrossfade:d
}
=t;
e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:Zl(e.parent)),e.projection.setOptions({
layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&Jl(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:l,layoutAnchor:u
}
)
}
function Zl(e){
if(e)return e.options.allowProjection===!1?Zl(e.parent):e.projection
}
function Ql(e,{
forwardMotionProps:t=!1,type:n
}
={

}
,r,i){
r&&Sl(r);
let a=n?n===`svg`:J(e),o=a?Wl:Ul;
function s(n,s){
let c,l={
...(0,b.useContext)(ol),...n,layoutId:$l(n)
}
,{
isStatic:u
}
=l,d=Nl(n),f=o(n,u);
if(!u&&typeof window<`u`){
eu(l,r);
let t=tu(l);
c=t.MeasureLayout,d.visualElement=Yl(e,f,l,i,t.ProjectionNode,a)
}
return(0,T.jsxs)(jl.Provider,{
value:d,children:[c&&d.visualElement?(0,T.jsx)(c,{
visualElement:d.visualElement,...l
}
):null,Y(e,n,Kl(f,d.visualElement,s),f,u,t,a)]
}
)
}
s.displayName=`motion.${
typeof e==`string`?e:`create(${
e.displayName??e.name??``
}
)`
}
`;
let c=(0,b.forwardRef)(s);
return c[Gl]=e,c
}
function $l({
layoutId:e
}
){
let t=(0,b.useContext)(Me).id;
return t&&e!==void 0?t+`-`+e:e
}
function eu(e,t){
(0,b.useContext)(_l).strict
}
function tu(e){
let{
drag:t,layout:n
}
=xl();
if(!t&&!n)return{

}
;
let r={
...t,...n
}
;
return{
MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode
}

}
function nu(e,t){
if(typeof Proxy>`u`)return Ql;
let n=new Map,r=(n,r)=>Ql(n,r,e,t);
return new Proxy((e,t)=>r(e,t),{
get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,Ql(a,void 0,e,t)),n.get(a))
}
)
}
var ru=(e,t)=>t.isSVG??J(e)?new vs(t):new cs(t,{
allowProjection:e!==b.Fragment
}
),iu=class extends Oo{
constructor(e){
super(e),e.animationState||=Ts(e)
}
updateAnimationControlsSubscription(){
let{
animate:e
}
=this.node.getProps();
V(e)&&(this.unmountControls=e.subscribe(this.node))
}
mount(){
this.updateAnimationControlsSubscription()
}
update(){
let{
animate:e
}
=this.node.getProps(),{
animate:t
}
=this.node.prevProps||{

}
;
e!==t&&this.updateAnimationControlsSubscription()
}
unmount(){
this.node.animationState.reset(),this.unmountControls?.()
}

}
,au=0,ou={
animation:{
Feature:iu
}
,exit:{
Feature:class extends Oo{
constructor(){
super(...arguments),this.id=au++,this.isExitComplete=!1
}
update(){
if(!this.node.presenceContext)return;
let{
isPresent:e,onExitComplete:t
}
=this.node.presenceContext,{
isPresent:n
}
=this.node.prevPresenceContext||{

}
;
if(!this.node.animationState||e===n)return;
if(e&&n===!1){
if(this.isExitComplete){
let{
initial:e,custom:t
}
=this.node.getProps();
if(typeof e==`string`){
let n=L(this.node,e,t);
if(n){
let{
transition:e,transitionEnd:t,...r
}
=n;
for(let e in r)this.node.getValue(e)?.jump(r[e])
}

}
this.node.animationState.reset(),this.node.animationState.animateChanges()
}
else this.node.animationState.setActive(`exit`,!1);
this.isExitComplete=!1;
return
}
let r=this.node.animationState.setActive(`exit`,!e);
t&&!e&&r.then(()=>{
this.isExitComplete=!0,t(this.id)
}
)
}
mount(){
let{
register:e,onExitComplete:t
}
=this.node.presenceContext||{

}
;
t&&t(this.id),e&&(this.unmount=e(this.id))
}
unmount(){

}

}

}

}
;
function su(e){
return{
point:{
x:e.pageX,y:e.pageY
}

}

}
var cu=e=>t=>Na(t)&&e(t,su(t));
function lu(e,t,n,r){
return vc(e,t,cu(n),r)
}
var uu=({
current:e
}
)=>e?e.ownerDocument.defaultView:null,du=(e,t)=>Math.abs(e-t);
function fu(e,t){
let n=du(e.x,t.x),r=du(e.y,t.y);
return Math.sqrt(n**2+r**2)
}
var pu=new Set([`auto`,`scroll`]),mu=class{
constructor(e,t,{
transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o
}
={

}
){
if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={

}
,this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{
this.handleScroll(e.target)
}
,this.onWindowScroll=()=>{
this.handleScroll(window)
}
,this.updatePoint=()=>{
if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;
this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=hu(this.lastRawMoveEventInfo,this.transformPagePoint));
let e=_u(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=fu(e.offset,{
x:0,y:0
}
)>=this.distanceThreshold;
if(!t&&!n)return;
let{
point:r
}
=e,{
timestamp:i
}
=M;
this.history.push({
...r,timestamp:i
}
);
let{
onStart:a,onMove:o
}
=this.handlers;
t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)
}
,this.handlePointerMove=(e,t)=>{
this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=hu(t,this.transformPagePoint),j.update(this.updatePoint,!0)
}
,this.handlePointerUp=(e,t)=>{
this.end();
let{
onEnd:n,onSessionEnd:r,resumeAnimation:i
}
=this.handlers;
if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;
let a=_u(e.type===`pointercancel`?this.lastMoveEventInfo:hu(t,this.transformPagePoint),this.history);
this.startEvent&&n&&n(e,a),r&&r(e,a)
}
,!Na(e))return;
this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;
let s=hu(su(e),this.transformPagePoint),{
point:c
}
=s,{
timestamp:l
}
=M;
this.history=[{
...c,timestamp:l
}
];
let{
onSessionStart:u
}
=t;
u&&u(e,_u(s,this.history)),this.removeListeners=Ke(lu(this.contextWindow,`pointermove`,this.handlePointerMove),lu(this.contextWindow,`pointerup`,this.handlePointerUp),lu(this.contextWindow,`pointercancel`,this.handlePointerUp)),o&&this.startScrollTracking(o)
}
startScrollTracking(e){
let t=e.parentElement;
for(;
t;
){
let e=getComputedStyle(t);
(pu.has(e.overflowX)||pu.has(e.overflowY))&&this.scrollPositions.set(t,{
x:t.scrollLeft,y:t.scrollTop
}
),t=t.parentElement
}
this.scrollPositions.set(window,{
x:window.scrollX,y:window.scrollY
}
),window.addEventListener(`scroll`,this.onElementScroll,{
capture:!0
}
),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{
window.removeEventListener(`scroll`,this.onElementScroll,{
capture:!0
}
),window.removeEventListener(`scroll`,this.onWindowScroll)
}

}
handleScroll(e){
let t=this.scrollPositions.get(e);
if(!t)return;
let n=e===window,r=n?{
x:window.scrollX,y:window.scrollY
}
:{
x:e.scrollLeft,y:e.scrollTop
}
,i={
x:r.x-t.x,y:r.y-t.y
}
;
i.x===0&&i.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),j.update(this.updatePoint,!0))
}
updateHandlers(e){
this.handlers=e
}
end(){
this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Tt(this.updatePoint)
}

}
;
function hu(e,t){
return t?{
point:t(e.point)
}
:e
}
function gu(e,t){
return{
x:e.x-t.x,y:e.y-t.y
}

}
function _u({
point:e
}
,t){
return{
point:e,delta:gu(e,yu(t)),offset:gu(e,vu(t)),velocity:bu(t,.1)
}

}
function vu(e){
return e[0]
}
function yu(e){
return e[e.length-1]
}
function bu(e,t){
if(e.length<2)return{
x:0,y:0
}
;
let n=e.length-1,r=null,i=yu(e);
for(;
n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Ye(t)));
)n--;
if(!r)return{
x:0,y:0
}
;
r===e[0]&&e.length>2&&i.timestamp-r.timestamp>Ye(t)*2&&(r=e[1]);
let a=Xe(i.timestamp-r.timestamp);
if(a===0)return{
x:0,y:0
}
;
let o={
x:(i.x-r.x)/a,y:(i.y-r.y)/a
}
;
return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o
}
function xu(e,{
min:t,max:n
}
,r){
return t!==void 0&&e<t?e=r?F(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?F(n,e,r.max):Math.min(e,n)),e
}
function Su(e,t,n){
return{
min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)
}

}
function Cu(e,{
top:t,left:n,bottom:r,right:i
}
){
return{
x:Su(e.x,n,i),y:Su(e.y,t,r)
}

}
function wu(e,t){
let n=t.min-e.min,r=t.max-e.max;
return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{
min:n,max:r
}

}
function Tu(e,t){
return{
x:wu(e.x,t.x),y:wu(e.y,t.y)
}

}
function Eu(e,t){
let n=.5,r=Rs(e),i=Rs(t);
return i>r?n=qe(t.min,t.max-r,e.min):r>i&&(n=qe(e.min,e.max-i,t.min)),Re(0,1,n)
}
function Du(e,t){
let n={

}
;
return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n
}
var Ou=.35;
function ku(e=Ou){
return e===!1?e=0:e===!0&&(e=Ou),{
x:Au(e,`left`,`right`),y:Au(e,`top`,`bottom`)
}

}
function Au(e,t,n){
return{
min:ju(e,t),max:ju(e,n)
}

}
function ju(e,t){
return typeof e==`number`?e:e[t]||0
}
var Mu=new WeakMap,Nu=class{
constructor(e){
this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={
x:0,y:0
}
,this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=B(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e
}
start(e,{
snapToCursor:t=!1,distanceThreshold:n
}
={

}
){
let{
presenceContext:r
}
=this.visualElement;
if(r&&r.isPresent===!1)return;
let i=e=>{
t&&this.snapToCursor(su(e).point),this.stopAnimation()
}
,a=(e,t)=>{
let{
drag:n,dragPropagation:r,onDragStart:i
}
=this.getProps();
if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Oa(n),!this.openDragLock))return;
this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),oc(e=>{
let t=this.getAxisMotionValue(e).get()||0;
if($t.test(t)){
let{
projection:n
}
=this.visualElement;
if(n&&n.layout){
let r=n.layout.layoutBox[e];
r&&(t=Rs(r)*(parseFloat(t)/100))
}

}
this.originPoint[e]=t
}
),i&&j.update(()=>i(e,t),!1,!0),qi(this.visualElement,`transform`);
let{
animationState:a
}
=this.visualElement;
a&&a.setActive(`whileDrag`,!0)
}
,o=(e,t)=>{
this.latestPointerEvent=e,this.latestPanInfo=t;
let{
dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a
}
=this.getProps();
if(!n&&!this.openDragLock)return;
let{
offset:o
}
=t;
if(r&&this.currentDirection===null){
this.currentDirection=Lu(o),this.currentDirection!==null&&i&&i(this.currentDirection);
return
}
this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&j.update(()=>a(e,t),!1,!0)
}
,s=(e,t)=>{
this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null
}
,c=()=>{
let{
dragSnapToOrigin:e
}
=this.getProps();
(e||this.constraints)&&this.startAnimation({
x:0,y:0
}
)
}
,{
dragSnapToOrigin:l
}
=this.getProps();
this.panSession=new mu(e,{
onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c
}
,{
transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:uu(this.visualElement),element:this.visualElement.current
}
)
}
stop(e,t){
let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;
if(this.cancel(),!i||!r||!n)return;
let{
velocity:a
}
=r;
this.startAnimation(a);
let{
onDragEnd:o
}
=this.getProps();
o&&j.postRender(()=>o(n,r))
}
cancel(){
this.isDragging=!1;
let{
projection:e,animationState:t
}
=this.visualElement;
e&&(e.isAnimationBlocked=!1),this.endPanSession();
let{
dragPropagation:n
}
=this.getProps();
!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)
}
endPanSession(){
this.panSession&&this.panSession.end(),this.panSession=void 0
}
updateAxis(e,t,n){
let{
drag:r
}
=this.getProps();
if(!n||!Iu(e,r,this.currentDirection))return;
let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];
this.constraints&&this.constraints[e]&&(a=xu(a,this.constraints[e],this.elastic[e])),i.set(a)
}
resolveConstraints(){
let{
dragConstraints:e,dragElastic:t
}
=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;
e&&Jl(e)?this.constraints||=this.resolveRefConstraints():e&&n?this.constraints=Cu(n.layoutBox,e):this.constraints=!1,this.elastic=ku(t),r!==this.constraints&&!Jl(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&oc(e=>{
this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=Du(n.layoutBox[e],this.constraints[e]))
}
)
}
resolveRefConstraints(){
let{
dragConstraints:e,onMeasureDragConstraints:t
}
=this.getProps();
if(!e||!Jl(e))return!1;
let n=e.current,{
projection:r
}
=this.visualElement;
if(!r||!r.layout)return!1;
let i=Yo(n,r.root,this.visualElement.getTransformPagePoint()),a=Tu(r.layout.layoutBox,i);
if(t){
let e=t(Ao(a));
this.hasMutatedConstraints=!!e,e&&(a=ko(e))
}
return a
}
startAnimation(e){
let{
drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o
}
=this.getProps(),s=this.constraints||{

}
,c=oc(o=>{
if(!Iu(o,t,this.currentDirection))return;
let c=s&&s[o]||{

}
;
(a===!0||a===o)&&(c={
min:0,max:0
}
);
let l=r?200:1e6,u=r?40:1e7,d={
type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c
}
;
return this.startAxisValueAnimation(o,d)
}
);
return Promise.all(c).then(o)
}
startAxisValueAnimation(e,t){
let n=this.getAxisMotionValue(e);
return qi(this.visualElement,e),n.start(Ni(e,n,0,t,this.visualElement,!1))
}
stopAnimation(){
oc(e=>this.getAxisMotionValue(e).stop())
}
getAxisMotionValue(e){
let t=`_drag${
e.toUpperCase()
}
`,n=this.visualElement.getProps();
return n[t]||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)
}
snapToCursor(e){
oc(t=>{
let{
drag:n
}
=this.getProps();
if(!Iu(t,n,this.currentDirection))return;
let{
projection:r
}
=this.visualElement,i=this.getAxisMotionValue(t);
if(r&&r.layout){
let{
min:n,max:a
}
=r.layout.layoutBox[t],o=i.get()||0;
i.set(e[t]-F(n,a,.5)+o)
}

}
)
}
scalePositionWithinConstraints(){
if(!this.visualElement.current)return;
let{
drag:e,dragConstraints:t
}
=this.getProps(),{
projection:n
}
=this.visualElement;
if(!Jl(t)||!n||!this.constraints)return;
this.stopAnimation();
let r={
x:0,y:0
}
;
oc(e=>{
let t=this.getAxisMotionValue(e);
if(t&&this.constraints!==!1){
let n=t.get();
r[e]=Eu({
min:n,max:n
}
,this.constraints[e])
}

}
);
let{
transformTemplate:i
}
=this.visualElement.getProps();
this.visualElement.current.style.transform=i?i({

}
,``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),oc(t=>{
if(!Iu(t,e,null))return;
let n=this.getAxisMotionValue(t),{
min:i,max:a
}
=this.constraints[t];
n.set(F(i,a,r[t]))
}
),this.visualElement.render()
}
addListeners(){
if(!this.visualElement.current)return;
Mu.set(this.visualElement,this);
let e=this.visualElement.current,t=lu(e,`pointerdown`,t=>{
let{
drag:n,dragListener:r=!0
}
=this.getProps(),i=t.target,a=i!==e&&La(i);
n&&r&&!a&&this.start(t)
}
),n,r=()=>{
let{
dragConstraints:t
}
=this.getProps();
Jl(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=Fu(e,t.current,()=>this.scalePositionWithinConstraints()))
}
,{
projection:i
}
=this.visualElement,a=i.addEventListener(`measure`,r);
i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),j.read(r);
let o=vc(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({
delta:e,hasLayoutChanged:t
}
)=>{
this.isDragging&&t&&(oc(t=>{
let n=this.getAxisMotionValue(t);
n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))
}
),this.visualElement.render())
}
));
return()=>{
o(),t(),a(),s&&s(),n&&n()
}

}
getProps(){
let e=this.visualElement.getProps(),{
drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=Ou,dragMomentum:o=!0
}
=e;
return{
...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o
}

}

}
;
function Pu(e){
let t=!0;
return()=>{
if(t){
t=!1;
return
}
e()
}

}
function Fu(e,t,n){
let r=ao(e,Pu(n)),i=ao(t,Pu(n));
return()=>{
r(),i()
}

}
function Iu(e,t,n){
return(t===!0||t===e)&&(n===null||n===e)
}
function Lu(e,t=10){
let n=null;
return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n
}
var Ru=class extends Oo{
constructor(e){
super(e),this.removeGroupControls=We,this.removeListeners=We,this.controls=new Nu(e)
}
mount(){
let{
dragControls:e
}
=this.node.getProps();
e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||We
}
update(){
let{
dragControls:e
}
=this.node.getProps(),{
dragControls:t
}
=this.node.prevProps||{

}
;
e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))
}
unmount(){
this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()
}

}
,zu=e=>(t,n)=>{
e&&j.update(()=>e(t,n),!1,!0)
}
,Bu=class extends Oo{
constructor(){
super(...arguments),this.removePointerDownListener=We
}
onPointerDown(e){
this.session=new mu(e,this.createPanHandlers(),{
transformPagePoint:this.node.getTransformPagePoint(),contextWindow:uu(this.node)
}
)
}
createPanHandlers(){
let{
onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r
}
=this.node.getProps();
return{
onSessionStart:zu(e),onStart:zu(t),onMove:zu(n),onEnd:(e,t)=>{
delete this.session,r&&j.postRender(()=>r(e,t))
}

}

}
mount(){
this.removePointerDownListener=lu(this.node.current,`pointerdown`,e=>this.onPointerDown(e))
}
update(){
this.session&&this.session.updateHandlers(this.createPanHandlers())
}
unmount(){
this.removePointerDownListener(),this.session&&this.session.end()
}

}
,Vu=!1,Hu=class extends b.Component{
componentDidMount(){
let{
visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r
}
=this.props,{
projection:i
}
=e;
i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),Vu&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{
this.safeToRemove()
}
),i.setOptions({
...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()
}
)),wc.hasEverUpdated=!0
}
getSnapshotBeforeUpdate(e){
let{
layoutDependency:t,visualElement:n,drag:r,isPresent:i
}
=this.props,{
projection:a
}
=n;
return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({
...a.options,layoutDependency:t
}
),Vu=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||j.postRender(()=>{
let e=a.getStack();
(!e||!e.members.length)&&this.safeToRemove()
}
)),null):null
}
componentDidUpdate(){
let{
visualElement:e,layoutAnchor:t
}
=this.props,{
projection:n
}
=e;
n&&(n.options.layoutAnchor=t,n.root.didUpdate(),wa.postRender(()=>{
!n.currentAnimation&&n.isLead()&&this.safeToRemove()
}
))
}
componentWillUnmount(){
let{
visualElement:e,layoutGroup:t,switchLayoutGroup:n
}
=this.props,{
projection:r
}
=e;
Vu=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))
}
safeToRemove(){
let{
safeToRemove:e
}
=this.props;
e&&e()
}
render(){
return null
}

}
;
function Uu(e){
let[t,n]=pl(),r=(0,b.useContext)(Me);
return(0,T.jsx)(Hu,{
...e,layoutGroup:r,switchLayoutGroup:(0,b.useContext)(ql),isPresent:t,safeToRemove:n
}
)
}
var Wu={
pan:{
Feature:Bu
}
,drag:{
Feature:Ru,ProjectionNode:al,MeasureLayout:Uu
}

}
;
function Gu(e,t,n){
let{
props:r
}
=e;
e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);
let i=r[`onHover`+n];
i&&j.postRender(()=>i(t,su(t)))
}
var X=class extends Oo{
mount(){
let{
current:e
}
=this.node;
e&&(this.unmount=ja(e,(e,t)=>(Gu(this.node,t,`Start`),e=>Gu(this.node,e,`End`))))
}
unmount(){

}

}
,Ku=class extends Oo{
constructor(){
super(...arguments),this.isActive=!1
}
onFocus(){
let e=!1;
try{
e=this.node.current.matches(`:focus-visible`)
}
catch{
e=!0
}
!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)
}
onBlur(){
!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)
}
mount(){
this.unmount=Ke(vc(this.node.current,`focus`,()=>this.onFocus()),vc(this.node.current,`blur`,()=>this.onBlur()))
}
unmount(){

}

}
;
function qu(e,t,n){
let{
props:r
}
=e;
if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;
e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);
let i=r[`onTap`+(n===`End`?``:n)];
i&&j.postRender(()=>i(t,su(t)))
}
var Ju=class extends Oo{
mount(){
let{
current:e
}
=this.node;
if(!e)return;
let{
globalTapTarget:t,propagate:n
}
=this.node.props;
this.unmount=Wa(e,(e,t)=>(qu(this.node,t,`Start`),(e,{
success:t
}
)=>qu(this.node,e,t?`End`:`Cancel`)),{
useGlobalTarget:t,stopPropagation:n?.tap===!1
}
)
}
unmount(){

}

}
,Yu=new WeakMap,Xu=new WeakMap,Zu=e=>{
let t=Yu.get(e.target);
t&&t(e)
}
,Qu=e=>{
e.forEach(Zu)
}
;
function $u({
root:e,...t
}
){
let n=e||document;
Xu.has(n)||Xu.set(n,{

}
);
let r=Xu.get(n),i=JSON.stringify(t);
return r[i]||(r[i]=new IntersectionObserver(Qu,{
root:e,...t
}
)),r[i]
}
function ed(e,t,n){
let r=$u(t);
return Yu.set(e,n),r.observe(e),()=>{
Yu.delete(e),r.unobserve(e)
}

}
var td={
some:0,all:1
}
,nd=class extends Oo{
constructor(){
super(...arguments),this.hasEnteredView=!1,this.isInView=!1
}
startObserver(){
this.stopObserver?.();
let{
viewport:e={

}

}
=this.node.getProps(),{
root:t,margin:n,amount:r=`some`,once:i
}
=e,a={
root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:td[r]
}
,o=e=>{
let{
isIntersecting:t
}
=e;
if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;
t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);
let{
onViewportEnter:n,onViewportLeave:r
}
=this.node.getProps(),a=t?n:r;
a&&a(e)
}
;
this.stopObserver=ed(this.node.current,a,o)
}
mount(){
this.startObserver()
}
update(){
if(typeof IntersectionObserver>`u`)return;
let{
props:e,prevProps:t
}
=this.node;
[`amount`,`margin`,`root`].some(rd(e,t))&&this.startObserver()
}
unmount(){
this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1
}

}
;
function rd({
viewport:e={

}

}
,{
viewport:t={

}

}
={

}
){
return n=>e[n]!==t[n]
}
var id={
inView:{
Feature:nd
}
,tap:{
Feature:Ju
}
,focus:{
Feature:Ku
}
,hover:{
Feature:X
}

}
,ad={
layout:{
ProjectionNode:al,MeasureLayout:Uu
}

}
,od=nu({
...ou,...id,...Wu,...ad
}
,ru);
function sd(){
let e=new URLSearchParams(window.location.search).get(`guest`);
return e?decodeURIComponent(e):`Dear Guest`
}
var cd=`/assets/rsvp1-cY4nel37.jpg`;
function ld(){
return(0,T.jsx)(`style`,{
children:`
      /* ── Global box-sizing ── */
      *, *::before, *::after {
 box-sizing: border-box;
 
}


      /* ── RSVP section ── */
      .rsvp-section {

        min-height: 100vh;

        display: flex;

        flex-direction: column;

        align-items: center;

        justify-content: flex-start;

        padding-top: 7rem;

        padding-bottom: 42vh;

        padding-left: 1.2rem;

        padding-right: 1.2rem;

        position: relative;

        overflow: hidden;

        background-color: #1a0c02;

        background-size: contain;

        background-position: center top;

        background-repeat: no-repeat;

      
}


      /* ── Content wrapper ── */
      .rsvp-content {

        position: relative;

        z-index: 2;

        width: 100%;

        max-width: 460px;

      
}


      /* ── Card ── */
      .rsvp-card {

        background: rgba(255,252,242,0.7);

        border: 0.7px solid rgba(139,105,20,0.28);

        border-radius: 6px;

        padding: 1.8rem 1.6rem 1.6rem;

        backdrop-filter: blur(10px);

        box-shadow: 0 4px 32px rgba(100,60,10,0.08), 0 1px 4px rgba(139,105,20,0.1);

      
}


      /* ── Attending toggle grid ── */
      .attending-grid {

        display: grid;

        grid-template-columns: 1fr 1fr;

        gap: 0.65rem;

      
}


      /* ── Submit button ── */
      .rsvp-submit {

        width: 100%;

        margin-top: 0.9rem;

        padding: 0.85rem;

        font-family: 'Montserrat', sans-serif;

        font-weight: 400;

        font-size: 0.68rem;

        letter-spacing: 0.22em;

        text-transform: uppercase;

        border: 0.7px solid rgba(139,105,20,0.5);

        border-radius: 3px;

        cursor: pointer;

        transition: all 0.35s ease;

        touch-action: manipulation;

      
}


      /* ── Thank-you card ── */
      .rsvp-thanks {

        background: rgba(255,252,242,0.72);

        border: 0.7px solid rgba(139,105,20,0.3);

        border-radius: 6px;

        padding: 2.8rem 1.8rem;

        text-align: center;

        backdrop-filter: blur(10px);

        box-shadow: 0 4px 32px rgba(100,60,10,0.08);

      
}


      /* ── Corner accent ── */
      .rsvp-corner {

        position: absolute;

        width: 64px;

        height: 64px;

        z-index: 2;

      
}


      /* ── Footer text ── */
      .rsvp-footer-name {

        font-family: 'Times New Roman', cursive;

        font-size: 1.7rem;

        color: #5a3209;

        margin: 0.1rem 0 0;

        letter-spacing: 0.04em;

      
}


      /* ════════════════════════════════════════
         TABLET  (≤ 640px)
      ════════════════════════════════════════ */
      @media (max-width: 640px) {

        .rsvp-section {

          padding-top: 5rem;

          padding-bottom: 30vh;

          padding-left: 1rem;

          padding-right: 1rem;

          background-size: cover;
          /* fill on small screens */
          background-position: center top;

        
}


        .rsvp-corner {

          width: 48px;

          height: 48px;

        
}


        .rsvp-card {

          padding: 1.4rem 1.2rem 1.2rem;

        
}


        .rsvp-thanks {

          padding: 2rem 1.2rem;

        
}


        .rsvp-footer-name {

          font-size: 1.4rem;

        
}

      
}


      /* ════════════════════════════════════════
         MOBILE  (≤ 400px)
      ════════════════════════════════════════ */
      @media (max-width: 400px) {

        .rsvp-section {

          padding-top: 3.5rem;

          padding-bottom: 20vh;

          padding-left: 0.75rem;

          padding-right: 0.75rem;

        
}


        .rsvp-corner {

          width: 36px;

          height: 36px;

          top: 0.75rem !important;

        
}

        .rsvp-corner-left  {
 left: 0.75rem !important;
 
}

        .rsvp-corner-right {
 right: 0.75rem !important;
 
}


        .rsvp-card {

          padding: 1.1rem 0.9rem 1rem;

          border-radius: 4px;

        
}


        /* Stack attending buttons vertically on very small screens */
        .attending-grid {

          grid-template-columns: 1fr;

        
}


        .rsvp-submit {

          padding: 1rem;
            /* bigger tap target */
          font-size: 0.7rem;

        
}


        .rsvp-thanks {

          padding: 1.6rem 0.9rem;

        
}


        .rsvp-footer-name {

          font-size: 1.2rem;

        
}

      
}


      /* ════════════════════════════════════════
         LARGE  (≥ 768px) — generous breathing room
      ════════════════════════════════════════ */
      @media (min-width: 768px) {

        .rsvp-section {

          padding-top: 8rem;

          padding-bottom: 48vh;

        
}

      
}

    `
}
)
}
function ud({
className:e,style:t
}
){
return(0,T.jsxs)(od.svg,{
"aria-hidden":`true`,viewBox:`0 0 80 80`,fill:`none`,initial:{
opacity:0
}
,animate:{
opacity:1
}
,transition:{
duration:1.8,delay:.6
}
,className:`rsvp-corner ${
e??``
}
`,style:t,children:[(0,T.jsx)(`path`,{
d:`M4 76 L4 4 L76 4`,stroke:`#7a5c2e`,strokeWidth:`1.2`
}
),(0,T.jsx)(`path`,{
d:`M4 20 L20 4`,stroke:`#7a5c2e`,strokeWidth:`0.6`
}
),(0,T.jsx)(`path`,{
d:`M4 36 L36 4`,stroke:`#7a5c2e`,strokeWidth:`0.4`,opacity:`0.5`
}
),(0,T.jsx)(`circle`,{
cx:`4`,cy:`4`,r:`2.5`,fill:`#7a5c2e`
}
),(0,T.jsx)(`circle`,{
cx:`4`,cy:`4`,r:`5`,fill:`none`,stroke:`#7a5c2e`,strokeWidth:`0.4`,opacity:`0.5`
}
)]
}
)
}
function dd({
compact:e
}
){
return(0,T.jsxs)(`div`,{
style:{
display:`flex`,alignItems:`center`,gap:`0.6rem`,justifyContent:`center`,margin:e?`0.6rem 0`:`0.8rem 0 1.4rem`
}
,children:[(0,T.jsx)(`div`,{
style:{
flex:1,maxWidth:50,height:.6,background:`linear-gradient(90deg, transparent, #8b6914)`
}

}
),(0,T.jsx)(`div`,{
style:{
width:5,height:5,background:`#8b6914`,transform:`rotate(45deg)`,boxShadow:`0 0 5px rgba(139,105,20,0.6)`
}

}
),(0,T.jsx)(`div`,{
style:{
width:3,height:3,background:`#8b6914`,transform:`rotate(45deg)`,margin:`0 2px`,opacity:.5
}

}
),(0,T.jsx)(`div`,{
style:{
width:5,height:5,background:`#8b6914`,transform:`rotate(45deg)`,boxShadow:`0 0 5px rgba(139,105,20,0.6)`
}

}
),(0,T.jsx)(`div`,{
style:{
flex:1,maxWidth:50,height:.6,background:`linear-gradient(90deg, #8b6914, transparent)`
}

}
)]
}
)
}
var fd={
width:`100%`,background:`rgba(255,252,245,0.55)`,border:`0.7px solid rgba(139,105,20,0.4)`,borderRadius:2,padding:`0.65rem 0.9rem`,fontFamily:`'Montserrat', sans-serif`,fontWeight:400,fontSize:`0.8rem`,letterSpacing:`0.08em`,color:`#3d2a08`,outline:`none`,boxSizing:`border-box`,transition:`border-color 0.3s, background 0.3s`,backdropFilter:`blur(4px)`
}
,pd={
display:`block`,fontFamily:`'Montserrat', sans-serif`,fontWeight:500,fontSize:`0.6rem`,letterSpacing:`0.22em`,textTransform:`uppercase`,color:`rgba(90,55,10,0.75)`,marginBottom:`0.35rem`
}
;
function md({
label:e,children:t
}
){
return(0,T.jsxs)(`div`,{
style:{
marginBottom:`1rem`
}
,children:[(0,T.jsx)(`label`,{
style:pd,children:e
}
),t]
}
)
}
var hd=(e=0)=>({
initial:{
opacity:0,y:18
}
,animate:{
opacity:1,y:0
}
,transition:{
duration:.8,delay:e,ease:[.22,1,.36,1]
}

}
);
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
