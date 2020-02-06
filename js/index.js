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



  // $('.dropdown-submenu a.test').on("click", function(e){
  //   $(this).next('ul').toggle();
  //   e.stopPropagation();
  //   e.preventDefault();
  // });



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

//levels

// $('#level1').html('First Level &#9662;')
// $('#level2').html('Second Level &#9662')
// $('#level3').html('Third Level &#9662')

//levels object


var levels = $('<div class="btn-group"><button type="button" class="btn btn-light dropdown-toggle" id="level3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-caret-down"></i></button><div class="dropdown-menu"><button class="dropdown-item" type="button">Something else here</button><button class="dropdown-item submenu" type="button">Actions in a submenu</button><div class="dropdown-menu"><button class="dropdown-item" type="button">Action</button><button class="dropdown-item" type="button">Another action</button><button class="dropdown-item" type="button">Something else</button></div><button class="dropdown-item" type="button">Another action</button><button class="dropdown-item" type="button">Something else here</button></div></div>')
// $(levels).appendTo('.levels');





if($('body').hasClass('initial')) {
	$( "#slideOutLeft" ).css('left', '0')
}

if($('body').hasClass('initial')) {
$('#slideOutLeft .projects').hide()

}

else {
  $('#slideOutLeft .projects').show();
  $('#slideOutLeft .selectProject').hide()
}


// $('#slideOutLeft').on('click', function() {
// 	if($('body').hasClass('initial')) {
// 	$('#myModal').hide();
// 	$('body').removeClass('modal-open');
// 	$('.modal-backdrop.show').hide();
// }
// })


$(window).on('load',function(){
if($('body').hasClass('initial')) {
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

$('.close-project').click(function(e) {
e.stopPropagation()
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

if($('.navbar-nav li .dropdown-menu .dropdown-item').is('.active')) {
  $(this).find('.nav-item').css('background', 'red')
}



	var path = window.location.href;
	$('.navbar-nav li a').each(function() {
		if (this.href === path) {
			$(this).addClass('active');
		}
		else {
			$(this).removeClass('active');
		}

	});



  $('.navbar-nav li .dropdown-menu .dropdown-item').each(function() {
    if (this.href === path) {
      $(this).parent().siblings('a').addClass('active');
      // $(this).removeClass('active');
    }
    else {
      $(this).removeClass('active');
    }

  });


})
