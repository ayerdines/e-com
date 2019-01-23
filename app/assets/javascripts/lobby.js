$(function() {
  $('.hamburger').on('click', function(event) {
  	$(this).toggleClass('is-active');
	if ($(this).hasClass('is-active')) {
		$('.wd-sidebar').css('width', '250px');
	  	// $('main').css('margin-left', '200px');
	  } else {
	  	$('.wd-sidebar').css('width', '0px');
	  	// $('main').css('margin-left', '0px');
	  }
	  	
  });
});