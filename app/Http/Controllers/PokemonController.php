<?php

// PokemonController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PokemonController extends Controller
{
    public function index()
    {
        // Realiza una solicitud a la API para obtener todos los Pokémon
        $response = Http::get('https://pokeapi.co/api/v2/pokemon?limit=1000'); // Cambia el límite si es necesario

        // Verifica si la respuesta es exitosa
        if ($response->successful()) {
            $pokemons = $response->json()['results']; // Extrae los Pokémon del resultado
        } else {
            $pokemons = [];
        }

        return view('pokemones.index', compact('pokemons')); // Pasa los Pokémon a la vista
    }
}
