class IsNavBarWhite {
    constructor() {
        this.isWhite = true;
    }

    setIsWhite() {
        this.isWhite = true;
    }

    setIsBlack() {
        this.isWhite = false;
    }

    getColor() {
        return this.isWhite;
    }
}

const isNavBarWhite = new IsNavBarWhite();

let firstLoad = true;

function enterScreen(section) {
    let playground = true;
    let about = true;
    let contact = true;

    if (section === "playground" && playground) {
        playground = !playground;
    }

    if (section === "about" && about) {
        $(".skills-container, .exp-container").addClass("enterScreen");
        about = !about;
    }

    if (section === "contact" && contact) {
        $(".contact-title, .contact-contents").addClass("enterScreen");
        contact = !contact;
    }
}

function setObservers() {
    const options = {
        threshold: 0.25,
        rootMargin: "-100px",
    };

    const sections = $("section");
    const navItems = $(".nvbar, header");
    const ul = $(".same-page-nav");
    const children = ul.children();

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(({ target, isIntersecting }) => {
            if (isIntersecting) {
                let childIndex = 0;

                switch (target.id) {
                    case "home":
                        childIndex = 0;
                        break;
                    case "playground":
                        childIndex = 1;
                        break;
                    case "about":
                        childIndex = 2;
                        break;
                    case "contact":
                        childIndex = 3;
                        break;
                }

                for (let x = 0; x < children.length; x++) {
                    if (x === childIndex) {
                        if (
                            children[
                                x
                            ].children[0].children[1].classList.contains(
                                "activate"
                            )
                        ) {
                            children[
                                x
                            ].children[0].children[1].classList.remove(
                                "activate"
                            );
                        } else {
                            children[x].children[0].children[1].classList.add(
                                "activate"
                            );
                        }
                    } else {
                        children[x].children[0].children[1].classList.remove(
                            "activate"
                        );
                    }
                }
            }

            if (isIntersecting) {
                enterScreen(target.id);

                if (target.id === "playground" || target.id === "contact") {
                    isNavBarWhite.setIsBlack();
                    if (!navItems.hasClass("inverse"))
                        navItems.addClass("inverse");
                } else {
                    isNavBarWhite.setIsWhite();
                    if (navItems.hasClass("inverse"))
                        navItems.removeClass("inverse");
                }
            }
        });
    }, options);

    sections.map((index, section) => {
        observer.observe(section);
    });
}

const hideDrawerOnAction = ({ matches }) => {
    let scrollDebounce = true;

    const checkbox = $("#nav-toggle")[0];
    const switcher = $("#customSwitch1")[0];

    if (!matches) {
        checkbox.checked = true;
        return;
    }

    $(".home-container").on("scroll", () => {
        if (scrollDebounce) {
            scrollDebounce = false;
            if (switcher.checked) checkbox.checked = false;

            setTimeout(() => {
                scrollDebounce = true;
            }, 500);
        }
    });

    function hideDrawer() {
        if (switcher.checked) checkbox.checked = false;
    }

    $("a, section").on("click", () => {
        hideDrawer();
    });
};

function documentReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

function removeHashes() {
    const anchors = $(".same-page-nav a");

    for (let x = 0; x < anchors.length; x++) {
        $(anchors[x]).on("click", (e) => {
            setTimeout(() => {
                history.replaceState(
                    "",
                    document.title,
                    window.location.origin + window.location.search
                );
            });
        });
    }
}

function setScreenBasedFeatures() {
    const media = window.matchMedia("(max-width: 759px)");

    if (media.matches) hideDrawerOnAction(media);

    media.addEventListener("change", () => hideDrawerOnAction);
}

function setHoverEffects() {
    const links = $(".ul-containers a");

    for (let x = 0; x < links.length; x++) {
        const link = $(links[x]);

        link.on("mouseenter", (e) => {
            const classToAdd = isNavBarWhite.getColor()
                ? "hover-black"
                : "hover-white";
            $(e.target).parent().addClass(classToAdd);
        }).on("mouseleave", (e) => {
            $(e.target).parent().removeClass("hover-black hover-white");
        });
    }
}

function randomRange(num) {
    return Math.floor(Math.random() * num);
}

function getViewPortDimension() {
    return {
        height: $(window).height(),
        width: $(window).width(),
    };
}

function showToast(message) {
    const toast = $.toast({
        text: message,
        icon: "info",
        loader: false,
        position: "bottom-center",
    });

    setTimeout(() => {
        toast.reset("all");
    }, 3000);
}

function setClipboardButtons() {
    $(".contact-email").on("click", (e) => {
        navigator.clipboard.writeText(email);
        showToast("email copied to clipboard");
    });
    $(".contact-number").on("click", (e) => {
        navigator.clipboard.writeText(number);
        showToast("number copied to clipboard");
    });

    $(".contact-location").on("click", (e) => {
        window.location.href = coordinates;
    });
}

let email = "";
let number = "";
let coordinates = "";

function setDateAvailable() {
    const date = new Date().toLocaleDateString();
    $(".date-available").text(date);
}

function getContactDetails() {
    const contents = $(".contact-contents")[0];
    const emailHead = contents.dataset.emailHead;
    const emailDomain = contents.dataset.emailDomain;
    const geolocation = contents.dataset.geolocation;
    const phoneNumber = contents.dataset.phoneNumber;

    email = `${emailHead}@${emailDomain}.com`;
    coordinates = geolocation;
    number = phoneNumber;
}

function setPlayGroundLinks() {
    const buttons = $(".playground-link");

    for (let x = 0; x < buttons.length; x++) {
        $(buttons[x]).on("click", () => {
            window.location.replace(buttons[x].dataset.link);
        });
    }
}

function initialize() {
    setObservers();
    setScreenBasedFeatures();
    setHoverEffects();
    removeHashes();
    setClipboardButtons();
    setDateAvailable();
    getContactDetails();
    setPlayGroundLinks();
}

documentReady(initialize);
