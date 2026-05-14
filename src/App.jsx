import React,{useState,useEffect,useRef,useCallback,useMemo}from"react";
import{SPOTS}from"./data/spots";
import{MODALIDADES,MODALS_POR_ZONA,getEspecies,getEspecieInfo}from"./data/especies";
import{searchSpots,nearestSpot,calcScore,avgScore,sCol,sBg,sLbl,lunaE,lunaN,wDir,pad2,coefMarea,getTidalEvents,mejorIntervalo}from"./utils/calc";
import{useMeteo}from"./hooks/useMeteo";

const MN="'JetBrains Mono','Courier New',monospace";
const SN="'Inter',sans-serif";
const AC="#1e5fa0",ACL="#3b82f6";
const TX="#0f2942",TXM="#2d5a8e",TXD="#7a9abf";
const BD="rgba(30,95,160,.1)",BDA="rgba(30,95,160,.25)";
const BG="#f0f6ff",BGC="rgba(255,255,255,.95)";

function OceanBg({waveH=0.5,night=false}){
  const amp=Math.min(waveH*11,24),spd=(1.1+waveH*0.25).toFixed(1),isN=night;
  return(
    <div style={{position:"absolute",inset:0,overflow:"hidden",zIndex:0}}>
      <div style={{position:"absolute",inset:0,background:isN?"linear-gradient(180deg,#020c1a 0%,#051630 52%,#0a2244 65%,#0c2e55 100%)":"linear-gradient(180deg,#2a6fa8 0%,#4a9acc 42%,#6ab8d8 58%,#2472a8 65%,#1a5a8a 100%)"}}/>
      {!isN&&<div style={{position:"absolute",right:"13%",top:"7%",width:46,height:46,borderRadius:"50%",background:"radial-gradient(circle,#fffde8 0%,#ffe55a 55%,transparent 100%)",boxShadow:"0 0 40px rgba(255,215,50,.5)"}}/>}
      {isN&&<div style={{position:"absolute",right:"15%",top:"9%",width:34,height:34,borderRadius:"50%",background:"radial-gradient(circle,#fff8e8 0%,#fce090 55%,transparent 100%)",boxShadow:"0 0 22px rgba(250,210,100,.25)"}}/>}
      {isN&&[...Array(20)].map((_,i)=><div key={i} style={{position:"absolute",left:`${(i*43+9)%100}%`,top:`${(i*19+5)%50}%`,width:1,height:1,borderRadius:"50%",background:"#fff",opacity:.15+(i%4)*.08,animation:`twinkle ${1.5+(i%3)*.8}s ease-in-out infinite`,animationDelay:`${(i*.4)%3}s`}}/>)}
      {!isN&&[{x:"5%",y:"11%",w:110},{x:"40%",y:"7%",w:80},{x:"68%",y:"14%",w:130}].map((c,i)=>(
        <div key={i} style={{position:"absolute",left:c.x,top:c.y,width:c.w,opacity:.38,animation:`cloudMove ${24+i*6}s linear infinite`,animationDelay:`${i*8}s`}}>
          <svg width={c.w} height={c.w*.28} viewBox={`0 0 ${c.w} ${c.w*.28}`}>
            <ellipse cx={c.w*.5} cy={c.w*.18} rx={c.w*.43} ry={c.w*.11} fill="rgba(255,255,255,0.88)"/>
            <ellipse cx={c.w*.32} cy={c.w*.15} rx={c.w*.25} ry={c.w*.14} fill="rgba(255,255,255,0.92)"/>
            <ellipse cx={c.w*.67} cy={c.w*.14} rx={c.w*.2} ry={c.w*.12} fill="rgba(255,255,255,0.85)"/>
          </svg>
        </div>
      ))}
      <svg style={{position:"absolute",bottom:0,left:0,width:"200%",height:"40%",animation:`wave1 ${spd*5}s linear infinite`}} viewBox="0 0 800 160" preserveAspectRatio="none">
        <defs><linearGradient id="wg10" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={isN?"#0c2d56":"#1a5a8a"} stopOpacity=".95"/><stop offset="100%" stopColor={isN?"#030c16":"#071e34"} stopOpacity="1"/></linearGradient></defs>
        <path d={`M0,${80-amp} C35,${80-amp*1.7} 70,${80+amp*.5} 110,${80-amp*.4} C150,${80-amp*1.6} 190,${80+amp*.7} 240,${80-amp*.3} C285,${80-amp*1.7} 330,${80+amp*.6} 380,${80-amp*.4} C425,${80-amp*1.6} 470,${80+amp*.7} 520,${80-amp*.3} C560,${80-amp*1.7} 600,${80+amp*.5} 645,${80-amp*.4} C690,${80-amp*1.5} 745,${80+amp*.5} 800,${80-amp*.2} L800,160 L0,160 Z`} fill="url(#wg10)"/>
        <path d={`M0,${80-amp} C35,${80-amp*1.7} 70,${80+amp*.5} 110,${80-amp*.4} C150,${80-amp*1.6} 190,${80+amp*.7} 240,${80-amp*.3} C285,${80-amp*1.7} 330,${80+amp*.6} 380,${80-amp*.4} C425,${80-amp*1.6} 470,${80+amp*.7} 520,${80-amp*.3} C560,${80-amp*1.7} 600,${80+amp*.5} 645,${80-amp*.4} C690,${80-amp*1.5} 745,${80+amp*.5} 800,${80-amp*.2}`} fill="none" stroke={isN?"rgba(60,130,200,.35)":"rgba(120,200,250,.45)"} strokeWidth=".8"/>
      </svg>
      <svg style={{position:"absolute",bottom:0,left:"-18%",width:"200%",height:"28%",animation:`wave2 ${spd*7}s linear infinite`,opacity:.45}} viewBox="0 0 800 100" preserveAspectRatio="none">
        <path d={`M0,${50-amp*.6} C45,${50-amp*1.1} 90,${50+amp*.45} 145,${50-amp*.35} C200,${50-amp*1.0} 255,${50+amp*.55} 315,${50-amp*.25} C370,${50-amp*1.1} 430,${50+amp*.45} 490,${50-amp*.3} C545,${50-amp*1.0} 600,${50+amp*.4} 660,${50-amp*.25} C710,${50-amp*.9} 760,${50+amp*.35} 800,50 L800,100 L0,100 Z`} fill={isN?"rgba(6,18,42,.6)":"rgba(10,45,80,.55)"}/>
      </svg>
      <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,rgba(0,0,0,.08) 0%,rgba(0,0,0,0) 50%,rgba(0,0,0,.2) 100%)"}}/>
    </div>
  );
}

function LeafletMap({lat,lon,zoom=6}){
  const ref=useRef(null);const mapRef=useRef(null);const markerRef=useRef(null);
  const[ready,setReady]=useState(!!window.L);
  useEffect(()=>{if(window.L){setReady(true);return;}const s=document.createElement("script");s.src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";s.onload=()=>setReady(true);document.head.appendChild(s);},[]);
  useEffect(()=>{if(!ready||!ref.current||mapRef.current)return;const L=window.L;const map=L.map(ref.current,{center:[lat||40.4,lon||-3.7],zoom,zoomControl:false,attributionControl:false});L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18}).addTo(map);mapRef.current=map;},[ready]);
  useEffect(()=>{const L=window.L;if(!mapRef.current||!L||!lat||!lon)return;mapRef.current.setView([lat,lon],zoom,{animate:true,duration:.8});if(markerRef.current)markerRef.current.remove();const icon=L.divIcon({html:`<div style="width:10px;height:10px;background:${AC};border:2px solid #fff;border-radius:50%;box-shadow:0 0 0 3px ${AC}44;"></div>`,iconSize:[10,10],iconAnchor:[5,5],className:""});markerRef.current=L.marker([lat,lon],{icon}).addTo(mapRef.current);},[lat,lon,zoom,ready]);
  return <div ref={ref} style={{width:"100%",height:"100%"}}/>;
}

function Fish({filled,color,sz=12}){
  return(
    <svg width={sz} height={sz} viewBox="0 0 24 24" style={{display:"block"}}>
      <ellipse cx="10" cy="12" rx="7" ry="4.5" fill={filled?color:"none"} stroke={color} strokeWidth={filled?0:1.5} opacity={filled?1:.2}/>
      <path d="M17 12 L23 7 L23 17 Z" fill={filled?color:"none"} stroke={color} strokeWidth={filled?0:1.5} opacity={filled?1:.2}/>
      {filled&&<circle cx="6.5" cy="11" r="1" fill="rgba(0,0,0,.3)"/>}
    </svg>
  );
}
function FishRow({score,sz=11}){
  const col=sCol(score),f=Math.round(score);
  return <div style={{display:"flex",gap:1.5}}>{[...Array(10)].map((_,i)=><Fish key={i} filled={i<f} color={col} sz={sz}/>)}</div>;
}
function ScoreBlock({score,lg=false}){
  const col=sCol(score);
  return(
    <div>
      <div style={{display:"flex",alignItems:"baseline",gap:4,marginBottom:2}}>
        <span style={{fontSize:lg?38:22,fontFamily:MN,fontWeight:700,color:col,lineHeight:1}}>{score.toFixed(1)}</span>
        <span style={{fontSize:lg?10:9,fontFamily:MN,color:col,letterSpacing:1}}>{sLbl(score)}</span>
      </div>
      <FishRow score={score} sz={lg?14:11}/>
    </div>
  );
}

function TideChartPro({tides,horaActual=12}){
  const W=280,H=70,px=6;
  const arr=tides.slice(0,24);
  const mn=Math.min(...arr),mx=Math.max(...arr),rng=mx-mn||.01;
  const sx=(W-px*2)/(arr.length-1),sy=(H-px*2)/rng;
  const pts=arr.map((v,i)=>[px+i*sx,H-px-(v-mn)*sy]);
  const path="M"+pts.map(p=>p.join(",")).join(" L");
  const area=path+` L${pts[pts.length-1][0]},${H+2} L${px},${H+2} Z`;
  const nowX=px+horaActual*sx;
  const events=getTidalEvents(arr);
  const coef=coefMarea(arr);
  const coefC=coef>80?"#dc2626":coef>50?"#ca8a04":"#2563eb";
  return(
    <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:3}}>
        <span style={{fontSize:8,fontFamily:MN,color:TXD,letterSpacing:1.5}}>MAREAS</span>
        <div style={{display:"flex",gap:8,alignItems:"center"}}>
          <span style={{fontSize:8,fontFamily:MN,color:coefC,background:`${coefC}12`,border:`1px solid ${coefC}30`,borderRadius:3,padding:"1px 5px"}}>Coef {coef}</span>
          <span style={{fontSize:8,fontFamily:MN,color:AC}}>↕ {arr[horaActual]?.toFixed(2)}m</span>
        </div>
      </div>
      <svg width="100%" viewBox={`0 0 ${W} ${H+18}`} style={{overflow:"visible"}}>
        <defs><linearGradient id="tgp10" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e5fa0" stopOpacity=".1"/><stop offset="100%" stopColor="#1e5fa0" stopOpacity=".01"/></linearGradient></defs>
        <path d={area} fill="url(#tgp10)"/>
        <path d={path} fill="none" stroke="#1e5fa0" strokeWidth=".8" strokeLinejoin="round"/>
        <line x1={nowX} y1={0} x2={nowX} y2={H} stroke="rgba(220,38,38,.35)" strokeWidth=".7" strokeDasharray="2,2"/>
        <line x1={W-1} y1={px} x2={W-1} y2={H-px} stroke="rgba(200,30,30,.25)" strokeWidth=".6"/>
        {[mn,mx].map((v,i)=>{const y=H-px-(v-mn)*sy;return(<g key={i}><line x1={W-4} y1={y} x2={W} y2={y} stroke="rgba(200,30,30,.4)" strokeWidth=".6"/><text x={W+2} y={y+2.5} fontSize={5} fill="rgba(180,30,30,.65)" fontFamily={MN}>{v.toFixed(1)}</text></g>);})}
        {events.slice(0,6).map(({h,v,tipo},i)=>{const ppx=px+h*sx,ppy=H-px-(v-mn)*sy,isPlea=tipo==="pleamar";return(<g key={i}><circle cx={ppx} cy={ppy} r={2} fill={isPlea?"#1e5fa0":"#94a3b8"} stroke="white" strokeWidth=".6"/><text x={ppx} y={isPlea?ppy-5:ppy+9} textAnchor="middle" fontSize={5.5} fill={isPlea?"#1e5fa0":"#94a3b8"} fontFamily={MN}>{isPlea?"▲":"▼"}{v.toFixed(1)}</text><text x={ppx} y={H+11} textAnchor="middle" fontSize={5} fill={isPlea?"#1e5fa0":"#94a3b8"} fontFamily={MN}>{pad2(h)}h</text></g>);})}
        {[0,6,12,18].map(h=><text key={h} x={px+h*sx} y={H+17} textAnchor="middle" fontSize={5} fill={TXD} fontFamily={MN}>{pad2(h)}h</text>)}
      </svg>
    </div>
  );
}

function MiniChart({data,color,label,unit,horaActual=12,h=44}){
  const valid=data.filter(v=>v!=null&&!isNaN(v));
  if(!valid.length)return null;
  const W=260,H=h,px=4;
  const mn=Math.min(...valid),mx=Math.max(...valid)||1;
  const sx=(W-px*2)/(data.length-1),sy=(H-px*2)/(mx-mn||1);
  let d="";
  data.forEach((v,i)=>{if(v==null||isNaN(v))return;const x=px+i*sx,y=H-px-(v-mn)*sy;d+=(!d||data.slice(0,i).every(x=>x==null))?`M${x},${y}`:`L${x},${y}`;});
  const area=d+(valid.length?` L${px+(data.length-1)*sx},${H+2} L${px},${H+2} Z`:"");
  const nowX=px+horaActual*sx;
  const nowV=data[horaActual];
  const nowY=nowV!=null?H-px-(nowV-mn)*sy:null;
  return(
    <div style={{background:BGC,border:`1px solid ${BD}`,borderRadius:6,padding:"7px 9px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:3}}>
        <span style={{fontSize:8,fontFamily:MN,color:TXD,letterSpacing:1.5}}>{label}</span>
        {nowV!=null&&<span style={{fontSize:11,fontFamily:MN,fontWeight:600,color}}>{typeof nowV==="number"?nowV.toFixed(1):nowV}<span style={{fontSize:7,color:TXD,marginLeft:2}}>{unit}</span></span>}
      </div>
      <svg width="100%" viewBox={`0 0 ${W} ${H+12}`} style={{overflow:"visible"}}>
        <defs><linearGradient id={`mc10${label.replace(/\s/g,"")}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={color} stopOpacity=".1"/><stop offset="100%" stopColor={color} stopOpacity=".01"/></linearGradient></defs>
        <path d={area} fill={`url(#mc10${label.replace(/\s/g,"")})`}/>
        <path d={d} fill="none" stroke={color} strokeWidth=".9" strokeLinejoin="round"/>
        <line x1={nowX} y1={0} x2={nowX} y2={H} stroke="rgba(220,38,38,.3)" strokeWidth=".6" strokeDasharray="2,2"/>
        {nowY&&<circle cx={nowX} cy={nowY} r={2} fill={color} stroke="white" strokeWidth=".5"/>}
        {[0,6,12,18].map(hh=><text key={hh} x={px+hh*sx} y={H+9} textAnchor="middle" fontSize={5} fill={TXD} fontFamily={MN}>{pad2(hh)}h</text>)}
      </svg>
    </div>
  );
}

function ScoreLine({scores,horaActual,sunrise="07:00",sunset="20:30"}){
  const sunH=parseInt(sunrise),setH=parseInt(sunset);
  const W=280,H=40,px=4,sx=(W-px*2)/(scores.length-1);
  let d="";scores.forEach((s,i)=>{const x=px+i*sx,y=H-px-(s/10)*(H-px*2);d+=i===0?`M${x},${y}`:`L${x},${y}`;});
  const nowX=px+horaActual*sx;
  return(
    <div>
      <div style={{display:"flex",height:4,borderRadius:2,overflow:"hidden",marginBottom:2}}>
        {scores.map((_,h)=><div key={h} style={{flex:1,background:h>=sunH&&h<setH?"rgba(250,200,20,.15)":"rgba(30,60,120,.12)"}}/>)}
      </div>
      <svg width="100%" viewBox={`0 0 ${W} ${H+12}`} style={{overflow:"visible"}}>
        <defs><linearGradient id="sl10" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#16a34a" stopOpacity=".12"/><stop offset="100%" stopColor="#16a34a" stopOpacity=".01"/></linearGradient></defs>
        <path d={d+` L${px+(scores.length-1)*sx},${H} L${px},${H} Z`} fill="url(#sl10)"/>
        <path d={d} fill="none" stroke="#16a34a" strokeWidth=".9" strokeLinejoin="round"/>
        <line x1={nowX} y1={0} x2={nowX} y2={H} stroke="rgba(220,38,38,.4)" strokeWidth=".7" strokeDasharray="2,2"/>
        {scores.map((s,h)=>{const col=sCol(s),isNow=h===horaActual;if(!isNow&&h%6!==0)return null;const x=px+h*sx,y=H-px-(s/10)*(H-px*2);return(<g key={h}><circle cx={x} cy={y} r={isNow?3:1.5} fill={isNow?"#dc2626":col} stroke={isNow?"white":undefined} strokeWidth={isNow?.6:0}/>{isNow&&<text x={x} y={y-5} textAnchor="middle" fontSize={6} fill="#dc2626" fontFamily={MN}>{s.toFixed(1)}</text>}</g>);})}
        {[0,6,12,18].map(h=><text key={h} x={px+h*sx} y={H+10} textAnchor="middle" fontSize={5} fill={TXD} fontFamily={MN}>{pad2(h)}h</text>)}
      </svg>
    </div>
  );
}

function Compass({deg=0,speed=0,size=88}){
  const cx=size/2,cy=size/2,r=size/2-4;
  const col=speed<10?"#16a34a":speed<25?"#ca8a04":speed<40?"#ea580c":"#dc2626";
  const rad=(deg-90)*Math.PI/180;
  const ax=cx+Math.cos(rad)*(r-12),ay=cy+Math.sin(rad)*(r-12);
  const bx=cx-Math.cos(rad)*10,by=cy-Math.sin(rad)*10;
  const perp=rad+Math.PI/2;
  return(
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={cx} cy={cy} r={r} fill="rgba(240,246,255,.95)" stroke={BD} strokeWidth={1}/>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(30,95,160,.12)" strokeWidth={1.5}/>
      {[...Array(72)].map((_,i)=>{const a=(i*5-90)*Math.PI/180,isMaj=i%18===0,isMed=i%9===0,r1=r-(isMaj?9:isMed?6:3.5),r2=r-1.5;return <line key={i} x1={cx+r1*Math.cos(a)} y1={cy+r1*Math.sin(a)} x2={cx+r2*Math.cos(a)} y2={cy+r2*Math.sin(a)} stroke={isMaj?"rgba(30,95,160,.45)":isMed?"rgba(30,95,160,.25)":"rgba(30,95,160,.12)"} strokeWidth={isMaj?1:isMed?.7:.4}/>;})}
      {[["N",0,"#dc2626"],["E",90,TXD],["S",180,TXD],["O",270,TXD]].map(([l,dd,c])=>{const a=(dd-90)*Math.PI/180,rr=r-14;return <text key={l} x={cx+rr*Math.cos(a)} y={cy+rr*Math.sin(a)+3} textAnchor="middle" fontSize={l==="N"?8:7} fill={c} fontFamily={MN} fontWeight={l==="N"?"700":"500"}>{l}</text>;})}
      <polygon points={`${ax},${ay} ${bx+Math.cos(perp)*4.5},${by+Math.sin(perp)*4.5} ${bx-Math.cos(perp)*4.5},${by-Math.sin(perp)*4.5}`} fill={col}/>
      <line x1={bx} y1={by} x2={ax} y2={ay} stroke={col} strokeWidth={1.8} strokeLinecap="round"/>
      <circle cx={cx} cy={cy} r={3.5} fill="white" stroke={BD} strokeWidth=".8"/>
      <circle cx={cx} cy={cy} r={1.8} fill={col}/>
      <text x={cx} y={cy+r*.42} textAnchor="middle" fontSize={10} fill={col} fontFamily={MN} fontWeight="600">{Math.round(speed)}</text>
      <text x={cx} y={cy+r*.56} textAnchor="middle" fontSize={6.5} fill={TXD} fontFamily={MN}>km/h {wDir(deg)}</text>
    </svg>
  );
}

function SunIcon({rise=true,time}){
  const col=rise?"#d97706":"#ea580c";
  return(
    <div style={{textAlign:"center"}}>
      <svg width={34} height={24} viewBox="0 0 34 24">
        {[-60,-30,0,30,60,90,120,150,180].map((a,i)=>{
          const r=(a-90)*Math.PI/180,x1=17+Math.cos(r)*7,y1=18+Math.sin(r)*7,x2=17+Math.cos(r)*11,y2=18+Math.sin(r)*11;
          if(y1>19.5||y2>19.5)return null;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={col} strokeWidth=".9" strokeLinecap="round" opacity=".7"/>;
        })}
        <path d="M 4 19 A 13 13 0 0 1 30 19" fill="none" stroke={col} strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="17" cy="17" r="4" fill={col} opacity=".9"/>
        <line x1="2" y1="20.5" x2="32" y2="20.5" stroke={TXD} strokeWidth=".6" opacity=".4"/>
        {rise
          ?<path d="M17 12 L15 15.5 M17 12 L19 15.5" fill="none" stroke={col} strokeWidth=".8" strokeLinecap="round"/>
          :<path d="M17 15.5 L15 12 M17 15.5 L19 12" fill="none" stroke={col} strokeWidth=".8" strokeLinecap="round" opacity=".5"/>
        }
      </svg>
      <div style={{fontSize:10,fontFamily:MN,fontWeight:600,color,lineHeight:1}}>{time}</div>
      <div style={{fontSize:7,color:TXD,marginTop:1}}>{rise?"Amanecer":"Atardecer"}</div>
    </div>
  );
}

function LunaSVG({fase,size=44}){
  const cx=size/2,cy=size/2,r=size/2-2;
  const angle=fase*2*Math.PI,termX=Math.cos(angle)*r,creciente=fase<0.5;
  return(
    <div style={{textAlign:"center"}}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <defs><clipPath id={`mclip${size}`}><circle cx={cx} cy={cy} r={r}/></clipPath></defs>
        <circle cx={cx} cy={cy} r={r} fill="#e8f0fa" stroke="rgba(30,95,160,.12)" strokeWidth={.7}/>
        <g clipPath={`url(#mclip${size})`}>
          {creciente?(<><rect x={cx} y={0} width={r} height={size} fill="#1a2a42" opacity={.88}/><ellipse cx={cx} cy={cy} rx={Math.abs(termX)} ry={r} fill={fase<0.25?"#e8d870":"#1a2a42"} opacity={.9}/></>):(<><rect x={0} y={0} width={cx} height={size} fill="#1a2a42" opacity={.88}/><ellipse cx={cx} cy={cy} rx={Math.abs(termX)} ry={r} fill={fase>0.75?"#e8d870":"#1a2a42"} opacity={.9}/></>)}
        </g>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(30,95,160,.1)" strokeWidth={.7}/>
      </svg>
      <div style={{fontSize:7.5,color:TXD,marginTop:1,fontFamily:MN}}>{lunaN(fase)}</div>
    </div>
  );
}

function Card({children,style}){return <div style={{background:BGC,border:`1px solid ${BD}`,borderRadius:8,padding:"11px 13px",boxShadow:"0 1px 6px rgba(30,95,160,.04)",...style}}>{children}</div>;}
function SL({children,icon=""}){return(<div style={{fontSize:8,fontFamily:MN,color:TXD,letterSpacing:2,marginBottom:6,display:"flex",alignItems:"center",gap:5}}>{icon&&<span>{icon}</span>}<div style={{width:7,height:.8,background:AC,opacity:.5}}/>{children}<div style={{flex:1,height:.5,background:"rgba(30,95,160,.08)"}}/></div>);}

// ─── DAY CARD ─────────────────────────────────────────────────────────────────
function DayCard({dia,score,isMar,horaScores,onClick}){
  const col=sCol(score);
  const intervalo=mejorIntervalo(horaScores);
  const ev=getTidalEvents(dia.tides.slice(0,24));
  const plea=ev.find(e=>e.tipo==="pleamar");
  const baja=ev.find(e=>e.tipo==="bajamar");
  const waveMax=isMar?Math.max(...(dia.hourly.wave.length?dia.hourly.wave:[0])).toFixed(1):null;
  const presionMed=Math.round(dia.hourly.sp.filter(Boolean).reduce((a,b)=>a+b,0)/Math.max(1,dia.hourly.sp.filter(Boolean).length));
  const nubesMed=Math.round(dia.hourly.cld.reduce((a,b)=>a+b,0)/24);
  const coef=coefMarea(dia.tides.slice(0,24));
  const coefC=coef>80?"#dc2626":coef>50?"#ca8a04":"#2563eb";
  const coefL=coef>80?"Viva":coef>50?"Mixta":"Muerta";
  return(
    <div onClick={onClick} style={{background:BGC,border:`1px solid ${BD}`,borderTop:`3px solid ${col}`,borderRadius:10,padding:"11px",boxShadow:"0 2px 8px rgba(30,95,160,.06)",display:"flex",flexDirection:"column",gap:7,cursor:"pointer"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
        <div>
          <div style={{fontSize:18,fontFamily:MN,fontWeight:700,color:TX,lineHeight:1}}>{dia.dia}</div>
          <div style={{fontSize:12,color:TXM,marginTop:2}}>{dia.fechaC}</div>
        </div>
        <div style={{textAlign:"right"}}>
          <div style={{fontSize:22,fontFamily:MN,fontWeight:700,color:col,lineHeight:1}}>{score.toFixed(1)}</div>
          <div style={{fontSize:10,color:col,fontFamily:MN,letterSpacing:1,marginTop:1}}>{sLbl(score)}</div>
          <div style={{marginTop:4,display:"flex",justifyContent:"flex-end"}}><FishRow score={score} sz={11}/></div>
        </div>
      </div>
      {intervalo&&(<div style={{background:sBg(intervalo.score),border:`1px solid ${sCol(intervalo.score)}30`,borderRadius:5,padding:"5px 9px",display:"flex",justifyContent:"space-between",alignItems:"center"}}><span style={{fontSize:11,color:TXD}}>⏱ Mejor ventana</span><span style={{fontSize:13,fontFamily:MN,fontWeight:700,color:sCol(intervalo.score)}}>{pad2(intervalo.h)}:00–{pad2(intervalo.h+2)}:00h</span></div>)}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:4}}>
        {[
          {ic:"🌡",v:`${Math.round(dia.tMax||0)}°`,s:`/${Math.round(dia.tMin||0)}°`,l:"Temp"},
          {ic:"💨",v:`${Math.round(dia.wMax||0)}`,s:"km/h",l:"Viento"},
          {ic:"🌧",v:`${(dia.rain||0).toFixed(1)}`,s:"mm",l:"Lluvia"},
          isMar?{ic:"🌊",v:waveMax,s:"m",l:"Ola"}:{ic:"⬇",v:`${presionMed}`,s:"hPa",l:"Presión"},
          {ic:"☁",v:`${nubesMed}`,s:"%",l:"Nubes"},
          {ic:lunaE(dia.luna),v:lunaN(dia.luna).slice(0,8),s:"",l:"Luna"},
        ].map(({ic,v,s,l},i)=>(
          <div key={i} style={{background:"rgba(30,95,160,.04)",border:"1px solid rgba(30,95,160,.07)",borderRadius:6,padding:"6px 3px",textAlign:"center"}}>
            <div style={{fontSize:15}}>{ic}</div>
            <div style={{fontSize:11,fontFamily:MN,fontWeight:700,color:TX,lineHeight:1.2,marginTop:2}}>{v}<span style={{fontSize:9,fontWeight:400,color:TXD}}>{s}</span></div>
            <div style={{fontSize:9,color:TXD,marginTop:1}}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:3}}>
        {[
          {ic:"🌅",v:dia.sunrise,l:"Sale",c:"#d97706"},
          {ic:"🌇",v:dia.sunset,l:"Pone",c:"#ea580c"},
          plea?{ic:"▲",v:`${plea.v.toFixed(1)}m`,l:`${pad2(plea.h)}h`,c:AC}:{ic:"▲",v:"—",l:"Plea",c:TXD},
          baja?{ic:"▼",v:`${baja.v.toFixed(1)}m`,l:`${pad2(baja.h)}h`,c:TXM}:{ic:"▼",v:"—",l:"Baja",c:TXD},
          {ic:"💧",v:`${Math.round(dia.hourly.sst?.[12]||16)}°`,l:"Agua",c:"#0891b2"},
        ].map(({ic,v,l,c},i)=>(
          <div key={i} style={{background:"rgba(30,95,160,.03)",border:"1px solid rgba(30,95,160,.06)",borderRadius:4,padding:"5px 2px",textAlign:"center"}}>
            <div style={{fontSize:13}}>{ic}</div>
            <div style={{fontSize:10,fontFamily:MN,fontWeight:600,color:c||TX,lineHeight:1.1,marginTop:2}}>{v}</div>
            <div style={{fontSize:8,color:TXD,marginTop:1}}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{display:"flex",justifyContent:"space-between",borderTop:`1px solid ${BD}`,paddingTop:5}}>
        <span style={{fontSize:10,color:TXD}}>Presión {presionMed} hPa</span>
        {isMar&&<span style={{fontSize:10,fontFamily:MN,fontWeight:600,color:coefC}}>Coef {coef} · {coefL}</span>}
      </div>
      <div style={{textAlign:"center",padding:"6px 0",background:`linear-gradient(135deg,${AC},${ACL})`,borderRadius:6,fontSize:12,fontFamily:MN,fontWeight:700,letterSpacing:1,color:"#fff"}}>
        VER DETALLE →
      </div>
    </div>
  );
}

export default function App(){
  const[screen,setScreen]=useState("home");
  const[spot,setSpot]=useState(null);
  const[query,setQuery]=useState("");
  const[sugs,setSugs]=useState([]);
  const[modal,setModal]=useState("surfcasting");
  const[especie,setEspecie]=useState("");
  const[diaIdx,setDiaIdx]=useState(0);
  const[gpsLoad,setGpsLoad]=useState(false);
  const[gpsErr,setGpsErr]=useState("");
  const[geoLoc,setGeoLoc]=useState(null);
  const[meteoGeo,setMeteoGeo]=useState(null);
  const{meteo,loading,error,load}=useMeteo();
  const hora=new Date().getHours();
  const isNight=hora<6||hora>21;

  const especiesFilt=useMemo(()=>{if(!spot)return[];const m=(modal==="carpfishing"&&spot.t==="mar")?"spinning":modal;return getEspecies(spot.t,m)||[];},[spot,modal]);
  const modalesFilt=useMemo(()=>{if(!spot)return MODALIDADES;const p=MODALS_POR_ZONA[spot.t]||[];return MODALIDADES.filter(m=>p.includes(m.id));},[spot]);
  const especieInfo=useMemo(()=>especie?getEspecieInfo(especie):null,[especie]);
  const cebosSel=useMemo(()=>{if(!especieInfo)return[];const ce=especieInfo.cebos[modal]||especieInfo.cebos[Object.keys(especieInfo.cebos)[0]]||[];return ce.slice(0,4);},[especieInfo,modal]);

  useEffect(()=>{
    if(!navigator.geolocation)return;
    navigator.geolocation.getCurrentPosition(async pos=>{
      const{latitude:lat,longitude:lon}=pos.coords;
      const z=nearestSpot(lat,lon,SPOTS);
      setGeoLoc({lat,lon,nombre:z.n,region:z.r});
      try{const r=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m,surface_pressure,precipitation,cloud_cover,wave_height&timezone=Europe%2FMadrid`);const d=await r.json();if(!d.error)setMeteoGeo(d.current);}catch{}
    },()=>{},{timeout:8000,enableHighAccuracy:false});
  },[]);

  const elegirSpot=useCallback((z)=>{setSpot(z);setQuery(z.n);setSugs([]);setEspecie("");const p=MODALS_POR_ZONA[z.t]||[];if(!p.includes(modal))setModal(p[0]||"spinning");},[modal]);
  const handleBuscar=useCallback(()=>{if(!spot)return;load(spot.lat,spot.lon);setDiaIdx(0);setScreen("days");},[spot,load]);
  const handleGPS=()=>{if(!navigator.geolocation){setGpsErr("GPS no disponible.");return;}setGpsLoad(true);setGpsErr("");navigator.geolocation.getCurrentPosition(pos=>{const{latitude:lat,longitude:lon}=pos.coords;elegirSpot({...nearestSpot(lat,lon,SPOTS),lat,lon});setGpsLoad(false);},e=>{setGpsLoad(false);setGpsErr(e.code===1?"Permiso GPS denegado.":"Error GPS.");},{timeout:10000,enableHighAccuracy:false});};

  const dia=meteo?.dias[diaIdx];
  const isMar=spot?.t==="mar"||spot?.t==="laguna";

  const allDayScores=useMemo(()=>{
    if(!meteo)return[];
    return meteo.dias.map(d=>d.hourly.time.map((t,i)=>calcScore(modal,especie,new Date(t).getHours(),{presion:d.hourly.sp[i]??1013,presionPrev:d.hourly.sp[Math.max(0,i-3)]??1013,viento:d.hourly.wnd[i]??0,lluvia:d.hourly.prcp[i]??0,nubes:d.hourly.cld[i]??0,tempAgua:d.hourly.sst?.[i],ola:d.hourly.wave[i]??0,luna:d.luna,tipoZona:spot?.t||"embalse"})));
  },[meteo,modal,especie,spot]);

  const scoresSem=useMemo(()=>allDayScores.map(sc=>sc.length?parseFloat((sc.reduce((a,b)=>a+b,0)/sc.length).toFixed(1)):5),[allDayScores]);
  const horaScores=allDayScores[diaIdx]||[];
  const scoreHoy=horaScores.length?parseFloat((horaScores.reduce((a,b)=>a+b,0)/horaScores.length).toFixed(1)):0;
  const mejorH=horaScores.length?horaScores.reduce((b,s,h)=>s>b.s?{s,h}:b,{s:0,h:0}):null;
  const recom=useMemo(()=>{if(!mejorH||!dia)return null;const{s,h}=mejorH;if(s>=8)return`Condiciones ÓPTIMAS. Mejor hora: ${pad2(h)}:00h.${cebosSel[0]?" Usa "+cebosSel[0]+".":""}`;if(s>=6.5)return`Condiciones BUENAS a las ${pad2(h)}:00h.${cebosSel[0]?" "+cebosSel[0]+".":""}`;if(s>=4.5)return`Condiciones REGULARES. Mejor ventana: ${pad2(h)}:00h.`;return"Condiciones ADVERSAS.";},[mejorH,dia,cebosSel]);

  // ── HOME ────────────────────────────────────────────────────────────────────
  if(screen==="home") return(
    <div style={{minHeight:"100vh",position:"relative",overflow:"hidden",fontFamily:SN}}>
      <OceanBg waveH={meteoGeo?.wave_height||0.5} night={isNight}/>
      <div style={{position:"fixed",inset:0,background:"linear-gradient(to bottom,rgba(15,35,65,.5) 0%,rgba(15,35,65,.12) 38%,rgba(15,35,65,.6) 68%,rgba(240,246,255,.97) 100%)",zIndex:1}}/>
      <div style={{position:"relative",zIndex:2,minHeight:"100vh",display:"flex",flexDirection:"column",padding:"0 14px 28px"}}>
        <div style={{textAlign:"center",padding:"18px 0 12px"}}>
          <div style={{fontSize:25,fontFamily:MN,fontWeight:700,color:"#fff",letterSpacing:3,textShadow:"0 2px 16px rgba(0,0,0,.35)"}}>PESCA<span style={{color:"#7dd3fc"}}>IA</span></div>
          <div style={{fontSize:9,fontFamily:MN,color:"rgba(200,230,255,.65)",letterSpacing:4,marginTop:2}}>PREVISIÓN PESQUERA · ESPAÑA</div>
        </div>
        <div style={{background:"rgba(255,255,255,.93)",backdropFilter:"blur(16px)",border:`1px solid ${BD}`,borderRadius:12,padding:14,marginBottom:10,boxShadow:"0 4px 24px rgba(30,95,160,.1)"}}>
          <div style={{fontSize:8,fontFamily:MN,color:TXD,letterSpacing:2.5,marginBottom:10}}>▸ PLANIFICA TU SALIDA</div>
          <div style={{marginBottom:9,position:"relative"}}>
            <div style={{fontSize:8,fontFamily:MN,color:TXD,letterSpacing:2,marginBottom:4}}>SPOT DE PESCA</div>
            <div style={{display:"flex",gap:6}}>
              <div style={{flex:1,position:"relative"}}>
                <input value={query} onChange={e=>{setQuery(e.target.value);setSugs(searchSpots(e.target.value,SPOTS));}} onKeyDown={e=>{if(e.key==="Enter"&&sugs.length)elegirSpot(sugs[0]);}} placeholder="Playa, embalse, río, pueblo..." style={{width:"100%",background:"#f8fbff",border:`1.5px solid ${BD}`,borderRadius:6,color:TX,padding:"9px 12px",fontSize:14,outline:"none",boxSizing:"border-box"}}/>
                {sugs.length>0&&(<div style={{position:"absolute",top:"calc(100%+3px)",left:0,right:0,zIndex:300,background:"#fff",border:`1.5px solid ${BDA}`,borderRadius:"0 0 8px 8px",boxShadow:"0 8px 24px rgba(30,95,160,.15)"}}>
                  {sugs.map((z,i)=>(
                    <div key={i} onClick={()=>elegirSpot(z)} style={{padding:"9px 12px",cursor:"pointer",fontSize:13,borderTop:i>0?`1px solid ${BD}`:"none",display:"flex",justifyContent:"space-between",alignItems:"center",transition:"background .1s"}} onMouseEnter={e=>e.currentTarget.style.background="rgba(30,95,160,.05)"} onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                      <span style={{color:TX}}><span style={{color:ACL,marginRight:7}}>{z.t==="mar"?"🌊":z.t==="río"?"〰":z.t==="laguna"?"💧":"◎"}</span>{z.n}{z.pob&&z.pob!==z.n&&<span style={{fontSize:11,color:TXD,marginLeft:4}}>· {z.pob}</span>}</span>
                      <span style={{fontSize:9,color:TXD,fontFamily:MN}}>{z.r}</span>
                    </div>
                  ))}
                </div>)}
              </div>
              <button onClick={handleGPS} disabled={gpsLoad} style={{background:AC,border:"none",borderRadius:6,color:"#fff",padding:"9px 13px",cursor:"pointer",fontSize:15,minWidth:44,fontWeight:600}}>{gpsLoad?"⟳":"📍"}</button>
            </div>
            {spot&&<div style={{fontSize:10,fontFamily:MN,color:AC,marginTop:3}}>✓ {spot.n} · {spot.r} · {spot.t}</div>}
          </div>
          <div style={{marginBottom:9}}>
            <div style={{fontSize:8,fontFamily:MN,color:TXD,letterSpacing:2,marginBottom:4}}>MODALIDAD</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:4}}>
              {modalesFilt.map(m=><button key={m.id} onClick={()=>setModal(m.id)} style={{padding:"5px 10px",borderRadius:4,cursor:"pointer",fontSize:12,fontWeight:600,transition:"all .12s",background:modal===m.id?AC:"#f0f6ff",border:`1.5px solid ${modal===m.id?AC:BD}`,color:modal===m.id?"#fff":TXM}}>{m.e} {m.n}</button>)}
            </div>
          </div>
          {spot&&especiesFilt.length>0&&(<div style={{marginBottom:9}}>
            <div style={{fontSize:8,fontFamily:MN,color:TXD,letterSpacing:2,marginBottom:4}}>ESPECIE OBJETIVO</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:4}}>
              {especiesFilt.map(e=><button key={e} onClick={()=>setEspecie(especie===e?"":e)} style={{padding:"5px 10px",borderRadius:4,cursor:"pointer",fontSize:12,fontWeight:600,transition:"all .12s",background:especie===e?"rgba(22,163,74,.15)":"#f0f6ff",border:`1.5px solid ${especie===e?"rgba(22,163,74,.5)":BD}`,color:especie===e?"#15803d":TXM}}>{e}</button>)}
            </div>
          </div>)}
          {especie&&especieInfo&&(<div style={{background:"rgba(30,95,160,.04)",border:`1px solid ${BDA}`,borderRadius:8,padding:"11px",marginBottom:10}}>
            <div style={{fontSize:9,fontFamily:MN,color:TXD,letterSpacing:2,marginBottom:6}}>{especieInfo.icono} {especie.toUpperCase()} · {especieInfo.temporada}</div>
            <div style={{marginBottom:6}}>
              <div style={{fontSize:8,color:TXD,fontFamily:MN,letterSpacing:1.5,marginBottom:3}}>🪝 CEBOS / SEÑUELOS</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:4}}>{cebosSel.map((c,i)=><span key={i} style={{padding:"3px 8px",background:"rgba(22,163,74,.08)",border:"1px solid rgba(22,163,74,.2)",borderRadius:3,fontSize:11,fontWeight:500,color:"#15803d"}}>🪝 {c}</span>)}</div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:5,marginBottom:6}}>
              {[{l:"PROFUNDIDAD",v:especieInfo.profundidad},{l:"CONDICIONES",v:especieInfo.condiciones}].map(({l,v},i)=>(
                <div key={i} style={{background:"rgba(255,255,255,.7)",borderRadius:4,padding:"5px 7px"}}>
                  <div style={{fontSize:7,fontFamily:MN,color:TXD,letterSpacing:1.5,marginBottom:2}}>{l}</div>
                  <div style={{fontSize:10,color:TX,lineHeight:1.35}}>{v}</div>
                </div>
              ))}
            </div>
            <div style={{background:"rgba(255,255,255,.7)",borderRadius:4,padding:"7px 9px",borderLeft:`2px solid ${ACL}`}}>
              <div style={{fontSize:7,fontFamily:MN,color:TXD,letterSpacing:1.5,marginBottom:3}}>💡 CONSEJO PRO</div>
              <div style={{fontSize:11,color:TX,lineHeight:1.55}}>{especieInfo.tip}</div>
            </div>
          </div>)}
          <button onClick={handleBuscar} disabled={!spot||loading} style={{width:"100%",padding:11,borderRadius:6,cursor:spot?"pointer":"not-allowed",fontSize:14,fontFamily:MN,fontWeight:600,letterSpacing:2,background:spot?"linear-gradient(135deg,#1a4a8a,#2a7fd4)":"rgba(200,215,230,.5)",border:`1px solid ${spot?AC:"transparent"}`,color:spot?"#fff":"rgba(100,140,180,.5)",boxShadow:spot?"0 4px 16px rgba(30,95,160,.2)":"none",transition:"all .2s"}}>
            {loading?"CARGANDO...":"VER PREVISIÓN →"}
          </button>
          {(error||gpsErr)&&<div style={{marginTop:5,fontSize:11,color:"#dc2626",fontFamily:MN}}>⚠ {error||gpsErr}</div>}
        </div>
        {geoLoc&&meteoGeo&&(<div style={{background:"rgba(255,255,255,.88)",backdropFilter:"blur(12px)",border:`1px solid ${BD}`,borderRadius:10,padding:"11px 13px",marginBottom:10}}>
          <div style={{fontSize:8,fontFamily:MN,color:TXD,letterSpacing:2.5,marginBottom:7}}>▸ AHORA EN {geoLoc.nombre?.toUpperCase()}</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:5}}>
            {[{ic:"🌡",v:`${meteoGeo.temperature_2m?.toFixed(1)}°C`,l:"Temp"},{ic:"💨",v:`${Math.round(meteoGeo.wind_speed_10m)}km/h`,l:"Viento"},{ic:"⬇",v:`${Math.round(meteoGeo.surface_pressure)}hPa`,l:"Presión"},{ic:"☁",v:`${meteoGeo.cloud_cover}%`,l:"Nubes"},{ic:"🌊",v:`${(meteoGeo.wave_height||0).toFixed(1)}m`,l:"Ola"},{ic:"🌧",v:`${meteoGeo.precipitation?.toFixed(1)}mm`,l:"Lluvia"}].map(({ic,v,l},i)=>(
              <div key={i} style={{textAlign:"center",background:"rgba(30,95,160,.05)",borderRadius:5,padding:"6px 3px"}}>
                <div style={{fontSize:14,marginBottom:2}}>{ic}</div>
                <div style={{fontSize:11,fontFamily:MN,fontWeight:600,color:TX}}>{v}</div>
                <div style={{fontSize:7,color:TXD,marginTop:1}}>{l}</div>
              </div>
            ))}
          </div>
        </div>)}
        {!spot&&(<div>
          <div style={{fontSize:8,fontFamily:MN,color:"rgba(200,220,255,.55)",letterSpacing:2,marginBottom:6}}>SPOTS POPULARES</div>
          <div style={{display:"flex",flexWrap:"wrap",gap:5}}>
            {["Playa La Barrosa","Playa de Mazagón","Embalse El Gergal","Embalse Buendía","Río Ebro — Zaragoza","Playa de Tarifa","Mar Menor La Manga","Playa de Zarautz"].map(n=>{const z=SPOTS.find(z=>z.n===n);return z?(<button key={n} onClick={()=>elegirSpot(z)} style={{padding:"5px 10px",borderRadius:4,cursor:"pointer",fontSize:11,background:"rgba(255,255,255,.15)",backdropFilter:"blur(4px)",border:"1px solid rgba(255,255,255,.25)",color:"#fff",transition:"all .15s"}} onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,.25)"} onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,.15)"}>{n}</button>):null;})}
          </div>
        </div>)}
      </div>
    </div>
  );

  // ── DÍAS ────────────────────────────────────────────────────────────────────
  if(screen==="days") return(
    <div style={{minHeight:"100vh",background:BG,fontFamily:SN}}>
      <div style={{background:"rgba(255,255,255,.97)",borderBottom:`1px solid ${BD}`,padding:"10px 14px",position:"sticky",top:0,zIndex:100,backdropFilter:"blur(12px)"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div>
            <div style={{fontSize:14,fontFamily:MN,fontWeight:700,color:TX}}>PESCA<span style={{color:ACL}}>IA</span></div>
            <div style={{fontSize:9,fontFamily:MN,color:TXD}}>{spot?.n} · {MODALIDADES.find(m=>m.id===modal)?.n}{especie?` · ${especie}`:""}</div>
          </div>
          <button onClick={()=>setScreen("home")} style={{background:"rgba(30,95,160,.07)",border:`1px solid ${BD}`,borderRadius:5,color:TXM,padding:"6px 11px",cursor:"pointer",fontSize:12}}>← Inicio</button>
        </div>
      </div>
      {loading&&(<div style={{textAlign:"center",padding:"48px",color:TXD,fontSize:11,letterSpacing:3,fontFamily:MN}}><div style={{fontSize:22,display:"inline-block",animation:"spin 1.1s linear infinite",color:AC,marginBottom:8}}>◌</div><br/>CARGANDO...</div>)}
      {meteo&&!loading&&(
        <div style={{padding:"10px 10px 32px"}}>
          <div style={{fontSize:9,fontFamily:MN,color:TXD,letterSpacing:2,textAlign:"center",marginBottom:8}}>{meteo.dias.length} DÍAS · TOCA VER DETALLE PARA ANÁLISIS HORA A HORA</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(155px,1fr))",gap:8}}>
            {meteo.dias.map((d,i)=>(
              <DayCard key={i} dia={d} score={scoresSem[i]||5} isMar={isMar} horaScores={allDayScores[i]||[]} onClick={()=>{setDiaIdx(i);setScreen("detail");}}/>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  // ── DETALLE ─────────────────────────────────────────────────────────────────
  return(
    <div style={{minHeight:"100vh",background:BG,fontFamily:SN}}>
      <div style={{background:"rgba(255,255,255,.97)",borderBottom:`1px solid ${BD}`,padding:"10px 14px",position:"sticky",top:0,zIndex:100,backdropFilter:"blur(12px)"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div>
            <div style={{fontSize:14,fontFamily:MN,fontWeight:700,color:TX}}>PESCA<span style={{color:ACL}}>IA</span> <span style={{fontSize:10,color:TXD,fontWeight:400}}>{dia?.dia} {dia?.fechaC}</span></div>
            <div style={{fontSize:9,fontFamily:MN,color:TXD}}>{spot?.n} · {especie||"General"}</div>
          </div>
          <button onClick={()=>setScreen("days")} style={{background:"rgba(30,95,160,.07)",border:`1px solid ${BD}`,borderRadius:5,color:TXM,padding:"6px 11px",cursor:"pointer",fontSize:12}}>← Días</button>
        </div>
      </div>
      {!dia ? (
        <div style={{textAlign:"center",padding:"48px",color:TXD,fontSize:11,fontFamily:MN}}>
          <div style={{fontSize:22,display:"inline-block",animation:"spin 1.1s linear infinite",color:AC,marginBottom:8}}>◌</div><br/>CARGANDO...
        </div>
      ) : (
        <div style={{padding:"11px 12px 40px",display:"flex",flexDirection:"column",gap:9}}>
          {isMar&&(<div style={{borderRadius:8,overflow:"hidden",height:110,position:"relative"}}><OceanBg waveH={dia.hourly.wave[hora]||0.4} night={isNight}/><div style={{position:"absolute",left:10,bottom:8,zIndex:5}}><div style={{background:"rgba(255,255,255,.85)",backdropFilter:"blur(6px)",border:`1px solid ${BD}`,borderRadius:4,padding:"3px 8px",fontSize:9,fontFamily:MN,color:AC}}>🌊 {(dia.hourly.wave[hora]||0).toFixed(1)}m · {(dia.hourly.wave[hora]||0)<0.5?"CALMA":(dia.hourly.wave[hora]||0)<1.2?"TRANQUILO":(dia.hourly.wave[hora]||0)<2?"RIZADO":"MAREJADA"}</div></div></div>)}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
            <Card style={{textAlign:"center"}}><SL>ACTIVIDAD</SL><ScoreBlock score={scoreHoy} lg/><div style={{fontSize:9,fontFamily:MN,color:TXD,marginTop:5,lineHeight:1.5}}>{MODALIDADES.find(m=>m.id===modal)?.n}<br/><span style={{color:"#16a34a"}}>{especie||"General"}</span></div></Card>
            <Card style={{textAlign:"center"}}><SL>VIENTO</SL><Compass deg={meteo.cur?.wdir??220} speed={meteo.cur?.wnd??0} size={88}/></Card>
            <Card><SL>CONDICIONES</SL>{[{l:"PRESIÓN",v:`${Math.round(dia.hourly.sp[hora]||1013)}`,u:"hPa",c:"#7c3aed"},{l:"TEMP",v:`${(dia.hourly.tmp[hora]||18).toFixed(1)}`,u:"°C",c:"#d97706"},{l:"T.AGUA",v:`${(dia.hourly.sst?.[hora]||16).toFixed(1)}`,u:"°C",c:"#0891b2"},{l:"NUBES",v:`${dia.hourly.cld[hora]||0}`,u:"%",c:"#64748b"},{l:"LLUVIA",v:`${(dia.hourly.prcp[hora]||0).toFixed(1)}`,u:"mm",c:"#2563eb"}].map(({l,v,u,c},i)=>(<div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:5}}><span style={{fontSize:8,fontFamily:MN,color:TXD,letterSpacing:1}}>{l}</span><span style={{fontSize:13,fontFamily:MN,fontWeight:600,color:c}}>{v}<span style={{fontSize:7,color:TXD}}> {u}</span></span></div>))}</Card>
          </div>
          <Card><div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}><SunIcon rise time={dia.sunrise}/><LunaSVG fase={dia.luna} size={48}/><div style={{textAlign:"center"}}><div style={{fontSize:12,color:TX,fontFamily:MN,fontWeight:600,marginBottom:2}}>{lunaN(dia.luna)}</div><div style={{fontSize:9,color:TXD}}>Ciclo {Math.round(dia.luna*100)}%</div></div><SunIcon rise={false} time={dia.sunset}/></div></Card>
          <Card><TideChartPro tides={dia.tides.slice(0,24)} horaActual={hora}/><div style={{display:"flex",gap:5,marginTop:8,flexWrap:"wrap"}}>{getTidalEvents(dia.tides.slice(0,24)).map(({h,v,tipo},i)=>(<div key={i} style={{flex:1,minWidth:68,background:tipo==="pleamar"?"rgba(30,95,160,.06)":"rgba(100,116,139,.05)",border:`1px solid ${tipo==="pleamar"?"rgba(30,95,160,.2)":"rgba(100,116,139,.18)"}`,borderRadius:4,padding:"5px 7px",textAlign:"center"}}><div style={{fontSize:9,color:tipo==="pleamar"?AC:TXD}}>{tipo==="pleamar"?"▲ PLEAMAR":"▼ BAJAMAR"}</div><div style={{fontSize:13,fontFamily:MN,fontWeight:700,color:tipo==="pleamar"?AC:TXM}}>{v.toFixed(2)}m</div><div style={{fontSize:9,fontFamily:MN,color:TXD}}>{pad2(h)}:00h</div></div>))}</div></Card>
          <Card><SL icon="📊">SCORE POR HORA</SL><ScoreLine scores={horaScores} horaActual={hora} sunrise={dia.sunrise} sunset={dia.sunset}/>{mejorH&&(<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:6,padding:"5px 8px",background:sBg(mejorH.s),border:`1px solid ${sCol(mejorH.s)}22`,borderRadius:4}}><span style={{fontSize:9,fontFamily:MN,color:TXD}}>⏱ Mejor momento</span><span style={{fontSize:12,fontFamily:MN,fontWeight:700,color:sCol(mejorH.s)}}>{pad2(mejorH.h)}:00h · {mejorH.s.toFixed(1)}</span></div>)}</Card>
          {especie&&especieInfo&&(<Card><SL icon="🪝">CEBOS — {especie}</SL><div style={{display:"flex",flexWrap:"wrap",gap:5,marginBottom:7}}>{cebosSel.map((c,i)=><span key={i} style={{padding:"4px 10px",background:"rgba(22,163,74,.07)",border:"1px solid rgba(22,163,74,.2)",borderRadius:4,fontSize:12,fontWeight:500,color:"#15803d"}}>🪝 {c}</span>)}</div>{recom&&<div style={{fontSize:11,color:TXM,lineHeight:1.6,background:"rgba(30,95,160,.04)",padding:"7px 10px",borderRadius:4,borderLeft:`2px solid ${ACL}`}}>💡 {recom}</div>}</Card>)}
          <Card><SL icon="📈">VARIABLES HORA A HORA</SL><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:7}}><MiniChart data={horaScores} color={sCol(scoreHoy)} label="SCORE PESCA" unit="/10" horaActual={hora}/><MiniChart data={dia.hourly.tmp} color="#d97706" label="TEMP AIRE" unit="°C" horaActual={hora}/><MiniChart data={dia.hourly.wnd} color="#2563eb" label="VIENTO" unit="km/h" horaActual={hora}/>{isMar&&<MiniChart data={dia.hourly.wave} color="#1e5fa0" label="OLEAJE" unit="m" horaActual={hora}/>}<MiniChart data={dia.hourly.sp.map(v=>v?Math.round(v):null)} color="#7c3aed" label="PRESION" unit="hPa" horaActual={hora}/><MiniChart data={dia.hourly.sst} color="#0891b2" label="TAGUA" unit="°C" horaActual={hora}/><MiniChart data={dia.hourly.cld} color="#94a3b8" label="NUBES" unit="%" horaActual={hora}/><MiniChart data={dia.hourly.prcp} color="#60a5fa" label="LLUVIA" unit="mm" horaActual={hora}/></div></Card>
        </div>
      )}
    </div>
  );
}
