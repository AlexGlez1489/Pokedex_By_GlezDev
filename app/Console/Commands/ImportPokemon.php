<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Pokemon;
use Illuminate\Support\Facades\Http;

class ImportPokemon extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'pokemon:import';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Importar Pokémon desde la API a la base de datos';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        // Obtener los datos de los Pokémon desde una API pública
        $response = Http::get('https://pokeapi.co/api/v2/pokemon?limit=150');
        $pokemons = $response->json()['results'];

        // Iterar sobre cada Pokémon y guardarlo en la base de datos
        foreach ($pokemons as $pokemonData) {
            // Obtener detalles adicionales del Pokémon
            $pokemonDetail = Http::get($pokemonData['url'])->json();

            // Crear el Pokémon en la base de datos
            Pokemon::create([
                'name' => $pokemonData['name'],
                'type' => $pokemonDetail['types'][0]['type']['name'],
                'description' => 'Descripción no disponible', // Puedes mejorar esto si la API provee una descripción
                'height' => $pokemonDetail['height'] / 10, // Convertir a metros
                'weight' => $pokemonDetail['weight'] / 10, // Convertir a kilogramos
                'abilities' => implode(', ', array_map(fn($ability) => $ability['ability']['name'], $pokemonDetail['abilities'])),
            ]);
        }

        $this->info('Pokémon importados exitosamente.');
    }
}
