import{useState,useCallback}from"react";
import{getFase,simTides,DIAS,MESES}from"../utils/calc";

export function useMeteo(){
  const[meteo,setMeteo]=useState(null);
  const[loading,setLoading]=useState(false);
  const[error,setError]=useState("");

  const load=useCallback(async(lat,lon)=>{
    setLoading(true);setError("");setMeteo(null);
    try{
      const r=await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}`+
        `&hourly=temperature_2m,wind_speed_10m,wind_direction_10m,precipitation,cloud_cover,surface_pressure,wave_height,sea_surface_temperature`+
        `&daily=temperature_2m_max,temperature_2m_min,wind_speed_10m_max,precipitation_sum,sunrise,sunset`+
        `&current=temperature_2m,wind_speed_10m,wind_direction_10m,surface_pressure,precipitation,cloud_cover,wave_height`+
        `&timezone=Europe%2FMadrid&forecast_days=14`
      );
      if(!r.ok)throw new Error("HTTP "+r.status);
      const d=await r.json();
      if(d.error)throw new Error(d.reason);
      const dias=d.daily.time.map((fecha,i)=>{
        const date=new Date(fecha+"T12:00:00");
        const luna=getFase(date);
        const o=i*24,h=d.hourly;
        return{
          fecha,date,luna,dia:DIAS[date.getDay()],
          fechaC:`${date.getDate()} ${MESES[date.getMonth()]}`,
          tMax:d.daily.temperature_2m_max[i],
          tMin:d.daily.temperature_2m_min[i],
          wMax:d.daily.wind_speed_10m_max[i],
          rain:d.daily.precipitation_sum[i],
          sunrise:d.daily.sunrise?.[i]?.split("T")[1]?.slice(0,5)||"07:00",
          sunset:d.daily.sunset?.[i]?.split("T")[1]?.slice(0,5)||"20:30",
          tides:simTides(luna,lat,48),
          hourly:{
            time:h.time.slice(o,o+24),
            tmp:h.temperature_2m.slice(o,o+24),
            wnd:h.wind_speed_10m.slice(o,o+24),
            wdir:h.wind_direction_10m.slice(o,o+24),
            prcp:h.precipitation.slice(o,o+24),
            cld:h.cloud_cover.slice(o,o+24),
            sp:h.surface_pressure.slice(o,o+24),
            wave:(h.wave_height||[]).slice(o,o+24).map(v=>v??0),
            sst:(h.sea_surface_temperature||[]).slice(o,o+24),
          },
        };
      });
      setMeteo({
        dias,
        cur:{
          tmp:d.current.temperature_2m,
          wnd:d.current.wind_speed_10m,
          wdir:d.current.wind_direction_10m,
          sp:d.current.surface_pressure,
          prcp:d.current.precipitation,
          cld:d.current.cloud_cover,
          wave:d.current.wave_height??0,
        },
      });
    }catch(e){setError("Error: "+(e.message||"verifica conexión"));}
    finally{setLoading(false);}
  },[]);

  return{meteo,loading,error,load};
}
