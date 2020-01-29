
(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});



	//Menu On Hover

	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});

  $(".nav a").on("click", function()
            {
             $(".nav").find(".active").removeClass("active");
             $(this).parent().addClass("active");
           });




  })(jQuery);


jQuery(function($) {
 var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
 $('ul a').each(function() {
  if (this.href === path) {
   $(this).addClass('active');
  }
  else {
     $(this).removeClass('active');
  }

 });
});
