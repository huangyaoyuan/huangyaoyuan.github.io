$(document).ready(function() {
  function showpanel() {
		$('.container').removeClass('startup');
    $('.ball').addClass('active').delay(2000).queue(function(next) {
			$(this).removeClass('active');
			next();
		});
 	}
	
	$('.ball').click(function() {
		$(this).toggleClass('active');
	});


	$('.first').click(function() {
		$('.ball').addClass('expand');
		$('.back').addClass('show');
	});

	$('.back').click(function() {
		$(this).removeClass('show');
		$('.ball').removeClass('expand');
		$('.container').addClass('shake').delay(500).queue(function(next) {
			$(this).removeClass('shake');
			next();
		});
	});
	

	$('.second').click(function() {
		$('.ball').addClass('expand');
		$('.back2').addClass('show');
	});

	$('.back2').click(function() {
		$(this).removeClass('show');
		$('.ball').removeClass('expand');
		$('.container').addClass('shake').delay(500).queue(function(next) {
			$(this).removeClass('shake');
			next();
		});
	});


	$('.third').click(function() {
		$('.ball').addClass('expand');
		$('.back3').addClass('show');
	});

	$('.back3').click(function() {
		$(this).removeClass('show');
		$('.ball').removeClass('expand');
		$('.container').addClass('shake').delay(500).queue(function(next) {
			$(this).removeClass('shake');
			next();
		});
	});

 setTimeout(showpanel, 1800);
});