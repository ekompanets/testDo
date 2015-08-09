(function(){
  //   меню

  var menuElements=document.querySelectorAll(".main-nav__item");
  for (var i=0; i<menuElements.length; i++) {
    OpenSubMenu(menuElements[i])
  }

  function OpenSubMenu(iMenu) {
    iMenu.addEventListener("mouseover", function(event) {
        console.log('click'+iMenu);
        event.preventDefault();
        iMenu.classList.add("show");
    })

    iMenu.addEventListener("mouseout", function(event) {
      console.log('click'+iMenu);
      event.preventDefault();
      if (iMenu.classList.contains("show")) {
        iMenu.classList.remove("show");
      };
  })
  }


  //  --  меню

  //  мобильное меню

  var toggle=document.querySelector(".toggle");
  var navClose=document.querySelector(".toggle-close");
  var mainNav=document.querySelector(".main-nav");

  toggle.addEventListener("click", function(event) {
      event.preventDefault();
      mainNav.classList.add("main-nav__show");
      toggle.classList.add("hidden");
  })

  navClose.addEventListener("click", function(event) {
    event.preventDefault();
     if (mainNav.classList.contains("main-nav__show")) {
      mainNav.classList.remove("main-nav__show");
     }
     if (toggle.classList.contains("hidden")) {
      toggle.classList.remove("hidden");
     }
  })

  //  -- мобильное меню
})();