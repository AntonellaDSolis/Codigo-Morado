const universidades = [
  { nombre: "UNGS — Universidad Nacional de General Sarmiento", carrera: "Tecnicatura en Programación Informática / Lic. en Sistemas", lat: -34.4756, lng: -58.7217 },
  { nombre: "UTN — Facultad Regional Buenos Aires", carrera: "Ingeniería en Sistemas de Información", lat: -34.5985, lng: -58.4212 },
  { nombre: "UBA — Facultad de Ingeniería (FIUBA)", carrera: "Ingeniería en Informática / Computación", lat: -34.6165, lng: -58.3697 },
  { nombre: "UNLP — Facultad de Informática", carrera: "Lic. en Informática / Ing. en Computación", lat: -34.9037, lng: -57.9414 },
  { nombre: "UNQ — Universidad Nacional de Quilmes", carrera: "Ing. en Informática / Tecnicatura en Programación", lat: -34.7057, lng: -58.2894 }
];

const map = L.map('map', { scrollWheelZoom: false }).setView([-34.66, -58.55], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
  maxZoom: 18
}).addTo(map);

const purpleIcon = L.divIcon({
  className: '',
  html: '<div style="width:16px;height:16px;border-radius:50%;background:#7C3AED;border:3px solid #FFFDFB;box-shadow:0 0 0 2px #7C3AED;"></div>',
  iconSize: [16, 16],
  iconAnchor: [8, 8]
});

universidades.forEach(u => {
  L.marker([u.lat, u.lng], { icon: purpleIcon })
    .addTo(map)
    .bindPopup(`<strong>${u.nombre}</strong><br>${u.carrera}`);
});
