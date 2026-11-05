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
function Td(){
return(0,T.jsxs)(T.Fragment,{
children:[(0,T.jsx)(re,{

}
),(0,T.jsx)(fe,{

}
),(0,T.jsx)(wd,{

}
),(0,T.jsx)(xe,{

}
),(0,T.jsx)(je,{

}
),(0,T.jsx)(gd,{

}
)]
}
)
}
var Ed=`/assets/audio-MV7EmksQ.mp3`,Dd=`https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;
0,600;
1,400;
1,600&family=Cinzel:wght@400;
600;
700&family=Cinzel+Decorative:wght@400;
700&family=Great+Vibes&display=swap`,Od=({
onEnter:e,onPlayAudio:t
}
)=>{
let[n,r]=(0,b.useState)(!1),[i,a]=(0,b.useState)(!1),[o,s]=(0,b.useState)(!1),[c,l]=(0,b.useState)(!1);
return(0,b.useEffect)(()=>{
let e=setTimeout(()=>s(!0),600);
return()=>clearTimeout(e)
}
,[]),(0,T.jsxs)(`div`,{
onClick:()=>{
n||(r(!0),l(!0),t(),setTimeout(()=>{
a(!0),setTimeout(e,700)
}
,2200))
}
,style:{
position:`fixed`,inset:0,zIndex:9999,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,background:`radial-gradient(ellipse at 50% 30%, #2e1a06 0%, #140900 60%, #0a0500 100%)`,cursor:n?`default`:`pointer`,userSelect:`none`,opacity:+!i,transition:i?`opacity 0.7s ease`:`none`,overflow:`hidden`
}
,children:[(0,T.jsx)(jd,{

}
),(0,T.jsx)(kd,{

}
),(0,T.jsxs)(`div`,{
style:{
position:`relative`,zIndex:2,textAlign:`center`,padding:`0 28px`
}
,children:[(0,T.jsx)(`p`,{
style:{
fontFamily:`'Cinzel', serif`,fontSize:`clamp(8px, 2.2vw, 10px)`,letterSpacing:`0.42em`,color:`#C9A96E`,textTransform:`uppercase`,opacity:.75,marginBottom:18
}
,children:`✦ \xA0 A Sacred Celebration \xA0 ✦`
}
),(0,T.jsx)(`div`,{
style:{
fontFamily:`'Great Vibes', cursive`,fontSize:`clamp(72px, 20vw, 110px)`,color:`#C9A96E`,lineHeight:.85,textShadow:`0 0 60px rgba(201,169,110,0.35), 0 4px 24px rgba(180,110,30,0.3)`,marginBottom:10,animation:o?`loaderGlow 3s ease-in-out infinite`:`none`
}
,children:`P & K`
}
),(0,T.jsx)(`h1`,{
style:{
fontFamily:`'Cinzel Decorative', serif`,fontSize:`clamp(17px, 5vw, 26px)`,fontWeight:700,color:`#F5E6C8`,letterSpacing:`0.06em`,lineHeight:1.2,marginBottom:6,textShadow:`0 2px 20px rgba(201,169,110,0.3)`
}
,children:`Pragnya & Krutibas`
}
),(0,T.jsx)(`p`,{
style:{
fontFamily:`'Times New Roman', serif`,fontStyle:`italic`,fontSize:`clamp(13px, 3.5vw, 16px)`,color:`#C9A96E`,letterSpacing:`0.14em`,opacity:.85,marginBottom:32
}
,children:`1st July 2026 \xA0·\xA0 Bhawanipatna, Odisha`
}
),(0,T.jsx)(Md,{

}
),(0,T.jsx)(`div`,{
style:{
height:30
}

}
),n?(0,T.jsx)(Nd,{

}
):(0,T.jsx)($,{
pulse:o
}
),c&&(0,T.jsx)(Pd,{

}
),(0,T.jsx)(`div`,{
style:{
height:24
}

}
),!n&&(0,T.jsx)(`p`,{
style:{
fontFamily:`'Cinzel', serif`,fontSize:`clamp(8px, 1.9vw, 9.5px)`,letterSpacing:`0.3em`,color:`#C9A96E`,textTransform:`uppercase`,opacity:.45,animation:`loaderFade 2.5s ease-in-out infinite`
}
,children:`tap anywhere to enter`
}
)]
}
),(0,T.jsx)(`style`,{
children:`
        @import url('${
Dd
}
');

        @keyframes loaderGlow {

          0%,100% {
 text-shadow: 0 0 60px rgba(201,169,110,0.35), 0 4px 24px rgba(180,110,30,0.3);
 
}

          50%      {
 text-shadow: 0 0 90px rgba(201,169,110,0.6),  0 4px 40px rgba(180,110,30,0.5);
 
}

        
}

        @keyframes loaderFade {

          0%,100% {
 opacity:0.4;
 
}
 50% {
 opacity:0.9;
 
}

        
}

        @keyframes loaderSpin {

          to {
 transform: rotate(360deg);
 
}

        
}

        @keyframes rippleAnim {

          0%   {
 transform:scale(0);
 opacity:0.55;
 
}

          100% {
 transform:scale(18);
 opacity:0;
 
}

        
}

        @keyframes dotFloat {

          0%,100% {
 transform:translateY(0) scale(1);
   opacity:0.3;
 
}

          50%      {
 transform:translateY(-8px) scale(1.3);
 opacity:0.7;
 
}

        
}

        @keyframes tapPulse {

          0%,100% {
 box-shadow: 0 0 0 0   rgba(201,169,110,0.5), 0 0 0 0   rgba(201,169,110,0.3);
 
}

          60%      {
 box-shadow: 0 0 0 14px rgba(201,169,110,0),   0 0 0 28px rgba(201,169,110,0);
 
}

        
}

      `
}
)]
}
)
}
,kd=()=>(0,T.jsxs)(`svg`,{
viewBox:`0 0 320 520`,style:{
position:`absolute`,width:`min(320px, 88vw)`,height:`auto`,top:`50%`,left:`50%`,transform:`translate(-50%,-50%)`,opacity:.18,zIndex:1,pointerEvents:`none`
}
,children:[(0,T.jsx)(`path`,{
d:`M20,520 L20,200 Q20,20 160,20 Q300,20 300,200 L300,520`,fill:`none`,stroke:`#C9A96E`,strokeWidth:`1.5`
}
),(0,T.jsx)(`path`,{
d:`M44,520 L44,205 Q44,48 160,48 Q276,48 276,205 L276,520`,fill:`none`,stroke:`#C9A96E`,strokeWidth:`0.8`
}
),(0,T.jsx)(`path`,{
d:`M130,20 Q160,2 190,20`,fill:`none`,stroke:`#C9A96E`,strokeWidth:`1`
}
),(0,T.jsx)(`circle`,{
cx:`160`,cy:`16`,r:`5`,fill:`none`,stroke:`#C9A96E`,strokeWidth:`1`
}
),[20,300].map((e,t)=>(0,T.jsxs)(`g`,{
children:[(0,T.jsx)(`rect`,{
x:e-8,y:490,width:16,height:30,fill:`none`,stroke:`#C9A96E`,strokeWidth:`1`
}
),(0,T.jsx)(`rect`,{
x:e-12,y:485,width:24,height:7,fill:`none`,stroke:`#C9A96E`,strokeWidth:`0.8`
}
)]
}
,t)),[[20,20],[300,20],[20,280],[300,280]].map(([e,t],n)=>(0,T.jsx)(`circle`,{
cx:e,cy:t,r:6,fill:`none`,stroke:`#C9A96E`,strokeWidth:`0.8`
}
,n))]
}
),Ad=[{
x:`12%`,y:`18%`,s:3,d:`0s`
}
,{
x:`88%`,y:`14%`,s:2,d:`0.8s`
}
,{
x:`7%`,y:`60%`,s:2,d:`1.3s`
}
,{
x:`93%`,y:`55%`,s:3,d:`0.4s`
}
,{
x:`22%`,y:`85%`,s:2,d:`1.8s`
}
,{
x:`78%`,y:`82%`,s:2,d:`0.9s`
}
,{
x:`50%`,y:`8%`,s:2,d:`1.1s`
}
,{
x:`35%`,y:`92%`,s:2,d:`0.6s`
}
,{
x:`65%`,y:`90%`,s:2,d:`1.5s`
}
],jd=()=>(0,T.jsx)(`div`,{
style:{
position:`absolute`,inset:0,pointerEvents:`none`,zIndex:0
}
,children:Ad.map((e,t)=>(0,T.jsx)(`div`,{
style:{
position:`absolute`,left:e.x,top:e.y,width:e.s,height:e.s,borderRadius:`50%`,background:`#C9A96E`,animation:`dotFloat ${
2.8+t*.3
}
s ease-in-out ${
e.d
}
 infinite`
}

}
,t))
}
),Md=()=>(0,T.jsxs)(`div`,{
style:{
display:`flex`,alignItems:`center`,gap:10,margin:`0 auto`,maxWidth:260
}
,children:[(0,T.jsx)(`div`,{
style:{
flex:1,height:1,background:`linear-gradient(to right,transparent,#C9A96E)`
}

}
),(0,T.jsx)(`svg`,{
width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`#C9A96E`,children:(0,T.jsx)(`polygon`,{
points:`8,0 9.5,6.5 16,8 9.5,9.5 8,16 6.5,9.5 0,8 6.5,6.5`
}
)
}
),(0,T.jsx)(`div`,{
style:{
flex:1,height:1,background:`linear-gradient(to left,transparent,#C9A96E)`
}

}
)]
}
),$=({
pulse:e
}
)=>(0,T.jsxs)(`div`,{
style:{
display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:10,padding:`14px 32px`,borderRadius:40,border:`1.5px solid rgba(201,169,110,0.7)`,background:`rgba(201,169,110,0.08)`,backdropFilter:`blur(8px)`,cursor:`pointer`,animation:e?`tapPulse 2.2s ease-out infinite`:`none`,boxShadow:`0 0 0 0 rgba(201,169,110,0.5)`
}
,children:[(0,T.jsx)(`svg`,{
width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#C9A96E`,strokeWidth:`2`,strokeLinecap:`round`,children:(0,T.jsx)(`path`,{
d:`M12 2v20M2 12h20`
}
)
}
),(0,T.jsx)(`span`,{
style:{
fontFamily:`'Cinzel', serif`,fontSize:`clamp(10px, 2.5vw, 12px)`,fontWeight:600,letterSpacing:`0.3em`,color:`#C9A96E`,textTransform:`uppercase`
}
,children:`Enter`
}
),(0,T.jsx)(`svg`,{
width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#C9A96E`,strokeWidth:`2`,strokeLinecap:`round`,children:(0,T.jsx)(`path`,{
d:`M12 2v20M2 12h20`
}
)
}
)]
}
),Nd=()=>(0,T.jsxs)(`div`,{
style:{
display:`flex`,flexDirection:`column`,alignItems:`center`,gap:14
}
,children:[(0,T.jsxs)(`div`,{
style:{
position:`relative`,width:52,height:52
}
,children:[(0,T.jsx)(`div`,{
style:{
position:`absolute`,inset:0,borderRadius:`50%`,border:`2px solid rgba(201,169,110,0.15)`,borderTop:`2px solid #C9A96E`,animation:`loaderSpin 1s linear infinite`
}

}
),(0,T.jsx)(`div`,{
style:{
position:`absolute`,inset:8,borderRadius:`50%`,border:`1.5px solid rgba(201,169,110,0.1)`,borderBottom:`1.5px solid rgba(201,169,110,0.7)`,animation:`loaderSpin 0.7s linear infinite reverse`
}

}
),(0,T.jsx)(`div`,{
style:{
position:`absolute`,inset:`50%`,margin:`-4px`,width:8,height:8,borderRadius:`50%`,background:`#C9A96E`,boxShadow:`0 0 10px rgba(201,169,110,0.8)`
}

}
)]
}
),(0,T.jsx)(`p`,{
style:{
fontFamily:`'Cinzel', serif`,fontSize:`clamp(8px,2vw,10px)`,letterSpacing:`0.35em`,color:`#C9A96E`,textTransform:`uppercase`,opacity:.7,animation:`loaderFade 1s ease-in-out infinite`
}
,children:`Preparing your invitation…`
}
)]
}
),Pd=()=>(0,T.jsx)(`div`,{
style:{
position:`absolute`,width:40,height:40,borderRadius:`50%`,background:`rgba(201,169,110,0.35)`,top:`50%`,left:`50%`,transform:`translate(-50%,-50%)`,animation:`rippleAnim 1.2s ease-out forwards`,pointerEvents:`none`,zIndex:10
}

}
);
function Fd(){
let[e,t]=(0,b.useState)(`loader`),n=(0,b.useRef)(null);
return(0,b.useEffect)(()=>{
let e=new Audio(Ed);
return e.volume=.5,n.current=e,()=>{
e.pause(),e.src=``
}

}
,[]),(0,T.jsxs)(T.Fragment,{
children:[e===`loader`&&(0,T.jsx)(Od,{
onEnter:()=>{
t(`home`)
}
,onPlayAudio:()=>n.current?.play().catch(()=>{

}
)
}
),e===`home`&&(0,T.jsxs)(`div`,{
onDoubleClick:()=>{
let e=n.current;
e&&(e.paused?e.play().catch(()=>{

}
):e.pause())
}
,title:`Double-click to pause / resume music`,style:{
minHeight:`100vh`
}
,children:[(0,T.jsx)(Td,{

}
),(0,T.jsx)(Id,{
audioRef:n
}
)]
}
)]
}
)
}
var Id=({
audioRef:e
}
)=>{
let[t,n]=(0,b.useState)(!0);
return(0,b.useEffect)(()=>{
let t=e.current;
if(!t)return;
let r=()=>n(!0),i=()=>n(!1);
return t.addEventListener(`play`,r),t.addEventListener(`pause`,i),()=>{
t.removeEventListener(`play`,r),t.removeEventListener(`pause`,i)
}

}
,[]),(0,T.jsxs)(`button`,{
onClick:t=>{
t.stopPropagation();
let n=e.current;
n&&(n.paused?n.play().catch(()=>{

}
):n.pause())
}
,title:t?`Pause music`:`Play music`,style:{
position:`fixed`,bottom:20,right:16,zIndex:1e3,display:`flex`,alignItems:`center`,gap:7,padding:`8px 14px`,borderRadius:30,border:`1px solid rgba(201,169,110,0.45)`,background:`rgba(20,9,0,0.75)`,backdropFilter:`blur(12px)`,cursor:`pointer`,boxShadow:`0 4px 20px rgba(0,0,0,0.3)`,transition:`opacity 0.3s`
}
,children:[t?(0,T.jsx)(Ld,{

}
):(0,T.jsx)(Rd,{

}
),(0,T.jsx)(`span`,{
style:{
fontFamily:`'Cinzel', serif`,fontSize:9,letterSpacing:`0.2em`,color:`#C9A96E`,textTransform:`uppercase`
}
,children:t?`Playing`:`Paused`
}
)]
}
)
}
,Ld=()=>(0,T.jsxs)(`svg`,{
width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`#C9A96E`,children:[(0,T.jsxs)(`rect`,{
x:`0`,y:`4`,width:`2.5`,height:`6`,rx:`1`,children:[(0,T.jsx)(`animate`,{
attributeName:`height`,values:`6;
10;
6`,dur:`0.8s`,repeatCount:`indefinite`
}
),(0,T.jsx)(`animate`,{
attributeName:`y`,values:`4;
2;
4`,dur:`0.8s`,repeatCount:`indefinite`
}
)]
}
),(0,T.jsxs)(`rect`,{
x:`4`,y:`2`,width:`2.5`,height:`10`,rx:`1`,children:[(0,T.jsx)(`animate`,{
attributeName:`height`,values:`10;
5;
10`,dur:`0.6s`,repeatCount:`indefinite`
}
),(0,T.jsx)(`animate`,{
attributeName:`y`,values:`2;
4.5;
2`,dur:`0.6s`,repeatCount:`indefinite`
}
)]
}
),(0,T.jsxs)(`rect`,{
x:`8`,y:`5`,width:`2.5`,height:`5`,rx:`1`,children:[(0,T.jsx)(`animate`,{
attributeName:`height`,values:`5;
9;
5`,dur:`0.9s`,repeatCount:`indefinite`
}
),(0,T.jsx)(`animate`,{
attributeName:`y`,values:`5;
2;
5`,dur:`0.9s`,repeatCount:`indefinite`
}
)]
}
),(0,T.jsxs)(`rect`,{
x:`11.5`,y:`3`,width:`2.5`,height:`8`,rx:`1`,children:[(0,T.jsx)(`animate`,{
attributeName:`height`,values:`8;
4;
8`,dur:`0.7s`,repeatCount:`indefinite`
}
),(0,T.jsx)(`animate`,{
attributeName:`y`,values:`3;
5;
3`,dur:`0.7s`,repeatCount:`indefinite`
}
)]
}
)]
}
),Rd=()=>(0,T.jsx)(`svg`,{
width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`#C9A96E`,children:(0,T.jsx)(`polygon`,{
points:`2,1 13,7 2,13`
}
)
}
);
(0,x.createRoot)(document.getElementById(`root`)).render((0,T.jsx)(b.StrictMode,{
children:(0,T.jsx)(Fd,{

}
)
}
));
