
<body>
    <div class="loader"></div>

    <x-navbar /> <!-- Aquí se incluye el componente Navbar -->

    <section>
        <div class="container mt-5 text-center pokedex-container">
            <h1 class="pokedex-title up">Pokédex</h1>
            <div class="pokemon-info">
                <p style="font-size: 1.2rem ;" id="countdownTimer" class="countdown-timer">Próximo cambio en: 30s</p>
                <h3 id="pokemonName" class="pokemon-name left"></h3>
                <img id="pokemonImage" src="" alt="Pokémon" class="pokemon-image">
                <p id="pokemonType" style="color:#000;" class="pokemon-type down"></p> <!-- Tipo del Pokémon -->
                <p id="pokemonDescription" class="pokemon-description left"></p> <!-- Descripción del Pokémon -->
                <p id="pokemonHeight" class="pokemon-height left"></p> <!-- Altura del Pokémon -->
                <p id="pokemonWeight" class="pokemon-weight left"></p> <!-- Peso del Pokémon -->
                <p id="pokemonAbilities" class="pokemon-abilities left"></p> <!-- Habilidades del Pokémon -->
            </div>
            <br>
            <button id="showPokemonBtn" class="btn btn-warning mt-3 pokedex-button down">Cambiar Pokémon</button>
            
        </div>
    </section>

    
    <x-footer/>
    
