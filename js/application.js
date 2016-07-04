$(document).ready(function() {

	// menu button & menu for mobile version
	$('.menu_switch').on('click', function(){
		$(this).toggleClass('active');
		$('#nav_mobile').toggleClass('open fadeInDown');
	});

});