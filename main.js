(function () {
  var menuToggle = document.getElementById('menu-toggle');
  var mobileNav = document.getElementById('mobile-nav');
  var mobileOverlay = document.getElementById('mobile-overlay');
  var menuIconOpen = document.getElementById('menu-icon-open');
  var menuIconClose = document.getElementById('menu-icon-close');
  var menuLabel = document.getElementById('menu-label');
  var desktopLinks = document.querySelectorAll('.desktop-nav-link');
  var mobileLinks = document.querySelectorAll('.mobile-nav-link');
  var pages = document.querySelectorAll('.page-section');

  var menuOpen = false;

  function toggleMenu(open) {
    menuOpen = typeof open === 'boolean' ? open : !menuOpen;
    if (menuOpen) {
      mobileNav.classList.remove('-translate-x-full');
      mobileNav.classList.add('translate-x-0');
      mobileOverlay.classList.remove('hidden');
      menuIconOpen.classList.add('hidden');
      menuIconClose.classList.remove('hidden');
      menuLabel.textContent = '[CLOSE]';
    } else {
      mobileNav.classList.add('-translate-x-full');
      mobileNav.classList.remove('translate-x-0');
      mobileOverlay.classList.add('hidden');
      menuIconClose.classList.add('hidden');
      menuIconOpen.classList.remove('hidden');
      menuLabel.textContent = '[MENU]';
    }
  }

  menuToggle.addEventListener('click', function () { toggleMenu(); });
  mobileOverlay.addEventListener('click', function () { toggleMenu(false); });

  var navColors = {
    home: { active: 'text-term-cyan', hover: 'hover:text-term-cyan', dot: 'text-term-cyan', mobileBorder: 'border-term-cyan', mobileBg: 'bg-term-cyan/10' },
    experience: { active: 'text-term-green', hover: 'hover:text-term-green', dot: 'text-term-green', mobileBorder: 'border-term-green', mobileBg: 'bg-term-green/10' },
    scriptures: { active: 'text-term-yellow', hover: 'hover:text-term-yellow', dot: 'text-term-yellow', mobileBorder: 'border-term-yellow', mobileBg: 'bg-term-yellow/10' },
    techstack: { active: 'text-term-purple', hover: 'hover:text-term-purple', dot: 'text-term-purple', mobileBorder: 'border-term-purple', mobileBg: 'bg-term-purple/10' }
  };

  function getPage() {
    var hash = window.location.hash || '#/';
    if (hash === '#/' || hash === '#' || hash === '') return 'home';
    var m = hash.match(/^#\/(\w+)/);
    return m ? m[1] : 'home';
  }

  function updateDesktopNav(current) {
    desktopLinks.forEach(function (link) {
      var page = link.getAttribute('data-page');
      var colors = navColors[page];
      var dot = link.querySelector('span');

      link.classList.remove('text-term-cyan', 'text-term-green', 'text-term-yellow', 'text-term-purple');

      if (page === current) {
        link.classList.add(colors.active);
        if (dot) { dot.classList.remove('opacity-50'); dot.classList.add('opacity-100'); }
      } else {
        if (dot) { dot.classList.add('opacity-50'); dot.classList.remove('opacity-100'); }
      }
    });
  }

  function updateMobileNav(current) {
    mobileLinks.forEach(function (link) {
      var page = link.getAttribute('data-page');
      var colors = navColors[page];

      link.classList.remove(
        'text-term-cyan', 'text-term-green', 'text-term-yellow', 'text-term-purple',
        'border-term-cyan', 'border-term-green', 'border-term-yellow', 'border-term-purple',
        'bg-term-cyan/10', 'bg-term-green/10', 'bg-term-yellow/10', 'bg-term-purple/10',
        'text-gray-300', 'border-white/10',
        'hover:text-term-cyan', 'hover:text-term-green', 'hover:text-term-yellow', 'hover:text-term-purple',
        'hover:border-term-cyan/50', 'hover:border-term-green/50', 'hover:border-term-yellow/50', 'hover:border-term-purple/50',
        'hover:bg-white/5'
      );

      var dot = link.querySelector('span');

      if (page === current) {
        link.classList.add(colors.active, colors.mobileBorder, colors.mobileBg);
        if (dot) { dot.classList.remove('opacity-50'); dot.classList.add('opacity-100'); }
      } else {
        link.classList.add('text-gray-300', 'border-white/10', 'hover:bg-white/5');
        link.classList.add('hover:' + colors.dot.replace('text-', 'text-'));
        link.classList.add('hover:' + colors.mobileBorder.replace('border-', 'border-') + '/50');
        if (dot) { dot.classList.add('opacity-50'); dot.classList.remove('opacity-100'); }
      }
    });
  }

  function navigate() {
    var current = getPage();

    pages.forEach(function (page) {
      var id = page.id.replace('page-', '');
      if (id === current) {
        page.classList.remove('hidden');
      } else {
        page.classList.add('hidden');
      }
    });

    updateDesktopNav(current);
    updateMobileNav(current);
    window.scrollTo(0, 0);
  }

  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      toggleMenu(false);
    });
  });

  window.addEventListener('hashchange', navigate);
  navigate();
})();
