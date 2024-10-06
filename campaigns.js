let selectedDifficulty = '';

// Maneja la selección de campaña y luego muestra la dificultad
function goToCampaign(country) {
    let coords = {
        'Brasil': [-14.235004, -51.92528],
        'China': [35.861660, 104.195397]
    };

    // Ocultar la selección de campañas
    document.querySelector('.campaigns').classList.add('hidden');

    // Realizar el vuelo a la campaña seleccionada
    map.flyTo(coords[country], 5, { animate: true, duration: 2 });

    // Mostrar selección de dificultad después del vuelo
    setTimeout(function() {
        document.querySelector('.campaign-info').innerHTML = `
            <h2>Campaña: ${country}</h2>
            <p>${country === 'Brasil' ? 'Explora cómo las decisiones afectan la selva del Amazonas.' : 'Descubre el impacto del cambio climático en las montañas del río Yangtze.'}</p>
            <div class="dropdown">
                <label for="difficulty">Selecciona la dificultad:</label>
                <select id="difficulty" onchange="setDifficulty(this.value)">
                    <option value="">--Elige la dificultad--</option>
                    <option value="Fácil">Fácil</option>
                    <option value="Medio">Medio</option>
                    <option value="Difícil">Difícil</option>
                </select>
            </div>
            <button class="button hidden" id="startButton" onclick="startCampaign('${country}')">Comenzar ${country}</button>
        `;
        document.querySelector('.campaign-info').classList.remove('hidden');
    }, 2000);
}

// Guardar la dificultad seleccionada y mostrar el botón para comenzar la campaña
function setDifficulty(difficulty) {
    selectedDifficulty = difficulty;
    if (difficulty) {
        document.getElementById('startButton').classList.remove('hidden');
    } else {
        document.getElementById('startButton').classList.add('hidden');
    }
}

// Iniciar la campaña seleccionada
function startCampaign(country) {
    // Simular el inicio de la campaña mostrando la interfaz de juego
    console.log(`Campaña de ${country} iniciada con dificultad ${selectedDifficulty}.`);
    document.querySelector('.campaign-info').classList.add('hidden');

    // Mostrar la interfaz de usuario del juego (simulada)
    document.querySelector('.game-ui').classList.remove('hidden');
}
