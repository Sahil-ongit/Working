
// --- INDEX PAGE SCRIPT --- //

    window.addEventListener("load", function () {
      const loader = document.getElementById("loader");
      setTimeout(() => {
        loader.classList.add("hidden");
      }, 2000);
    });

    // Form Validation
    (function () {
      "use strict";
      var forms = document.querySelectorAll(".needs-validation");
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener("submit", function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        }, false);
      });
    })();

    // Password Toggle
    const togglePassword = document.querySelector("#togglePassword");
    const password = document.querySelector("#password");
    if (togglePassword) {
      togglePassword.addEventListener("click", function () {
        const type = password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);
        this.classList.toggle("fa-eye");
        this.classList.toggle("fa-eye-slash");
      });
    }


// --- LANDING PAGE SCRIPT --- //

 // Set CSS variable for each circle and update inner text.
    document.querySelectorAll('.progress-circle').forEach(function (circle) {
      var v = parseInt(circle.getAttribute('data-value'), 10);
      if (isNaN(v)) v = 0;
      v = Math.max(0, Math.min(100, v)); // clamp 0..100
      circle.style.setProperty('--value', v + '%');
      var span = circle.querySelector('span');
      if (span) span.textContent = v + '%';
    });



    document.addEventListener("DOMContentLoaded", function () {
      const circles = document.querySelectorAll('.progress-circle');

      function animateCircle(circle) {
        let targetValue = parseInt(circle.getAttribute('data-value'), 10);
        if (isNaN(targetValue)) targetValue = 0;
        let currentValue = 0;

        const step = () => {
          currentValue++;
          if (currentValue > targetValue) return;
          circle.style.setProperty('--value', currentValue + '%');
          circle.querySelector('span').textContent = currentValue + '%';
          requestAnimationFrame(step);
        };

        step();
      }

      // IntersectionObserver to trigger animation on scroll
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCircle(entry.target);
            obs.unobserve(entry.target); // run only once
          }
        });
      }, { threshold: 0.6 });

      circles.forEach(circle => {
        circle.style.setProperty('--value', '0%'); // start empty
        circle.querySelector('span').textContent = '0%';
        observer.observe(circle);
      });
    });


document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const anim = entry.target.dataset.anim || "animate-up";

      if (entry.isIntersecting) {
    entry.target.classList.add(anim);
}

    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});


// --- FACULTY DASHBOARD PAGE SCRIPT --- //


// --- FACULTY DASHBOARD SCROLL ANIMATION ---
document.addEventListener("DOMContentLoaded", function () {
  const fdElements = document.querySelectorAll(".faculty-animate");

  const fdObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("faculty-animate-active");
        fdObserver.unobserve(entry.target); // Animate only once
      }
    });
  }, { threshold: 0.2 });

  fdElements.forEach(el => {
    // Animate immediately if already in view
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      el.classList.add("faculty-animate-active");
    } else {
      fdObserver.observe(el);
    }
  });
});

    