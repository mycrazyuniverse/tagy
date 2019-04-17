document.addEventListener("DOMContentLoaded", function () {

  thefinalcountdown();

  var popup_id = getUrlParameter('popup');

  if (popup_id) {

    var popup = document.querySelectorAll(".popup")[0];
    removeClass(popup, 'hide')
    removeClass(popup, 'popup-hidden')

    var tag = document.querySelectorAll('#tag' + popup_id)[0];
    var title = tag.querySelector('.tag-title').textContent;
    var logo = tag.dataset.logo;
    var code = tag.dataset.code;

    popup.querySelector('.pop-code').addEventListener('click', (ev) => {
      const elm = ev.target.select();

    }, false);

    popup.querySelector('.pop-logo').setAttribute('src', logo);
    popup.querySelector('.pop-title').textContent = title;
    popup.querySelector('.pop-code').value = code;

  }

  var closebtns = Array.from(document.querySelectorAll(".pop-close"));

  closebtns.forEach(target => {

    target.addEventListener('click', (ev) => {
      addClass(popup, 'hide');
      addClass(popup, 'popup-hidden');


    }, false);


  });

  document.querySelectorAll('#navigation .close')[0].addEventListener('click', (ev) => {
    closeMenu();
  }, false);

  document.querySelectorAll('#openmenu')[0].addEventListener('click', (ev) => {

    var app = document.querySelector('.app');
    var navcontainer = document.querySelector('.nav-container');
    var mobilemenuoverlay = document.querySelector('.mobile-menu-overlay');
    console.log(mobilemenuoverlay);

    var app_opened = hasClass(app, 'menuopen');
    var menu_opened = hasClass(navcontainer, 'menu_opened');

    if (app_opened == true) {
      removeClass(app, 'menuopen');
    } else {
      addClass(app, 'menuopen');
    }

    if (menu_opened == true) {
      removeClass(navcontainer, 'menu_opened');
      addClass(mobilemenuoverlay, 'hide')

    } else {
      addClass(navcontainer, 'menu_opened');
      removeClass(mobilemenuoverlay, 'hide')

    }

  }, false);


  document.querySelectorAll('.mobile-menu-overlay')[0].addEventListener('click', (ev) => {

    closeMenu();

  }, false);

  function closeMenu() {
    var navcontainer = document.querySelector('.nav-container');
    var app = document.querySelector('.app');
    var mobilemenuoverlay = document.querySelector('.mobile-menu-overlay');

    addClass(mobilemenuoverlay, 'hide')
    removeClass(navcontainer, 'menu_opened');
    removeClass(app, 'menuopen');
  }



  const triggers = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));

  window.addEventListener('click', (ev) => {
    const elm = ev.target;

    if (!hasClass(elm, 'open_collapse')) {
      addClass(elm, 'open_collapse');
    } else {
      removeClass(elm, 'open_collapse');
    }

    if (triggers.includes(elm)) {
      const selector = elm.getAttribute('data-target');
      collapse(selector, 'toggle');

    }
  }, false);


  var fnmap = {
    'toggle': 'toggle',
    'show': 'add',
    'hide': 'remove'
  };

  function collapse(selector, cmd) {

    var targets = Array.from(document.querySelectorAll(selector));

    targets.forEach(target => {
      target.classList[fnmap[cmd]]('show');
    });
  }
});

function parse_query_string(query) {
  var vars = query.split("&");
  var query_string = {};
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    var key = decodeURIComponent(pair[0]);
    var value = decodeURIComponent(pair[1]);
    // If first entry with this name
    if (typeof query_string[key] === "undefined") {
      query_string[key] = decodeURIComponent(value);
      // If second entry with this name
    } else if (typeof query_string[key] === "string") {
      var arr = [query_string[key], decodeURIComponent(value)];
      query_string[key] = arr;
      // If third or later entry with this name
    } else {
      query_string[key].push(decodeURIComponent(value));
    }
  }
  return query_string;
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className);
  else
    el.className += ' ' + className;
}

function hasClass(el, className) {
  if (el.classList) {
    return el.classList.contains(className);
  } else {
    return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
  }
}

function removeClass(el, className) {

  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }

}

function toggleClass(el, className) {
  console.log(el.classList);
}

var urlParams = new URLSearchParams(window.location.search);


function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
