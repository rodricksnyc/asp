"use strict";

$(document).ready(function () {
  // Let the document know when the mouse is being used
  $('body').on('mousedown', function () {
    document.body.classList.add('using-mouse');
  }); // Re-enable focus styling when Tab is pressed

  $('body').on('keydown', function (event) {
    if (event.keyCode === 9) {
      document.body.classList.remove('using-mouse');
    }
  });
  $('.NavItem').click(function (evt) {
    evt.preventDefault();
    evt.stopPropagation();
    var navItem = $(this),
        allNavItems = $('.NavItem'),
        activeClass = 'NavItem--is-active';
    allNavItems.removeClass(activeClass);
    navItem.addClass(activeClass);
    var type = $(this).data('type');
    $('.option').addClass('hidden');
    $('.option[data-type="' + type + '"]').removeClass('hidden');
  });
  $('.option[data-type="topics"]').addClass('hidden').show();
  $('.option[data-type="data"]').addClass('hidden').show();
  $('.option[data-type="marks"]').addClass('hidden').show();
  $('.option[data-type="stats"]').addClass('hidden').show(); //hover for dropdown items in main navbar

  var $dropdown = $(".navbar-nav .nav-item");
  var $dropdownToggle = $(".dropdown-toggle");
  var $dropdownMenu = $(".dropdown-menu");
  var showClass = "show";
  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 768px)").matches) {
      $dropdown.hover(function () {
        var $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      }, function () {
        var $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      });
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });
  var dropdownButton = $(".btn-group .dropdown-menu");
  dropdownButton.on('mouseleave', function () {
    dropdownButton.removeClass('show');
  }); //levels

  $('.toggle').click(function (e) {
    e.preventDefault();
    var $this = $(this);

    if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      /* JUST ADD HERE CLASS .ACTIVE */

      $this.removeClass("activeState");
      $this.next().slideUp(350);
    } else {
      $this.parent().parent().find('li .inner').removeClass('show');

      if ($this.hasClass('parent')) {
        /* JUST REMOVING HERE CLASS .ACTIVE FROM EARLY APPLIED */
        $this.parents(".accordion").find(".toggle").removeClass("activeState");
      } else if ($this.hasClass('child')) {
        /* JUST REMOVING HERE CLASS .ACTIVE FROM EARLY APPLIED FOR CHILD */
        $this.parents(".accordion").find(".toggle.child1").removeClass("activeState");
      } else if ($this.hasClass('child')) {
        /* JUST REMOVING HERE CLASS .ACTIVE FROM EARLY APPLIED FOR CHILD */
        $this.parents(".accordion").find(".toggle.child2").removeClass("activeState");
      } else if ($this.hasClass('child')) {
        /* JUST REMOVING HERE CLASS .ACTIVE FROM EARLY APPLIED FOR CHILD */
        $this.parents(".accordion").find(".toggle.child3").removeClass("activeState");
      } else if ($this.hasClass('child')) {
        /* JUST REMOVING HERE CLASS .ACTIVE FROM EARLY APPLIED FOR CHILD */
        $this.parents(".accordion").find(".toggle.child4").removeClass("activeState");
      } else if ($this.hasClass('child')) {
        /* JUST REMOVING HERE CLASS .ACTIVE FROM EARLY APPLIED FOR CHILD */
        $this.parents(".accordion").find(".toggle.child5").removeClass("activeState");
      } else {
        /* JUST REMOVING HERE CLASS .ACTIVE FROM EARLY APPLIED FOR CHILD OF CHILD */
        $this.parents(".accordion").find(".toggle.child6").removeClass("activeState");
      }

      $this.parent().parent().find('li .inner').slideUp(350);
      $this.next().toggleClass('show');
      /* JUST ADD HERE CLASS .ACTIVE */

      $this.addClass("activeState");
      $this.addClass("minus-sign");
      $this.next().slideToggle(350);
    }
  }); //changing colors in projects accordion

  $(".panel-body .accordions .panel .panel-header").click(function () {
    if ($(".panel-body .accordions .panel .panel-header").hasClass('darkerBlue') && $('.nested').hasClass('show')) {
      setTimeout(function () {
        $(".panel-body .accordions .panel .panel-header").addClass('lighterBlue');
        $(".panel-body .accordions .panel .panel-header").removeClass('darkerBlue');
      }, 400);
      console.log("blahhhhh");
    } else {
      $(".panel-body .accordions .panel .panel-header").addClass('darkerBlue');
      $(".panel-body .accordions .panel .panel-header").removeClass('lighterBlue');
      console.log("2blahhhhh");
    }
  });
  $('#accordion .panel .panel-header').click(function () {
    if ($(".panel-body .accordions .panel .panel-header").hasClass('darkerBlue') && $('.nested').hasClass('show')) {
      console.log("3blahhhhh");
      $(".panel-body .accordions .panel .panel-header").removeClass('lighterBlue');
      $(".panel-body .accordions .panel .panel-header").removeClass('darkerBlue');
      setTimeout(function () {
        $('.nested').removeClass('show');
      }, 400);
    } else if ($(".panel-body .accordions .panel .panel-header").hasClass('darkerBlue') && !$('.nested').hasClass('show')) {
      $(".panel-body .accordions .panel .panel-header").removeClass('lighterBlue');
    }
  }); //change html in navbar

  if ($('body').hasClass('analysis')) {
    $('#navbarDropdownMenuAnalysis .down').html('Analysis on Demand');
    $('.down:after').css('content', 'none ');
  } //projects slider


  if ($('body').hasClass('initial')) {
    $("#slideOutLeft").css('left', '0');
  }

  if ($('body').hasClass('initial')) {
    $('#slideOutLeft .projects').hide();
  } else {
    $('#slideOutLeft .projects').show();
    $('#slideOutLeft .selectProject').hide();
  }

  $('.projects').on('mouseenter', function () {
    $('.projects').css('cursor', 'grab');
  });
  $('.projects').on('mouseleave', function () {
    $('.projects').css('cursor', 'pointer');
  });
  $(window).on('load', function () {
    if ($('body').hasClass('initial')) {
      $('#myModal').modal('show');
    }
  });
  $('.listOptions').click(function () {
    $('.backdropShadow').fadeOut();
    $("#slideOutLeft").animate({
      left: "-400"
    }, 800, function () {});
  });
  $('.close-project').click(function (e) {
    e.stopPropagation();
    $('.backdropShadow').fadeOut();
    $("#slideOutLeft").animate({
      left: "-400"
    }, 800, function () {});
    $('#slideOutRight').css('z-index', '10');
    $('.projects').attr('tabindex', '0');
    $('#accordion a').attr('tabindex', '-1');
    $('#accordion a').attr('aria-hidden', 'true');
  });
  $('.projects').click(function () {
    $('.backdropShadow').fadeIn();
    $("#slideOutLeft").animate({
      left: "0"
    }, 800, function () {});
    console.log("sguerbigbr");
    $('#slideOutRight').css('z-index', '1');
    $('.projects').attr('tabindex', '1');
    $('#accordion a').attr('tabindex', '1');
    $('#accordion a').attr('aria-hidden', 'false');
  });
  $('.projects').on('keyup', function (e) {
    var code = e.keyCode ? e.keyCode : e.which;

    if (code == 13) {
      $('.backdropShadow').fadeIn();
      $("#slideOutLeft").animate({
        left: "0"
      }, 800, function () {});
      $('#slideOutRight').css('z-index', '1');
      $('.projects').attr('tabindex', '1');
      $('#accordion a').attr('tabindex', '1');
      $('#accordion a').attr('aria-hidden', 'false');
      $('.close-project').attr('tabindex', '1');
      $('.close-project').attr('aria-hidden', 'false');
    }
  });
  $('.close-project').on('keyup', function (e) {
    e.stopPropagation();
    var code = e.keyCode ? e.keyCode : e.which;

    if (code == 13) {
      // $('[tabindex="0"]').focus();
      $('li.projects').focus();
      $('.backdropShadow').fadeOut();
      $("#slideOutLeft").animate({
        left: "-400"
      }, 800, function () {});
      $('#slideOutRight').css('z-index', '10');
      $('.projects').attr('tabindex', '0');
      $('#accordion a').attr('tabindex', '-1');
      $('#accordion a').attr('aria-hidden', 'true');
      $('.close-project').attr('tabindex', '-1');
      $('.close-project').attr('aria-hidden', 'true');
    }
  }); //levels navbar dropdowns

  $('.dropdown-item.submenu').on('keyup', function (e) {
    var code = e.keyCode ? e.keyCode : e.which;

    if (code == 9 || code == 13) {
      $('.dropdown-item + .dropdown-menu').show();
      $('.dropdown-item + .dropdown-menu').css('opacity', '1');
      $('.dropdown-item + .dropdown-menu').css('transition', 'opacity .3s .1s');
    }
  }); // $('a.nav-link').last().on('blur', function() {
  //
  //   $('#levels .btn-group button').focus()
  // })
  //
  // $('#levels .btn-group button').on('blur', function() {
  //
  //   $('.tours input').focus()
  // })
  //zip case slider

  $('#one').on('click', function () {
    $('.backdropShadow').fadeIn();
    $("#slideOutRight").addClass('showSlideOut');
    $('#closeThisPlease').attr('tabindex', '1');
    $('#closeThisPlease').attr('aria-hidden', 'false');
    $('#slideOutRight textarea').attr('tabindex', '1');
    $('#slideOutRight textarea').attr('aria-hidden', 'false');
    $('#slideOutRight input').attr('tabindex', '1');
    $('#slideOutRight input').attr('aria-hidden', 'false');
    $('#slideOutRight a').attr('tabindex', '1');
    $('#slideOutRight a').attr('aria-hidden', 'false');
  });
  $('#one').keyup(function (e) {
    var code = e.keyCode ? e.keyCode : e.which;

    if (code == 13) {
      $("#slideOutRight").addClass('showSlideOut');
      $('#closeThisPlease').focus();
      $('#closeThisPlease').attr('tabindex', '1');
      $('#closeThisPlease').attr('aria-hidden', 'false');
      $('#slideOutRight textarea').attr('tabindex', '1');
      $('#slideOutRight textarea').attr('aria-hidden', 'false');
      $('#slideOutRight input').attr('tabindex', '1');
      $('#slideOutRight input').attr('aria-hidden', 'false');
      $('#slideOutRight a').attr('tabindex', '1');
      $('#slideOutRight a').attr('aria-hidden', 'false');
      $('#slideOutRight a').on('blur', function () {
        $('#closeThisPlease').focus();
      });
    }
  });
  $('#close').on('click', function () {
    $('.backdropShadow').fadeOut();
    $("#slideOutRight").removeClass('showSlideOut');
    $('#closeThisPlease').attr('tabindex', '-1');
    $('#closeThisPlease').attr('aria-hidden', 'true');
    $('#slideOutRight textarea').attr('tabindex', '-1');
    $('#slideOutRight textarea').attr('aria-hidden', 'true');
    $('#slideOutRight input').attr('tabindex', '-1');
    $('#slideOutRight input').attr('aria-hidden', 'true');
    $('#slideOutRight a').attr('tabindex', '-1');
    $('#slideOutRight a').attr('aria-hidden', 'true');
  });
  $('#close').keyup(function (e) {
    var code = e.keyCode ? e.keyCode : e.which;

    if (code == 13) {
      $('#one').focus();
      $('.backdropShadow').fadeOut();
      $("#slideOutRight").removeClass('showSlideOut');
      $('#closeThisPlease').attr('tabindex', '-1');
      $('#closeThisPlease').attr('aria-hidden', 'true');
      $('#slideOutRight textarea').attr('tabindex', '-1');
      $('#slideOutRight textarea').attr('aria-hidden', 'true');
      $('#slideOutRight input').attr('tabindex', '-1');
      $('#slideOutRight input').attr('aria-hidden', 'true');
      $('#slideOutRight a').attr('tabindex', '-1');
      $('#slideOutRight a').attr('aria-hidden', 'true');
    }
  }); //toggle between analyis and table

  var continuous = function continuous() {
    $(this).addClass('activeHeading').removeClass('inactiveHeading');
    $('.categoricalHeader').removeClass('activeHeading').addClass('inactiveHeading');
    $('.analysisVariables').addClass('animated fadeIn').removeClass('hidden');
    $('.tableVariables').addClass('hidden');
    setTimeout(function () {
      $('.analysisVariables').removeClass('animated fadeIn');
    }, 700);
  };

  $('.continuousHeader').keypress(continuous).click(continuous);

  var categorical = function categorical() {
    $(this).addClass('activeHeading').removeClass('inactiveHeading');
    $('.continuousHeader').removeClass('activeHeading').addClass('inactiveHeading');
    $('.analysisVariables').addClass('hidden');
    $('.tableVariables').addClass('animated fadeIn').removeClass('hidden');
    setTimeout(function () {
      $('.tableVariables').removeClass('animated fadeIn');
    }, 700);
  };

  $('.categoricalHeader').keypress(categorical).click(categorical); //levels

  var one = 1;
  var two = 2;
  var three = 3;
  var four = 4;
  var five = 5;
  var six = 6;
  var seven = 7;
  $("input[name=allLevels]").click(function () {
    if (this.checked) {
      // $('.filter-attr-list').find('li').remove();
      $("input[name=levels]").prop('checked', true).change();
      $("input[name=allLevels]").prop('checked', true).change();
    } else {
      $("input[name=levels]").prop('checked', false).change();
      $("input[name=allLevels]").prop('checked', false).change();
    }
  });
  $("input[name=levels]").change(function () {
    $("input[name=allLevels]").prop('checked', false);
  });

  var tableLevel1 = function tableLevel1() {
    if ($(this).attr('value')) {
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() + 94);
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(one).val(); // $('.levelTopicAreaNumber').append(one).val();

      $('.listArea').addClass('animated fadeIn').show();
      $('.listArea2').removeClass('animated fadeIn').hide();
    }
  };

  $('.tableVariables .level1 .addToList').keypress(tableLevel1).click(tableLevel1);

  var analysisLevel1 = function analysisLevel1() {
    if ($(this).attr('value')) {
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() + 94);
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(one).val(); // $('.levelTopicAreaNumber').append(one).val();

      $('.listArea2').addClass('animated fadeIn').show();
      $('.listArea').removeClass('animated fadeIn').hide();
    }
  };

  $('.analysisVariables .level1 .addToList').keypress(analysisLevel1).click(analysisLevel1);

  var tableLevel2 = function tableLevel2() {
    if ($(this).attr('value')) {
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() + 94);
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(two).val(); // $('.levelTopicAreaNumber').html(two + '1')

      $('.listArea').addClass('animated fadeIn').show();
      $('.listArea2').removeClass('animated fadeIn').hide();
    }
  };

  $('.tableVariables .level2 .addToList').keypress(tableLevel2).click(tableLevel2);

  var analysisLevel2 = function analysisLevel2() {
    if ($(this).attr('value')) {
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() + 94);
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(two).val(); // $('.levelTopicAreaNumber').html(two + '1')

      $('.listArea2').addClass('animated fadeIn').show();
      $('.listArea').removeClass('animated fadeIn').hide();
    }
  };

  $('.analysisVariables .level2 .addToList').keypress(analysisLevel2).click(analysisLevel2);

  var tableLevel3 = function tableLevel3() {
    if ($(this).attr('value')) {
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() + 94);
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(three).val();
      $('.listArea').addClass('animated fadeIn').show();
      $('.listArea2').removeClass('animated fadeIn').hide();
    }
  };

  $('.tableVariables .level3 .addToList').keypress(tableLevel3).click(tableLevel3);

  var analysisLevel3 = function analysisLevel3() {
    if ($(this).attr('value')) {
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() + 94);
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(three).val();
      $('.listArea2').addClass('animated fadeIn').show();
      $('.listArea').removeClass('animated fadeIn').hide();
    }
  };

  $('.analysisVariables .level3 .addToList').keypress(analysisLevel3).click(analysisLevel3);

  var tableLevel4 = function tableLevel4() {
    if ($(this).attr('value')) {
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(four).val();
      $('.listArea').addClass('animated fadeIn').show();
      $('.listArea2').removeClass('animated fadeIn').hide();
    }
  };

  $('.tableVariables .level4 .addToList').keypress(tableLevel4).click(tableLevel4);

  var analysisLevel4 = function analysisLevel4() {
    if ($(this).attr('value')) {
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(four).val();
      $('.listArea2').addClass('animated fadeIn').show();
      $('.listArea').removeClass('animated fadeIn').hide();
    }
  };

  $('.analysisVariables .level4 .addToList').keypress(analysisLevel4).click(analysisLevel4);

  var tableLevel5 = function tableLevel5() {
    if ($(this).attr('value')) {
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() + 94);
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(five).val();
      $('.listArea').addClass('animated fadeIn').show();
      $('.listArea2').removeClass('animated fadeIn').hide();
    }
  };

  $('.tableVariables .level5 .addToList').keypress(tableLevel5).click(tableLevel5);

  var analysisLevel5 = function analysisLevel5() {
    if ($(this).attr('value')) {
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() + 94);
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(five).val();
      $('.listArea2').addClass('animated fadeIn').show();
      $('.listArea').removeClass('animated fadeIn').hide();
    }
  };

  $('.analysisVariables .level5 .addToList').keypress(analysisLevel5).click(analysisLevel5);

  var tableLevel6 = function tableLevel6() {
    if ($(this).attr('value')) {
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() + 94);
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(six).val();
      $('.listArea').addClass('animated fadeIn').show();
      $('.listArea2').removeClass('animated fadeIn').hide();
    }
  };

  $('.tableVariables .level6 .addToList').keypress(tableLevel6).click(tableLevel6);

  var analysisLevel6 = function analysisLevel6() {
    if ($(this).attr('value')) {
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() + 94);
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(six).val();
      $('.listArea2').addClass('animated fadeIn').show();
      $('.listArea').removeClass('animated fadeIn').hide();
    }
  };

  $('.analysisVariables .level6 .addToList').keypress(analysisLevel6).click(analysisLevel6);

  var tableLevel7 = function tableLevel7() {
    if ($(this).attr('value')) {
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() + 94);
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(seven).val();
      $('.listArea').addClass('animated fadeIn').show();
      $('.listArea2').removeClass('animated fadeIn').hide();
    }
  };

  $('.tableVariables .level7 .addToList').keypress(tableLevel7).click(tableLevel7);

  var analysisLevel7 = function analysisLevel7() {
    if ($(this).attr('value')) {
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() + 94);
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(seven).val();
      $('.listArea2').addClass('animated fadeIn').show();
      $('.listArea').removeClass('animated fadeIn').hide();
    }
  };

  $('.analysisVariables .level7 .addToList').keypress(analysisLevel7).click(analysisLevel7); // $('.continuousHeader').click(function() {
  //   $('.levels-accordion').addClass('animated fadeOut')
  //   setTimeout(function() {
  //   $('.levels-accordion').hide()
  //   $('.levels-accordion').removeClass('animated fadeOut')
  // },700)
  //     setTimeout(function() {
  //   $('.levels-accordion2').addClass('animated fadeIn').show();
  //
  // },700);
  //
  // // $('p.levels-accordion').addClass('animated fadeOut')
  // // $('plevels-accordion2').addClass('animated fadeOut')
  //
  // setTimeout(function() {
  // $('p.levels-accordion').html('Analysis Variables')
  // $('p.levels-accordion2').html('Table Variables')
  // // $('p.levels-accordion').removeClass('animated fadeOut')
  // // $('p.levels-accordion2').removeClass('animated fadeOut')
  // // $('p.levels-accordion').addClass('animated fadeIn')
  // // $('p.levels-accordion2').addClass('animated fadeIn')
  // },700)
  // })
  //
  //
  // $('.categoricalHeader').click(function() {
  //   $('.levels-accordion2').addClass('animated fadeOut')
  //   setTimeout(function() {
  //   $('.levels-accordion2').hide()
  //     $('.levels-accordion2').removeClass('animated fadeOut')
  // },700)
  //     setTimeout(function() {
  //   $('.levels-accordion').addClass('animated fadeIn').show();
  //
  // },700);
  //
  // // $('p.levels-accordion').addClass('animated fadeOut')
  // // $('p.levels-accordion2').addClass('animated fadeOut')
  //
  // setTimeout(function() {
  // $('p.levels-accordion2').html('Table Variables')
  // $('p.levels-accordion').html('Analysis Variables')
  // // $('p.levels-accordion2').removeClass('animated fadeOut')
  // // $('p.levels-accordion').removeClass('animated fadeOut')
  // // $('p.levels-accordion2').addClass('animated fadeIn')
  // // $('p.levels-accordion').addClass('animated fadeIn')
  // },700)
  // })
  //scale logo

  var resizeText = function resizeText() {
    var preferredFontSize = 56; // %

    var preferredSize = 1024 * 768;
    var currentSize = $(window).width() * $(window).height();
    var scalePercentage = Math.sqrt(currentSize) / Math.sqrt(preferredSize);
    var newFontSize = preferredFontSize * scalePercentage + 2;
    $(".navbar-brand img").css("width", newFontSize + '%');
  };

  var resizeText2 = function resizeText2() {
    var preferredFontSize2 = 50; // %

    var preferredSize2 = 1024 * 768;
    var currentSize2 = $(window).width() * $(window).height();
    var scalePercentage2 = Math.sqrt(currentSize2) / Math.sqrt(preferredSize2);
    var newFontSize2 = preferredFontSize2 * scalePercentage2 + 2; // $(".nav-item a").css("font-size", newFontSize2 + '%');
    // $(".nav-item .down").css("font-size", newFontSize2 + '%');
  };

  $(window).bind('resize', function () {
    resizeText2();
  }).trigger('resize');
  $(window).bind('resize', function () {
    resizeText();
  }).trigger('resize'); // $(":checkbox[data-year]").on('change' , function() {
  //
  //   var years = $(this).attr('id');
  //
  //   $('.filter-attr-list').append(`<li class="results selected"> ${years} <div class="removeTag"><i class="fal fa-times ml-1"></i></div></li>`);
  //
  //
  //
  // });
  // $(":checkbox[data-year]").change(function (e) {
  //
  //   var saveYear = $('.saveYear')
  //   $('.filter-attr-list').empty().append(saveYear)
  //
  //   $('.years :checkbox:checked').each(function (ind, ele) {
  //
  //     if (this.checked == true)  {
  //       var value = $(ele).attr('id')
  //       $('.filter-attr-list').append(`<li data-year="${value}" class="results selected">${value} <div class="removeTag"><i class="fal fa-times ml-1"></i></div></li>`);
  //     }
  //
  //
  //
  //
  //     // $('.filter-attr-list').on('click', '.removeTag', function() {
  //     //   console.log("hi there")
  //     //   $(this).closest('.results').remove();
  //     //
  //     //     if ($(`li[data-year="${value}"  == $(this).find(':checkbox').attr(data-year="${value}"]`)) {
  //     //       console.log("geibuibuewgbuiegriuhgeriuhewfhiuewfihu")
  //     //
  //     //         $(`:checkbox[data-year="${value}"]`).prop('checked', false);
  //     //       // $(":checkbox[data-year]").prop('checked', false);
  //     //     }
  //     //
  //     //   // $('.years :checkbox:checked').prop('checked', false);
  //     //
  //     // })
  //
  //   });
  //
  // })
  //years checkboxes

  $('.grayLayer').css('top', $('.lightBlueBack').height());
  console.log($('.lightBlueBack').height());
  $(".years :checkbox").change(function () {
    // var saveYear = $('.saveYear')
    // $('.filter-attr-list').empty().append(saveYear)
    console.log(this.value);

    if ($(this).prop("checked") == true) {
      $('.filter-attr-list').append("<li class='results selected' data-year=" + this.value + ">" + this.value + "<div class='removeTag'><i class='fal fa-times ml-1'></i></div></li>");
    } else {
      $(".filter-attr-list li[data-year=" + this.value + "]").remove();
    }

    ;
    $(".filter-attr-list [data-year]").on('click', function () {
      $("input[name=addall]").prop('checked', false);
      var yearName = $(this).attr("data-year");
      $(".years :checkbox[value=" + $(this).attr("data-year") + "]").prop("checked", false);
      $(this).remove();
    });
  });
  $('.years :checkbox').keypress(function (e) {
    e.preventDefault();

    if ((e.keyCode ? e.keyCode : e.which) == 13) {
      $(this).trigger('click');
    }
  });
  $('input[name=addall]').keypress(function (e) {
    e.preventDefault();

    if ((e.keyCode ? e.keyCode : e.which) == 13) {
      $(this).trigger('click');
    }

    if (this.checked) {
      $('.filter-attr-list').find('li').remove();
      $("input[name=year]").prop('checked', true).change();
      $("input[name=addall]").prop('checked', true).change();
    } else {
      $("input[name=year]").prop('checked', false).change();
      $("input[name=addall]").prop('checked', false).change();
    }
  });
  $("input[name=addall]").click(function () {
    if (this.checked) {
      $('.filter-attr-list').find('li').remove();
      $("input[name=year]").prop('checked', true).change();
      $("input[name=addall]").prop('checked', true).change();
    } else {
      $("input[name=year]").prop('checked', false).change();
      $("input[name=addall]").prop('checked', false).change();
    }
  });
  $("input[name=year]").change(function () {
    $("input[name=addall]").prop('checked', false);
    var a = $("input[name=year]");

    if (a.length == a.filter(":checked").length) {
      $("input[name=addall]").prop('checked', true);
    }
  }); // function updateAllChecked() {
  //   $('.years :checkbox:checked').each(function (ind, ele) {
  //
  //
  //   if($(this).prop("checked")== true) {
  //
  //     $('.filter-attr-list').find('li').remove();
  //
  //     // $('.filter-attr-list').append("<li class='results selected' data-year=" + this.value + ">" + this.value + "<div class='removeTag'><i class='fal fa-times ml-1'></i></div></li>");
  //
  //   }
  //
  //   else {
  //     $(".filter-attr-list li[data-year=" + this.value + "]").remove()
  //   }
  //
  //   });
  //
  //
  // }
  //
  // updateAllChecked()
  //levels topics checkboxes
  //clicking on add as row

  $('.addRow').on('click', function (e) {
    var obj = $(this).closest('.levels').find('input[data-level]').val();
    var x = $(this).closest('.levels').find('input[data-level]').prop("checked", true);
    var variableObj = $(this).closest('.levels').find(".variableName li[data-variable]").html();
    var categoryObj = $(this).closest('.levels').find('.categories li');
    console.log(variableObj);
    var Opt01 = "";
    $(categoryObj).each(function () {
      Opt01 = Opt01 + this.outerHTML; // console.log(Opt01);
    }); // console.log(Opt01);
    // if($(this).closest('.levels').find('input[data-level]').prop("checked")==true) {

    $('#rowTopic').append("<div class='levels custom-control custom-checkbox'><input type='checkbox' name='levels' data-level='" + obj + "' value='" + obj + "' class='custom-control-input' id='" + obj + "'><label class='custom-control-label' for='" + obj + "'><p class='blue'>" + obj + "</p></label><div class=\"reorder hidden\"><div class='horizontal'><p>Variable Name:</p><ul class='variableName'><li name='variableName' data-variable='" + variableObj + "' value='" + variableObj + "'>" + variableObj + "</li></ul></div><div class='horizontal'><p>Categories:</p><ul class='categories'>" + Opt01 + "</ul></div></div><div class='deleteOptions'><i class='fal fa-sort-alt categoriesModal' role='button' tabindex='0'></i>&nbsp;&nbsp;<i class='fal fa-trash-alt removeLevel' role='button' tabindex='0'></i></div></div>");
    $(this).closest('.levels').find('input[data-level]').parent().hide(); // }

    $('.categoriesModal').unbind("click").on('click', function () {
      $('#reorderCategories').modal('show');
      var categoryLi = $(this).closest('.levels').find('.categories li');
      console.log(categoryLi);
      var Opt02 = "";
      $(categoryLi).each(function () {
        Opt02 = Opt02 + this.outerHTML;
      }); // console.log(Opt02)

      $('.addCategories').append(Opt02);
      $('.addCategories li .custom-control').removeClass('hidden');
      $('.closeCategoryModal').click(function () {
        $('.addCategories').empty();
      });
    });
    $("#rowTopic .levels:nth-child(4)").nextAll(".levels").addClass('noWidth');

    if ($('#rowTopic .levels').length > 3) {
      console.log("more than");
      $('.whiteBar').fadeIn(); // $(levels).each(function() {
      //       $(this).addClass('noWidth'); //This doesn't run one at a time
      //    });
      //
      // $('#rowTopic .levels').slice(3).css({
      //   'height' : '0px',
      //   'width' : '0px',
      //   'opacity' : '0'
      // });
      // $('.whiteBar').fadeIn()
      // $('#layerTopic').animate({
      //
      //   minHeight: 80,
      //   maxHeight:80,
      //   height:80
      //
      // },1000);
    }

    $('.numberCounter').html(function (i, val) {
      return val * 1 + 1;
    });

    if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length > 0 && $('#layerTopic .levels').length > 0) {
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() + 94);
    }
  });
  $('#rowTopic').on('mouseenter', function (e) {
    if ($('.whiteBar').css('display') == 'block') {
      e.stopPropagation();
      $('.whiteBar').hide();
      $("#rowTopic .levels:nth-child(4)").nextAll(".levels").removeClass('noWidth');
      $('#rowTopic').animate({
        minHeight: "none",
        maxHeight: "100%",
        height: "100%"
      }, 400);
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() + 20);
    }
  });
  $('#rowTopic').on('mouseleave', function (e) {
    if ($('.whiteBar').css('display') == 'none' && $('#rowTopic .levels').length > 3) {
      e.stopPropagation();
      $('.whiteBar').show();
      $("#rowTopic .levels:nth-child(4)").nextAll(".levels").addClass('noWidth');
      $('#rowTopic').animate({
        minHeight: "none",
        maxHeight: "85px",
        height: "auto"
      }, 400);
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height());
    } // if ($('#rowTopic .levels').length < 4 ) {
    //
    //     $('#rowTopic').animate({
    //       minHeight: "none",
    //       maxHeight:"85px",
    //       height:"auto"
    //
    //     },300);
    //
    //   }
    //
    //
    //     if ( $('#rowTopic .levels').length < 1 ) {
    //
    //         $('#rowTopic').animate({
    //           minHeight: "none",
    //           maxHeight:"85px",
    //           height:"auto"
    //
    //         }, 300);
    //
    //
    // }

  }); // $('.whiteBar .fas').on('mouseleave', function(e) {
  //   e.stopPropagation()
  //     $('.whiteBar').show()
  //
  //     $("#rowTopic .levels:nth-child(4)").nextAll( ".levels" ).addClass('noWidth')
  //
  //           // $('#rowTopic').animate({
  //           //   minHeight: "0px",
  //           //   maxHeight:"85px",
  //           //   height:"auto"
  //           //
  //           // },100);
  //           //
  //
  // })

  $('#rowTopic').on('click', '.removeLevel', function () {
    var el = $(this).closest('.levels').find('input[data-level]').val();
    console.log(el); // var levels = $(this).parent().parent();

    $('#rowTopic .levels').each(function () {
      $(this).removeClass("noWidth");
    }); //
    // if($(this).closest('.levels').find('input[data-level =" '+el+' "]').val() == $('.addRow').closest('.levels').find('input[data-level =" '+el+' "]').val()) {
    //
    //   console.log('fuck')

    $('.addRow').closest('.levels').find("input[data-level='" + el + "']").parent().show();
    $('.addRow').closest('.levels').find("input[data-level='" + el + "']").prop("checked", false); //   if ($('#rowTopic .levels').length == 0) {
    //
    // $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height())
    // }
    // }

    if ($('#rowTopic .levels').length < 3) {
      $('#rowTopic').animate({
        minHeight: "none",
        maxHeight: "85px",
        height: "auto"
      }, 400);
    }

    if ($('#rowTopic .levels').length > 3) {
      // alert("more than")
      // $('#rowTopic .levels').not().slice(3).css({
      //   'height' : 'auto',
      //   'width' : 'auto',
      //   'opacity' : '1'
      // });
      $('.whiteBar').fadeOut('slow'); // $('#rowTopic').animate({
      //
      //   minHeight: 80,
      //   maxHeight:80,
      //   height:80
      //
      // },1000);
    }

    $('.numberCounter').html(function (i, val) {
      return val * 1 - 1;
    });
    $(this).closest('.levels').remove();
  }); // $(".years :checkbox").change(function(){
  //
  //   // var saveYear = $('.saveYear')
  //   // $('.filter-attr-list').empty().append(saveYear)
  //   console.log(this.value)
  //   if($(this).prop("checked")==true){
  //     $('.filter-attr-list').append("<li class='results selected' data-year=" + this.value + ">" + this.value + "<div class='removeTag'><i class='fal fa-times ml-1'></i></div></li>");
  //   }
  //
  //   else{
  //     $(".filter-attr-list li[data-year=" + this.value + "]").remove()
  //   };
  //
  //   $(".filter-attr-list [data-year]").on('click',  function(){
  //     $("input[name=addall]").prop('checked', false);
  //     var yearName = $(this).attr("data-year");
  //
  //     $(".years :checkbox[value=" + $(this).attr("data-year") + "]").prop("checked",false);
  //
  //     $(this).remove();
  //   });
  // });
  //clicking on add as column

  $('.addColumn').on('click', function () {
    var obj = $(this).closest('.levels').find('input[data-level]').val();
    var x = $(this).closest('.levels').find('input[data-level]').prop("checked", true);

    if ($(this).closest('.levels').find('input[data-level]').prop("checked") == true) {
      $('#columnTopic').append("<div class='levels custom-control custom-checkbox'><input type='checkbox' name='levels' data-level='" + obj + "' value='" + obj + "' class='custom-control-input' id='" + obj + "'><label class='custom-control-label' for='" + obj + "'><p class='blue'>" + obj + "</p></label><div class='deleteOptions'><i class='fal fa-sort-alt categoriesModal' role='button' tabindex='0'></i>&nbsp;&nbsp;<i class='fal fa-trash-alt removeLevel' role='button' tabindex='0'></i></div></div>");
      $(this).closest('.levels').find('input[data-level]').parent().hide();
    }

    if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length > 0 && $('#layerTopic .levels').length > 0) {
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() + 90);
    }
  });
  $('#columnTopic').on('click', '.removeLevel', function () {
    var el = $(this).closest('.levels').find('input[data-level]').val();
    $('.addColumn').closest('.levels').find("input[data-level='" + el + "']").parent().show().css('display', 'flex');
    $('.addColumn').closest('.levels').find("input[data-level='" + el + "']").prop("checked", false);
    $(this).closest('.levels').remove();
  }); //clicking on add as layer

  $('.addLayer').on('click', function () {
    var obj = $(this).closest('.levels').find('input[data-level]').val();
    var x = $(this).closest('.levels').find('input[data-level]').prop("checked", true);

    if ($(this).closest('.levels').find('input[data-level]').prop("checked") == true) {
      $('#layerTopic').append("<div class='levels custom-control custom-checkbox'><input type='checkbox' name='levels' data-level='" + obj + "' value='" + obj + "' class='custom-control-input' id='" + obj + "'><label class='custom-control-label' for='" + obj + "'><p class='blue'>" + obj + "</p></label><div class='deleteOptions'><i class='fal fa-sort-alt categoriesModal' role='button' tabindex='0'></i>&nbsp;&nbsp;<i class='fal fa-trash-alt removeLevel' role='button' tabindex='0'></i></div></div>");
      $(this).closest('.levels').find('input[data-level]').parent().hide();
    }

    if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length > 0 && $('#layerTopic .levels').length > 0) {
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() + 90);
    }

    if ($('#layerTopic .levels').length == 1) {
      $(".addLayer").off("click");
    } else {
      $(".addLayer").on("click");
    }
  });
  $('#layerTopic').on('click', '.removeLevel', function () {
    var el = $(this).closest('.levels').find('input[data-level]').val();
    $('.addLayer').closest('.levels').find("input[data-level='" + el + "']").parent().show().css('display', 'flex');
    $('.addLayer').closest('.levels').find("input[data-level='" + el + "']").prop("checked", false);
    $(this).closest('.levels').remove();
  }); // $('.removeLevel').click(function() {
  //   var obj = $(this).parent().parent().siblings().val();
  //   var checkedBox = $(this).parent().parent().siblings().closest(':checkbox[data-level]').prop("checked", false);
  //
  //
  //
  //   // $(obj).attr("checked","checked")
  //
  //   // var checkboxValue = $(this).parent().parent().siblings().find("input[data-level='" + obj.value + "']")
  //   // console.log(checkboxValue)
  //
  //   if($(checkedBox).prop("checked")==false){
  //
  //     // $('#rowTopic').append(`<div class='levels custom-control custom-checkbox'><input type='checkbox' name='levels' data-level='${obj}' value='${obj.value}' class='custom-control-input id='${obj}'><label class='custom-control-label' for='${obj}'><p class='blue'>${obj}</p></label><div class='deleteOptions'><i class='fal fa-expand-arrows'></i>&nbsp;&nbsp;<i class='fal fa-trash-alt removeLevel'></i></div></div>`);
  //
  //     $(checkedBox).parent().fadeIn()
  //
  //   }
  //
  //   if ($('#rowTopic .levels').length > 3) {
  //     console.log("more than")
  //
  //     $('#rowTopic .levels').slice(3).hide();
  //     $('.whiteBar').fadeIn()
  //
  //   }
  //
  // });
  //
  // $(".topicLevels :checkbox").change(function(){
  //
  //   console.log(this.value)
  //   if($(this).prop("checked")==true){
  //
  //
  //     $('#rowTopic').append(`<div class='levels custom-control custom-checkbox'><input type='checkbox' name='levels' data-level='${this.value}' value='${this.value}' class='custom-control-input id='${this.value}'><label class='custom-control-label' for='${this.value}'><p class='blue'>${this.value}</p></label><div class='deleteOptions'><i class='fal fa-expand-arrows'></i>&nbsp;&nbsp;<i class='fal fa-trash-alt'></i></div></div>`);
  //
  //   // $('#rowTopic').append("<div class='levels custom-control custom-checkbox'><input type='checkbox' name='levels' data-level='" + this.value + "' value='" + this.value + "' class='custom-control-input id='" + this.value + "'><label class='custom-control-label' for='" + this.value + "'><p class='blue'>" + this.value + "</p></label><div class='deleteOptions'><i class='fal fa-expand-arrows'></i>&nbsp;&nbsp;<i class='fal fa-trash-alt'></i></div></div>");
  //
  //     $(this).parent().fadeOut()
  //
  //   }
  //
  //
  //   if ($('#rowTopic .levels').length > 3) {
  //   console.log("more than")
  //
  //     $('#rowTopic .levels').slice(3).hide();
  //     $('.whiteBar').fadeIn()
  //
  //   }
  //
  //
  //
  //
  //
  // });
  //adding href and id to accordions dynamically for checkboxes

  var hash = 1;
  $(".accordion-toggle").each(function (i) {
    var count = "collapseAccord" + ++hash;
    $(this).attr("href", "#" + count);
    $(this).attr("aria-controls", count);
    $(this).closest('.custom-checkbox').find(".collapse").attr("id", count);
  });
  $(".levels .accordion-toggle").click(function () {
    $(this).closest('.custom-control').toggleClass('activeCustomControl'); // $(this).closest('.custom-checkbox').find(".collapse").show();
    // $(this).closest('.custom-checkbox').siblings().find('.collapse').hide()

    $(this).closest('.custom-control').find('.orangeHover').toggleClass('showIt2');
    $(this).closest('.custom-control').find('.endOptions').toggleClass('showIt');
  }); //scroll to open accordion in listArea

  $('.levels .collapse').on('show.bs.collapse', function (e) {
    var $panel = $(this).closest('.levels').find('.accordion-toggle');
    var $open = $(this).closest('.levels').find('.collapse');

    if ($(this).closest('.levels').find('.collapse').height() > 200) {
      var additionalOffset = 250;
    } else {
      var additionalOffset = 350;
    }

    console.log(additionalOffset);

    if ($panel.prevAll().filter($open.closest('.accordion-toggle')).length !== 0) {
      additionalOffset = $open.height();
    }

    $('.listArea').animate({
      scrollTop: $panel.offset().top - additionalOffset
    }, 1000);
    $('.listArea2').animate({
      scrollTop: $panel.offset().top - additionalOffset
    }, 1000);
  }); //move zip case tab on window shrink

  $(window).scroll(function () {
    var distanceY = window.pageYOffset || document.documentElement.scrollTop;

    if (distanceY > 100) {
      $('#one').css({
        top: "92px"
      });
    } else {
      $('#one').css({
        top: "270px"
      });
    }
  }); // drag and drop functionality

  if (!document.querySelectorAll || !('draggable' in document.createElement('span')) || window.opera) {
    return;
  } //get the collection of draggable items and add their draggable attribute


  for (var items = document.querySelectorAll('[data-draggable="item"]'), len = items.length, i = 0; i < len; i++) {
    items[i].setAttribute('draggable', 'true');
  } //variable for storing the dragging item reference
  //this will avoid the need to define any transfer data
  //which means that the elements don't need to have IDs


  var item = null;
  document.addEventListener("drag", function (event) {}, false); // //dragstart event to initiate mouse dragging

  document.addEventListener('dragstart', function (e) {
    $('#rowTopic').animate({
      minHeight: 20,
      paddingTop: 25
    }, 100);
    $('#columnTopic').animate({
      minHeight: 80,
      paddingTop: 25
    }, 100);
    item = e.target; // console.log('moving first time')
    //we don't need the transfer data, but we have to define something
    //otherwise the drop action won't work at all in firefox
    //most browsers support the proper mime-type syntax, eg. "text/plain"
    //but we have to use this incorrect syntax for the benefit of IE10+

    e.dataTransfer.setData('text', '');
  }, false); // dragover event to allow the drag by preventing its default
  // ie. the default action of an element is not to allow dragging

  document.addEventListener('dragover', function (e) {
    console.log('moving second time');

    if (item) {
      e.preventDefault(); // $(item).closest('.levels').find('input[data-level]').prop("checked", true);
    }
  }, false); //drop event to allow the element to be dropped into valid targets

  document.addEventListener('drop', function (e) {
    console.log('moving third time');
    $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() + 90); // $('.levels').addClass('dragged')
    //if this element is a drop target, move the item here
    //then prevent default to allow the action (same as dragover)

    if (e.target.getAttribute('data-draggable') == 'target') {
      console.log('moving fourth time');
      var thing = e.target.appendChild(item); //     function handle_drop_patient(event, ui) {
      //          $(this).append( $(ui.draggable).clone().css({'float':'left','display':'block'}) );
      //          $(ui.draggable).remove();
      //     }
      //     $(thing).droppable({
      //     classes: {
      //       'ui-droppable': 'highlight'
      //     },
      //     drop: handle_drop_patient
      // });
      //
      //       $(thing).addClass( "ui-state-highlight" )
      //
      //   if ($('#rowTopic .levels').length > 3) {
      //
      //   $(thing).draggable().css("position", "absolute");
      //
      //
      // }
      // $('#rowTopic').on('mouseenter' , function() {
      //   alert("kubfwubih89figu43")
      // })

      if ($('#rowTopic .levels').length > 3) {
        console.log("more than");
        $('#rowTopic .levels').slice(3).css({
          'height': '0px',
          'width': '0px',
          'opacity': '0'
        });
        $('.whiteBar').css({
          'height': '100px',
          'top': '80px'
        }).fadeIn(); // $('#rowTopic').animate({
        //
        //   minHeight: 80,
        //   maxHeight:80,
        //   height:80
        //
        // },1000);
      }

      $('.numberCounter').html(function (i, val) {
        return val * 1 + 1;
      });

      if ($(thing).children('.deleteOptions').length == 0) {
        $('<div class="deleteOptions"><i class="fal fa-expand-arrows"></i>&nbsp;&nbsp;<i class="fal fa-trash-alt removeDrag"></i></div>').appendTo(thing);
      } //
      // else {
      //
      //   $(thing).detach($('<div class="deleteOptions"><i class="fal fa-expand-arrows"></i>&nbsp;&nbsp;<i class="fal fa-trash-alt"></i></div>'))
      // }
      // $('#rowTopic').on('click', '.removeDrag' , function() {
      //
      //     // $('.topicLevels').append($(thing).closest('.levels'))
      //
      //       // $(this).closest('.levels').remove();
      //       $(this).closest('.levels').appendTo('.topicLevels')
      //
      //     // $(this).closest('#rowTopic [data-draggable]').remove();
      //
      //   // $(this).closest('.levels').find('input[data-level]').prop("checked", false);
      //
      //
      //   if ($('#rowTopic .levels').length == 0) {
      //     $('#rowTopic').animate({
      //
      //       minHeight: 0,
      //       paddingTop:0
      //
      //     },100);
      //   }
      //
      //   $('.numberCounter').html(function(i, val) { return val*1 - 1 });
      //
      //
      // })
      // if ($('#rowTopic .levels').length > 3) {
      //   console.log("more than")
      //
      //
      //   // $('#rowTopic .levels').slice(3).hide();
      //   $('.whiteBar').fadeIn()
      //
      //
      //   // $('#rowTopic').animate({
      //   //
      //   //   minHeight: 80,
      //   //   maxHeight:80,
      //   //   height:80
      //   //
      //   // },1000);
      //
      //
      // }
      //
      // if  ($('.topicLevels .levels').length > 3) {
      //     console.log("less than")
      //
      //     $('#rowTopic .levels').show();
      //   }
      //     some(function(e) {
      //       let elements = document.elementsFromPoint(e.clientX, event.clientY);
      //       let target = elements.find(e => e.matches('.whiteBar'));
      //       target.dispatchEvent(new DragEvent('drop', {
      //
      //       }));
      //     })
      // some()


      e.preventDefault();
    }
  }, false); //dragend event to clean-up after drop or abort
  //which fires whether or not the drop target was valid

  document.addEventListener('dragend', function (e) {
    console.log('moving fifth time');
    item = null;
  }, false);
  $('#rowTopic').on('click', '.removeDrag', function () {
    // $('.topicLevels').append($(thing).closest('.levels'))
    // $(this).closest('.levels').remove();
    $(this).closest('.levels').appendTo('.topicLevels'); // $(this).closest('#rowTopic [data-draggable]').remove();
    // $(this).closest('.levels').find('input[data-level]').prop("checked", false);
    // if ($('#rowTopic .levels').length > 1) {

    $('#rowTopic').animate({
      minHeight: 0,
      paddingTop: 0
    }, 100); // }
    // if ($('#rowTopic .levels').length > 1) {
    // alert("more than")

    $('#rowTopic .levels').not().slice(2).css({
      'height': 'auto',
      'width': 'auto',
      'opacity': '1'
    });
    $('.whiteBar').css({
      'height': '60px',
      'top': '40px'
    }).fadeOut('slow'); // $('#rowTopic').animate({
    //
    //   minHeight: 80,
    //   maxHeight:80,
    //   height:80
    //
    // },1000);
    // }

    $('.numberCounter').html(function (i, val) {
      return val * 1 - 1;
    });
  }); // $('.listArea .topicLevels .levels .deleteOptions').hide()
  //
  // if ($('#rowTopic .levels').length < 1) {
  //
  //   console.log("fucker")
  //   $('#rowTopic').animate({
  //
  //     minHeight: "0px"},
  //
  //   );
  //
  // }
  //make the nav item have active line on current page

  var path = window.location.href;
  $('.navbar-nav li a').each(function () {
    if (this.href === path) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  }); //make the nav item children have active line on current page

  $('.navbar-nav li .dropdown-menu .dropdown-item').each(function () {
    if (this.href === path) {
      $(this).parent().siblings('a').addClass('active'); // $(this).removeClass('active');
    } else {
      $(this).removeClass('active');
    }
  });
});
