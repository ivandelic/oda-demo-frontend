jQuery(document).ready(function($) {
	$( ".menu-icon-trigger" ).click(function() {
		if ($(".mobile-menu").hasClass("active")) {
			$(".mobile-menu").removeClass("active");
		  } else {
			$(".mobile-menu").addClass("active");
		  }
	  });
	$( ".mobile-menu .close" ).click(function() {
			$(".mobile-menu").removeClass("active");
		});
		

		$('#kereses-inp').keypress(function(event){
			var keycode = (event.keyCode ? event.keyCode : event.which);
			if(keycode == '13'){
				searchVal = $( "#kereses-inp" ).val();
				searchDest = "/kereses/" + searchVal;
				window.location.replace(searchDest);  
			}
		});
		$( "#kereses-btn" ).click(function() {
			searchVal = $( "#kereses-inp" ).val();
			searchDest = "/kereses/" + searchVal;
			window.location.replace(searchDest);
		});
});;
