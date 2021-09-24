@section('blog-content')

<div class="single-container">
    <div class="single-blog-post">
        
        <div class="single-post-date-input">{{ $post->publishdate }}</div>
        <div class="single-post-content">{{ htmlspecialchars_decode($post->content, ENT_HTML5)}}</div>

        <div class="single-post-title">{{ $post->title }}</div>
        <div class="single-post-date-output"></div>
        <div class="single-image-post">
            <img src="/images/{{$post->image}}"/>
        </div>

        <div class="single-post-output"></div>

    </div>
</div>

@endsection