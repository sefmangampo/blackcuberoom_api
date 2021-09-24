@section('blog-content')
<div class="blog-container">
    <div class="blog-contents">

        <div class="post-intro">
            <div class="post-intro-blog"> Blog</div>
            <div class="post-intro-testimony">
                <p>I forget stuff a lot of the time.</p> 
                <p>Especially my emotions and take-aways from previous experiences.</p>
                <p>I found it interesting to write down what I felt or thought about something and then read
                them again after some time.</p><p> It takes me back and allows me to gauge how much of me has changed.</p>
            </div>
        </div>
             
        <div class="post-header">
            <a href="{{"/blog/post/".$posts[0]->slug}}">
                <div class="post-header-left">
                    <div class="post-header-category">Lifestyle | {{ date('F d ',strtotime($posts[0]->publishdate))}} </div>
                    <div class="post-header-title">{{ $posts[0]->title}}</div>
                    <div class="post-header-lead">{{ $posts[0]->title}}</div>
                </div>
                
                <div class="post-header-right">
                    <div class="post-header-image"
                    style="background: url('/images/{{$posts[0]->image}}') no-repeat; background-size: cover;"
                    ></div>    
                </div>
            </a>
        </div>
        <div class="grid">
       
            
            @foreach ( $posts as $post )

                @if ($loop->first)
                @continue
                @endif

            <div class="grid-item">
                <a href="{{"/blog/post/".$post->slug}}">
                <div class="grid-item-contents" >

                   
                    <div class="image-content" style="background: url('/images/{{$post->image}}') no-repeat; background-size: cover;" ></div> 
                    <div class="post-title">
                        <div class="post-head-title">{{$post->title}}</div>
                        <div class="publish-date">{{ date('m/d/Y',strtotime($post->publishdate))}}</div>
                        <div class="post-content">
                            {{strip_tags($post->content)}}    
                        </div>
                       
                    </div>
                    
                    <div class="post-footer">
                       
                    </div>
                </div>
            </a>
            </div>
              
            @endforeach
        </div>
    </div>
    {{ $posts->links('pagination-links') }}
</div>
@endsection