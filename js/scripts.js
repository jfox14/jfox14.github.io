/*!
    * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    $.ajax({
      url: "https://www.googleapis.com/blogger/v3/blogs/2589956027087537220/posts?key=AIzaSyBsTuPBYxJU19Ur5423XRudeVJOr56A9Wo",
      context: document.body
    }).done(function(response) {
        let latestPosts = response.items.slice(0, 4);
        console.log(latestPosts)
        latestPosts.forEach(function(post, index) {
          console.log("post-"+index+"-title");
          document.getElementById("post-"+index+"-title").innerHTML = response.items[index].title
          document.getElementById("post-"+index+"-date").innerHTML = response.items[index].updated
          document.getElementById("post-"+index+"-preview").innerHTML = response.items[index].content
          document.getElementById("post-"+index+"-link").setAttribute("href", response.items[index].url)
        })
    });

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict
