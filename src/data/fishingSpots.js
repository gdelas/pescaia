// Spots de pesca con coordenadas precisas
// modalidades: ["costa"] = surfcasting/spinning/kayak, ["altura"] = embarcacion/curricán

export const FISHING_SPOTS = {
  "Playa La Barrosa": [
    {lat:36.4018,lon:-6.1802,name:"Espigón norte",desc:"Lubina y dorada en marea entrante",mods:["costa"]},
    {lat:36.3988,lon:-6.1828,name:"Rompiente central",desc:"Surfcasting. Salmonete y dorada en arena fina",mods:["costa"]},
    {lat:36.3958,lon:-6.1852,name:"Punta rocosa sur",desc:"Sargo y corvina. Fondo roca 3-5m",mods:["costa"]},
    {lat:36.38,lon:-6.22,name:"Caladero Sancti Petri",desc:"Dorada, lubina y corvina desde embarcación",mods:["altura"]},
  ],
  "Playa de Conil": [
    {lat:36.2795,lon:-6.0908,name:"Espigón del Puerto",desc:"Dorada y corvina junto al espigón",mods:["costa"]},
    {lat:36.2762,lon:-6.0875,name:"Cala del Aceite",desc:"Sargo y lubina. Bajo rocoso 5m",mods:["costa"]},
    {lat:36.2738,lon:-6.0842,name:"Playa El Roqueo",desc:"Surfcasting. Salmonete y lenguado",mods:["costa"]},
    {lat:36.25,lon:-6.12,name:"Aguas abiertas Conil",desc:"Besugo y dentón desde embarcación",mods:["altura"]},
  ],
  "Cabo Trafalgar": [
    {lat:36.1835,lon:-6.0322,name:"Punta norte del cabo",desc:"Corvina y pez limón. Corriente fuerte",mods:["costa"]},
    {lat:36.1752,lon:-6.0288,name:"Bajo del cabo",desc:"Dentón y sargo. Fondo roca 8m",mods:["costa"]},
    {lat:36.1695,lon:-6.0248,name:"Cala Caños de Meca",desc:"Lubina y dorada en calma",mods:["costa"]},
    {lat:36.12,lon:-6.08,name:"Aguas abiertas Trafalgar",desc:"Atún y pez espada. Corriente del Estrecho",mods:["altura"]},
  ],
  "Playa de Tarifa": [
    {lat:36.0138,lon:-5.6142,name:"Espigón Tarifa",desc:"Atún y bonito. Corriente fuerte del Estrecho",mods:["costa"]},
    {lat:36.0095,lon:-5.6085,name:"Punta Paloma",desc:"Lubina y corvina. Fondo mixto",mods:["costa"]},
    {lat:36.0062,lon:-5.6028,name:"Playa de Bolonia",desc:"Dorada y salmonete. Arena limpia",mods:["costa"]},
    {lat:35.95,lon:-5.65,name:"Estrecho de Gibraltar",desc:"Atún rojo, pez espada, bonito. Corriente intensa",mods:["altura"]},
    {lat:35.98,lon:-5.58,name:"Caladero sur Estrecho",desc:"Atún, marlín y pez espada en temporada",mods:["altura"]},
  ],
  "Playa de Mazagón": [
    {lat:37.1308,lon:-6.8302,name:"Punta Mazagón",desc:"Dorada y corvina. Arena fina",mods:["costa"]},
    {lat:37.1282,lon:-6.8248,name:"Espigón Mazagón",desc:"Lubina y sargo. Fondo roca junto al espigón",mods:["costa"]},
    {lat:37.1255,lon:-6.8195,name:"Playa del Parador",desc:"Surfcasting. Salmonete y lenguado",mods:["costa"]},
    {lat:37.08,lon:-6.85,name:"Aguas Huelva",desc:"Dorada, corvina y besugo desde embarcación",mods:["altura"]},
  ],
  "Playa de Matalascañas": [
    {lat:37.0115,lon:-6.5808,name:"Torre Carbonero",desc:"Corvina y dorada. Fondo arena",mods:["costa"]},
    {lat:37.0082,lon:-6.5765,name:"Espigón este",desc:"Lubina en marea entrante",mods:["costa"]},
  ],
  "Playa de Punta Umbría": [
    {lat:37.1925,lon:-6.9715,name:"Punta del Caimán",desc:"Dorada y lubina. Desembocadura Odiel",mods:["costa"]},
    {lat:37.1892,lon:-6.9662,name:"Canal de la ría",desc:"Corvina y anguila. Fondo fango",mods:["costa"]},
  ],
  "Cabo de Gata": [
    {lat:36.7315,lon:-2.1915,name:"Punta del Cabo",desc:"Dentón y sargo. Fondo roca 10m",mods:["costa"]},
    {lat:36.7282,lon:-2.1882,name:"Cala Carbón",desc:"Pez limón y corvina. Aguas cristalinas",mods:["costa"]},
    {lat:36.7252,lon:-2.1848,name:"Arrecife La Mesa",desc:"Mero y dentón. 15-20m",mods:["costa"]},
    {lat:36.68,lon:-2.22,name:"Aguas abiertas Gata",desc:"Atún, pez espada y pez limón desde embarcación",mods:["altura"]},
  ],
  "Playa de Nerja": [
    {lat:36.7448,lon:-3.8722,name:"Punta de Maro",desc:"Sargo y corvina. Roca viva",mods:["costa"]},
    {lat:36.7415,lon:-3.8675,name:"Balcón de Europa",desc:"Lubina y dorada. Espigón rocoso",mods:["costa"]},
    {lat:36.72,lon:-3.88,name:"Aguas Nerja-Torrox",desc:"Bonito, pez limón y serviola desde embarcación",mods:["altura"]},
  ],
  "Playa de Marbella": [
    {lat:36.5115,lon:-4.8932,name:"Puerto Banús",desc:"Pez limón y bonito. Canal del puerto",mods:["costa"]},
    {lat:36.5082,lon:-4.8885,name:"Playa de la Fontanilla",desc:"Dorada y salmonete. Arena fina",mods:["costa"]},
    {lat:36.48,lon:-4.92,name:"Aguas Marbella",desc:"Pez espada, atún y pez limón. Mar abierto",mods:["altura"]},
  ],
  "Playa de La Concha": [
    {lat:43.3215,lon:-1.9822,name:"Monte Urgull",desc:"Lubina y merluza. Roca viva bajo el monte",mods:["costa"]},
    {lat:43.3182,lon:-1.9775,name:"Isla Santa Clara",desc:"Corvina y besugo alrededor de la isla",mods:["costa"]},
    {lat:43.35,lon:-2.02,name:"Aguas Cantábrico",desc:"Bonito, txitxarro y merluza. Mar Cantábrico",mods:["altura"]},
  ],
  "Playa de Zarautz": [
    {lat:43.2825,lon:-2.1722,name:"Punta Talai-Mendi",desc:"Lubina y corvina. Roca con corriente",mods:["costa"]},
    {lat:43.2792,lon:-2.1675,name:"Rompiente central",desc:"Surfcasting. Dorada y sargo",mods:["costa"]},
    {lat:43.32,lon:-2.18,name:"Aguas Cantábrico Zarautz",desc:"Bonito del Norte y atún. Cantábrico",mods:["altura"]},
  ],
  "Playa de Mundaka": [
    {lat:43.4025,lon:-2.7022,name:"Boca del Urdaibai",desc:"Lubina grande. Marea entrante",mods:["costa"]},
    {lat:43.3992,lon:-2.6975,name:"Bajo Mundaka",desc:"Besugo y merluza. 15-25m",mods:["costa","altura"]},
  ],
  "Playa de Barceloneta": [
    {lat:41.3815,lon:2.1922,name:"Espigón norte",desc:"Lubina y sargo. Fondo roca",mods:["costa"]},
    {lat:41.3782,lon:2.1975,name:"Bajo del Morrot",desc:"Dorada y salmonete. Arena",mods:["costa"]},
    {lat:41.35,lon:2.22,name:"Aguas Barcelona",desc:"Atún rojo (may-jun), pez espada y dorado",mods:["altura"]},
  ],
  "Playa de Roses": [
    {lat:42.2715,lon:3.1822,name:"Punta de la Poncella",desc:"Corvina y sargo. Roca viva",mods:["costa"]},
    {lat:42.2682,lon:3.1775,name:"Cap Norfeu",desc:"Pez limón y dentón. Fondos profundos",mods:["costa"]},
    {lat:42.25,lon:3.22,name:"Aguas Costa Brava",desc:"Pez espada y atún. Golfo de León",mods:["altura"]},
  ],
  "Playa de Las Canteras": [
    {lat:28.1415,lon:-15.4415,name:"La Barra arrecife",desc:"Sargo y lubina. Arrecife natural",mods:["costa"]},
    {lat:28.1382,lon:-15.4362,name:"Punta del Confital",desc:"Corvina y sama. Roca volcánica",mods:["costa"]},
    {lat:28.08,lon:-15.48,name:"Aguas Gran Canaria",desc:"Marlín, atún, wahoo y dorado. Aguas tropicales",mods:["altura"]},
  ],
  "Playa de Los Cristianos": [
    {lat:28.052,lon:-16.712,name:"Espigón Los Cristianos",desc:"Sama y corvina costera",mods:["costa"]},
    {lat:28.042,lon:-16.722,name:"Punta Rasca",desc:"Sargo y lubina. Roca volcánica",mods:["costa"]},
    {lat:27.98,lon:-16.75,name:"Aguas sur Tenerife",desc:"Marlín azul, wahoo, atún y dorado. Todo el año",mods:["altura"]},
  ],
  "Embalse El Gergal": [
    {lat:37.5218,lon:-6.0812,name:"Brazo norte — juncos",desc:"Carpa y black bass. Macrófitas",mods:["costa"]},
    {lat:37.5185,lon:-6.0768,name:"Presa principal",desc:"Black bass junto a estructuras",mods:["costa"]},
    {lat:37.5152,lon:-6.0725,name:"Cala sur",desc:"Tenca y carpa. Fondo fango",mods:["costa"]},
  ],
  "Embalse Iznájar": [
    {lat:37.2518,lon:-4.3218,name:"Brazos del embalse",desc:"Carpa y black bass. Brazos estrechos",mods:["costa"]},
    {lat:37.2485,lon:-4.3172,name:"Zona de la presa",desc:"Black bass junto a la presa",mods:["costa"]},
  ],
  "Embalse Buendía": [
    {lat:40.3818,lon:-2.7818,name:"Zona lucio norte",desc:"Lucio y black bass. Juncos",mods:["costa"]},
    {lat:40.3785,lon:-2.7772,name:"Brazos del Guadiela",desc:"Carpa y barbo. Corriente",mods:["costa"]},
    {lat:40.3752,lon:-2.7725,name:"Cola sur",desc:"Carpa grande. Fondo fango",mods:["costa"]},
  ],
  "Embalse Mequinenza": [
    {lat:41.3718,lon:0.2818,name:"Zona del siluro",desc:"Siluro. Noche luna llena",mods:["costa"]},
    {lat:41.3685,lon:0.2872,name:"Confluencia Ebro-Segre",desc:"Siluro y carpa. Corriente fuerte",mods:["costa"]},
    {lat:41.3652,lon:0.2925,name:"Calas rocosas",desc:"Black bass y perca. Roca",mods:["costa"]},
  ],
  "Río Ebro — Zaragoza": [
    {lat:41.6518,lon:-0.8818,name:"Bajo Puente de Piedra",desc:"Barbo y carpa. Corriente media",mods:["costa"]},
    {lat:41.6485,lon:-0.8772,name:"Meandro sur",desc:"Siluro de noche. Pozas profundas",mods:["costa"]},
  ],
  "Mar Menor La Manga": [
    {lat:37.6618,lon:-0.7318,name:"Canal de La Manga",desc:"Dorada y lubina. Corriente",mods:["costa"]},
    {lat:37.6585,lon:-0.7272,name:"Praderas de posidonia",desc:"Dorada grande. 3-5m",mods:["costa"]},
    {lat:37.6552,lon:-0.7225,name:"Salida al Mediterráneo",desc:"Lubina y corvina en la boca",mods:["costa","altura"]},
  ],
};

export function getFishingSpots(spotName, modal){
  const spots = FISHING_SPOTS[spotName] || [];
  if(!modal) return spots;
  const esAltura = ["embarcacion","curricán"].includes(modal);
  const esCosta = ["surfcasting","spinning","kayak","mosca"].includes(modal);
  if(esAltura) return spots.filter(s=>s.mods.includes("altura"));
  if(esCosta) return spots.filter(s=>s.mods.includes("costa"));
  return spots;
}
