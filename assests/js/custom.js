//************************Get Current Page Details for Navbar
$(function () {
  setNavigation();
});
function setNavigation() {
  var path = window.location.pathname;
  path = path.slice(1);
  //path = path.replace(/\/$/, '');
  //path = decodeURIComponent(path);
  //alert(path);
  $(".navbar a").each(function () {
      var href = $(this).attr('href');
      //alert(href);
      if (path.substring(0, href.length) === href) {
          $(this).addClass('nav-active');
          $(this).addClass('sub-active');
          
      }
      //For Solution
      if (path == 'solar-projects.html' || path == 'solar-roof.html' || path == 'concept-project.html'  || path == 'permit-approval.html' || path == 'consulting-design.html' || path =='operation-maintainance.html'){
        $('#solution-dropdown').show();  
        $('#solution').addClass('nav-active');
        
      }
      //For Product and Partners
      if (path == 'solar-module.html' || path == 'inverters.html' || path == 'mounting-system.html'  || path == 'rest-component.html'){
        $('#project-dropdown').show();  
        $('#product').addClass('nav-active');
      }
      //For Projects
      if (path == 'projects.html' || path == 'project-rooftop.html'|| path == 'project-roofrental.html'|| path == 'project-ground-m.html'|| path == 'project-design.html'){
        $('#projects-dropdown').show();
        $('#project').addClass('nav-active');
      }
      //For About
      if (path == 'about.html'){
        $('#project-dropdown').show();  
      }
      
  });
}

//************************loader
let spinnerWrapper = document.querySelector('.spinner-wrapper');
    
        window.addEventListener('load', function () {
            // spinnerWrapper.style.display = 'none';
            spinnerWrapper.parentElement.removeChild(spinnerWrapper);
        });
// Loader end
 /* *********************************** NAV BAR *********************************** */
//previous nav bar
/*
$(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
      $('.navbar').addClass('color-change');
      $('.nav-small').css({'display':'block','z-index': '2','left': '20px'})
    } else {
      $('.navbar').removeClass('color-change');
      $('.nav-small').css({'display':'none'})
    }
  });
*/

//New nav bar
//scrolling function
  $(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
      $('#navbar-d').addClass('color-change');
      //$('.nav-content-center').addClass('color-change');
      $('.nav-small').css({'display':'block','z-index': '2','left': '20px'})
    } else {
      $('#navbar-d').removeClass('color-change');
      //$('.nav-content-center').removeClass('color-change');
      $('.nav-small').css({'display':'none'})
    }
  });
//initial hidden
  $(window).ready(function() {
    if ($(document).ready()) {
      $('.nav-small').css({'display':'none'})
    }
  });

//small navbar button function
function clickfunction() {
    var checkBox = document.getElementById("menu-check");
    if (checkBox.click){
        console.log('checked');
        $('#navbar-d').removeClass('color-change');
        //$('.nav-content-center').removeClass('color-change');
        $('.nav-small').css({'display':'none'})
    }
  }
/*  Hero image hide try */
/*  
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $("#hero-section").css({
      transform: 'translate3d(0, +'+(scroll/100)+'%, 0) scale('+(100 - scroll/50)/100+')'
    });
  });
*/

/* *********************************** solution cards *********************************** */
  (function($) {
    $.fn.tilt = function() {
        var perspective = '300px',
            delta = 20,
            width = this.width(),
            height = this.height(),
            midWidth = width / 2,
            midHeight = height / 2;
        this.on({
            mousemove: function(e) {
                var pos = $(this).offset(),
                    cursPosX = e.pageX - pos.left,
                    cursPosY = e.pageY - pos.top,
                    cursCenterX = midWidth - cursPosX,
                    cursCenterY = midHeight - cursPosY;

                $(this).css('transform', 'perspective(' + perspective + ') rotateX(' + (cursCenterY / delta) + 'deg) rotateY(' + -(cursCenterX / delta) + 'deg)');
                $(this).removeClass('is-out');
            },
            mouseleave: function() {
                $(this).addClass('is-out');
            }
        });
        //Return
        return this;
    };
}(jQuery));

//Set plugin on cards
$('.rounded').tilt();
  

/* set to section-test scroll*/
$('.scroll-container').scroll(function() {
  if ($('.scroll-container').scrollTop() > 100) {
    $('.navbar').addClass('color-change');
    $('.nav-content-center').addClass('color-change');
    $('.nav-small').css({'display':'block','z-index': '2','left': '20px'})
  } else {
    $('.navbar').removeClass('color-change');
    $('.nav-content-center').removeClass('color-change');
    $('.nav-small').css({'display':'none'})
  }
});

// nav bar OLD

const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar ul");
const navbarLinks = document.querySelectorAll(".navbar a");

navbarToggler.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick() {
  navbarToggler.classList.toggle("open-navbar-toggler");
  navbarMenu.classList.toggle("open");
}

navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

function navbarLinkClick() {
  if(navbarMenu.classList.contains("open")) {
    navbarToggler.click();
  }
}

/*
// nav bar new 
function toggleDropdown (e) {
  const _d = $(e.target).closest('.dropdown'),
    _m = $('.dropdown-menu', _d);
  setTimeout(function(){
    const shouldOpen = e.type !== 'click' && _d.is(':hover');
    _m.toggleClass('show', shouldOpen);
    _d.toggleClass('show', shouldOpen);
    $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
  }, e.type === 'mouseleave' ? 300 : 0);
}

$('body')
  .on('mouseenter mouseleave','.dropdown',toggleDropdown)
  .on('click', '.dropdown-menu a', toggleDropdown);

*/


