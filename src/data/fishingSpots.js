// Spots de pesca predefinidos para los spots más populares
// Cada spot tiene coordenadas precisas y descripción
export const FISHING_SPOTS = {
  "Playa La Barrosa": [
    {lat:36.402,lon:-6.183,name:"Espigón norte",desc:"Lubina y dorada en marea entrante",tipo:"espigon"},
    {lat:36.399,lon:-6.180,name:"Esquina rocosa",desc:"Sargo y corvina. Fondo mixto 3-5m",tipo:"roca"},
    {lat:36.396,lon:-6.177,name:"Rompiente central",desc:"Surfcasting. Arena fina. Salmonete",tipo:"playa"},
  ],
  "Playa de Sancti Petri": [
    {lat:36.383,lon:-6.212,name:"Canal del castillo",desc:"Dorada y lubina en bajamar",tipo:"canal"},
    {lat:36.381,lon:-6.208,name:"Bajo rocoso",desc:"Sargo y urta. Fondo roca 4m",tipo:"roca"},
  ],
  "Playa de Conil": [
    {lat:36.282,lon:-6.093,name:"Punta del Aceite",desc:"Dorada y corvina. Fondo arena",tipo:"punta"},
    {lat:36.278,lon:-6.088,name:"Roca La Zorra",desc:"Sargo, lubina. Bajo rocoso 5m",tipo:"roca"},
    {lat:36.275,lon:-6.085,name:"Playa central",desc:"Surfcasting. Salmonete y lenguado",tipo:"playa"},
  ],
  "Cabo Trafalgar": [
    {lat:36.181,lon:-6.032,name:"Punta norte del cabo",desc:"Corvina y pez limón. Corriente",tipo:"punta"},
    {lat:36.174,lon:-6.028,name:"Bajo del cabo",desc:"Dentón y sargo. Fondo roca 8m",tipo:"roca"},
    {lat:36.169,lon:-6.025,name:"Cala al sur",desc:"Lubina y dorada en calma",tipo:"cala"},
  ],
  "Playa de Tarifa": [
    {lat:36.014,lon:-5.614,name:"Espigón Tarifa",desc:"Atún y pez espada. Corriente fuerte",tipo:"espigon"},
    {lat:36.010,lon:-5.608,name:"Punta Paloma",desc:"Lubina y corvina. Fondo mixto",tipo:"punta"},
    {lat:36.007,lon:-5.603,name:"Playa de Bolonia",desc:"Dorada y salmonete. Arena",tipo:"playa"},
  ],
  "Playa de Barbate": [
    {lat:36.192,lon:-5.923,name:"Puerto de Barbate",desc:"Caballa y bonito. Cerca canal",tipo:"puerto"},
    {lat:36.189,lon:-5.918,name:"Bajo El Toro",desc:"Atún en temporada. Profundo",tipo:"bajo"},
  ],
  "Playa de Mazagón": [
    {lat:37.133,lon:-6.831,name:"Punta Mazagón",desc:"Dorada y corvina. Arena fina",tipo:"punta"},
    {lat:37.130,lon:-6.826,name:"Espigón oeste",desc:"Lubina y sargo. Fondo roca",tipo:"espigon"},
    {lat:37.127,lon:-6.821,name:"Playa central",desc:"Surfcasting. Salmonete",tipo:"playa"},
  ],
  "Playa de Matalascañas": [
    {lat:37.012,lon:-6.582,name:"Torre Carbonero",desc:"Corvina y dorada. Fondo arena",tipo:"roca"},
    {lat:37.009,lon:-6.577,name:"Espigón este",desc:"Lubina en marea entrante",tipo:"espigon"},
  ],
  "Playa de Punta Umbría": [
    {lat:37.193,lon:-6.971,name:"Punta del Caimán",desc:"Dorada y lubina. Estuario",tipo:"punta"},
    {lat:37.190,lon:-6.966,name:"Canal de la ría",desc:"Corvina y anguila. Fondo fango",tipo:"canal"},
  ],
  "Playa de Isla Cristina": [
    {lat:37.192,lon:-7.331,name:"Espigón principal",desc:"Dorada y sargo. Buena marea",tipo:"espigon"},
    {lat:37.189,lon:-7.326,name:"Desembocadura ría",desc:"Lubina y corvina. Madrugada",tipo:"canal"},
  ],
  "Cabo de Gata": [
    {lat:36.732,lon:-2.192,name:"Punta del Cabo",desc:"Dentón y sargo. Fondo roca 10m",tipo:"punta"},
    {lat:36.728,lon:-2.188,name:"Cala Carbón",desc:"Pez limón y corvina. Claro",tipo:"cala"},
    {lat:36.725,lon:-2.184,name:"Bajo La Mesa",desc:"Mero y dentón. Profundo",tipo:"roca"},
  ],
  "Playa de Nerja": [
    {lat:36.745,lon:-3.872,name:"Punta de Maro",desc:"Sargo y corvina. Fondo roca",tipo:"punta"},
    {lat:36.742,lon:-3.867,name:"Balcón de Europa",desc:"Lubina y dorada. Espigón",tipo:"espigon"},
  ],
  "Playa de Marbella": [
    {lat:36.512,lon:-4.893,name:"Puerto Banús",desc:"Pez limón y bonito. Canal",tipo:"puerto"},
    {lat:36.509,lon:-4.888,name:"Playa Venus",desc:"Dorada y salmonete. Arena",tipo:"playa"},
  ],
  "Playa de La Concha": [
    {lat:43.322,lon:-1.982,name:"Monte Urgull",desc:"Lubina y merluza. Roca viva",tipo:"roca"},
    {lat:43.319,lon:-1.977,name:"Isla Santa Clara",desc:"Corvina y besugo. Profundo",tipo:"roca"},
  ],
  "Playa de Zarautz": [
    {lat:43.283,lon:-2.172,name:"Punta Talai-Mendi",desc:"Lubina y corvina. Roca viva",tipo:"punta"},
    {lat:43.280,lon:-2.167,name:"Rompiente central",desc:"Surfcasting. Dorada y sargo",tipo:"playa"},
  ],
  "Playa de Mundaka": [
    {lat:43.403,lon:-2.702,name:"Boca del Urdaibai",desc:"Lubina grande. Marea entrante",tipo:"canal"},
    {lat:43.400,lon:-2.697,name:"Bajo Mundaka",desc:"Besugo y merluza. Profundo",tipo:"bajo"},
  ],
  "Embalse El Gergal": [
    {lat:37.522,lon:-6.082,name:"Brazo norte",desc:"Carpa y black bass. Macrófitas",tipo:"orilla"},
    {lat:37.519,lon:-6.077,name:"Presa principal",desc:"Black bass y carpa. Estructuras",tipo:"presa"},
    {lat:37.516,lon:-6.072,name:"Cala sur",desc:"Tenca y carpa. Fondo fango",tipo:"cala"},
  ],
  "Embalse Iznájar": [
    {lat:37.252,lon:-4.322,name:"Brazos del embalse",desc:"Carpa y black bass grandes",tipo:"orilla"},
    {lat:37.249,lon:-4.317,name:"Zona presa",desc:"Black bass. Fondo duro",tipo:"presa"},
  ],
  "Embalse Buendía": [
    {lat:40.382,lon:-2.782,name:"Zona lucio norte",desc:"Lucio y black bass. Juncos",tipo:"orilla"},
    {lat:40.379,lon:-2.777,name:"Brazos del río",desc:"Carpa y barbo. Corriente",tipo:"canal"},
    {lat:40.376,lon:-2.772,name:"Cola sur",desc:"Carpa grande. Fondo fango",tipo:"cala"},
  ],
  "Embalse Mequinenza": [
    {lat:41.372,lon:0.282,name:"Zona siluro",desc:"Siluro enorme. Noche luna llena",tipo:"bajo"},
    {lat:41.369,lon:0.287,name:"Confluencia Ebro-Segre",desc:"Siluro y carpa. Corriente fuerte",tipo:"canal"},
    {lat:41.366,lon:0.292,name:"Calas rocosas",desc:"Black bass y perca. Roca",tipo:"roca"},
  ],
  "Río Ebro — Zaragoza": [
    {lat:41.652,lon:-0.882,name:"Puente de Piedra",desc:"Barbo y carpa. Corriente media",tipo:"orilla"},
    {lat:41.649,lon:-0.877,name:"Meandro sur",desc:"Siluro de noche. Pozas",tipo:"orilla"},
  ],
  "Mar Menor La Manga": [
    {lat:37.662,lon:-0.732,name:"Canal de La Manga",desc:"Dorada y lubina. Corriente",tipo:"canal"},
    {lat:37.659,lon:-0.727,name:"Fondos de posidonia",desc:"Dorada grande. Fondo posidonia",tipo:"playa"},
    {lat:37.656,lon:-0.722,name:"Zona salida al mar",desc:"Lubina y corvina. Boca canal",tipo:"canal"},
  ],
  "Playa de Barceloneta": [
    {lat:41.382,lon:2.192,name:"Espigón norte",desc:"Lubina y sargo. Fondo roca",tipo:"espigon"},
    {lat:41.379,lon:2.197,name:"Bajo central",desc:"Dorada y salmonete",tipo:"playa"},
  ],
  "Playa de Roses": [
    {lat:42.272,lon:3.182,name:"Punta de la Poncella",desc:"Corvina y sargo. Roca",tipo:"punta"},
    {lat:42.269,lon:3.177,name:"Cap Norfeu",desc:"Pez limón y dentón. Profundo",tipo:"roca"},
  ],
  "Playa de Las Canteras": [
    {lat:28.142,lon:-15.441,name:"La Barra",desc:"Sargo y lubina. Arrecife",tipo:"roca"},
    {lat:28.139,lon:-15.436,name:"Punta del Confital",desc:"Corvina y sama. Fondo",tipo:"punta"},
  ],
};

export function getFishingSpots(spotName) {
  return FISHING_SPOTS[spotName] || [];
}

export const SPOT_ICONS = {
  espigon: "🪝",
  roca: "🪨",
  playa: "🏖",
  punta: "📍",
  cala: "🌊",
  canal: "🌊",
  bajo: "⚓",
  puerto: "⚓",
  presa: "🏗",
  orilla: "🎣",
};
