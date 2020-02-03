
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


$('#slideOutLeft').on('click', function() {
	$('#myModal').hide();
})


$(".accordions .mb-0 a").click(function (){

	if($('.nested').hasClass('show')) {
		$(".accordions .panel-header").css("background" , "#eef6fc");
	}

	else {
		$(".accordions .panel-header").css("background" , "#deedf8");
	}


});




$('.listOptions').click(function() {
	$( "#slideOutLeft" ).animate({
		left: "-400",
	}, 800, function() {

	});
})

$('.projects').click(function() {
	$( "#slideOutLeft" ).animate({
		left: "0",
	}, 800, function() {

	});
});


// $('#close').click(function() {
// 	$( "#slideOutRight" ).animate({
// 		left: "-700",
// 	}, 800, function() {
//
// 	});
// })
//
// $('#one').click(function() {
// 	$( "#slideOutRight" ).animate({
// 		right: "0",
// 	}, 800, function() {
//
// 	});
// });


$('#one').on('click', function() {

	$( "#slideOutRight" ).addClass('showSlideOut')

	// $('.blueTab').css('outline', 'none !important')
	//
	// $('#theform input').each(function() {
	// 	$(this).attr('tabindex', '0');
	// });
	// $('.radio-inline input').each(function() {
	// 	$(this).attr('tabindex', '0');
	// });
	//
	// $('.form-control').attr('tabindex', '0');
	//
	// $('#closeThisPlease').attr('tabindex', '0');
	//
	// $('.dial').attr('tabindex', '0');
	// $('#send').attr('tabindex', '0');
	//
	// // $('.blueTab').hide();
	// $('.modal-content').css('box-shadow', '0 3px 9px rgba(0, 0, 0, .6)')
	//
	//
	// $('.thirdBlock').addClass('flexing-scroll');
	// $(".firstBlock").addClass('animated fadeIn');
	// $(".secondBlock").removeClass('animated fadeIn');
	// $(".thirdBlock").removeClass('animated fadeIn');
	//

	// $('.modal-content').addClass('opened')



	//
	// $('.firstBlock').removeClass('flexing-scroll');
	// $('.secondBlock').addClass('flexing-scroll');
	// $('.thirdBlock').addClass('flexing-scroll');
	// $('.secondBlock').removeClass('unset');



})


$('#close').on('click', function() {
	$( "#slideOutRight" ).removeClass('showSlideOut')

	// $('#theform input').each(function() {
	// 	$(this).attr('tabindex', '-1');
	// });
	//
	// $('.radio-inline input').each(function() {
	// 	$(this).attr('tabindex', '-1');
	// });
	//
	// $('.form-control').attr('tabindex', '-1');
	//
	// $('#closeThisPlease').attr('tabindex', '-1');
	//
	// $('.dial').attr('tabindex', '-1');
	// $('#send').attr('tabindex', '-1');
	//
	// $('.firstBlock').addClass('unset');
	//
	// // $('.blueTab').show();
	//
	// $('.blueTab.new').hide();
	//
	// $(".secondBlock").removeClass('animated fadeIn');
	// $(".firstBlock").removeClass('animated fadeIn');
	// $(".thirdBlock").removeClass('animated fadeIn');
	//
	//
	// setTimeout(function() {
	// 	$('.thirdBlock').addClass('flexing-scroll');
	// 	$('.secondBlock').addClass('flexing-scroll');
	// }, 600)
	//
	// $('.modal-content').css('box-shadow', 'none')
	//
	// $("#slideOutRight").removeClass('showSlideOut');

	// $('#one').css('z-index', '999');
	// $('#two').css('z-index', '99');



})




$('.projects').on('mouseenter', function() {
	$('.projects').css('cursor', 'grab')
})

$('.projects').on('mouseleave', function() {
	$('.projects').css('cursor', 'pointer')
})


$(window).on('load',function(){
	$('#myModal').modal('show');
});

var resizeText = function () {

	var preferredFontSize = 50; // %
	var preferredSize = 1024 * 768;

	var currentSize = $(window).width() * $(window).height();
	var scalePercentage = Math.sqrt(currentSize) / Math.sqrt(preferredSize);
	var newFontSize = preferredFontSize * scalePercentage + 2;
	$(".navbar-brand img").css("width", newFontSize + '%');
};

$(window).scroll(function () {
	var distanceY = window.pageYOffset || document.documentElement.scrollTop;
	if (distanceY > 100) {
		$('#one').css({
			top: "92px"
		})

	} else {
		$('#one').css({
			top: "270px"
		})

	}
});



$('#one').keyup(function (e) {

	var code = (e.keyCode ? e.keyCode : e.which);
	if (code == 13) {

		// $('#theform input').each(function() {
		// 	$(this).attr('tabindex', '0');
		// });
		//
		//
		//
		// $('.radio-inline input').each(function() {
		// 	$(this).attr('tabindex', '0');
		// });
		//
		// $('.form-control').attr('tabindex', '0');
		//
		// $('#closeThisPlease').attr('tabindex', '0');
		//
		// $('.dial').attr('tabindex', '0');
		// $('#send').attr('tabindex', '0');

		$("#slideOutRight").addClass('showSlideOut');

	}
});




$(window).bind('resize', function() {
	resizeText();
}).trigger('resize');



jQuery(function($) {
	var path = window.location.href;
	$('.navbar-nav li a').each(function() {
		if (this.href === path) {
			$(this).addClass('active');
		}
		else {
			$(this).removeClass('active');
		}

	});
});
