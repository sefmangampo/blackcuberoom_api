@extends('welcome') @push('styles')
<link
    href="https://cdnjs.cloudflare.com/ajax/libs/devextreme/21.1.5/css/dx.material.blue.dark.css"
    rel="stylesheet"
/>
<link href="/css/views/blog.css" rel="stylesheet" />
@endpush
@push('scripts')
<script src="/js/blade/blog.js"></script>
@endpush
<x-header></x-header>
@section('content')

<div class="container mx-auto p-5">
    <h1 class="text-4xl mt-32 text-center tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
        Welcome to The Blog
    </h1>
</div>

@yield('blog-content')

@endsection