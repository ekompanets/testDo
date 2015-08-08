(function(){
  //  мобильное меню

  var iMenu=document.querySelector(".main-nav__item a");
  // var navClose=document.querySelector(".main-nav__item ");
  // var mainNav=document.querySelector(".main-nav");

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

  // navClose.addEventListener("click", function(event) {
  //   event.preventDefault();
  //    if (mainNav.classList.contains("main-nav__show")) {
  //     mainNav.classList.remove("main-nav__show");
  //    }
  // })

  //  -- мобильное меню
})();