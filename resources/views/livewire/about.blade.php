@extends('welcome') @push('styles')
<link
    href="https://cdnjs.cloudflare.com/ajax/libs/devextreme/21.1.5/css/dx.material.blue.dark.css"
    rel="stylesheet"
/>
<link href="/css/views/about.css" rel="stylesheet" />
@endpush
@push('scripts')
<script src="/js/blade/about.js"></script>
@endpush @section('content')
<div class="about-container">
    <div data-experiences={{$experiences}} data-roles={{$roles}} id="aboutBody"></div>
</div>
@endsection