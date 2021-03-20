

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
      $('.navbar-d').addClass('color-change');
      $('.nav-content-center').addClass('color-change');
      $('.nav-small').css({'display':'block','z-index': '2','left': '20px'})
    } else {
      $('.navbar-d').removeClass('color-change');
      $('.nav-content-center').removeClass('color-change');
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
        $('.navbar-d').removeClass('color-change');
        $('.nav-content-center').removeClass('color-change');
        $('.nav-small').css({'display':'none'})
    }
  }
/*  Hero image hide try */
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $("#hero-section").css({
      transform: 'translate3d(0, +'+(scroll/100)+'%, 0) scale('+(100 - scroll/50)/100+')'
    });
  });


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
$('.card').tilt();
  

/* set to section-test scroll*/
$('.scroll-container').scroll(function() {
  if ($('.scroll-container').scrollTop() > 100) {
    $('.navbar-d').addClass('color-change');
    $('.nav-content-center').addClass('color-change');
    $('.nav-small').css({'display':'block','z-index': '2','left': '20px'})
  } else {
    $('.navbar-d').removeClass('color-change');
    $('.nav-content-center').removeClass('color-change');
    $('.nav-small').css({'display':'none'})
  }
});

/* *********************************** Tabs *********************************** */

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
