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

// Traducciones, íconos y colores de tipos de Pokémon
const typeTranslations = {
    fire: 'Fuego',
    water: 'Agua',
    grass: 'Planta',
    electric: 'Eléctrico',
    psychic: 'Psíquico',
    bug: 'Bicho',
    normal: 'Normal',
    rock: 'Roca',
    ghost: 'Fantasma',
    ice: 'Hielo',
    fairy: 'Hada',
    steel: 'Acero',
    flying: 'Volador',
    ground: 'Tierra',
    fighting: 'Lucha',
    poison: 'Veneno',
    dragon: 'Dragón',
    dark: 'Siniestro',
};

const typeIcons = {
    fire: '🔥',
    water: '💧',
    grass: '🍃',
    electric: '⚡',
    psychic: '🔮',
    bug: '🐛',
    normal: '⚪',
    rock: '🪨',
    ghost: '👻',
    ice: '❄️',
    fairy: '🧚‍♀️',
    steel: '🔩',
    flying: '🕊️',
    ground: '🌍',
    fighting: '🥊',
    poison: '☠️',
    dragon: '🐉',
    dark: '🌑',
};

const typeColors = {
    fire: '#FF4500',
    water: '#1E90FF',
    grass: '#32CD32',
    electric: '#FFD700',
    psychic: '#FF69B4',
    bug: '#8B4513',
    normal: '#A9A9A9',
    rock: '#B8860B',
    ghost: '#6A5ACD',
    ice: '#00FFFF',
    fairy: '#FFB6C1',
    steel: '#C0C0C0',
    flying: '#87CEFA',
    ground: '#D2B48C',
    fighting: '#FF6347',
    poison: '#800080',
    dragon: '#FFD700',
    dark: '#696969',
};

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

// Consolidar el evento DOMContentLoaded
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

    // Ocultar el loader una vez que la página esté completamente cargada
    const loader = document.querySelector('.loader');
    loader.style.display = 'none';

    // Iniciar el cronómetro, la consulta automática y mostrar un Pokémon al cargar la página
    fetchRandomPokemon(); // Muestra un Pokémon inicial
    resetCountdownAndFetch(); // Inicia el cronómetro y la consulta automática
});
