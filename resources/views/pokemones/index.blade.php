<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokédex</title>
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">

</head>
<body>
    <x-navbar /> <!-- Componente Navbar -->

    <section>
        <div class="container mt-5 text-center">
            <h1 class="pokedex-title">Pokédex</h1>
            <div class="row">
                @foreach ($pokemons as $pokemon)
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">{{ ucfirst($pokemon['name']) }}</h5>
                                <img src="https://pokeapi.co/media/sprites/pokemon/{{ $loop->index + 1 }}.png" alt="{{ $pokemon['name'] }}" class="card-img-top">
                                <p class="card-text">Número: {{ $loop->index + 1 }}</p>
                                <a href="#" class="btn btn-primary">Detalles</a>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </section>
    <script src="{{ asset('assets/js/app.js') }}"></script> <!-- Asegúrate de que la ruta sea correcta -->
    <x-footer />
</body>
</html>
