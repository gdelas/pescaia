export const MODALIDADES = [
  {id:"surfcasting", n:"Surfcasting", e:"🎯"},
  {id:"spinning",    n:"Spinning",   e:"🎣"},
  {id:"carpfishing", n:"Carpfishing",e:"🥜"},
  {id:"embarcacion", n:"Embarcación",e:"⛵"},
  {id:"kayak",       n:"Kayak",      e:"🚣"},
  {id:"mosca",       n:"Mosca",      e:"🪁"},
  {id:"curricán",    n:"Curricán",   e:"⚓"},
];

export const MODALS_POR_ZONA = {
  mar:     ["surfcasting","spinning","embarcacion","kayak","curricán"],
  laguna:  ["surfcasting","spinning","embarcacion","kayak"],
  embalse: ["spinning","carpfishing","kayak","mosca"],
  río:     ["spinning","carpfishing","mosca","kayak"],
};

export const ESPECIES_DB = {
  mar:{
    surfcasting: ["Lubina","Dorada","Corvina","Besugo","Salmonete","Lenguado","Urta","Sargo","Breca","Róbalo"],
    spinning:    ["Lubina","Corvina","Sargo","Pez limón","Bonito","Caballa","Serrano","Dentón","Palometa","Melva"],
    embarcacion: ["Dorada","Besugo","Merluza","Pargo","Dentón","Cherne","Sama","Mero","Atún","Bonito","Pez espada","Pez limón"],
    kayak:       ["Lubina","Dorada","Corvina","Sargo","Bonito","Caballa","Pez limón","Pulpo"],
    curricán:    ["Atún","Bonito","Pez espada","Melva","Bacoreta","Pez limón","Palometa","Listado"],
  },
  laguna:{
    surfcasting: ["Dorada","Lubina","Salmonete","Anguila","Lenguado","Mújol"],
    spinning:    ["Lubina","Dorada","Corvina","Anguila","Mújol"],
    embarcacion: ["Dorada","Lubina","Anguila","Salmonete","Mújol"],
    kayak:       ["Lubina","Dorada","Anguila","Mújol"],
  },
  embalse:{
    spinning:    ["Black Bass","Lucio","Perca","Trucha","Siluro"],
    carpfishing: ["Carpa","Barbo","Tenca","Boga","Carpa espejo"],
    kayak:       ["Black Bass","Lucio","Carpa","Perca","Siluro","Trucha"],
    mosca:       ["Trucha","Black Bass","Perca"],
  },
  río:{
    spinning:    ["Trucha","Black Bass","Lucio","Perca","Barbo","Siluro","Salmón"],
    carpfishing: ["Carpa","Barbo","Boga","Tenca","Anguila"],
    mosca:       ["Trucha","Salmón","Barbo"],
    kayak:       ["Trucha","Black Bass","Barbo","Siluro","Carpa"],
  },
};

export const ESPECIES_INFO = {
  "Lubina":{
    icono:"🐟",temporada:"Todo el año · Pico: otoño-invierno",
    profundidad:"0-8m en costa, hasta 30m en embarcación",
    condiciones:"Presión estable, viento suave ONO, T.agua 16-22°C, marea entrante",
    cebos:{
      surfcasting:["Cangrejo vivo","Longueirón","Gusano de mar","Navaja","Quisquilla"],
      spinning:["Minnow flotante 9-12cm","Popper superficie","Stickbait","Vinilo 4-5\"","Slug"],
      embarcacion:["Jig vertical 20-40g","Vinilo natural","Pez pluma"],
      kayak:["Minnow 7-9cm","Jig 10-20g","Vinilo shad"],
      curricán:["Rapala CD-11","Vinilo shad cola roja"],
    },
    tip:"Depredador costero activo al amanecer y atardecer. Busca estuarios, embocaduras de ríos y fondos rocosos con algas. Con marea entrante se acerca a la orilla. En luna nueva se activa especialmente. Recogida lenta con paradas.",
  },
  "Dorada":{
    icono:"🐠",temporada:"Primavera-verano · Pico: mayo-septiembre",
    profundidad:"1-20m, fondo arenoso-fangoso y posidonia",
    condiciones:"Presión alta, cielos despejados, agua clara, T.agua >18°C",
    cebos:{
      surfcasting:["Gusano arenicola","Coquina","Navaja","Berberecho","Quisquilla"],
      spinning:["Vinilo natural 3\"","Jig 10-20g","Gamba artificial","Cabeza plomada+gusano"],
      embarcacion:["Bait natural","Rig paternoster","Gamba entera","Cangrejo ermitaño"],
      kayak:["Gamba artificial","Jig ligero","Vinilo 3\""],
      curricán:["Rapala flotante F7","Cucharilla inox"],
    },
    tip:"Omnívora de fondos arenosos y praderas de posidonia. Muele moluscos con sus dientes. Activa en horas centrales con sol. En invierno busca aguas más cálidas y profundas. Toque muy fino.",
  },
  "Corvina":{
    icono:"🐟",temporada:"Todo el año · Pico: otoño (sep-nov)",
    profundidad:"2-20m, fondos arenosos y mixtos",
    condiciones:"Luna nueva, presión estable, marea entrante nocturna, agua ligeramente turbia",
    cebos:{
      surfcasting:["Gusano de mar","Calamar tiras","Longueirón","Sardina"],
      spinning:["Vinilo 4-5\"","Minnow profundo 12cm","Jig 30g","Twister"],
      embarcacion:["Jig 40-60g","Vinilo XL","Pota","Sardina entera"],
      kayak:["Vinilo 4\"","Jig 20g","Calamar"],
    },
    tip:"Pez de fondos arenosos y desembocaduras de ríos. En luna nueva se acerca a la orilla. Busca rompiente y fondos mixtos arena-piedra. Muy sensible a cambios de presión. Toque brusco, pelea potente.",
  },
  "Caballa":{
    icono:"🐟",temporada:"Primavera-verano · Pico: abril-agosto",
    profundidad:"0-50m, aguas superficiales y media agua",
    condiciones:"Agua >16°C, presencia de zooplancton, corrientes activas",
    cebos:{
      spinning:["Jig metal plateado 10-20g","Cucharilla ondulante","Pluma","Señuelo tubular","Múltiple anzuelo sabiki"],
      kayak:["Jig metal pequeño","Pluma","Cucharilla"],
      curricán:["Pluma multicolor","Jig metal","Calamar artificial pequeño"],
      embarcacion:["Sabiki de 6 anzuelos","Jig metal 15-30g","Pluma"],
    },
    tip:"Pelágico veloz que viaja en grandes cardúmenes. Muy fácil de pescar cuando están activos en superficie. Visible por el borboteo del agua al perseguir el cebo. Jig metal plateado a media agua muy efectivo. Excelente como cebo vivo para atún y pez espada.",
  },
  "Besugo":{
    icono:"🐡",temporada:"Otoño-invierno · Pico: diciembre-febrero",
    profundidad:"30-200m en embarcación, 5-20m desde roca en costa",
    condiciones:"Agua fría <16°C, fondos rocosos, presión alta, sin viento",
    cebos:{
      surfcasting:["Longueirón","Cangrejo","Calamar tiras","Sardina"],
      embarcacion:["Calamar troceado","Chucho","Langostino","Pota"],
      kayak:["Calamar","Cangrejo ermitaño"],
    },
    tip:"Pez de aguas frías y profundas, fondo rocoso. Activo en invierno y noches. Se pesca principalmente en embarcación entre 30-200m. En costa, fondos rocosos profundos desde espigones. Busca corrientes frías.",
  },
  "Salmonete":{
    icono:"🐠",temporada:"Primavera-verano-otoño",
    profundidad:"2-30m, fondo arena",
    condiciones:"Agua cálida >18°C, fondo arenoso limpio, días soleados",
    cebos:{
      surfcasting:["Gusano arenicola","Gamba pequeña","Coquina","Cebollo"],
      spinning:["Cabeza plomada 5g+gusano","Jig micro 5g"],
      embarcacion:["Gusano","Gamba","Cebollo"],
    },
    tip:"Fondo arenoso y fangoso en 2-30m. Hoza el fondo buscando gusanos con sus barbillas. Activo en horas centrales del día. Busca playas con fondos limpios de arena fina. Montaje ligero.",
  },
  "Mero":{
    icono:"🐟",temporada:"Verano-otoño · Pico: julio-octubre",
    profundidad:"5-50m, fondos rocosos y cuevas",
    condiciones:"Agua muy clara, sin viento, presión alta, fondo rocoso con cuevas",
    cebos:{
      embarcacion:["Pota viva","Calamar entero","Pez pequeño muerto","Jig slow pitch 80g"],
      spinning:["Popper XL","Stickbait grande","Jig pesado"],
    },
    tip:"Depredador territorial de fondos rocosos y cuevas. Sedentario — siempre cerca de su refugio. Necesita agua clara entre 5-50m. Espera emboscado. Pelea muy violenta tirando hacia la cueva: mantener presión constante desde el principio.",
  },
  "Atún":{
    icono:"🐋",temporada:"Verano-otoño · Pico: julio-noviembre en Estrecho",
    profundidad:"0-100m (superficie y media agua)",
    condiciones:"Viento moderado, T.agua >20°C, corrientes activas, presencia de aves",
    cebos:{
      curricán:["Calamar artificial 20cm","Pluma multicolor","Rapala X-Rap grande","Vinilo azul-blanco"],
      embarcacion:["Vinilo grande 8-10\"","Jig metal 80-150g","Sardina viva"],
    },
    tip:"Pelágico de aguas abiertas. Se localiza siguiendo bandadas de aves. Necesita corrientes y cambios de temperatura del agua. Con curricán a 6-8 nudos. El Estrecho de Gibraltar en verano-otoño es uno de los mejores lugares del mundo.",
  },
  "Bonito":{
    icono:"🐟",temporada:"Verano · Pico: junio-septiembre en Cantábrico",
    profundidad:"0-80m",
    condiciones:"Viento suave, agua >18°C, presencia de bocarte en superficie",
    cebos:{
      curricán:["Pluma blanca-azul","Calamar artificial","Rapala CD-14","Vinilo plateado"],
      embarcacion:["Jig metal 40-80g","Vinilo plateado","Sardina"],
      spinning:["Jig metal 20-40g","Popper","Minnow largo"],
    },
    tip:"Pelágico veloz en cardúmenes. Visible en superficie persiguiendo bocarte. Activo en verano en el Cantábrico y Atlántico. Con curricán a 5-7 nudos. Cuando hay boquerones en superficie el bonito está garantizado.",
  },
  "Pez limón":{
    icono:"🐠",temporada:"Verano-otoño · Pico: julio-octubre",
    profundidad:"0-60m, superficie y media agua",
    condiciones:"Agua cálida >20°C, corriente activa, presencia de peces cebo",
    cebos:{
      spinning:["Popper grande","Stickbait 15-20cm","Jig pesado 60-100g"],
      embarcacion:["Jig vertical 60-120g","Señuelo grande","Pez vivo"],
      curricán:["Rapala grande","Vinilo XL"],
      kayak:["Popper","Jig 40-60g"],
    },
    tip:"Pelágico rápido de aguas cálidas mediterráneas. Se pesca en superficie persiguiendo sardinas. Busca zonas con corriente y arrecifes. Ataque feroz en superficie. Jigging vertical muy efectivo desde embarcación.",
  },
  "Palometa":{
    icono:"🐡",temporada:"Verano-otoño",
    profundidad:"0-30m, superficial",
    condiciones:"Aguas cálidas >20°C, transparentes, sin viento",
    cebos:{
      curricán:["Pluma blanca","Jig metal pequeño","Rapala flotante"],
      spinning:["Jig metal 15-25g","Popper pequeño","Vinilo plateado"],
      embarcacion:["Jig metal","Pluma","Sardina"],
    },
    tip:"Pez plano plateado que viaja en superficie en cardúmenes. Muy agresivo. Ataca señuelos metálicos en superficie. Abundante en verano en el Mediterráneo y Atlántico sur. Pesca divertida con spinning ligero.",
  },
  "Melva":{
    icono:"🐟",temporada:"Verano-otoño",
    profundidad:"0-50m, superficie y media agua",
    condiciones:"Agua >20°C, corrientes activas, viento moderado",
    cebos:{
      curricán:["Pluma","Calamar artificial","Jig metal"],
      embarcacion:["Jig metal 30-60g","Pluma","Sardina"],
      spinning:["Jig metal 20-40g","Popper"],
    },
    tip:"Escómbrido parecido al bonito pero más pequeño. Viaja en grandes cardúmenes. Muy abundante en el Atlántico sur y Mediterráneo en verano. Excelente pesca con curricán y jig metal.",
  },
  "Dentón":{
    icono:"🐡",temporada:"Todo el año · Pico: verano-otoño",
    profundidad:"10-100m, fondos rocosos",
    condiciones:"Agua muy clara, fondos rocosos, presión alta, sin viento",
    cebos:{
      embarcacion:["Calamar tiras","Pota","Sardina","Cabeza plomada+vinilo"],
      spinning:["Jig 30-60g","Vinilo 5\"","Popper"],
    },
    tip:"Espárido de fondos rocosos en 10-100m. Dientes muy fuertes para triturar erizos y crustáceos. Busca roca con grietas en aguas claras. Muy desconfiado: presentación natural esencial. Pelea potente.",
  },
  "Pargo":{
    icono:"🐟",temporada:"Todo el año · Pico: verano",
    profundidad:"20-150m, fondos de roca y arena",
    condiciones:"Agua templada-cálida, fondos mixtos, presión estable",
    cebos:{
      embarcacion:["Calamar","Gamba","Pota","Jig 40-80g"],
      curricán:["Jig metal","Vinilo grande"],
    },
    tip:"Espárido carnívoro de fondos mixtos. Se pesca principalmente en embarcación entre 20-150m sobre roca y arena. Muy apreciado gastronómicamente. Habitual en Canarias y sur peninsular.",
  },
  "Cherne":{
    icono:"🐟",temporada:"Todo el año en Canarias",
    profundidad:"50-300m",
    condiciones:"Fondos rocosos profundos, agua templada",
    cebos:{
      embarcacion:["Pota","Calamar entero","Pez muerto","Jig pesado 100-200g"],
    },
    tip:"Serránido de gran tamaño habitual en Canarias. Se pesca en profundidades de 50-300m sobre fondos rocosos. Muy apreciado en Canarias. Pesca de fondo desde embarcación con cebos naturales o jig pesado.",
  },
  "Sama":{
    icono:"🐡",temporada:"Todo el año · Pico: verano-otoño en Canarias",
    profundidad:"30-200m",
    condiciones:"Fondos rocosos, agua cálida en Canarias",
    cebos:{
      embarcacion:["Calamar","Gamba","Pota","Cabeza plomada grande"],
    },
    tip:"Espárido característico de Canarias. Se pesca en fondos rocosos entre 30-200m. Activa principalmente de noche. Muy apreciada gastronómicamente en las islas.",
  },
  "Merluza":{
    icono:"🐟",temporada:"Todo el año · Pico: otoño-invierno",
    profundidad:"30-400m en embarcación, noche",
    condiciones:"Noche, agua fría <16°C, fondos de fango 50-400m",
    cebos:{
      embarcacion:["Pota","Calamar entero","Vinilo blanco 5\"","Pez pluma blanco"],
      curricán:["Jig pluma blanco 60g","Vinilo largo blanco"],
    },
    tip:"Demersal muy activa de noche subiendo a media agua. Se pesca principalmente en embarcación con curricán de fondo o jigging. En costa, desde espigones profundos de noche. Toque suave: no precipitarse al clavar.",
  },
  "Urta":{
    icono:"🐟",temporada:"Primavera-verano · Pico: mayo-agosto",
    profundidad:"5-50m, fondos rocosos con algas",
    condiciones:"Marea entrante, agua clara, fondos rocosos, presión alta",
    cebos:{
      surfcasting:["Calamar tiras","Sardina","Cangrejo","Longueirón"],
      embarcacion:["Calamar","Sardina","Gamba"],
    },
    tip:"Espárido muy apreciado del Atlántico sur y Mediterráneo. Territorial en fondos rocosos con algas en 5-50m. Activo en marea entrante. Endémico del Atlántico ibérico — muy cotizado.",
  },
  "Sargo":{
    icono:"🐡",temporada:"Todo el año · Pico: verano",
    profundidad:"0-30m, fondos rocosos y posidonia",
    condiciones:"Agua clara, fondo rocoso, cualquier hora, presión estable",
    cebos:{
      surfcasting:["Calamar","Cangrejo","Erizo de mar","Gamba"],
      spinning:["Jig micro 5-10g","Cabeza plomada+vinilo pequeño"],
      kayak:["Gamba","Cangrejo","Calamar tiras"],
    },
    tip:"Muy habitual en fondos rocosos y posidonia en 0-30m. Activo todo el día. Dentición robusta para machacar moluscos. Busca grietas y roca viva. Desconfiado: usar aparejos ligeros. Muy combativo para su tamaño.",
  },
  "Breca":{
    icono:"🐠",temporada:"Todo el año",
    profundidad:"10-100m, fondos arenosos y rocosos",
    condiciones:"Agua clara, fondo mixto, presión estable",
    cebos:{
      surfcasting:["Gusano","Coquina","Gamba pequeña"],
      embarcacion:["Gusano","Gamba","Calamar tiras"],
    },
    tip:"Espárido de pequeño tamaño pero muy abundante. Vive en fondos mixtos arena-roca entre 10-100m. Activo durante todo el día. Excelente especie para iniciarse en la pesca desde embarcación.",
  },
  "Róbalo":{
    icono:"🐟",temporada:"Todo el año",
    profundidad:"0-15m en estuarios y costa",
    condiciones:"Agua turbia, marea entrante, desembocaduras de ríos",
    cebos:{
      surfcasting:["Gusano de mar","Cangrejo","Sardina"],
      spinning:["Minnow 7-9cm","Vinilo 3-4\"","Slug"],
    },
    tip:"Similar a la lubina pero habitual en estuarios y aguas turbias. Se adentra en ríos en marea alta. Activo al amanecer y atardecer. Busca corrientes en embocaduras fluviales.",
  },
  "Lenguado":{
    icono:"🐟",temporada:"Primavera-verano-otoño",
    profundidad:"1-15m, fondo arena y fango",
    condiciones:"Fondo arenoso limpio, agua templada, horas de poca luz",
    cebos:{
      surfcasting:["Gusano arenicola","Gamba","Coquina pequeña"],
      embarcacion:["Gusano","Gamba","Calamar tiras pequeñas"],
    },
    tip:"Pez plano enterrado en arena. Sale a cazar al amanecer y anochecer. Se pesca arrastrando el cebo lentamente por el fondo. Fondo de arena fina limpia entre 1-15m.",
  },
  "Mújol":{
    icono:"🐟",temporada:"Todo el año",
    profundidad:"0-5m, superficial en aguas tranquilas",
    condiciones:"Aguas tranquilas, lagunas y estuarios, sin corriente",
    cebos:{
      surfcasting:["Pan","Masa","Maíz dulce","Algas"],
      spinning:["Masa flotante","Boilies mini"],
    },
    tip:"Herbívoro de aguas superficiales. Se ve nadando en superficie en grupos. Se pesca con pan flotante o masa muy ligera. Muy desconfiado — movimientos lentos y silencio total. Abundante en puertos y lagunas.",
  },
  "Pulpo":{
    icono:"🐙",temporada:"Primavera-otoño",
    profundidad:"2-20m, fondos rocosos",
    condiciones:"Agua clara, fondos de roca con grietas, días soleados",
    cebos:{
      kayak:["Potero","Jig potero naranja","Pulpo artificial"],
      embarcacion:["Potero","Jig especializado"],
    },
    tip:"Se pesca con potero (señuelo específico) arrastrándolo por el fondo. Busca grietas y cuevas en fondos rocosos. Activo en primavera y otoño. Con kayak es muy accesible — explorar fondos rocosos costeros.",
  },
  "Carpa":{
    icono:"🐟",temporada:"Primavera-verano-otoño · Pico: mayo-octubre",
    profundidad:"1-5m, fondo fangoso con vegetación",
    condiciones:"Luna llena, presión estable, T.agua >18°C, sin viento",
    cebos:{
      carpfishing:["Boilies frutales 20mm","Maíz dulce","Pellets 6mm","Tigernuts","Boilies chocolate"],
      spinning:["Gusano natural","Masa de pan","Maíz"],
    },
    tip:"Omnívora de aguas cálidas y tranquilas. Muy sensible a la luna: luna llena activa su alimentación. Busca zonas con fondo fangoso y vegetación acuática. Temperatura ideal 18-24°C. Pesca de fondo con boilies. Muy fuerte.",
  },
  "Carpa espejo":{
    icono:"🐟",temporada:"Primavera-verano-otoño",
    profundidad:"1-5m, fondo fangoso",
    condiciones:"Agua cálida >18°C, luna favorable, presión estable",
    cebos:{
      carpfishing:["Boilies grandes 24mm","Tigernuts","Pellets premium","Partículas variadas"],
    },
    tip:"Variedad de carpa con escamas irregulares. Generalmente más grande y cautelosa que la común. Mismos hábitos alimenticios pero requiere presentaciones más refinadas. Gran trofeo de pesca.",
  },
  "Black Bass":{
    icono:"🎣",temporada:"Primavera-otoño · Pico: abril-junio y sep-oct",
    profundidad:"0-8m junto a cobertura",
    condiciones:"Cielo nublado o amanecer/atardecer, presión alta, T.agua 16-24°C",
    cebos:{
      spinning:["Topwater amanecer/atardecer","Ned rig","Jig Texas","Swimbait 10-15cm","Crankbait medio"],
      kayak:["Topwater","Vinilo shad","Ned rig","Drop shot"],
      mosca:["Popper grande","Streamer articulado"],
    },
    tip:"Depredador emboscado que caza desde cobertura: troncos, piedras, macrófitas y sombras. Muy activo al amanecer y atardecer. En verano busca profundidad en horas de calor. Toque brusco: clavar con fuerza. Topwater en superficie al amanecer es espectacular.",
  },
  "Lucio":{
    icono:"🐟",temporada:"Otoño-invierno-primavera · Pico: octubre-marzo",
    profundidad:"0-4m junto a vegetación acuática",
    condiciones:"Agua fría <18°C, cielo nublado, presión bajando, amanecer",
    cebos:{
      spinning:["Señuelo articulado 15-20cm","Cucharilla grande","Crankbait flotante XL","Popper grande"],
      kayak:["Swimbait 15cm","Soft jerkbait","Señuelo articulado"],
    },
    tip:"Depredador solitario en emboscada entre juncos y macrófitas. Activo con agua fría (<18°C) y cielos nublados. Al amanecer es más activo. Presentar el señuelo lento y pausado cerca de la cobertura vegetal.",
  },
  "Perca":{
    icono:"🐡",temporada:"Primavera-otoño · Pico: abril-junio",
    profundidad:"1-8m junto a estructuras",
    condiciones:"Cielo nublado, T.agua 12-22°C, presión estable",
    cebos:{
      spinning:["Vinilo pequeño 2-3\"","Jig micro 3-7g","Minnow 5-7cm","Ned rig"],
      kayak:["Drop shot","Vinilo micro","Ned rig"],
      mosca:["Streamer pequeño","Popper micro"],
    },
    tip:"Depredador en cardúmen asociado a estructuras sumergidas: postes, rocas, madera. Muy agresiva cuando activa. Ideal para iniciarse en la pesca con señuelos. Con spinning ligero y señuelos pequeños.",
  },
  "Trucha":{
    icono:"🐠",temporada:"Otoño-invierno-primavera · Pico: marzo-junio",
    profundidad:"0-3m en ríos, hasta 10m en embalses",
    condiciones:"Agua fría <15°C, corriente media, presión alta, amanecer o atardecer",
    cebos:{
      mosca:["Royal Wulff seca","Elk Hair Caddis","Ninfa Hare's Ear","Streamer Wooly Bugger","Adams"],
      spinning:["Cucharilla ondulante 3-7g","Minnow 4-6cm","Gusano natural","Hueva artificial"],
    },
    tip:"Requiere agua fría, limpia y oxigenada con corriente. Busca pozas detrás de piedras grandes. Sale a comer en rápidos con insectos. Al amanecer con mosca seca es el momento cumbre. Muy selectiva: igualar el insecto del momento.",
  },
  "Siluro":{
    icono:"🦈",temporada:"Primavera-verano-otoño · Pico: mayo-septiembre de noche",
    profundidad:"2-20m en pozas de día, 0-3m de noche",
    condiciones:"Luna llena, noche o madrugada, T.agua >20°C, sin corriente",
    cebos:{
      carpfishing:["Pez muerto natural (carpa)","Boilies carnívoro XL","Popper 20-25cm"],
      spinning:["Shad 18-25cm","Jig pesado 60-100g","Pez articulado XL"],
      kayak:["Shad grande","Jig 60g"],
    },
    tip:"Mayor pez depredador de agua dulce en España. Nocturno y activo con luna llena. Vive en pozas profundas. T.ideal >20°C. En verano sale de noche a aguas poco profundas. Pesca nocturna con cebos grandes.",
  },
  "Barbo":{
    icono:"🐟",temporada:"Todo el año · Pico: primavera y otoño",
    profundidad:"1-4m, fondo grava/piedra",
    condiciones:"Agua templada 12-20°C, caudal normal, presión estable",
    cebos:{
      carpfishing:["Gusano de tierra","Maíz dulce","Masa de pan","Pellets 4mm"],
      spinning:["Ninfa grande","Gusano natural","Masa pan"],
      mosca:["Ninfa pesada","Streamer pequeño"],
    },
    tip:"Pez de río en corriente moderada sobre fondo de grava y piedra. Se alimenta buscando invertebrados. Activo al amanecer y atardecer. Busca remansos junto a corriente y pozas con grava. Presentación natural en el fondo.",
  },
  "Salmón":{
    icono:"🐟",temporada:"Enero-junio en ríos cantábricos (regulado)",
    profundidad:"1-5m en pozas profundas con cobertura",
    condiciones:"Ríos cantábricos con caudal alto, agua fría <15°C, días nublados",
    cebos:{
      mosca:["Mosca salmón Cascade","Tube fly","Streamer Munro Killer","Hitch fly"],
      spinning:["Devon minnow","Cucharilla grande","Rapala grande"],
    },
    tip:"El rey del río. Remonta ríos cantábricos (Sella, Cares, Narcea) de enero a junio. No se alimenta en río: ataca por instinto. Con mosca húmeda a media agua o cucharilla. Temporada regulada: consultar vedas y permisos. Obtener licencia especial.",
  },
  "Tenca":{
    icono:"🐠",temporada:"Verano · Pico: junio-septiembre",
    profundidad:"1-3m, fondo fangoso con vegetación",
    condiciones:"Agua cálida >20°C, sin corriente, vegetación densa, horas centrales",
    cebos:{
      carpfishing:["Gusano de tierra","Maíz","Masa pan","Pellet pequeño","Boilies 14mm"],
    },
    tip:"Pez de aguas cálidas y tranquilas con mucha vegetación. Aguanta condiciones de oxígeno muy bajas. Se alimenta en el fondo entre macrófitas. Muy activa en horas centrales del día en verano.",
  },
  "Boga":{
    icono:"🐟",temporada:"Todo el año · Pico: primavera",
    profundidad:"0-3m, aguas corrientes y tranquilas",
    condiciones:"Agua templada, corriente moderada, fondos limpios",
    cebos:{
      carpfishing:["Maíz","Masa pan","Gusano","Pellet pequeño"],
      spinning:["Gusano","Ninfa pequeña"],
    },
    tip:"Ciprinido muy abundante en ríos españoles. Se alimenta en superficie y fondo. Ideal para principiantes. Aguas con corriente moderada y fondos de grava. Muy activa en primavera.",
  },
  "Anguila":{
    icono:"🐍",temporada:"Primavera-verano-otoño · Solo de noche",
    profundidad:"1-5m, fondo fangoso",
    condiciones:"Noche, luna llena, T.agua >18°C, fondo fangoso",
    cebos:{
      carpfishing:["Lombriz grande","Gusano de tierra","Trozos de pez muerto","Hígado"],
      spinning:["Vinilo gusano","Gusano natural","Trozos pez"],
    },
    tip:"Pez nocturno que vive enterrado en fango durante el día. Sale a cazar de noche, especialmente en luna llena. Prefiere fondos fangosos: lagunas, estuarios, embalses. Pesca nocturna con cebo natural en fondo.",
  },
};

export function getEspecies(tipoZona, modalidad) {
  return (ESPECIES_DB[tipoZona]?.[modalidad] || []).filter((v,i,a)=>a.indexOf(v)===i);
}

export function getEspecieInfo(especie) {
  return ESPECIES_INFO[especie] || null;
}
