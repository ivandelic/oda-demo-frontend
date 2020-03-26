jQuery(document).ready(function($) {
    var page_body = $(".page_body");

    if ( page_body ) {
        page_body.find("img").each(function() {
            $(this).addClass("img-responsive");
        })
    }
});