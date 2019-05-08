var date = new Date();
var timestamp = Math.floor(Date.now() / 1000);
var dialog_id = getUrlParameter("open");
var mobilemenuoverlay = document.querySelector(".mobile-menu-overlay");
var dialog = document.querySelectorAll(".dialog")[0];
var langcode = document.documentElement.lang;
var lang = langcode.replace("-BE", "");
var apiUrl = "https://dev-tagcity.pantheonsite.io";
var urlParams = new URLSearchParams(window.location.search);

if (lang != "nl") {
  apiUrl = "https://dev-tagcity.pantheonsite.io/" + lang;
}

document.addEventListener("DOMContentLoaded", function () {

  document.onreadystatechange = function () {
    if (document.readyState === 'complete') {


      date = new Date();
      timestamp = Math.floor(Date.now() / 1000);
      mobilemenuoverlay = document.querySelector(".mobile-menu-overlay");
      dialog = document.querySelectorAll(".dialog")[0];
      langcode = document.documentElement.lang;
      lang = langcode.replace("-BE", "");
      apiUrl = "https://dev-tagcity.pantheonsite.io";

      if (lang != "nl") {
        apiUrl = "https://dev-tagcity.pantheonsite.io/" + lang;
      }


      dialog = document.querySelectorAll(".dialog")[0];
      dialog_id = getUrlParameter("open");

      const tagwpop = Array.from(document.querySelectorAll(".tag-dialog"));

      tagwpop.forEach(function (target) {
        target.addEventListener("click", function (ev) {

          if (!hasClass(ev.target, "prevent")) {
            window.open("?open=" + ev.currentTarget.dataset.tagno);
            window.open(apiUrl + ev.currentTarget.dataset.href, "_self");
          }

        });
      });


      const triggers = Array.from(
        document.querySelectorAll('[data-toggle="collapse"]')
      );

      window.addEventListener(
        "click",
        function (ev) {
          const elm = ev.target;

          if (triggers.includes(elm)) {
            const selector = elm.getAttribute("data-target");

            collapse(selector, "toggle");

            if (!hasClass(elm, "open_collapse")) {
              addClass(elm, "open_collapse");
            } else {
              removeClass(elm, "open_collapse");
            }
          }
        },
        false
      );

      var tags = Array.from(document.querySelectorAll(".tag"));

      if (tags) {

        var needupdate = false;

        tags.forEach(function (target) {
          var ends = target.getAttribute("data-ends-at");
          var timedifference = ends - timestamp;

          if (ends) {
            if (timedifference < 0) {
              addClass(target, "expired");
            }
          }
        });
      }


      setupDialog();

      thefinalcountdown();

      closebtn();

      menuitems();

      searchfield();

      optin();

    }
  }

});

function optin() {

  const optin = Array.from(document.querySelectorAll(".optin"));

  optin.forEach(function (target) {
    target.querySelector('.btn').addEventListener("click", function (ev) {

      var email = target.querySelector('.email-input').value;

      var data = JSON.stringify({
        email: email
      });

      subscribe_to_newsletter(data);

      ev.preventDefault();

    });
  });

}

function subscribe_to_newsletter(data) {
  var request = new XMLHttpRequest();
  request.open('POST', apiUrl + '/api/tagcity/v3/optin', true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(data);
}

function left() {
  if (offset !== 0) {
    offset += carouselWidth + cardMarginRight;
    carousel.style.transform = 'translateX(${offset}px)';
  }
}

function right() {
  if (offset !== maxX) {
    offset -= carouselWidth + cardMarginRight;
    carousel.style.transform = 'translateX(${offset}px)';
  }
}

function closeMenu() {
  var navcontainer = document.querySelector(".nav-container");
  var app = document.querySelector(".app");
  var mobilemenuoverlay = document.querySelector(".mobile-menu-overlay");

  addClass(mobilemenuoverlay, "hide");
  removeClass(navcontainer, "menu_opened");
  removeClass(app, "menuopen");
}

var fnmap = {
  toggle: "toggle",
  show: "add",
  hide: "remove"
};

function collapse(selector, cmd) {
  var targets = Array.from(document.querySelectorAll(selector));

  targets.forEach(function (target) {
    target.classList[fnmap[cmd]]("show");
  });
}

function parse_query_string(query) {
  var vars = query.split("&");
  var query_string = {};
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    var key = decodeURIComponent(pair[0]);
    var value = decodeURIComponent(pair[1]);
    if (typeof query_string[key] === "undefined") {
      query_string[key] = decodeURIComponent(value);
    } else if (typeof query_string[key] === "string") {
      var arr = [query_string[key], decodeURIComponent(value)];
      query_string[key] = arr;
    } else {
      query_string[key].push(decodeURIComponent(value));
    }
  }
  return query_string;
}

function addClass(el, className) {
  if (el.classList) el.classList.add(className);
  else el.className += " " + className;
}

function hasClass(el, className) {
  if (el.classList) {
    return el.classList.contains(className);
  } else {
    return new RegExp("(^| )" + className + "( |$)", "gi").test(el.className);
  }
}

function removeClass(el, className) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(
      new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"),
      " "
    );
  }
}

function toggleClass(el, className) {
  console.log(el.classList);
}

function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null ?
    "" :
    decodeURIComponent(results[1].replace(/\+/g, " "));
}

function thefinalcountdown() {
  var timers = document.querySelectorAll(".timer");
  var inow = new Date().getTime();

  if (timers.length) {
    timers.forEach(function (timer) {
      var endDate = timer.dataset.ends * 1000;
      var it = endDate - inow;

      if (it >= 0) {
        setInterval(function () {
          var now = new Date().getTime();
          var t = endDate - now;

          if (t >= 0) {
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            var hours =
              Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) +
              days * 24;
            var mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            var secs = Math.floor((t % (1000 * 60)) / 1000);

            timer.querySelector(".timer-hours").innerHTML = hours + " :";

            timer.querySelector(".timer-mins").innerHTML =
              ("0" + mins).slice(-2) + " :";

            timer.querySelector(".timer-secs").innerHTML = ("0" + secs).slice(
              -2
            );
          } else {
            timer.innerHTML = "The countdown is over!";
          }
        }, 1000);
      } else {
        timer.innerHTML = "The countdown is over!";
      }
    });
  }
}

function closebtn() {
  var closebtns = Array.from(document.querySelectorAll(".dia-close"));

  closebtns.forEach(function (target) {
    target.addEventListener(
      "click",
      function (ev) {
        addClass(dialog, "hide");
        addClass(dialog, "dialog-hidden");
        var alteredURL = removeParam("open", window.location.href);
        finishedalteredURL = removeParam("open", alteredURL);
        window.history.pushState('', document.title, finishedalteredURL);
      },
      false
    );
  });
}

function removeParam(key, sourceURL) {
  var rtn = sourceURL.split("?")[0],
    param,
    params_arr = [],
    queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
  if (queryString !== "") {
    params_arr = queryString.split("&");
    for (var i = params_arr.length - 1; i >= 0; i -= 1) {
      param = params_arr[i].split("=")[0];
      if (param === key) {
        params_arr.splice(i, 1);
      }
    }
    rtn = rtn + "?" + params_arr.join("&");
  }
  return rtn;
}

function menuitems() {
  var menuitems = Array.from(document.querySelectorAll(".menu-items"));

  menuitems.forEach(function (target) {
    target.addEventListener(
      "click",
      function (ev) {
        var dropdown_menu = Array.from(
          document.querySelectorAll(".dropdown_menu")
        );

        dropdown_menu.forEach(function (items) {
          /*removeClass(items, 'show');

            if(hasClass(items, 'show')){
              addClass(items, 'show');
            }else{
              removeClass(items, 'show');
            }*/
        });
      },
      false
    );
  });

  var toggleswitches = document.querySelectorAll(".m-toggle-switch");

  Array.prototype.forEach.call(toggleswitches, function (el, i) {
    el.addEventListener(
      "click",
      function (ev) {
        var toggleNode = ev.target.parentNode;

        addClass(toggleNode, "m-toggle-on");
      },
      false
    );
  });

  document.querySelectorAll("#openmenu")[0].addEventListener(
    "click",
    function (ev) {
      var app = document.querySelector(".app");
      var navcontainer = document.querySelector(".nav-container");

      var app_opened = hasClass(app, "menuopen");
      var menu_opened = hasClass(navcontainer, "menu_opened");

      if (app_opened == true) {
        removeClass(app, "menuopen");
      } else {
        addClass(app, "menuopen");
      }

      if (menu_opened == true) {
        removeClass(navcontainer, "menu_opened");
        addClass(mobilemenuoverlay, "hide");
      } else {
        addClass(navcontainer, "menu_opened");
        removeClass(mobilemenuoverlay, "hide");
      }
    },
    false
  );

  document.querySelectorAll(".mobile-menu-overlay")[0].addEventListener(
    "click",
    function (ev) {
      closeMenu();
    },
    false
  );
}

function searchfield() {
  var searchresults = document.querySelectorAll(".searchresults")[0];

  document.querySelectorAll("#navigation .close")[0].addEventListener(
    "click",
    function (ev) {
      closeMenu();
    },
    false
  );

  document.querySelectorAll(".searchfield")[0].addEventListener(
    "input",
    function (ev) {
      document.querySelectorAll(".tagcitylogo")[0].src =
        "https://media.tagcity.be/2019/03/search.svg?auto=compress%2Cformat&ixlib=php-1.2.1";

      var request = new XMLHttpRequest();

      var requestUrl =
        apiUrl + "/api/tagcity/v3/search/" + ev.currentTarget.value;

      request.open("GET", requestUrl, true);

      request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
          // Success!
          var data = JSON.parse(request.responseText);
          var results = "";

          if (data.search.webshops.title) {
            results +=
              '<div class="searchresults-title">' +
              data.search.webshops.title +
              "</div>";
          }

          results += "<ul>";
          data.search.webshops.results.forEach(function (target) {
            results += '<li class="searchresult">';
            results += '<a href="';
            results += target.link;
            results += '" class="searchresult_link">';
            results += '<span class="logo">';
            results += '<img src="';
            results += target.logo;
            results += '" height="40" class="float-left searchresult_thumb" />';
            results += "<span>";
            results += '<span class="searchresult_text"><strong>';
            results += target.name;
            results += "</strong><br />";
            results += target.count;
            results += " acties";
            results += "</span>";
            results += "</a>";

            if (data.search.webshops.tags) {
              data.search.webshops.tags.forEach(function (tags) {
                results += '<ul class="tag-results">';
                results += '<li class="search-tag">';
                results +=
                  '<article data-logo="http://dev-tagcity.pantheonsite.io/wp-content/uploads/2019/02/webshop_logo.png" data-code="" id="tag110" class="tag tag-search tag-link tag-"><div class="tag-item"><div class="float-left"><div class="discount-box text-center"><span class="discount text-lg">-20%</span> <span class=" label uppercase">Korting</span></div></div> <div class="tag-info float-right"><div class="tag-content"><h3 class="tag-title"><a href="?open=110">Exclusief: 10% korting op de volledige website</a></h3><div id="details110" class="tag-desc">Toegevoegd 1 maart 2019<div></div></div></div></div></div></article>';
                results += "</li>";
                results += "</ul>";
              });
            }

            results += "</li>";
          });

          if (data.search.categories.title) {
            results +=
              '<div class="searchresults-title">' +
              data.search.categories.title +
              "</div>";
          }

          results += "<ul>";

          data.search.categories.results.forEach(function (target) {
            results += '<li class="searchresult">';
            results += '<a href="';
            results += target.link;
            results += '" class="searchresult_link">';
            results += '<img src="';
            results += target.logo;
            results += '" height="40" class="float-left searchresult_thumb" />';
            results += '<span class="searchresult_text"><strong>';
            results += target.name;
            results += "</strong><br />";
            results += target.count;
            results += " acties";
            results += "</span>";
            results += "</a>";

            if (target.tags) {
              data.search.categories.tags.forEach(function (tags) {
                results += '<ul class="tag-results">';
                results += '<li class="search-tag">';
                results +=
                  '<article data-logo="http://dev-tagcity.pantheonsite.io/wp-content/uploads/2019/02/webshop_logo.png" data-code="" id="tag110" class="tag tag-search tag-link tag-"><div class="tag-item"><div class="float-left"><div class="discount-box text-center"><span class="discount text-lg">-20%</span> <span class=" label uppercase">Korting</span></div></div> <div class="tag-info float-right"><div class="tag-content"><h3 class="tag-title"><a href="?open=110">Exclusief: 10% korting op de volledige website</a></h3><div id="details110" class="tag-desc">Toegevoegd 1 maart 2019<div></div></div></div></div></div></article>';
                results += "</li>";
                results += "</ul>";
              });
            }

            results += "</li>";
          });

          results += "</ul>";

          searchresults.innerHTML = results;
        } else {
          // We reached our target server, but it returned an error
        }
      };

      request.onerror = function () {
        // There was a connection error of some sort
      };

      request.send();
    },
    false
  );

  document.querySelectorAll(".searchfield")[0].addEventListener(
    "focus",
    function (ev) {
      document.querySelectorAll(".tagcitylogo")[0].src =
        "https://media.tagcity.be/2019/03/search.svg?auto=compress%2Cformat&ixlib=php-1.2.1";

      removeClass(searchresults, "hide");
      removeClass(mobilemenuoverlay, "hide");
    },
    false
  );

  document.querySelectorAll(".searchfield")[0].addEventListener(
    "blur",
    function (ev) {
      document.querySelectorAll(".tagcitylogo")[0].src =
        "https://media.tagcity.be/2019/03/tagcity.svg?auto=compress%2Cformat&ixlib=php-1.2.1";

      myVar = setTimeout(function () {
        addClass(searchresults, "hide");
        addClass(mobilemenuoverlay, "hide");
      }, 300);
    },
    false
  );
}

function setupDialog() {

  if (dialog_id) {
    var tag = document.querySelectorAll("#tag" + dialog_id)[0];

    if (tag) {
      var dialog_data = JSON.parse(tag.dataset.dialog);
    }

    if (dialog_data.type == 'custom') {
      dialog.querySelector(".dialog-slot").innerHTML = parse(dialog_data.content);
    } else {

      dialog.querySelector(".codal-code").addEventListener(
        "click",
        function (ev) {
          const elm = ev.target.select();
        },
        false
      );

      if (dialog_data.optin == false) {
        addClass(dialog.querySelector(".optin"), "hide");
      }

      var logo = dialog_data.logo;
      var logos = dialog.querySelectorAll(".logo-img");

      logos.forEach(function (target) {
        target.setAttribute("src", logo);
      });

      dialog.querySelector(".codal-btn").setAttribute("href", apiUrl + dialog_data.url);
      dialog.querySelector(".codal-title").textContent = dialog_data.title;
      dialog.querySelector(".codal-code").value = dialog_data.code;
      dialog.querySelector(".codal-btn").textContent = dialog_data.btn.content;

    }

    removeClass(dialog, "hide");
    removeClass(dialog, "dialog-hidden");
  }
}
