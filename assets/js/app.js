const showPokemonBtn = document.getElementById('showPokemonBtn');
const pokemonContainer = document.querySelector('.pokemon-info');
const pokemonName = document.getElementById('pokemonName');
const pokemonImage = document.getElementById('pokemonImage');
const pokemonType = document.getElementById('pokemonType');
const pokemonDescription = document.getElementById('pokemonDescription');
const pokemonHeight = document.getElementById('pokemonHeight');
const pokemonWeight = document.getElementById('pokemonWeight');
const pokemonAbilities = document.getElementById('pokemonAbilities');
const countdownTimer = document.getElementById('countdownTimer');

let countdownInterval;
let autoFetchInterval;
let remainingTime = 30; // Tiempo en segundos para el próximo cambio

// Función para actualizar el cronómetro
function updateCountdown() {
    countdownTimer.textContent = `Próximo cambio en: ${remainingTime}s`;
    remainingTime--;

    if (remainingTime < 0) {
        remainingTime = 30; // Reinicia el tiempo
    }
}

// Función para obtener un Pokémon aleatorio
async function fetchRandomPokemon() {
    const randomId = Math.floor(Math.random() * 1010) + 1;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const pokemon = await response.json();

    // Mostrar los datos en la interfaz
    pokemonName.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    pokemonImage.src = pokemon.sprites.front_default;

    // Obtener tipo de Pokémon con su ícono y color
    const types = pokemon.types.map(type => {
        const typeName = type.type.name;
        const translatedType = typeTranslations[typeName] || typeName; // Traducir si está en el mapa
        const icon = typeIcons[typeName] || ''; // Si no existe un ícono, se deja vacío
        const color = typeColors[typeName] || '#000'; // Si no existe un color, se usa negro
        return `<span style="color: ${color}">${icon} ${translatedType}</span>`;
    }).join(' ');

    pokemonType.innerHTML = `Tipo: ${types}`;

    // Obtener descripción del Pokémon
    const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}/`);
    const speciesData = await speciesResponse.json();
    const description = speciesData.flavor_text_entries.find(entry => entry.language.name === 'es');
    pokemonDescription.innerHTML = `<i class="fas fa-book"></i> Descripción: ${description.flavor_text}`;

    // Obtener altura y peso
    pokemonHeight.innerHTML = `<i class="fas fa-ruler-vertical"></i> Altura: ${pokemon.height / 10} m`;
    pokemonWeight.innerHTML = `<i class="fas fa-weight"></i> Peso: ${pokemon.weight / 10} kg`;

    // Obtener habilidades
    const abilities = pokemon.abilities.map(ability => ability.ability.name).join(', ');
    pokemonAbilities.innerHTML = `<i class="fas fa-magic"></i> Habilidades: ${abilities}`;

    // Mostrar el contenedor
    pokemonContainer.style.display = 'block';
    
    // Reiniciar la animación
    pokemonContainer.classList.remove('animate');
    void pokemonContainer.offsetWidth;
    pokemonContainer.classList.add('animate');

    // Reiniciar el cronómetro y la consulta automática
    resetCountdownAndFetch();
}

// Función para reiniciar el cronómetro y la consulta automática
function resetCountdownAndFetch() {
    remainingTime = 30;
    updateCountdown(); // Actualiza inmediatamente el cronómetro

    clearInterval(countdownInterval);
    countdownInterval = setInterval(updateCountdown, 1000);

    clearInterval(autoFetchInterval);
    autoFetchInterval = setInterval(fetchRandomPokemon, 30000);
}

// Evento para el botón "Mostrar Pokémon"
showPokemonBtn.addEventListener('click', fetchRandomPokemon);

// Iniciar el cronómetro, la consulta automática y mostrar un Pokémon al cargar la página
window.addEventListener('load', () => {
    fetchRandomPokemon(); // Muestra un Pokémon inicial
    resetCountdownAndFetch(); // Inicia el cronómetro y la consulta automática
});


document.addEventListener('DOMContentLoaded', function () {
    // Inicializa ScrollReveal
    ScrollReveal({
        reset: true,
        distance: '15px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.up', { origin: 'top' });
    ScrollReveal().reveal('.down', { origin: 'bottom' });
    ScrollReveal().reveal('.left', { origin: 'left' });
    ScrollReveal().reveal('.right', { origin: 'right' });

});

        // Script para ocultar la pantalla de carga
        document.addEventListener("DOMContentLoaded", function() {
            const loader = document.querySelector('.loader');
            // Ocultar el loader una vez que la página esté completamente cargada
            loader.style.display = 'none';
        });