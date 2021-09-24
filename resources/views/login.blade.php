@extends('layouts.app')
@push('scripts')
<script src="/js/blade/login.js"></script>
@endpush
@push('styles')
<link
href="https://cdnjs.cloudflare.com/ajax/libs/devextreme/21.1.5/css/dx.material.blue.dark.css"
rel="stylesheet"
/>
@endpush
@section('blog-content')

<div id="login"></div>

@endsection