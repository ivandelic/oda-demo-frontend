jQuery(document).ready(function($) {

    var path = window.location.pathname;

    //mobil menu
    $(".main-menu a").click(function () {
        if ( path=="/" ) {
            //ha a főoldalon van, scroll
            var div = $("#"+$(this).attr('href'));
            
            if ( div!="/intezkedesek" ) {
                $('html, body').animate({
                    scrollTop: $(div).offset().top
                }, 1000);
    
                return false;
            }
        } else {
            //nem a főoldalon van, vissza a főoldalra
            if ( $(this).attr("href")!="/intezkedesek" ) {
                window.location.href="/#"+$(this).attr("href");

                return false;
            }
        }
    });


    //mobil menü
    $(".mobile-menu a").click(function () {
        if ( path=="/" ) {
            //ha a főoldalon van, scroll
            if ( div!="/intezkedesek" ) {
                var div = $("#"+$(this).attr('href'));
                
                $('html, body').animate({
                    scrollTop: $(div).offset().top
                }, 1000);

                $(".close").click();

                return false;
            }
        } else {
            //nem a főoldalon van, vissza a főoldalra
            if ( $(this).attr("href")!="/intezkedesek" ) {
                window.location.href="/#"+$(this).attr("href");

                return false;
            }
        }
    });
    

});