

$(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
      $('.navbar').addClass('color-change');
      $('.nav-small').css({'display':'block','z-index': '2','left': '20px'})
    } else {
      $('.navbar').removeClass('color-change');
      $('.nav-small').css({'display':'none'})
    }
  });

// $(document).ready(function(){
//     if ($('input[type=checkbox]').is(':checked')) {
//         $('.nav-small').css({'background-color':'#DCDC39'})
//     }
//     else {
//         $('.nav-small').css({'background-color':'green'})
//     }
// });
// $(document).ready(clickfunction(){
//     if ($('input.checkbox_check').is(':checked')) {
// });

function clickfunction() {
    var checkBox = document.getElementById("menu-check");
    if (checkBox.checked == true){
        console.log('checked');
      document.getElementById("nav-small").body.style.backgroundColor= "red";
    } else if(checkBox.checked == false){
        document.getElementById("nav-small").style.backgroundColor= "green";
        console.log('checked');
    }else{

    }
  }

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
  