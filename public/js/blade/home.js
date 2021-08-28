(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/blade/home"],{

/***/ "./resources/js/blade/home.js":
/*!************************************!*\
  !*** ./resources/js/blade/home.js ***!
  \************************************/
/***/ (() => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var IsNavBarWhite = /*#__PURE__*/function () {
  function IsNavBarWhite() {
    _classCallCheck(this, IsNavBarWhite);

    this.isWhite = true;
  }

  _createClass(IsNavBarWhite, [{
    key: "setIsWhite",
    value: function setIsWhite() {
      this.isWhite = true;
    }
  }, {
    key: "setIsBlack",
    value: function setIsBlack() {
      this.isWhite = false;
    }
  }, {
    key: "getColor",
    value: function getColor() {
      return this.isWhite;
    }
  }]);

  return IsNavBarWhite;
}();

var isNavBarWhite = new IsNavBarWhite();
var firstLoad = true;

function enterScreen(section) {
  var playground = true;
  var about = true;
  var contact = true;

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
  var options = {
    threshold: 0.25,
    rootMargin: "-100px"
  };
  var sections = $("section");
  var navItems = $(".nvbar, header");
  var ul = $(".same-page-nav");
  var children = ul.children();
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (_ref) {
      var target = _ref.target,
          isIntersecting = _ref.isIntersecting;

      if (isIntersecting) {
        var childIndex = 0;

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

        for (var x = 0; x < children.length; x++) {
          if (x === childIndex) {
            if (children[x].children[0].children[1].classList.contains("activate")) {
              children[x].children[0].children[1].classList.remove("activate");
            } else {
              children[x].children[0].children[1].classList.add("activate");
            }
          } else {
            children[x].children[0].children[1].classList.remove("activate");
          }
        }
      }

      if (isIntersecting) {
        enterScreen(target.id);

        if (target.id === "playground" || target.id === "contact") {
          isNavBarWhite.setIsBlack();
          if (!navItems.hasClass("inverse")) navItems.addClass("inverse");
        } else {
          isNavBarWhite.setIsWhite();
          if (navItems.hasClass("inverse")) navItems.removeClass("inverse");
        }
      }
    });
  }, options);
  sections.map(function (index, section) {
    observer.observe(section);
  });
}

var hideDrawerOnAction = function hideDrawerOnAction(_ref2) {
  var matches = _ref2.matches;
  var scrollDebounce = true;
  var checkbox = $("#nav-toggle")[0];
  var switcher = $("#customSwitch1")[0];

  if (!matches) {
    checkbox.checked = true;
    return;
  }

  $(".home-container").on("scroll", function () {
    if (scrollDebounce) {
      scrollDebounce = false;
      if (switcher.checked) checkbox.checked = false;
      setTimeout(function () {
        scrollDebounce = true;
      }, 500);
    }
  });

  function hideDrawer() {
    if (switcher.checked) checkbox.checked = false;
  }

  $("a, section").on("click", function () {
    hideDrawer();
  });
};

function documentReady(fn) {
  if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

function removeHashes() {
  var anchors = $(".same-page-nav a");

  for (var x = 0; x < anchors.length; x++) {
    $(anchors[x]).on("click", function (e) {
      setTimeout(function () {
        history.replaceState("", document.title, window.location.origin + window.location.search);
      });
    });
  }
}

function setScreenBasedFeatures() {
  var media = window.matchMedia("(max-width: 759px)");
  if (media.matches) hideDrawerOnAction(media);
  media.addEventListener("change", function () {
    return hideDrawerOnAction;
  });
}

function setHoverEffects() {
  var links = $(".ul-containers a");

  for (var x = 0; x < links.length; x++) {
    var link = $(links[x]);
    link.on("mouseenter", function (e) {
      var classToAdd = isNavBarWhite.getColor() ? "hover-black" : "hover-white";
      $(e.target).parent().addClass(classToAdd);
    }).on("mouseleave", function (e) {
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
    width: $(window).width()
  };
}

function showToast(message) {
  var toast = $.toast({
    text: message,
    icon: "info",
    loader: false,
    position: "bottom-center"
  });
  setTimeout(function () {
    toast.reset("all");
  }, 3000);
}

function setClipboardButtons() {
  $(".contact-email").on("click", function (e) {
    navigator.clipboard.writeText("sefmangampo@gmail.com");
    showToast("email copied to clipboard");
  });
  $(".contact-number").on("click", function (e) {
    navigator.clipboard.writeText("+639760076786");
    showToast("number copied to clipboard");
  });
  $(".contact-location").on("click", function (e) {
    window.location.href = "https://goo.gl/maps/DQPJE6F3Xyydq2q99";
  });
}

function setDateAvailable() {
  var date = new Date().toLocaleDateString();
  $(".date-available").text(date);
}

function setWorkAvailability() {
  var text = "I am not available for work";
  $(".is-available").text(text);
}

function initialize() {
  setObservers();
  setScreenBasedFeatures();
  setHoverEffects();
  removeHashes();
  setClipboardButtons();
  setDateAvailable();
  setWorkAvailability();
}

documentReady(initialize);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./resources/js/blade/home.js"));
/******/ }
]);