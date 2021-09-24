<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Black Cube Room</title>
        <link rel="preload" as="image" href="/images/black_cat_right.jpeg" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap" rel="stylesheet">
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/jquery-toast-plugin/1.3.2/jquery.toast.min.css"
            integrity="sha512-wJgJNTBBkLit7ymC6vvzM1EcSWeM9mmOu+1USHaRBbHkm6W9EgM0HY27+UtUaprntaYQJF75rc8gjxllKs5OIQ=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
        />
        <link href="/css/app.css" rel="stylesheet" />
        <link
        href="https://cdnjs.cloudflare.com/ajax/libs/devextreme/21.1.5/css/dx.material.blue.dark.css"
        rel="stylesheet"
        />
        <link href="/css/views/blog.css" rel="stylesheet" />
        @stack('topScripts')
        <script src="/js/blade/manifest.js"></script>
        <script src="/js/blade/vendor.js"></script>
        <script src="/js/bootstrap.js"></script>
        <script src="/js/blade/blog.js"></script>
        @livewireStyles
      
    </head>
<body class="antialiased dx-viewport">

<x-header></x-header>

@yield('blog-content')
@livewireScripts
@stack('scripts')
</body>
</html>