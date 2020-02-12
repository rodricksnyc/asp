$(document).ready(function () {


  //nav items under the main tab panel in analysis page

  $('.NavItem').click(function(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    var navItem = $(this),
    allNavItems = $('.NavItem'),
    activeClass = 'NavItem--is-active';

    allNavItems.removeClass(activeClass);
    navItem.addClass(activeClass);

    var type = $(this).data('type');
    $('.option').addClass('hidden');
    $('.option[data-type="'+type+'"]').removeClass('hidden');

  })




  //hover for dropdown items in main navbar

  var $dropdown = $(".navbar-nav .nav-item");
  var $dropdownToggle = $(".dropdown-toggle");
  var $dropdownMenu = $(".dropdown-menu");
  var showClass = "show";

  $(window).on("load resize", function() {
    if (this.matchMedia("(min-width: 768px)").matches) {
      $dropdown.hover(
        function() {
          var $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function() {
          var $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });


  var dropdownButton = $(".btn-group .dropdown-menu")

  dropdownButton.on('mouseleave', function() {

    dropdownButton.removeClass('show');
    // $('.dropdown-menu').addClass('show')
  })



  //acordions for levels under Variables
  $('.toggle').on('mouseenter', function(){
    $(this).addClass('highlighted');
  })


  $('.toggle').on('mouseleave', function(){
    $(this).removeClass('highlighted');
  })



  $('.toggle').click(function(e) {
    e.preventDefault();
    e.stopPropagation()
    $('.toggle').addClass('plus-sign');

    var $this = $(this);

    if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);

      $this.removeClass('minus-sign');
      $(this).removeClass('highlighted');

    } else {
      $this.parent().parent().find('li .inner').removeClass('show');
      $this.parent().parent().find('li .inner').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
      $this.addClass('minus-sign');
      $(this).addClass('highlighted');


    }
  });

  $('.innerToggle').click(function(e) {
    e.preventDefault();
    e.stopPropagation()
    $('.innerToggle').addClass('plus-sign');

    var $this = $(this);

    if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);

      $this.removeClass('minus-sign');


    } else {
      $this.parent().parent().find('li .innerNested').removeClass('show');
      $this.parent().parent().find('li .innerNested').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
      $this.addClass('minus-sign');
      // $(this).addClass('highlighted');
      $('.innerNested').addClass('noBackground')

    }
  });


  $('.nestedToggle').on('mouseenter', function(e) {
    $('.innerNested').addClass('noBackground')
    $(this).css('background', '#faede9')
    // $(this).addClass('highlighted');
  })

  $('.nestedToggle').on('mouseleave', function(e) {
    $('.innerNested').removeClass('noBackground')
    $(this).css('background', 'transparent');
    // $(this).removeClass('highlighted');
  })



  $(".accordions .mb-0 a").click(function (){
    if($('.nested').hasClass('show')) {
      $(".accordions .panel-header").css("background" , "#eef6fc");
    }
    else {
      $(".accordions .panel-header").css("background" , "#deedf8");
    }

  });


  if($('body').hasClass('analysis')) {
    $('#navbarDropdownMenuAnalysis .down').html('Analysis on Demand');
    $('.down:after').css('content' , 'none ');
  }




  $('a[data-type="years"]').addClass('NavItem--is-active');
  $('a[data-type="topics"]').removeClass('NavItem--is-active')
  $('.option[data-type="topics"]').addClass('hidden');
  $('.option[data-type="data"]').addClass('hidden');
  $('.option[data-type="marks"]').addClass('hidden');
  $('.option[data-type="stats"]').addClass('hidden');



  //projects slider

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


  $('.projects').on('mouseenter', function() {
    $('.projects').css('cursor', 'grab')
  })

  $('.projects').on('mouseleave', function() {
    $('.projects').css('cursor', 'pointer')
  })



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


  //zip case slider

  $('#one').on('click', function() {
    $('.backdropShadow').fadeIn()
    $( "#slideOutRight" ).addClass('showSlideOut')

  })


  $('#close').on('click', function() {
    $('.backdropShadow').fadeOut()
    $( "#slideOutRight" ).removeClass('showSlideOut')

  })




  //scale logo

  var resizeText = function () {

    var preferredFontSize = 50; // %
    var preferredSize = 1024 * 768;

    var currentSize = $(window).width() * $(window).height();
    var scalePercentage = Math.sqrt(currentSize) / Math.sqrt(preferredSize);
    var newFontSize = preferredFontSize * scalePercentage + 2;
    $(".navbar-brand img").css("width", newFontSize + '%');
  };


  var resizeText2 = function () {

    var preferredFontSize2 = 50; // %
    var preferredSize2 = 1024 * 768;

    var currentSize2 = $(window).width() * $(window).height();
    var scalePercentage2 = Math.sqrt(currentSize2) / Math.sqrt(preferredSize2);
    var newFontSize2 = preferredFontSize2 * scalePercentage2 + 2;
    // $(".nav-item a").css("font-size", newFontSize2 + '%');
    // $(".nav-item .down").css("font-size", newFontSize2 + '%');
  }



  $(window).bind('resize', function() {
    resizeText2();
  }).trigger('resize');



  $(window).bind('resize', function() {
    resizeText();
  }).trigger('resize');




  // $(":checkbox[data-year]").on('change' , function() {
  //
  //   var years = $(this).attr('id');
  //
  //   $('.filter-attr-list').append(`<li class="results selected"> ${years} <div class="removeTag"><i class="fal fa-times ml-1"></i></div></li>`);
  //
  //
  //
  // });




  $(":checkbox[data-year]").change(function (e) {

    $('.filter-attr-list').html('');

    $('.years :checkbox:checked').each(function (ind, ele) {


      var value = $(ele).val();
      $('.filter-attr-list').append(`<li class="results selected">${value} <div class="removeTag"><i class="fal fa-times ml-1"></i></div></li>`);


      // if (this.checked == true)  {
      //
      //   $('.filter-attr-list').addClass('selects');
      //   console.log('bitch')
      //
      // }



    });


    // $('.filter-attr-list').each(function() {
    //   if ($(this).html()=="") {
    //
    //     $('.filter-attr-list').removeClass('selects');
    //   }
    // });


    $('.filter-attr-list').on('click', '.removeTag', function() {
      console.log("hi there")
      $(this).closest('.results').remove();
    })



  })



   $("input[name=addall]").click(function() {
     if (this.checked) {
       $("input[name=year]").prop('checked', true).change();
     } else {
       $("input[name=year]").prop('checked', false).change();
     }
   });

   function updateAllChecked() {
     $('.years :checkbox:checked').each(function (ind, ele) {


       var value = $(ele).val();
       $('.filter-attr-list').append(`<li class="results selected"> ${value} <div class="removeTag"><i class="fal fa-times ml-1"></i></div></li>`);




     });

   }

  //move zip case tab on window shrink

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



  //make the nav item have active line on current page

  var path = window.location.href;
  $('.navbar-nav li a').each(function() {
    if (this.href === path) {
      $(this).addClass('active');
    }
    else {
      $(this).removeClass('active');
    }

  });

  //make the nav item children have active line on current page

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
