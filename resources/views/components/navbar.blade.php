<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokédex GlezDev</title>

    <!-- Metadatos para redes sociales -->
    <meta property="og:title" content="Prueba estilo Pokédex" />
    <meta name="twitter:title" content="Prueba estilo Pokédex" />
    <meta property="og:image" content="https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg" />
    <meta name="twitter:image" content="https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg" />
    <meta name="description" content="Prueba creada por GlezDev" />
    <meta property="og:description" content="Prueba creada por GlezDev" />
    <meta name="twitter:description" content="Prueba creada por GlezDev" />
    <link rel='stylesheet' href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'>

    <!-- Hoja de estilos -->
    <link rel="stylesheet" href="assets/css/style.css">
    <!-- Iconos -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <!-- Favicon -->
    <link rel="shortcut icon" href="favicon.ico"/>
    <!-- Enlace a la fuente Poppins -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">

    
</head>

<header class="contenedor-nav">
        <nav class="button-container">
            <a class="button" href="{{ route('home') }}">
                <img src="{{ asset('assets/favicon.ico') }}" style="width: 24px;" alt="Pokebola">
            </a>
            <a class="button" href="{{ route('about') }}">
                <img src="{{ asset('assets/img/pikachu.png') }}" style="width: 24px;" alt="Pikachu">
            </a>
            <a class="button" href="{{ route('contact') }}">
                <img src="{{ asset('assets/img/charizard.png') }}" style="width: 24px;" alt="Charizard">
            </a>
        </nav>
    </header>