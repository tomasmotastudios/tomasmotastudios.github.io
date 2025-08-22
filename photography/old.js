    AOS.init();

    function toggleMode() {
      document.body.classList.toggle("light");
    }

    function scrollLeft(btn) {
      const container = btn.nextElementSibling;
      container.scrollLeft -= 300;
    }

    function scrollRight(btn) {
      const container = btn.previousElementSibling;
      container.scrollLeft += 300;
    }
