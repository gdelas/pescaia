// Base de datos de señuelos y cebos con imágenes y enlaces
// Imágenes de Wikimedia Commons (libres) + Amazon ES

export const CEBOS_INFO = {
  // SEÑUELOS ARTIFICIALES
  "Minnow flotante": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Rapala_lure.jpg/320px-Rapala_lure.jpg",
    desc: "Señuelo imitación de pez pequeño. Flota en reposo, nada en profundidad al recuperar. Ideal para lubina al amanecer cerca de rompientes.",
    comprar: "https://www.amazon.es/s?k=minnow+flotante+lubina+pesca",
    tipo: "artificial"
  },
  "Minnow flotante 9-12cm": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Rapala_lure.jpg/320px-Rapala_lure.jpg",
    desc: "Talla media ideal para lubina y corvina. Récuperar lento con paradas para imitar pez herido.",
    comprar: "https://www.amazon.es/s?k=minnow+flotante+9cm+lubina",
    tipo: "artificial"
  },
  "Popper": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Popper_lure.jpg/320px-Popper_lure.jpg",
    desc: "Señuelo de superficie que crea salpicaduras y burbujas. Espectacular para lubina y pez limón en superficie al amanecer.",
    comprar: "https://www.amazon.es/s?k=popper+pesca+lubina+superficie",
    tipo: "artificial"
  },
  "Stickbait": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Fishing_lures.jpg/320px-Fishing_lures.jpg",
    desc: "Señuelo de superficie sin babero. Movimiento tipo 'dog walk' muy efectivo para pez limón y lubina en calma.",
    comprar: "https://www.amazon.es/s?k=stickbait+pesca+mar",
    tipo: "artificial"
  },
  "Vinilo 4\"": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Fishing_lures.jpg/320px-Fishing_lures.jpg",
    desc: "Señuelo blando con movimiento natural. Se monta en cabeza plomada. Muy versátil para lubina, corvina y sargo en fondos.",
    comprar: "https://www.amazon.es/s?k=vinilo+4+pulgadas+spinning+mar",
    tipo: "artificial"
  },
  "Jig metal": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Fishing_lures.jpg/320px-Fishing_lures.jpg",
    desc: "Lámina de metal brillante que imita pez pequeño. Muy efectivo para caballa, bonito y atún en superficie.",
    comprar: "https://www.amazon.es/s?k=jig+metal+spinning+mar",
    tipo: "artificial"
  },
  "Jig metal plateado": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Fishing_lures.jpg/320px-Fishing_lures.jpg",
    desc: "Color plateado imita sardina y bocarte. El más efectivo para caballa, listado y atún joven.",
    comprar: "https://www.amazon.es/s?k=jig+metal+plateado+pesca",
    tipo: "artificial"
  },
  "Jig vertical 20-40g": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Fishing_lures.jpg/320px-Fishing_lures.jpg",
    desc: "Para jigging desde embarcación. Se trabaja en vertical subiendo y bajando. Ideal para lubina, pez limón y dentón.",
    comprar: "https://www.amazon.es/s?k=jig+vertical+embarcacion+pesca",
    tipo: "artificial"
  },
  "Rapala flotante": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Rapala_lure.jpg/320px-Rapala_lure.jpg",
    desc: "El señuelo más famoso del mundo. Flota en reposo, bucea 1-2m al recuperar. Clásico para lubina y trucha.",
    comprar: "https://www.amazon.es/s?k=rapala+flotante+pesca",
    tipo: "artificial"
  },
  "Rapala CD-11": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Rapala_lure.jpg/320px-Rapala_lure.jpg",
    desc: "Modelo Countdown de Rapala, 11cm. Se hunde a velocidad controlada. Perfecto para lubina en profundidad.",
    comprar: "https://www.amazon.es/s?k=rapala+countdown+CD11",
    tipo: "artificial"
  },
  "Pluma multicolor": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Fishing_lures.jpg/320px-Fishing_lures.jpg",
    desc: "Señuelo tipo pluma para curricán. Se arrastra a 5-7 nudos. Clásico para bonito, atún y melva.",
    comprar: "https://www.amazon.es/s?k=pluma+curricán+atún+bonito",
    tipo: "artificial"
  },
  "Pluma barrilete blanca": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Fishing_lures.jpg/320px-Fishing_lures.jpg",
    desc: "Pluma blanca para curricán rápido. Muy efectiva para listado, wahoo y atún joven.",
    comprar: "https://www.amazon.es/s?k=pluma+curricán+blanca+pesca",
    tipo: "artificial"
  },
  "Señuelo inchiku tipo calamar 20cm": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Fishing_lures.jpg/320px-Fishing_lures.jpg",
    desc: "Imita un calamar grande en profundidad. El señuelo más efectivo para pez espada en jigging nocturno a 100-500m.",
    comprar: "https://www.amazon.es/s?k=inchiku+calamar+pez+espada",
    tipo: "artificial"
  },
  "Señuelo Black Bart 12\"": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Fishing_lures.jpg/320px-Fishing_lures.jpg",
    desc: "Señuelo premium de curricán para marlín y atún gigante. Se arrastra a 7-9 nudos. Referencia mundial.",
    comprar: "https://www.amazon.es/s?k=black+bart+señuelo+marlín",
    tipo: "artificial"
  },
  "Crankbait": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Fishing_lures.jpg/320px-Fishing_lures.jpg",
    desc: "Señuelo duro con babero que bucea hasta 3-5m. Muy efectivo para black bass junto a estructuras.",
    comprar: "https://www.amazon.es/s?k=crankbait+black+bass+pesca",
    tipo: "artificial"
  },
  "Topwater amanecer": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Popper_lure.jpg/320px-Popper_lure.jpg",
    desc: "Cualquier señuelo de superficie al amanecer. El momento más espectacular para black bass y lubina.",
    comprar: "https://www.amazon.es/s?k=topwater+señuelo+superficie+pesca",
    tipo: "artificial"
  },
  "Ned rig": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Fishing_lures.jpg/320px-Fishing_lures.jpg",
    desc: "Montaje con vinilo corto en jig cabeza de hongo. Presentación lenta en fondo. Devastador para black bass difícil.",
    comprar: "https://www.amazon.es/s?k=ned+rig+black+bass+pesca",
    tipo: "artificial"
  },
  "Jig Texas": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Fishing_lures.jpg/320px-Fishing_lures.jpg",
    desc: "Montaje sin enganches para pescar entre vegetación. Clásico para black bass en cobertura densa.",
    comprar: "https://www.amazon.es/s?k=texas+rig+black+bass",
    tipo: "artificial"
  },
  "Devon minnow": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Fishing_lures.jpg/320px-Fishing_lures.jpg",
    desc: "Señuelo giratorio clásico para salmón en ríos. Se usa en corriente transversal.",
    comprar: "https://www.amazon.es/s?k=devon+minnow+salmón+pesca",
    tipo: "artificial"
  },
  "Cucharilla": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Fishing_spoon_lure.jpg/320px-Fishing_spoon_lure.jpg",
    desc: "Señuelo metálico giratorio. Imita pez pequeño con vibración. Clásico para trucha y lucio.",
    comprar: "https://www.amazon.es/s?k=cucharilla+pesca+trucha",
    tipo: "artificial"
  },

  // CEBOS NATURALES MAR
  "Cangrejo vivo": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Carcinus_maenas.jpg/320px-Carcinus_maenas.jpg",
    desc: "El mejor cebo para lubina en roca. Se engancha por la pata trasera. Imprescindible en espigones y fondos rocosos.",
    comprar: "https://www.amazon.es/s?k=anzuelo+cangrejo+pesca+lubina",
    tipo: "natural"
  },
  "Gusano de mar": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Arenicola_marina.jpg/320px-Arenicola_marina.jpg",
    desc: "Arenicola marina. El cebo universal del surfcasting. Atrae dorada, salmonete y lenguado en fondo arenoso.",
    comprar: "https://www.amazon.es/s?k=gusano+arenicola+surfcasting",
    tipo: "natural"
  },
  "Longueirón": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Ensis_siliqua.jpg/320px-Ensis_siliqua.jpg",
    desc: "Navaja o longueirón. Cebo excelente para lubina y corvina en playas arenosas de Galicia y Cantábrico.",
    comprar: "https://www.amazon.es/s?k=navaja+longueirón+cebo+pesca",
    tipo: "natural"
  },
  "Calamar": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Loligo_vulgaris.jpg/320px-Loligo_vulgaris.jpg",
    desc: "Calamar fresco troceado o entero. Cebo muy efectivo para corvina, besugo y pez espada.",
    comprar: "https://www.amazon.es/s?k=anzuelo+calamar+pesca+mar",
    tipo: "natural"
  },
  "Sardina": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Sardine_1.jpg/320px-Sardine_1.jpg",
    desc: "Cebo graso muy atractivo. Se usa entera o en tiras. Excelente para besugo, merluza y atún.",
    comprar: "https://www.amazon.es/s?k=cebo+sardina+pesca",
    tipo: "natural"
  },
  "Coquina": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Donax_trunculus.jpg/320px-Donax_trunculus.jpg",
    desc: "Molusco pequeño muy efectivo para dorada. Se recoge en la arena húmeda. Cebo local tradicional.",
    comprar: "https://www.amazon.es/s?k=coquina+cebo+dorada+pesca",
    tipo: "natural"
  },
  "Pota viva": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Loligo_vulgaris.jpg/320px-Loligo_vulgaris.jpg",
    desc: "Calamar mediano vivo. Cebo premium para mero, dentón y pez espada desde embarcación.",
    comprar: "https://www.amazon.es/s?k=pota+calamar+cebo+embarcacion",
    tipo: "natural"
  },

  // CEBOS AGUA DULCE
  "Boilies frutales 20mm": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Boilies.jpg/320px-Boilies.jpg",
    desc: "Bola de masa aromatizada para carpa. 20mm es el tamaño estándar. Aromas frutales atraen carpas grandes.",
    comprar: "https://www.amazon.es/s?k=boilies+frutales+20mm+carpa",
    tipo: "natural"
  },
  "Boilies 20mm": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Boilies.jpg/320px-Boilies.jpg",
    desc: "Cebo estándar para carpfishing. Muy efectivo en embalses y ríos grandes.",
    comprar: "https://www.amazon.es/s?k=boilies+20mm+carpfishing",
    tipo: "natural"
  },
  "Maíz dulce": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Sweetcorn_close_up.jpg/320px-Sweetcorn_close_up.jpg",
    desc: "Maíz en conserva. Cebo económico y muy efectivo para carpa y barbo. Se usa solo o en combinación.",
    comprar: "https://www.amazon.es/s?k=maíz+dulce+cebo+carpa+pesca",
    tipo: "natural"
  },
  "Pellets 6mm": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Boilies.jpg/320px-Boilies.jpg",
    desc: "Pequeñas bolas comprimidas de masa aromática. Para carpfishing y barbo. Ideales como cebo de fondo.",
    comprar: "https://www.amazon.es/s?k=pellets+pesca+carpa+6mm",
    tipo: "natural"
  },
  "Gusano de tierra": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Earthworm2.jpg/320px-Earthworm2.jpg",
    desc: "El cebo más universal de agua dulce. Efectivo para barbo, carpa, perca y cualquier pez de río.",
    comprar: "https://www.amazon.es/s?k=gusano+lombriz+cebo+pesca+agua+dulce",
    tipo: "natural"
  },
  "Lombriz grande": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Earthworm2.jpg/320px-Earthworm2.jpg",
    desc: "Lombriz grande nocturna. El mejor cebo para anguila y siluro de noche.",
    comprar: "https://www.amazon.es/s?k=lombriz+cebo+anguila+siluro",
    tipo: "natural"
  },

  // MOSCAS
  "Royal Wulff seca": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Dry_fly_fishing.jpg/320px-Dry_fly_fishing.jpg",
    desc: "Mosca seca clásica muy visible en corriente. Efectiva para trucha cuando hay eclosión de insectos en superficie.",
    comprar: "https://www.amazon.es/s?k=royal+wulff+mosca+trucha",
    tipo: "mosca"
  },
  "Elk Hair Caddis": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Dry_fly_fishing.jpg/320px-Dry_fly_fishing.jpg",
    desc: "Imitación de friganea. Una de las moscas secas más efectivas para trucha en ríos rápidos.",
    comprar: "https://www.amazon.es/s?k=elk+hair+caddis+mosca+pesca",
    tipo: "mosca"
  },
  "Ninfa Hare's Ear": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Dry_fly_fishing.jpg/320px-Dry_fly_fishing.jpg",
    desc: "Ninfa generalista muy efectiva. Imita larvas de insecto en fondo. La mosca más pescada del mundo.",
    comprar: "https://www.amazon.es/s?k=hare+ear+ninfa+mosca+trucha",
    tipo: "mosca"
  },
};

export function getCeboInfo(nombre) {
  // Búsqueda exacta primero
  if(CEBOS_INFO[nombre]) return CEBOS_INFO[nombre];
  // Búsqueda parcial
  const key = Object.keys(CEBOS_INFO).find(k =>
    k.toLowerCase().includes(nombre.toLowerCase()) ||
    nombre.toLowerCase().includes(k.toLowerCase())
  );
  if(key) return CEBOS_INFO[key];
  // Sin info específica — devuelve búsqueda genérica
  return {
    img: null,
    desc: `Cebo/señuelo usado en pesca deportiva. Toca "Ver más" para buscarlo en tiendas.`,
    comprar: `https://www.amazon.es/s?k=${encodeURIComponent(nombre+' pesca')}`,
    tipo: "general"
  };
}
