$(document).ready(function () {

  $('.NavItem').click(function(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    var navItem = $(this),
        allNavItems = $('.NavItem'),
        activeClass = 'NavItem--is-active';

    // Highlight the correct nav item
    allNavItems.removeClass(activeClass);
    navItem.addClass(activeClass);

    var type = $(this).data('type');
    $('.option').addClass('hidden');
    $('.option[data-type="'+type+'"]').removeClass('hidden');

  })

  $('.option[data-type="trip"]').addClass('hidden');





  $('.dropdown-submenu a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });



const $dropdown = $(".nav-item");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});


$(".accordions .mb-0 a").click(function (){
	if($('.nested').hasClass('show')) {
		$(".accordions .panel-header").css("background" , "#eef6fc");
	}
	else {
		$(".accordions .panel-header").css("background" , "#deedf8");
	}

});

if($('body').hasClass('welcome')) {
	$( "#slideOutLeft" ).css('left', '0')
}


$('#slideOutLeft').on('click', function() {
	if($('body').hasClass('welcome')) {
	$('#myModal').hide();
	$('body').removeClass('modal-open');
	$('.modal-backdrop.show').hide();
}
})


$(window).on('load',function(){
if($('body').hasClass('welcome')) {
	$('#myModal').modal('show');

}
});

$('.listOptions').click(function() {
$('.backdropShadow').fadeOut();
	$( "#slideOutLeft" ).animate({
		left: "-400",
	}, 800, function() {

	});
})


$('.projects').click(function() {
	$('.backdropShadow').fadeIn()
	$( "#slideOutLeft" ).animate({
		left: "0",
	}, 800, function() {

	});
});


$('#one').on('click', function() {
		$('.backdropShadow').fadeIn()
	$( "#slideOutRight" ).addClass('showSlideOut')

})


$('#close').on('click', function() {
		$('.backdropShadow').fadeOut()
	$( "#slideOutRight" ).removeClass('showSlideOut')

})




$('.projects').on('mouseenter', function() {
	$('.projects').css('cursor', 'grab')
})

$('.projects').on('mouseleave', function() {
	$('.projects').css('cursor', 'pointer')
})





var resizeText = function () {

	var preferredFontSize = 50; // %
	var preferredSize = 1024 * 768;

	var currentSize = $(window).width() * $(window).height();
	var scalePercentage = Math.sqrt(currentSize) / Math.sqrt(preferredSize);
	var newFontSize = preferredFontSize * scalePercentage + 2;
	$(".navbar-brand img").css("width", newFontSize + '%');
};

$(window).bind('resize', function() {
	resizeText();
}).trigger('resize');


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

		$("#slideOutRight").addClass('showSlideOut');

	}
});


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

})
