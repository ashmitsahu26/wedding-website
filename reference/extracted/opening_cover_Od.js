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
