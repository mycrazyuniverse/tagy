document
  .addEventListener("DOMContentLoaded", function () {

    var langcode = document.documentElement.lang;
    var lang = langcode.replace('-BE', '');
    var apiUrl = 'https://dev-tagcity.pantheonsite.io/';

    if (lang != 'nl') {
      apiUrl = 'https://dev-tagcity.pantheonsite.io/' + lang + '/';
    }

    var popup_id = getUrlParameter('popup');
    var mobilemenuoverlay = document.querySelector('.mobile-menu-overlay');
    var popup = document.querySelectorAll(".popup")[0];

    if (popup_id) {

      removeClass(popup, 'hide')
      removeClass(popup, 'popup-hidden')

      var tag = document.querySelectorAll('#tag' + popup_id)[0];

      if (tag) {
        var title = tag.querySelector('.tag-title').textContent;
        var logo = tag.dataset.logo;
        var code = tag.dataset.code;
      }


      popup
        .querySelector('.pop-code')
        .addEventListener('click', (ev) => {
          const elm = ev
            .target
            .select();

        }, false);

      popup
        .querySelector('.pop-logo')
        .setAttribute('src', logo);
      popup
        .querySelector('.pop-title')
        .textContent = title;
      popup
        .querySelector('.pop-code')
        .value = code;

    }



    var menuitems = Array.from(document.querySelectorAll(".menu-items"));

    menuitems.forEach(target => {

      target.addEventListener('click', (ev) => {

        var dropdown_menu = Array.from(document.querySelectorAll(".dropdown_menu"));

        dropdown_menu.forEach(items => {

          /*removeClass(items, 'show');

          if(hasClass(items, 'show')){
            addClass(items, 'show');
          }else{
            removeClass(items, 'show');
          }*/

        });

      }, false);

    });

    var closebtns = Array.from(document.querySelectorAll(".pop-close"));

    closebtns.forEach(target => {

      target.addEventListener('click', (ev) => {
        addClass(popup, 'hide');
        addClass(popup, 'popup-hidden');
      }, false);

    });

    var searchresults = document.querySelectorAll('.searchresults')[0];

    document
      .querySelectorAll('#navigation .close')[0]
      .addEventListener('click', (ev) => {
        closeMenu();
      }, false);

    document
      .querySelectorAll('.searchfield')[0]
      .addEventListener('input', (ev) => {

        document.querySelectorAll('.tagcitylogo')[0].src = "https://media.tagcity.be/2019/03/search.svg?auto=compress%2Cformat&ixlib=php-1.2.1";

        var request = new XMLHttpRequest();;

        var requestUrl = apiUrl + 'api/tagcity/v3/search/' + ev.currentTarget.value;

        request.open('GET', requestUrl, true);

        request.onload = function () {
          if (request.status >= 200 && request.status < 400) {
            // Success!
            var data = JSON.parse(request.responseText);
            var results = '';

            if (data.search.webshops.title) {
              results += '<div class="searchresults-title">' + data.search.webshops.title + '</div>';
            }

            results += '<ul>';
            data.search.webshops.results.forEach(target => {

              results += '<li class="searchresult">';
              results += '<a href="'
              results += target.link;
              results += '" class="searchresult_link">';
              results += '<span class="logo">';
              results += '<img src="';
              results += target.logo;
              results += '" height="40" class="float-left searchresult_thumb" />';
              results += '<span>';
              results += '<span class="searchresult_text"><strong>';
              results += target.name;
              results += '</strong><br />';
              results += target.count;
              results += ' acties'
              results += '</span>';
              results += '</a>';

              if (data.search.webshops.tags) {

                data.search.webshops.tags.forEach(tags => {

                  results += '<ul class="tag-results">';
                  results += '<li class="search-tag">';
                  results += '<article data-logo="http://dev-tagcity.pantheonsite.io/wp-content/uploads/2019/02/webshop_logo.png" data-code="" id="tag110" class="tag tag-search tag-link tag-"><div class="tag-item"><div class="float-left"><div class="discount-box text-center"><span class="discount text-lg">-20%</span> <span class=" label uppercase">Korting</span></div></div> <div class="tag-info float-right"><div class="tag-content"><h3 class="tag-title"><a href="?popup=110">Exclusief: 10% korting op de volledige website</a></h3><div id="details110" class="tag-desc">Toegevoegd 1 maart 2019<div></div></div></div></div></div></article>';
                  results += '</li>';
                  results += '</ul>';

                });

              }

              results += '</li>';

            });

            if (data.search.categories.title) {
              results += '<div class="searchresults-title">' + data.search.categories.title + '</div>';
            }

            results += '<ul>';

            data.search.categories.results.forEach(target => {

              results += '<li class="searchresult">';
              results += '<a href="'
              results += target.link;
              results += '" class="searchresult_link">';
              results += '<img src="';
              results += target.logo;
              results += '" height="40" class="float-left searchresult_thumb" />';
              results += '<span class="searchresult_text"><strong>';
              results += target.name;
              results += '</strong><br />';
              results += target.count;
              results += ' acties'
              results += '</span>';
              results += '</a>';

              if (target.tags) {

                data.search.categories.tags.forEach(tags => {

                  results += '<ul class="tag-results">';
                  results += '<li class="search-tag">';
                  results += '<article data-logo="http://dev-tagcity.pantheonsite.io/wp-content/uploads/2019/02/webshop_logo.png" data-code="" id="tag110" class="tag tag-search tag-link tag-"><div class="tag-item"><div class="float-left"><div class="discount-box text-center"><span class="discount text-lg">-20%</span> <span class=" label uppercase">Korting</span></div></div> <div class="tag-info float-right"><div class="tag-content"><h3 class="tag-title"><a href="?popup=110">Exclusief: 10% korting op de volledige website</a></h3><div id="details110" class="tag-desc">Toegevoegd 1 maart 2019<div></div></div></div></div></div></article>';
                  results += '</li>';
                  results += '</ul>';

                });

              }

              results += '</li>';

            });

            results += '</ul>';

            searchresults.innerHTML = results;

          } else {
            // We reached our target server, but it returned an error

          }
        };

        request.onerror = function () {
          // There was a connection error of some sort
        };

        request.send();

      }, false);

    document
      .querySelectorAll('.searchfield')[0]
      .addEventListener('focus', (ev) => {

        document.querySelectorAll('.tagcitylogo')[0].src = "https://media.tagcity.be/2019/03/search.svg?auto=compress%2Cformat&ixlib=php-1.2.1";

        removeClass(searchresults, 'hide');
        removeClass(mobilemenuoverlay, 'hide');

      }, false);

    document
      .querySelectorAll('.searchfield')[0]
      .addEventListener('blur', (ev) => {

        document.querySelectorAll('.tagcitylogo')[0].src = "https://media.tagcity.be/2019/03/tagcity.svg?auto=compress%2Cformat&ixlib=php-1.2.1";

        myVar = setTimeout(function () {
          addClass(searchresults, 'hide');
          addClass(mobilemenuoverlay, 'hide');
        }, 300);

      }, false);



    document
      .querySelectorAll('#openmenu')[0]
      .addEventListener('click', (ev) => {

        var app = document.querySelector('.app');
        var navcontainer = document.querySelector('.nav-container');

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

    document
      .querySelectorAll('.mobile-menu-overlay')[0]
      .addEventListener('click', (ev) => {

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

      if (triggers.includes(elm)) {
        const selector = elm.getAttribute('data-target');
        collapse(selector, 'toggle');


        if (!hasClass(elm, 'open_collapse')) {
          addClass(elm, 'open_collapse');
        } else {
          removeClass(elm, 'open_collapse');
        }

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
    return el
      .classList
      .contains(className);
  } else {
    return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
  }
}

function removeClass(el, className) {

  if (el.classList) {
    el
      .classList
      .remove(className);
  } else {
    el.className = el
      .className
      .replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }

}

function toggleClass(el, className) {
  console.log(el.classList);
}

var urlParams = new URLSearchParams(window.location.search);

function getUrlParameter(name) {
  name = name
    .replace(/[\[]/, '\\[')
    .replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ?
    '' :
    decodeURIComponent(results[1].replace(/\+/g, ' '));
};
