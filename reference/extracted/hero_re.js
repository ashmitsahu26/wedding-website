re=()=>{
let e=new URLSearchParams(window.location.search).get(`guest`)||`Dear Guest`,[t,n]=(0,b.useState)(!1),[r,i]=(0,b.useState)(9/16),a=ee();
(0,b.useEffect)(()=>{
let e=setTimeout(()=>n(!0),150);
return()=>clearTimeout(e)
}
,[]);
let o=e=>{
let{
naturalWidth:t,naturalHeight:n
}
=e.target;
t&&n&&i(t/n)
}
,s=a<640,c=s?a:a>=640&&a<1024?Math.min(a*.72,520):Math.min(a*.44,560),l=c/r,u=l*.135,d=l*.155,f=c*.105,p=c-f*2,m=l-u-d,h=p/320,g=e=>`${
Math.round(e*h)
}
px`;
return(0,T.jsxs)(T.Fragment,{
children:[(0,T.jsx)(`style`,{
children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;
0,400;
0,500;
0,600;
1,300;
1,400;
1,600&family=Cinzel+Decorative:wght@400;
700&family=Cinzel:wght@400;
600;
700&family=Great+Vibes&display=swap');

        *, *::before, *::after {
 box-sizing: border-box;
 margin: 0;
 padding: 0;
 
}

        html {
 scroll-behavior: smooth;
 
}

        body {
 background: #1a0c02;
 
}

        .hero-content * {
 -webkit-font-smoothing: antialiased;
 
}

      `
}
),(0,T.jsx)(`div`,{
style:{
minHeight:`100vh`,width:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,background:`radial-gradient(ellipse at center, #2e1205 0%, #1a0c02 100%)`,padding:s?`0`:`48px 16px`
}
,children:(0,T.jsxs)(`div`,{
style:{
position:`relative`,width:c,height:l,flexShrink:0,borderRadius:s?0:8,overflow:`hidden`,boxShadow:s?`none`:`0 0 0 1px rgba(201,169,110,0.3), 0 32px 100px rgba(0,0,0,0.7)`
}
,children:[(0,T.jsx)(`img`,{
src:S,alt:``,onLoad:o,style:{
position:`absolute`,inset:0,width:`100%`,height:`100%`,objectFit:`fill`,display:`block`
}

}
),(0,T.jsx)(`div`,{
style:{
position:`absolute`,inset:0,background:`radial-gradient(ellipse 65% 55% at 50% 47%, rgba(255,250,240,0.22) 0%, transparent 80%)`,pointerEvents:`none`
}

}
),(0,T.jsxs)(`div`,{
className:`hero-content`,style:{
position:`absolute`,top:u,left:f,width:p,height:m,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`space-between`,opacity:+!!t,transform:t?`translateY(0)`:`translateY(20px)`,transition:`opacity 1.3s ease, transform 1.3s ease`,overflow:`hidden`
}
,children:[(0,T.jsx)(`div`,{
style:{
fontFamily:`'Great Vibes', cursive`,fontSize:g(40),color:`#7A3E1E`,lineHeight:.95,textShadow:`0 3px 18px rgba(180,110,40,0.22)`,letterSpacing:`0.01em`,flexShrink:0,marginTop:`35px`
}
,children:`P & K`
}
),(0,T.jsxs)(`div`,{
style:{
textAlign:`center`,lineHeight:1
}
,children:[(0,T.jsx)(`span`,{
style:{
fontFamily:`'Cinzel Decorative', serif`,fontSize:g(17),fontWeight:700,color:`#2D1200`,letterSpacing:`0.04em`
}
,children:`Pragnya`
}
),(0,T.jsx)(`span`,{
style:{
fontFamily:`'Great Vibes', cursive`,fontSize:g(15),color:`#A06828`,margin:`0 ${
g(5)
}
`
}
,children:` weds `
}
),(0,T.jsx)(`span`,{
style:{
fontFamily:`'Cinzel Decorative', serif`,fontSize:g(17),fontWeight:700,color:`#2D1200`,letterSpacing:`0.04em`
}
,children:`Krutibas`
}
),(0,T.jsx)(`div`,{
style:{
fontFamily:`'Cormorant Garamond', serif`,fontStyle:`italic`,fontSize:g(10.5),color:`#7A4820`,letterSpacing:`0.18em`,marginTop:5,opacity:.9
}
,children:`Two Days to Forever`
}
)]
}
),(0,T.jsx)(te,{
my:0
}
),(0,T.jsx)(`div`,{
style:{
width:g(135),height:g(135),borderRadius:`50%`,border:`2px solid #C9A96E`,boxShadow:`0 0 0 1px rgba(201,169,110,0.2), 0 0 0 6px rgba(201,169,110,0.09), 0 6px 28px rgba(100,40,0,0.18)`,background:`rgba(255,247,235,0.55)`,backdropFilter:`blur(4px)`,display:`flex`,alignItems:`center`,justifyContent:`center`,overflow:`hidden`,flexShrink:0
}
,children:(0,T.jsx)(`img`,{
src:C,alt:`Pragnya & Krutibas`,style:{
width:`100%`,height:`95%`,objectFit:`cover`
}

}
)
}
),(0,T.jsxs)(`div`,{
style:{
textAlign:`center`,fontFamily:`'Cormorant Garamond', serif`,color:`#4A2800`,lineHeight:1.75
}
,children:[(0,T.jsx)(`div`,{
style:{
fontStyle:`italic`,fontSize:g(15),opacity:.85
}
,children:`Together with our families`
}
),(0,T.jsx)(`div`,{
style:{
fontFamily:`'Cinzel', serif`,fontWeight:600,fontSize:g(8),letterSpacing:`0.22em`,color:`#6B3510`,textTransform:`uppercase`,margin:`3px 0`
}
,children:`We Cordially Invite`
}
),(0,T.jsx)(`div`,{
style:{
fontFamily:`'Great Vibes', cursive`,fontSize:g(28),color:`#A06828`,lineHeight:1.05,margin:`2px 0 4px`
}
,children:e
}
),(0,T.jsxs)(`div`,{
style:{
fontStyle:`italic`,fontSize:g(10.5),opacity:.82,lineHeight:1.7
}
,children:[`To grace the celebration with your presence,`,(0,T.jsx)(`br`,{

}
),`blessings & love on our special day.`]
}
)]
}
),(0,T.jsx)(te,{
my:0
}
),(0,T.jsxs)(`div`,{
style:{
textAlign:`center`
}
,children:[(0,T.jsx)(`div`,{
style:{
fontFamily:`'Times New roman ', serif`,fontSize:g(16),fontWeight:700,color:`#2D1200`,letterSpacing:`0.06em`
}
,children:`1 July 2026`
}
),(0,T.jsx)(`div`,{
style:{
fontFamily:`'Cormorant Garamond', serif`,fontStyle:`italic`,fontSize:g(10),color:`#7A4820`,letterSpacing:`0.1em`,margin:`2px 0`
}
,children:`Wednesday`
}
),(0,T.jsx)(`div`,{
style:{
fontFamily:`'Cinzel', serif`,fontSize:g(8.5),color:`#6B3510`,letterSpacing:`0.25em`,textTransform:`uppercase`
}
,children:`Bhawanipatna, Odisha`
}
)]
}
),(0,T.jsx)(`div`,{
style:{
width:`100%`,borderRadius:7,overflow:`hidden`,border:`1px solid rgba(201,169,110,0.5)`,background:`rgba(255,252,243,0.68)`,backdropFilter:`blur(12px)`,boxShadow:`0 2px 16px rgba(100,40,0,0.1)`,flexShrink:0
}
,children:[[`Date`,`1st July 2026`],[`Venue`,`The Bharat Palace, Bhawanipatna, Odisha`],[`Time`,`7:30 PM Onwards`]].map(([e,t],n)=>(0,T.jsxs)(`div`,{
style:{
display:`flex`,borderBottom:n<2?`1px solid rgba(201,169,110,0.25)`:`none`
}
,children:[(0,T.jsx)(`div`,{
style:{
padding:`${
g(6)
}
 ${
g(10)
}
`,fontFamily:`'Times New Roman', serif`,fontSize:g(7.5),fontWeight:600,color:`#6B3510`,letterSpacing:`0.15em`,textTransform:`uppercase`,minWidth:g(52),borderRight:`1px solid rgba(201,169,110,0.25)`,background:`rgba(201,169,110,0.1)`,display:`flex`,alignItems:`center`
}
,children:e
}
),(0,T.jsx)(`div`,{
style:{
padding:`${
g(6)
}
 ${
g(10)
}
`,fontFamily:`'Times New Roman', serif`,fontSize:g(10.5),color:`#2D1200`,letterSpacing:`0.04em`,display:`flex`,alignItems:`center`
}
,children:t
}
)]
}
,e))
}
),(0,T.jsxs)(`div`,{
style:{
width:`100%`
}
,children:[(0,T.jsx)(ne,{

}
),(0,T.jsxs)(`div`,{
style:{
display:`flex`,justifyContent:`center`,gap:8,marginTop:5
}
,children:[(0,T.jsx)(`span`,{
style:{
color:`#C9A96E`,fontSize:g(7)
}
,children:`✦`
}
),(0,T.jsx)(`span`,{
style:{
color:`#C9A96E`,fontSize:g(10)
}
,children:`✦`
}
),(0,T.jsx)(`span`,{
style:{
color:`#C9A96E`,fontSize:g(7)
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
,ie=`/assets/events-4g2UneXm.jpg`,ae=`https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;
0,600;
1,500;
1,600&family=Cinzel:wght@400;
600;
700&family=Cinzel+Decorative:wght@400;
700&family=Great+Vibes&display=swap`,oe={
bg:`rgba(255,249,238,0.93)`,border:`rgba(180,130,60,0.4)`,topBar:`#B8860B`,accent:`#8B5E1A`,accentLight:`rgba(184,134,11,0.10)`,shadow:`rgba(120,70,10,0.18)`,descBg:`rgba(184,134,11,0.08)`,descBorder:`#B8860B`
}
,se={
gold:`#C9A96E`,brown:`#7A3E1E`,dark:`#1E0E00`,text:`#3A1E00`,muted:`#5C3A10`
}
,ce=[{
num:`01`,name:`Mehendi`,icon:``,date:`30 June 2026`,day:`Tuesday`,time:`10:00 AM onwards`,venue:`At our residence`,desc:`A vibrant celebration filled with music, laughter & love.`
}
,{
num:`02`,name:`Sangeet`,icon:``,date:`30 June 2026`,day:`Tuesday`,time:`7:00 PM onwards`,venue:`At our residence`,desc:`An evening of music, dance & joyful celebration.`
}
,{
num:`03`,name:`Haldi`,icon:``,date:`1 July 2026`,day:`Wednesday`,time:`8:00 AM onwards`,venue:`At our residence`,desc:`A golden morning of blessings & tradition.`
}
,{
num:`04`,name:`Reception & Dinner`,icon:``,date:`1 July 2026`,day:`Wednesday`,time:`7:30 PM onwards`,venue:`The Bharat Palace, Bhawanipatna`,desc:`An unforgettable night to celebrate forever.`
}
],le=()=>{
let e=(0,b.useRef)(null),[t,n]=(0,b.useState)(!1);
return(0,b.useEffect)(()=>{
let t=e.current;
if(!t)return;
let r=new IntersectionObserver(([e])=>{
e.isIntersecting&&(n(!0),r.disconnect())
}
,{
threshold:.1
}
);
return r.observe(t),()=>r.disconnect()
}
,[]),[e,t]
}
,E=()=>(0,T.jsxs)(`svg`,{
width:`13`,height:`13`,viewBox:`0 0 24 24`,fill:`none`,stroke:oe.accent,strokeWidth:`2.5`,strokeLinecap:`round`,children:[(0,T.jsx)(`circle`,{
cx:`12`,cy:`12`,r:`10`
}
),(0,T.jsx)(`polyline`,{
points:`12 6 12 12 16 14`
}
)]
}
),D=()=>(0,T.jsxs)(`svg`,{
width:`13`,height:`13`,viewBox:`0 0 24 24`,fill:`none`,stroke:oe.accent,strokeWidth:`2.5`,strokeLinecap:`round`,children:[(0,T.jsx)(`path`,{
d:`M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z`
}
),(0,T.jsx)(`circle`,{
cx:`12`,cy:`10`,r:`3`
}
)]
}
),ue=({
event:e,index:t
}
)=>{
let[n,r]=le(),i=t*.12;
return(0,T.jsx)(`div`,{
ref:n,style:{
opacity:+!!r,transform:r?`translateY(0) scale(1)`:`translateY(44px) scale(0.97)`,transition:`opacity 0.75s ease ${
i
}
s, transform 0.75s cubic-bezier(.22,1,.36,1) ${
i
}
s`,width:`100%`
}
,children:(0,T.jsxs)(`div`,{
style:{
borderRadius:14,overflow:`hidden`,background:oe.bg,border:`1.5px solid ${
oe.border
}
`,boxShadow:`
          0 1px 0 rgba(255,255,255,0.9) inset,
          0 6px 24px ${
oe.shadow
}
,
          0 1px 4px rgba(0,0,0,0.07)
        `
}
,children:[(0,T.jsx)(`div`,{
style:{
height:5,background:`linear-gradient(to right, ${
oe.topBar
}
, #D4A843, ${
oe.topBar
}
88)`
}

}
),(0,T.jsxs)(`div`,{
style:{
padding:`13px 15px 15px`
}
,children:[(0,T.jsxs)(`div`,{
style:{
display:`flex`,alignItems:`center`,gap:11,marginBottom:11
}
,children:[(0,T.jsx)(`div`,{
style:{
width:40,height:40,borderRadius:`50%`,flexShrink:0,background:oe.accentLight,border:`1.5px solid rgba(184,134,11,0.4)`,display:`flex`,alignItems:`center`,justifyContent:`center`,boxShadow:`0 0 0 3px rgba(184,134,11,0.07)`
}
,children:(0,T.jsx)(`span`,{
style:{
fontFamily:`'Cinzel',serif`,fontWeight:700,fontSize:12,color:oe.topBar,letterSpacing:`0.04em`
}
,children:e.num
}
)
}
),(0,T.jsxs)(`div`,{
style:{
flex:1,minWidth:0
}
,children:[(0,T.jsxs)(`div`,{
style:{
display:`flex`,alignItems:`center`,gap:5,flexWrap:`wrap`
}
,children:[(0,T.jsx)(`span`,{
style:{
fontFamily:`'Cinzel Decorative',serif`,fontSize:`clamp(13px,3.8vw,16px)`,fontWeight:700,color:se.dark,letterSpacing:`0.02em`,lineHeight:1.2
}
,children:e.name
}
),(0,T.jsx)(`span`,{
style:{
fontSize:14
}
,children:e.icon
}
)]
}
),(0,T.jsx)(`div`,{
style:{
display:`inline-flex`,alignItems:`center`,marginTop:5,background:oe.accentLight,border:`1px solid rgba(184,134,11,0.28)`,borderRadius:20,padding:`2px 9px`
}
,children:(0,T.jsxs)(`span`,{
style:{
fontFamily:`'Cinzel',serif`,fontWeight:700,fontSize:`clamp(7.5px,1.9vw,9px)`,color:oe.accent,letterSpacing:`0.1em`,textTransform:`uppercase`
}
,children:[e.date,` \xA0·\xA0 `,e.day]
}
)
}
)]
}
)]
}
),(0,T.jsx)(`div`,{
style:{
height:1,marginBottom:11,background:`linear-gradient(to right, ${
oe.topBar
}
66, rgba(184,134,11,0.1), transparent)`
}

}
),(0,T.jsx)(`div`,{
style:{
display:`flex`,flexDirection:`column`,gap:7,marginBottom:12
}
,children:[{
Icon:E,label:`Time`,value:e.time
}
,{
Icon:D,label:`Venue`,value:e.venue
}
].map(({
Icon:e,label:t,value:n
}
)=>(0,T.jsxs)(`div`,{
style:{
display:`flex`,alignItems:`flex-start`,gap:9
}
,children:[(0,T.jsx)(`div`,{
style:{
width:28,height:28,borderRadius:8,flexShrink:0,background:oe.accentLight,border:`1px solid rgba(184,134,11,0.2)`,display:`flex`,alignItems:`center`,justifyContent:`center`,marginTop:1
}
,children:(0,T.jsx)(e,{

}
)
}
),(0,T.jsxs)(`div`,{
style:{
flex:1
}
,children:[(0,T.jsx)(`div`,{
style:{
fontFamily:`'Cinzel',serif`,fontWeight:700,fontSize:`clamp(7px,1.8vw,8.5px)`,color:oe.accent,letterSpacing:`0.2em`,textTransform:`uppercase`,marginBottom:1
}
,children:t
}
),(0,T.jsx)(`div`,{
style:{
fontFamily:`'Cormorant Garamond',serif`,fontWeight:600,fontSize:`clamp(13px,3.4vw,15px)`,color:se.text,letterSpacing:`0.01em`,lineHeight:1.4
}
,children:n
}
)]
}
)]
}
,t))
}
),(0,T.jsx)(`div`,{
style:{
borderLeft:`3px solid ${
oe.descBorder
}
`,borderRadius:`0 8px 8px 0`,background:oe.descBg,padding:`9px 12px`
}
,children:(0,T.jsx)(`p`,{
style:{
fontFamily:`'Cormorant Garamond',serif`,fontStyle:`italic`,fontWeight:600,fontSize:`clamp(12px,3vw,14px)`,color:se.muted,lineHeight:1.65,margin:0
}
,children:e.desc
}
)
}
)]
}
),(0,T.jsx)(`div`,{
style:{
height:3,background:`linear-gradient(to right,transparent,rgba(184,134,11,0.22),transparent)`
}

}
)]
}
)
}
)
}
,de=({
op:e=1
}
)=>(0,T.jsx)(`div`,{
style:{
height:1,width:`100%`,background:`linear-gradient(to right,transparent,${
se.gold
}
 25%,${
se.gold
}
 75%,transparent)`,opacity:e
}

}
),