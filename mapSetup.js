// Definir los límites máximos y mínimos para que el mapa no se repita
var southWest = L.latLng(-85, -180);  // Límite sur-oeste
var northEast = L.latLng(85, 180);    // Límite norte-este
var bounds = L.latLngBounds(southWest, northEast);

// Inicializar el mapa con límites establecidos y desactivar el wrapAround del mundo
var map = L.map('map', {
    maxBounds: bounds,         // Limitar el mapa para que no salga de los límites del mundo
    maxBoundsViscosity: 1.0,   // Establecer viscosidad máxima para evitar movimientos más allá de los límites
    worldCopyJump: false,      // Desactivar la opción de que el mundo se repita al desplazar
    noWrap: true,              // Evitar que el mapa se "envuelva"
    minZoom: 2,                // Establecer zoom mínimo para mostrar el mundo una vez
    zoomControl: true          // Mostrar los controles de zoom
}).setView([0, 0], 2);         // Ajustar el nivel de zoom inicial y la vista centrada

// Agregar la capa del mapa
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://carto.com/attributions">CartoDB</a> contributors',
    maxZoom: 18,               // Zoom máximo para acercarse
    minZoom: 2                 // Zoom mínimo para evitar alejarse demasiado
}).addTo(map);

function showCampaigns() {
    document.querySelector('.welcome-card').classList.add('hidden');
    document.querySelector('.campaigns').classList.remove('hidden');
}
