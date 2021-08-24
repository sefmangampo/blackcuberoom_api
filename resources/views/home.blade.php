@extends('welcome')
@section('content')
    <div class="home-container">
        <header>
            <input type="checkbox" class="nav-toggle" id="nav-toggle"/>
            <label for="nav-toggle" class="nav-toggle-label">
                <div class="hamburger-container">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
            </label>


            <nav class="nvbar">

                <div class="pic-container">
                    <img class='my-image' src="{{asset('images/me.jpg')}}" alt="">
                </div>

                <div class="ul-containers">
                    <ul class='same-page-nav'>
                        <li>
                            <a href="#home">
                                <div class="link-label">Home</div>
                                <div class="filler"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#playground">
                                <div class="link-label">PlayGround</div>
                                <div class="filler"></div></a>
                            </li>
                        <li>
                            <a href="#about">
                                <div class="link-label">About</div>
                                <div class="filler"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                <div class="link-label">Contact</div>
                                <div class="filler"></div>
                            </a>
                        </li>
                    </ul>
    
                    <ul>
                        <li><a href="/playground"><div class="link-label">Blog</div></a></li>
                        {{-- <li><a href="/playground">Random tinkerings</a></li> --}}
                    </ul>
                </div>

                <div class="bottom-nav-container">
                    <div class="switch-container">
                        <div class="custom-control custom-switch">
                            <input type="checkbox" checked class="custom-control-input" id="customSwitch1">
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
                  <p class="hello">Hello, I am sef</p> 
                  <p class="ilike">
                    I like to create useful stuff on the web.<br/><br/>
                    Not into data science but appreciates the visualisation.<br/><br/>
                    I enjoy reading graphs and looking at the stars but not studying them.
                  </p>

               </div>

               
           </div>
        </section>
        <section id="playground">
            <h3>playground</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dicta, incidunt dignissimos neque ducimus vel.</p>
        </section>
        <section id="about">
            <h3>about</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dicta, incidunt dignissimos neque ducimus vel.</p>
        </section>
        <section id="contact">
            <h3>contact</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dicta, incidunt dignissimos neque ducimus vel.</p>
        </section>
    </div>
    <script>

        class IsNavBarWhite {

            constructor(){
                this.isWhite = true;
            }
       

            setIsWhite(){
                this.isWhite = true;
            }

            setIsBlack(){
                this.isWhite = false;
            }

            getColor(){
                return this.isWhite;
            }
        }

        const isNavBarWhite = new IsNavBarWhite()


        let firstLoad = true;


        const setObservers = () => {
            const options = {
                threshold: 0,
                rootMargin: "-100px"
            }

            const sections = $('section');
            const navItems = $('.nvbar, header');
            const ul = $('.same-page-nav');
            const children = ul.children();

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(({target, isIntersecting}) => {
                    
                    if(isIntersecting){

                        let childIndex = 0;

                        switch(target.id){
                            case 'home':
                                childIndex = 0;
                            break;
                            case 'playground':
                                childIndex = 1;
                            break;
                            case 'about':
                                childIndex = 2;
                            break;
                            case 'contact':
                                childIndex = 3;
                            break;

                        }

                        for(let x = 0; x < children.length; x++){
                            if(x === childIndex){
                                if(children[x].children[0].children[1].classList.contains('activate')){
                                    children[x].children[0].children[1].classList.remove('activate')
                                }else{
                                    children[x].children[0].children[1].classList.add('activate')
                                }
                            }else{
                                children[x].children[0].children[1].classList.remove('activate')
                            }
                        }
                    }


                    if(isIntersecting){
                        if(target.id === 'playground' || target.id === 'contact' ){
                         
                            isNavBarWhite.setIsBlack()
                            if(!navItems.hasClass('inverse'))
                                navItems.addClass('inverse')
                        }else{
                    
                            isNavBarWhite.setIsWhite()
                            if(navItems.hasClass('inverse'))
                                navItems.removeClass('inverse')
                                
                        }
                    }

                })
            }, options);

            sections.map((index, section) => {
                observer.observe(section)
            })
        }
    
        const hideDrawerOnAction = ({matches}) => {

            let scrollDebounce = true;

            const checkbox = $('#nav-toggle')[0];
            const switcher = $('#customSwitch1')[0];

            if(!matches){
                checkbox.checked = true;
                return
            }

            
            $('.home-container').scroll(() => {
                if(scrollDebounce){
                    scrollDebounce = false;
                    if (switcher.checked) checkbox.checked = false;

                    setTimeout(() => {
                        scrollDebounce = true;
                    }, 500);
                    
                }

            })

            function hideDrawer(){
                if (switcher.checked) checkbox.checked = false;
            }

            $('a, section').click(() => {
                hideDrawer();          
            });
        }

        function documentReady(fn){

            if(document.readyState === 'complete' || document.readyState === 'interactive'){
                setTimeout(fn, 1);
            }else {
                document.addEventListener('DOMContentLoaded', fn);
            }

        }

        function removeHashes(){
            const anchors = $('.same-page-nav a');
            
            for(let x = 0; x < anchors.length; x++){
               $(anchors[x]).click( e => { 
                setTimeout(() => {
                    history.replaceState('', document.title, window.location.origin + window.location.search)
                });
               });
            }
        }

        function setScreenBasedFeatures(){
            const media = window.matchMedia("(max-width: 759px)")
            
            if(media.matches) hideDrawerOnAction(media);
            
            media.addListener(hideDrawerOnAction)     
            
        }

        function setHoverEffects(){
            const links = $('.ul-containers a');
            
            for(let x = 0; x < links.length; x++){

                const link = $(links[x]);

                link.hover(e => {
                    const classToAdd = isNavBarWhite.getColor() ? 'hover-black' : 'hover-white'
                    $(e.target).parent().addClass(classToAdd)
                },
                e => {
                    $(e.target).parent().removeClass('hover-black hover-white')
                })
            }
        }

        function initialize(){
            setObservers();
            setScreenBasedFeatures();
            setHoverEffects();
            removeHashes();
        }

        documentReady(initialize);
 
    </script>
@endsection

