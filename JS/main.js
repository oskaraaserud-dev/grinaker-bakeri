// Grinaker bakeri – scroll-animasjoner og interaktiv header

document.addEventListener('DOMContentLoaded', function () {
  // 1) Avslør elementer når de scrolles inn i visning
  var revealTargets = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealTargets.length) {
    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealTargets.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: vis alt hvis IntersectionObserver ikke støttes
    revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // 2) Gjør den gjennomsiktige hero-headeren solid når man scroller
  var header = document.querySelector('header.over-hero');
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 60) {
        header.classList.add('is-solid');
      } else {
        header.classList.remove('is-solid');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // 3) Myk scroll til toppen når man klikker logo/navn
  var brand = document.querySelector('a.brand');
  if (brand) {
    brand.addEventListener('click', function (e) {
      e.preventDefault();
      var reduser = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: reduser ? 'auto' : 'smooth' });
    });
  }
});
