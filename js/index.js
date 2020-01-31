
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


	$(".accordions .mb-0 a").click(function (){

		if($('.nested').hasClass('show')) {
			  $(".accordions .panel-header").css("background" , "#eef6fc");
		}

		else {
			  $(".accordions .panel-header").css("background" , "#deedf8");
		}


});


$(window).on('load',function(){
		 $('#myModal').modal('show');
 });

	var resizeText = function () {
	// Standard height, for which the body font size is correct
	var preferredFontSize = 50; // %
	var preferredSize = 1024 * 768;

	var currentSize = $(window).width() * $(window).height();
	var scalePercentage = Math.sqrt(currentSize) / Math.sqrt(preferredSize);
	var newFontSize = preferredFontSize * scalePercentage + 2;
	$(".navbar-brand img").css("width", newFontSize + '%');
};

// var resizeText2 = function () {
//
// var preferredFontSize2 = 60;
// var preferredSize2 = 1024 * 768;
//
// var currentSize2 = $(window).width() * $(window).height();
// var scalePercentage2 = Math.sqrt(currentSize2) / Math.sqrt(preferredSize2);
// var newFontSize2 = preferredFontSize2 * scalePercentage2  + 30;
// $(".projects h3").css("font-size", newFontSize2 + '%');
// };

$(window).bind('resize', function() {
	resizeText();
}).trigger('resize');

// $(window).bind('resize2', function() {
// 	resizeText2();
// }).trigger('resize2');

//
// $('.panel-collapse').on('show.bs.collapse', function () {
// 	 $(this).siblings('.panel-heading').addClass('active');
//  });
//
//  $('.panel-collapse').on('hide.bs.collapse', function () {
// 	 $(this).siblings('.panel-heading').removeClass('active');
//  });




jQuery(function($) {
 var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
 $('li a').each(function() {
  if (this.href === path) {
   $(this).addClass('active');
  }
  else {
     $(this).removeClass('active');
  }

 });
});
