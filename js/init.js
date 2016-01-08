(function($){
  $(function(){

    $('.scrollspy').scrollSpy();

    $(".button-collapse").sideNav();

// Sliders
	$('.slider').slider({
		full_width: false,
		interval:2500,
		transition:800,
	});

  }); // end of document ready
})(jQuery); // end of jQuery name space