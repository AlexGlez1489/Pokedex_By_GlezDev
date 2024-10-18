<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PokedexController;
use App\Http\Controllers\PokemonController;
Route::get('/', [PokedexController::class, 'index'])->name('home');
Route::get('/acerca', [PokedexController::class, 'about'])->name('about');
Route::get('/contacto', [PokedexController::class, 'contact'])->name('contact');
// Ruta para mostrar los Pokémon guardados
Route::get('/mostrar-pokemones', [PokemonController::class, 'mostrarPokemones']);


Route::get('/guardar-pokemon/{id}', [PokemonController::class, 'guardarPokemonDesdeApi']);

Route::get('/pokemons', [PokemonController::class, 'mostrarPokemons'])->name('pokemons.index');

Route::get('/migrar-pokemons', [PokemonController::class, 'migrarPokemons'])->name('pokemons.migrar');


Route::get('/pokemones', [PokemonController::class, 'mostrarPokemones']);



Route::get('/pokemones', [PokemonController::class, 'index'])->name('pokemones.index');
