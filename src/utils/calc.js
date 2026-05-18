export const DIAS  = ["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"];
export const MESES = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
export const pad2  = n => String(Math.round(n)).padStart(2,"0");
export const norm  = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");

export function getFase(d=new Date()){
  return(((((d-new Date(2000,0,6))/86400000)%29.53058867)+29.53058867)%29.53058867)/29.53058867;
}
export const lunaE=p=>p<0.05||p>0.95?"🌑":p<0.25?"🌒":p<0.30?"🌓":p<0.50?"🌔":p<0.55?"🌕":p<0.70?"🌖":p<0.75?"🌗":"🌘";
export const lunaN=p=>p<0.05||p>0.95?"Nueva":p<0.30?"Creciente":p<0.55?"Llena":p<0.80?"Menguante":"Menguante";
export const wDir =d=>["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSO","SO","OSO","O","ONO","NO","NNO"][Math.round(d/22.5)%16];

export function simTides(luna,lat,n=48){
  const amp=Math.abs(lat)>30?1.9:0.45;
  return Array.from({length:n},(_,i)=>{
    const t=i+luna*24;
    return Math.max(0.05,parseFloat((amp*Math.sin((t/12.42)*2*Math.PI)+amp*0.22*Math.sin((t/6.21)*2*Math.PI)+amp*1.06).toFixed(2)));
  });
}

export function coefMarea(tides){
  const arr=tides.slice(0,24);
  const mx=Math.max(...arr),mn=Math.min(...arr);
  return Math.round(((mx-mn)/3.6)*100);
}

export function searchSpots(q,spots){
  const t=norm(q); if(t.length<2)return[];
  return spots.filter(z=>{
    const zn=norm(z.n),zr=norm(z.r),zp=norm(z.pob||"");
    return zn.includes(t)||zr.includes(t)||zp.includes(t)||
      t.split(" ").every(w=>zn.includes(w)||zr.includes(w)||zp.includes(w));
  }).slice(0,8);
}

export function nearestSpot(lat,lon,spots){
  return spots.reduce((b,z)=>{const d=Math.hypot(z.lat-lat,z.lon-lon);return d<b.d?{z,d}:b},{z:spots[0],d:Infinity}).z;
}

export const sCol=s=>s>=8?"#16a34a":s>=6.5?"#ca8a04":s>=4.5?"#ea580c":s>=3?"#dc2626":"#7f1d1d";
export const sBg =s=>s>=8?"rgba(22,163,74,.08)":s>=6.5?"rgba(202,138,4,.08)":s>=4.5?"rgba(234,88,12,.08)":s>=3?"rgba(220,38,38,.08)":"rgba(127,29,29,.06)";
export const sLbl=s=>s>=8?"ÓPTIMO":s>=6.5?"BUENO":s>=4.5?"REGULAR":s>=3?"ADVERSO":"CRÍTICO";

export function calcScore(modal,esp,hora,{presion,presionPrev,viento,lluvia,nubes,tempAgua,ola,luna,tipoZona}){
  let s=3.8;
  const dp=presion-(presionPrev||presion);
  const e=(esp||"").toLowerCase();
  const esMar=tipoZona==="mar"||tipoZona==="laguna";
  if(presion>=1010&&presion<=1022)s+=1.1;else if(presion<1000)s-=1.4;
  if(dp<-3)s-=0.8;else if(dp>3)s+=0.3;
  const maxV={surfcasting:30,spinning:18,carpfishing:22,embarcacion:28,kayak:18,mosca:10,"curricán":40}[modal]||18;
  if(viento<maxV*0.35)s+=0.8;else if(viento<maxV*0.65)s+=0.3;else if(viento>maxV)s-=1.2;
  if(esMar){if(ola>0&&ola<1.0)s+=0.6;else if(ola>=2.0)s-=1.2;else if(ola>=3.0)s-=2.2;}
  if(lluvia===0)s+=0.3;else if(lluvia>5)s-=0.7;
  if(nubes>20&&nubes<70)s+=0.3;
  if(tempAgua){
    if(["trucha","salmón"].includes(e)&&tempAgua<15)s+=0.8;
    else if(["lubina","dorada","corvina"].includes(e)&&tempAgua>15)s+=0.5;
    else if(["carpa","siluro","anguila"].includes(e)&&tempAgua>18)s+=0.8;
  }
  if(["carpa","siluro","anguila","tenca"].includes(e)&&luna>0.45&&luna<0.55)s+=1.0;
  else if(["lubina","corvina","besugo"].includes(e)&&(luna<0.1||luna>0.9))s+=0.8;
  const h=hora,dn=(a,b)=>h>=a&&h<=b;
  if(["lubina","corvina","besugo","róbalo"].includes(e)){if(dn(5,8)||dn(20,23))s+=1.3;else if(dn(9,18))s-=0.3;}
  else if(["dorada","salmonete","dentón"].includes(e)){if(dn(9,12)||dn(16,19))s+=1.0;}
  else if(["carpa","tenca","boga"].includes(e)){if(dn(9,16))s+=0.9;}
  else if(["siluro","anguila"].includes(e)){if(dn(22,24)||dn(0,4))s+=1.4;else if(dn(8,18))s-=0.4;}
  else if(["black bass","lucio","perca"].includes(e)){if(dn(5,9)||dn(17,20))s+=1.0;}
  else if(["trucha","salmón"].includes(e)){if(dn(5,10))s+=1.1;}
  else if(["atún","bonito","melva","caballa"].includes(e)){if(dn(7,12)||dn(15,18))s+=0.9;}
  if(modal==="mosca"&&(dn(6,9)||dn(17,20)))s+=0.5;
  return Math.max(1,Math.min(10,parseFloat(s.toFixed(1))));
}

export function avgScore(modal,esp,hourly,luna,tipoZona){
  if(!hourly?.time?.length)return 5;
  const arr=hourly.time.map((t,i)=>calcScore(modal,esp,new Date(t).getHours(),{
    presion:hourly.sp[i]??1013,presionPrev:hourly.sp[Math.max(0,i-3)]??1013,
    viento:hourly.wnd[i]??0,lluvia:hourly.prcp[i]??0,nubes:hourly.cld[i]??0,
    tempAgua:hourly.sst?.[i],ola:hourly.wave[i]??0,luna,tipoZona,
  }));
  return parseFloat((arr.reduce((a,b)=>a+b,0)/arr.length).toFixed(1));
}

// Mejor intervalo horario de pesca (ventana de 2h consecutivas con score más alto)
export function mejorIntervalo(scores){
  if(!scores.length)return null;
  let best={score:0,h:0};
  for(let i=0;i<scores.length-1;i++){
    const avg=(scores[i]+scores[i+1])/2;
    if(avg>best.score){best={score:parseFloat(avg.toFixed(1)),h:i};}
  }
  return best;
}

export function getTidalEvents(tides){
  const ev=[];
  for(let i=1;i<tides.length-1;i++){
    if(tides[i]>tides[i-1]&&tides[i]>tides[i+1]) ev.push({h:i,v:tides[i],tipo:"pleamar"});
    if(tides[i]<tides[i-1]&&tides[i]<tides[i+1]) ev.push({h:i,v:tides[i],tipo:"bajamar"});
  }
  return ev;
}
