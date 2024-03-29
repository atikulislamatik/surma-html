!(function (t) {
  "use strict";
  jQuery(document).on("ready", function () {
    t(window).on("scroll", function () {
      t(this).scrollTop() > 100
        ? t(".navbar-light").addClass("menu-shrink")
        : t(".navbar-light").removeClass("menu-shrink");
    }),
      t(".navbar-nav li a, .navbar-brand a").on("click", function (e) {
        var i = t(this);
        t("html, body")
          .stop()
          .animate({ scrollTop: t(i.attr("href")).offset().top - 60 }, 900),
          e.preventDefault();
      }),
      t(".smartify").smartify(),
      document.getElementById("particles-js") &&
        particlesJS("particles-js", {
          particles: {
            number: { value: 5, density: { enable: !0, value_area: 600 } },
            color: { value: ["#fbe5e5", "#e9fbf7", "#dbf9f2"] },
            shape: {
              type: "circle",
              stroke: { width: 0, color: "#fff" },
              polygon: { nb_sides: 5 },
              image: { src: "img/github.svg", width: 50, height: 50 },
            },
            opacity: {
              value: 1,
              random: !0,
              anim: { enable: !0, speed: 0.2, opacity_min: 0, sync: !1 },
            },
            size: {
              value: 50,
              random: !0,
              anim: { enable: !0, speed: 2, size_min: 5, sync: !1 },
            },
            line_linked: {
              enable: !1,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: !0,
              speed: 1,
              direction: "top",
              random: !0,
              straight: !1,
              out_mode: "out",
              bounce: !1,
              attract: { enable: !1, rotateX: 600, rotateY: 600 },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: !1, mode: "bubble" },
              onclick: { enable: !1, mode: "repulse" },
              resize: !0,
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3,
              },
              repulse: { distance: 400, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          retina_detect: !0,
        });
    var e = function (t, e, i) {
      (this.toRotate = e),
        (this.el = t),
        (this.loopNum = 0),
        (this.period = parseInt(i, 10) || 2e3),
        (this.txt = ""),
        this.tick(),
        (this.isDeleting = !1);
    };
    (e.prototype.tick = function () {
      var t = this.loopNum % this.toRotate.length,
        e = this.toRotate[t];
      this.isDeleting
        ? (this.txt = e.substring(0, this.txt.length - 1))
        : (this.txt = e.substring(0, this.txt.length + 1)),
        (this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>");
      var i = this,
        n = 200 - 100 * Math.random();
      this.isDeleting && (n /= 2),
        this.isDeleting || this.txt !== e
          ? this.isDeleting &&
            "" === this.txt &&
            ((this.isDeleting = !1), this.loopNum++, (n = 500))
          : ((n = this.period), (this.isDeleting = !0)),
        setTimeout(function () {
          i.tick();
        }, n);
    }),
      (window.onload = function () {
        for (
          var t = document.getElementsByClassName("typewrite"), i = 0;
          i < t.length;
          i++
        ) {
          var n = t[i].getAttribute("data-type"),
            a = t[i].getAttribute("data-period");
          n && new e(t[i], JSON.parse(n), a);
        }
        var s = document.createElement("style");
        (s.type = "text/css"),
          (s.innerHTML =
            ".typewrite > .wrap { border-right: 0.08em solid #fff}"),
          document.body.appendChild(s);
      }),
      t(function () {
        t('[data-tooltip="tooltip"]').tooltip();
      });
  }),
    t(window).on("load", function () {
      t(".preloader-area").fadeOut();
    });
})(jQuery);
