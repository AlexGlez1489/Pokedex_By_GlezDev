<?php

namespace App\Http\Controllers;
use App\Models\Pokemon;
use Illuminate\Http\Request;

class PokedexController extends Controller
{
    public function index()
    {
        return view('index');
    }

    public function about()
    {
        return view('about');
    }

    public function contact()
    {
        return view('contact');
    }
    public function mostrarPokemones()
    {
        $pokemones = Pokemon::all(); // Obtiene todos los Pokémon guardados
        return view('mostrar-pokemones', compact('pokemones'));
    }
}
