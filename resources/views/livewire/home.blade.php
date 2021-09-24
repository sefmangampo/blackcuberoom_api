@extends('welcome') @push('styles')
<link href="/css/views/home.css" rel="stylesheet" />
@endpush @push('scripts')
<script src="/js/blade/home.js"></script>
<script
    src="https://cdnjs.cloudflare.com/ajax/libs/jquery-toast-plugin/1.3.2/jquery.toast.min.js"
    integrity="sha512-zlWWyZq71UMApAjih4WkaRpikgY9Bz1oXIW5G0fED4vk14JjGlQ1UmkGM392jEULP8jbNMiwLWdM8Z87Hu88Fw=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
></script>
@endpush @section('content')
<div class="home-container">
    <header>
        <input type="checkbox" class="nav-toggle" id="nav-toggle" />
        <label for="nav-toggle" class="nav-toggle-label">
            <div class="hamburger-container">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
        </label>
        <nav class="nvbar">
            <div class="pic-container">
                <img
                    height="50px"
                    width="50px"
                    class="my-image"
                    src="{{ asset('images/me.jpg') }}"
                    alt=""
                />
            </div>
            <div class="ul-containers">
                <ul class="same-page-nav">
                    <li>
                        <a href="#home">
                            <div class="link-label">
                                <i class="bi bi-house-door"></i>
                                <span class="nav-text">Home</span>
                            </div>
                            <div class="filler"></div>
                        </a>
                    </li>
                    <li>
                        <a href="#playground">
                            <div class="link-label">
                                <i class="bi bi-tools"></i>
                                <span> PlayGround </span>
                            </div>
                            <div class="filler"></div
                        ></a>
                    </li>
                    <li>
                        <a href="#about">
                            <div class="link-label">
                                <i class="bi bi-person"></i>
                                <span> About</span>
                            </div>
                            <div class="filler"></div>
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            <div class="link-label">
                                <i class="bi bi-envelope"></i>
                                <span> Contact</span>
                            </div>
                            <div class="filler"></div>
                        </a>
                    </li>
                </ul>
                <ul>
                    {{-- <li>
                        <a href="/blog">
                            <div class="link-label">
                                <i class="bi bi-pencil"></i>
                                <span>Blog</span>
                            </div></a
                        >
                    </li> --}}
                    {{--
                    <li><a href="/playground">Random tinkerings</a></li>
                    --}}
                </ul>
            </div>

            <div class="bottom-nav-container">
                <div class="switch-container">
                    <div class="custom-control custom-switch">
                        <input
                            type="checkbox"
                            checked
                            class="custom-control-input"
                            id="customSwitch1"
                        />
                        <label class="custom-control-label" for="customSwitch1">
                            Auto-hide the navigation drawer
                        </label>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <section id="home">
        <div class="home-section">
            <div class="home-content">
                <div class="hello">
                    <span class="hello-i-am">Hi, I am</span>
                    <span class="sef">SEF</span>
                    <span class="web-dev">A web developer</span>
                </div>
                <svg
                    class="home-svg"
                    id="visual"
                    viewBox="0 0 300 300"
                    width="300"
                    height="700"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                >
                    <g transform="translate(95 -40)">
                        <path
                            d="M71.2 -61.5C96.2 -46.2 123.1 -23.1 122.2 -0.9C121.2 21.2 92.4 42.4 67.4 60.8C42.4 79.1 21.2 94.5 1.8 92.8C-17.7 91 -35.4 72 -57.2 53.7C-79 35.4 -105 17.7 -106.9 -1.9C-108.8 -21.4 -86.6 -42.9 -64.7 -58.2C-42.9 -73.6 -21.4 -82.8 0.8 -83.6C23.1 -84.4 46.2 -76.9 71.2 -61.5"
                            fill="#3490dc"
                        ></path>
                    </g>
                </svg>
                <div class="ilike">
                    <span class="entry"
                        >I like to <span class="higlight">create stuff</span> on
                        the web.</span
                    >
                    <span class="entry">
                        A
                        <span class="higlight">little into data science</span>
                        but much
                        <span class="higlight"
                            >appreciates data visualisations</span
                        >.</span
                    >
                    <span class="entry">
                        I enjoy <span class="higlight">reading graphs</span> and
                        <span class="higlight">looking at the stars</span> and
                        <span class="higlight">philippine history</span>.</span
                    >
                </div>
            </div>
        </div>
    </section>
    <section id="playground">
        <div class="playground-section">
            <div class="playground-content">
                <div class="playground-title">PROJECTS</div>
                <table class="table table-dark">
                    <thead>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Desc</th>
                        <th scope="col">Link</th>
                    </thead>
                    <tbody>

                        @foreach ( $playgrounds as $x )
                            <tr>
                                <th scope="row">{{$x->id}}</th>
                                <td>{{$x->name}}</td>
                                <td>{{$x->description}}</td>
                                <td><div data-link={{$x->link}} class="playground-link btn btn-primary">Go</div></td>  
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </section>
    <section id="about">
        <div class="about-section">
            <div class="about-me"><span>ABOUT ME</span></div>
            <div class="about-contents">
                <div class="skills-container">
                    <div class="about-contents-text">Skills</div>
                    <ul class="skills-list">
                        <li>
                        @foreach ( $skills as $skill )
                            <li>{{$skill->name}}</li>
                        @endforeach
                    </ul>
                </div>

                <div class="exp-container">
                    <div class="about-contents-text">Experiences</div>
                    <ul>
                        @foreach ( $exps as $exp )
                            <li>{{$exp->jobtitle}} - {{$exp->company}} ({{$exp->location}}) [{{$exp->dateofwork}}]</li>
                        @endforeach
                    </ul>
                </div>

                <a href="/about" class="more-details">
                <div class="btn btn-primary more-details">
                    <span>More Details</span>
                </div>
            </a>
            </div>
        </div>
    </section>
    <section id="contact">
        <div class="contact-section">
            <div class="contact-title">
                <span>CONTACT </span>
                <hr />
                <p>As of <span class="date-available"></span></p>
                <p>
                    @if ($details->isavailableforwork === 1)
                        I am available for work
                    @else
                        I am not available for work
                    @endif
                </p>
            </div>
            <div class="contact-contents"
                data-email-head="{{$details->emailhead}}"
                data-email-domain="{{$details->emaildomain}}"
                data-phone-number="{{$details->phonenumber}}"
                data-geolocation="{{$details->coordinates}}"
            >
                <div class="contact-details">
                    <span> {{$details->emailhead}}<i class="bi bi-at"></i>{{$details->emaildomain}}.com</span>
                    <i class="bi bi-clipboard contact-email"></i>
                </div>
                <div class="contact-details">
                    <span> {{$details->phonenumber}}</span>
                    <i class="bi bi-clipboard contact-number"></i>
                </div>
                <div class="contact-details">
                    <span> {{$details->address}}</span>
                    <i class="bi bi-geo-alt contact-location"></i>
                </div>
            </div>
        </div>
    </section>
</div>

@endsection