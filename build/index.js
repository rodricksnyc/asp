"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {
  var _classes;

  $('[data-toggle=tooltip]').tooltip(); // Let the document know when the mouse is being used

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

  if ($('body').hasClass('analysis')) {
    $('.option[data-type="topics"]').addClass('hidden').show();
    $('.option[data-type="data"]').addClass('hidden').show();
    $('.option[data-type="marks"]').addClass('hidden').show();
    $('.option[data-type="stats"]').addClass('hidden').show();
  }

  if ($('body').hasClass('analysis2')) {
    $('.option[data-type="topics"]').removeClass('hidden').show();
    $('.option[data-type="data"]').addClass('hidden').show();
    $('.option[data-type="marks"]').addClass('hidden').show();
    $('.option[data-type="stats"]').addClass('hidden').show();
  }

  if ($('body').hasClass('analysis3')) {
    $('.option[data-type="topics"]').removeClass('hidden').show();
    $('.option[data-type="data"]').addClass('hidden').show();
    $('.option[data-type="stats"]').addClass('hidden').show();
  }

  $('.views[data-type="horizontal"]').removeClass('hidden').show();
  $('.views[data-type="blocks"]').addClass('hidden').show().css('display', 'flex');
  $('.viewType').click(function (evt) {
    evt.preventDefault();
    evt.stopPropagation();
    var viewType = $(this),
        allViewItems = $('.viewType'),
        currentClass = 'current';
    allViewItems.removeClass(currentClass);
    viewType.addClass(currentClass);
    var type = $(this).data('type');
    $('.views').addClass('hidden');
    $('.views[data-type="' + type + '"]').removeClass('hidden');
  }); //hover for dropdown items in main navbar

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
  });
  $('.submenu').on("mouseenter", function (e) {
    $(this).next('.small-dropdown-menu').show();
    e.stopPropagation(); // e.preventDefault();
  });
  $('.dropdown-menu').on("mouseleave", function (e) {
    $('.small-dropdown-menu').hide();
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
  }

  if ($('body').hasClass('analysis2')) {
    $('#navbarDropdownMenuAnalysis .down').html('Analysis on Demand');
    $('.down:after').css('content', 'none ');
  }

  if ($('body').hasClass('analysis3')) {
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
  }); //zip case slider

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
  $('.backdropShadow').click(function () {
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
  $('.backdropShadow').click(function (e) {
    e.stopPropagation();
    $('.backdropShadow').fadeOut();
    $("#slideOutLeft").animate({
      left: "-400"
    }, 800, function () {});
    $('#slideOutRight').css('z-index', '10');
    $('.projects').attr('tabindex', '0');
    $('#accordion a').attr('tabindex', '-1');
    $('#accordion a').attr('aria-hidden', 'true');
  }); // }

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

  $('.categoricalHeader').keypress(categorical).click(categorical);
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
  }); //levels

  var zero = 0;
  var one = 1;
  var two = 2;
  var three = 3;
  var four = 4;
  var five = 5;
  var six = 6;
  var seven = 7;

  var tableLevel0 = function tableLevel0() {
    if ($(this).attr('value')) {
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + 170);

      if ($('#analysisTopic .levels').length > 0) {
        $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + 270);
      }

      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(zero).val(); // $('.levelTopicAreaNumber').append(one).val();

      $('.listArea').addClass('animated fadeIn').show();
      $('.listArea2').removeClass('animated fadeIn').hide();
    }
  };

  $('.tableVariables .level0').keypress(tableLevel0).click(tableLevel0);

  var analysisLevel0 = function analysisLevel0() {
    if ($(this).attr('value')) {
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 220);
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(zero).val(); // $('.levelTopicAreaNumber').append(one).val();

      $('.listArea2').addClass('animated fadeIn').show();
      $('.listArea').removeClass('animated fadeIn').hide();
    }
  };

  $('.analysisVariables .level0').keypress(analysisLevel0).click(analysisLevel0);

  var tableLevel1 = function tableLevel1() {
    if ($(this).attr('value')) {
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + 170);

      if ($('#analysisTopic .levels').length > 0) {
        $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + 270);
      }

      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(one).val(); // $('.levelTopicAreaNumber').append(one).val();

      $('.listArea').addClass('animated fadeIn').show();
      $('.listArea2').removeClass('animated fadeIn').hide();
    }
  };

  $('.tableVariables .level1 .addToList').keypress(tableLevel1).click(tableLevel1);

  var analysisLevel1 = function analysisLevel1() {
    if ($(this).attr('value')) {
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 220);
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(one).val(); // $('.levelTopicAreaNumber').append(one).val();

      $('.listArea2').addClass('animated fadeIn').show();
      $('.listArea').removeClass('animated fadeIn').hide();
    }
  };

  $('.analysisVariables .level1 .addToList').keypress(analysisLevel1).click(analysisLevel1);

  var tableLevel2 = function tableLevel2() {
    if ($(this).attr('value')) {
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + 170);
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(two).val(); // $('.levelTopicAreaNumber').html(two + '1')

      $('.listArea').addClass('animated fadeIn').show();
      $('.listArea2').removeClass('animated fadeIn').hide();
    }
  };

  $('.tableVariables .level2 .addToList').keypress(tableLevel2).click(tableLevel2);

  var analysisLevel2 = function analysisLevel2() {
    if ($(this).attr('value')) {
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 220);
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(two).val(); // $('.levelTopicAreaNumber').html(two + '1')

      $('.listArea2').addClass('animated fadeIn').show();
      $('.listArea').removeClass('animated fadeIn').hide();
    }
  };

  $('.analysisVariables .level2 .addToList').keypress(analysisLevel2).click(analysisLevel2);

  var tableLevel3 = function tableLevel3() {
    if ($(this).attr('value')) {
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + 170);
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(three).val();
      $('.listArea').addClass('animated fadeIn').show();
      $('.listArea2').removeClass('animated fadeIn').hide();
    }
  };

  $('.tableVariables .level3 .addToList').keypress(tableLevel3).click(tableLevel3);

  var analysisLevel3 = function analysisLevel3() {
    if ($(this).attr('value')) {
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 220);
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(three).val();
      $('.listArea2').addClass('animated fadeIn').show();
      $('.listArea').removeClass('animated fadeIn').hide();
    }
  };

  $('.analysisVariables .level3 .addToList').keypress(analysisLevel3).click(analysisLevel3);

  var tableLevel4 = function tableLevel4() {
    if ($(this).attr('value')) {
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + 170);
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(four).val();
      $('.listArea').addClass('animated fadeIn').show();
      $('.listArea2').removeClass('animated fadeIn').hide();
    }
  };

  $('.tableVariables .level4 .addToList').keypress(tableLevel4).click(tableLevel4);

  var analysisLevel4 = function analysisLevel4() {
    if ($(this).attr('value')) {
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 220);
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(four).val();
      $('.listArea2').addClass('animated fadeIn').show();
      $('.listArea').removeClass('animated fadeIn').hide();
    }
  };

  $('.analysisVariables .level4 .addToList').keypress(analysisLevel4).click(analysisLevel4);

  var tableLevel5 = function tableLevel5() {
    if ($(this).attr('value')) {
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + 170);
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(five).val();
      $('.listArea').addClass('animated fadeIn').show();
      $('.listArea2').removeClass('animated fadeIn').hide();
    }
  };

  $('.tableVariables .level5 .addToList').keypress(tableLevel5).click(tableLevel5);

  var analysisLevel5 = function analysisLevel5() {
    if ($(this).attr('value')) {
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 220);
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(five).val();
      $('.listArea2').addClass('animated fadeIn').show();
      $('.listArea').removeClass('animated fadeIn').hide();
    }
  };

  $('.analysisVariables .level5 .addToList').keypress(analysisLevel5).click(analysisLevel5);

  var tableLevel6 = function tableLevel6() {
    if ($(this).attr('value')) {
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + 170);
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(six).val();
      $('.listArea').addClass('animated fadeIn').show();
      $('.listArea2').removeClass('animated fadeIn').hide();
    }
  };

  $('.tableVariables .level6 .addToList').keypress(tableLevel6).click(tableLevel6);

  var analysisLevel6 = function analysisLevel6() {
    if ($(this).attr('value')) {
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 220);
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(six).val();
      $('.listArea2').addClass('animated fadeIn').show();
      $('.listArea').removeClass('animated fadeIn').hide();
    }
  };

  $('.analysisVariables .level6 .addToList').keypress(analysisLevel6).click(analysisLevel6);

  var tableLevel7 = function tableLevel7() {
    if ($(this).attr('value')) {
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + 170);
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(seven).val();
      $('.listArea').addClass('animated fadeIn').show();
      $('.listArea2').removeClass('animated fadeIn').hide();
    }
  };

  $('.tableVariables .level7 .addToList').keypress(tableLevel7).click(tableLevel7);

  var analysisLevel7 = function analysisLevel7() {
    if ($(this).attr('value')) {
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 220);
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(seven).val();
      $('.listArea2').addClass('animated fadeIn').show();
      $('.listArea').removeClass('animated fadeIn').hide();
    }
  };

  $('.analysisVariables .level7 .addToList').keypress(analysisLevel7).click(analysisLevel7); //scale logo

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
  }).trigger('resize'); //gray overlay on query summary

  $('.grayLayer').css('top', $('.lightBlueBack').height()); //years checkboxes

  $(".years :checkbox").change(function () {
    console.log(this.value);

    if ($(this).prop("checked") == true) {
      $('.filter-attr-list').append("<li class='results selected' data-year=\"" + this.value + "\">" + this.value + "<div class='removeTag'><i class='fal fa-times ml-1'></i></div></li>");
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
  }); //close list areas

  var closeListArea = function closeListArea() {
    $(this).find('i').toggleClass('fa-plus fa-minus');

    if ($(this).find('i').hasClass('fa-plus')) {
      $('.listArea').animate({
        height: '2.7em'
      }, 300);
      $('.listArea2').animate({
        height: '2.7em'
      }, 300);
    } else {
      $('.listArea').animate({
        height: '27em'
      }, 300);
      $('.listArea2').animate({
        height: '27em'
      }, 300);
    }
  };

  $('.closeLevels').keypress(closeListArea).click(closeListArea);
  var pageModule = {
    config: {
      classes: (_classes = {
        activeLevel: '.activeLevel',
        numberCounter: '.numberCounter',
        groupCheckbox: '.addCategories input:checkbox',
        globalCheckbox: 'input:checkbox',
        groupButton: '.combine',
        showModal: '#reorderCategories',
        groupWords: '.groupTopics',
        checked: ".addCategories input:checkbox:checked",
        removeLevel: '.removeLevel',
        removeRow: '#rowTopics .removeLevel',
        removeColumn: '#columnTopics .removeLevel',
        reorderOptions: '.categories li .custom-control',
        mergedCategories: '.merged .custom-control',
        addCustomControl: '.addCategories li .custom-control',
        modalList: '.addCategories li',
        modal: '.categoriesModal'
      }, _defineProperty(_classes, "reorderOptions", '.reorderOptions'), _defineProperty(_classes, "add", '.addCategories'), _defineProperty(_classes, "closeModal", '.closeCategoryModal'), _defineProperty(_classes, "save", '.save'), _defineProperty(_classes, "expand", '.appendActions .orangeCircle'), _defineProperty(_classes, "plusRow", '.plusRow'), _defineProperty(_classes, "mergedCheckbox", '.merged .custom-checkbox'), _defineProperty(_classes, "mergedCheck", ".merged input:checkbox"), _defineProperty(_classes, "activeLi", 'li .reorderActive'), _defineProperty(_classes, "separate", '.separate'), _defineProperty(_classes, "merged", '.merged'), _defineProperty(_classes, "groupedCategories", '.groupedCategories'), _defineProperty(_classes, "rowLevel", '#rowTopic .levels'), _defineProperty(_classes, "columnLevel", '#columnTopic .levels'), _defineProperty(_classes, "layerLevel", '#layerTopic .levels'), _defineProperty(_classes, "analysisLevel", '#analysisTopic .levels'), _defineProperty(_classes, "addCategoriesUL", '.addCategories .categories'), _classes)
    },
    modalFunc: function modalFunc() {
      var modal = pageModule.config.classes.modal;
      var showModal = pageModule.config.classes.showModal;
      var add = pageModule.config.classes.add;
      var addCustomControl = pageModule.config.classes.addCustomControl;
      var modalInputs = pageModule.config.classes.groupCheckbox;
      var button = pageModule.config.classes.groupButton;
      var words = pageModule.config.classes.groupWords;
      var checkedInputs = pageModule.config.classes.checked;
      var groupNumber = $(checkedInputs).length;
      var closeModal = pageModule.config.classes.closeModal;
      var save = pageModule.config.classes.save;
      var remove = pageModule.config.classes.removeLevel;
      var mergedCheck = pageModule.config.classes.mergedCheck;
      var inputs = pageModule.config.classes.globalCheckbox;
      var mergedCategories = pageModule.config.classes.mergedCategories;
      var mergedCheckbox = pageModule.config.classes.mergedCheckbox;
      var checkedInputs = pageModule.config.classes.checked;
      var modalList = pageModule.config.classes.modalList;
      var mergedCheck = pageModule.config.classes.mergedCheck;
      var separate = pageModule.config.classes.separate;
      var groupedCategories = pageModule.config.classes.groupedCategories;
      var merged = pageModule.config.classes.merged;
      var reorderOptions = pageModule.config.classes.reorderOptions;
      var rowLevel = pageModule.config.classes.rowLevel;
      var columnLevel = pageModule.config.classes.columnLevel;
      var layerLevel = pageModule.config.classes.layerLevel;
      var analysisLevel = pageModule.config.classes.analysisLevel;
      var addCategoriesUL = pageModule.config.classes.addCategoriesUL;
      var groupCheckbox = pageModule.config.classes.groupCheckbox;
      var horizontal = "";
      var original = "";
      $(modal).on('click', function () {
        $(showModal).modal('show');
        var categoryLi = $(this).closest('.levels').find('.categories');
        var horizontal = $(this).closest('.levels').find('.horizontal:eq(1)');
        var card = $(this).closest('.levels').find('.card');
        var bubbleDivs = $(this).closest('.levels').find('.merged'); // var Opt44 = "";
        // $(bubbleDivs).each(function() {
        //   Opt44 = Opt44 + this.outerHTML;
        //
        // });

        $(horizontal).empty();
        var original = $(categoryLi).clone();
        $(add).append(categoryLi); // $('.groupedCategories').append(Opt44)
        //
        // $(groupedCategories).empty()
        //
        //
        // // if ($(bubbleDivs).length > 0) {
        //   $('.groupedCategories').append(Opt44)
        // // }

        $(reorderOptions).removeClass('hidden');
        $('.addCategories').click('input:checkbox', function () {
          // if($(this).prop("checked")==true){
          //
          //   $(this).closest('li').find('.custom-checkbox').addClass('reorderActive')
          // }
          //
          // else{
          //   $(this).closest('li').find('.custom-checkbox').removeClass('reorderActive')
          //
          // };
          var groupNumber = $(checkedInputs).length;
          var groupCounter = "Combine " + groupNumber;

          if ($(checkedInputs).length >= 2) {
            $(button).addClass('brightBlue');
            $(words).html(groupCounter);
          } else {
            $(button).removeClass('brightBlue');
            $(words).html('Select to group');
          }
        });
        $(addCustomControl).removeClass('hidden');

        var emptyModal = function emptyModal() {
          var items = $('.merged').find('input').parent().parent();
          $(horizontal).empty().append(original);
          $(add).empty();
          $(button).removeClass('brightBlue');
          $(words).html('Select to group');
          $('.addCategories .categories').append(items);
          $('.merged').remove();
          $('.addCategories input[type="checkbox"]').prop('checked', false);
        };

        $(closeModal).keypress(emptyModal).click(emptyModal);

        var saveModal = function saveModal(e) {
          $('.addCategories input[type="checkbox"]').prop('checked', false); //
          // var bubbles =  $(this).closest('.modal-content').find('.merged')
          // var group =  $(this).closest('.modal-content').find('.groupedCategories')
          //
          // var Opt45 = "";
          // $(bubbles).each(function() {
          //   Opt45 = Opt45 + this.outerHTML;
          //
          // });
          //
          // console.log(Opt45)
          // console.log('save')
          // console.log($(bubbles).length)

          $(horizontal).empty().append(categoryLi); // $(horizontal).append(Opt45)
          // $(group).children().appendTo(horizontal)

          $(add).empty();
          $(showModal).modal('hide');
          $(button).removeClass('brightBlue');
          $(words).html('Select to group'); // $(emptyModal).off()
        };

        $(save).keypress(saveModal).click(saveModal);
        $(button).click(function () {
          var active = $(this).closest('.modal-content').find('.reorderActive').parent();
          var x = $(this).closest('.modal-content').find('.addCategories input:checkbox:checked');
          var y = $(x).parent().parent();
          var categoryObj = $(this).closest('.modal-content').find('.addCategories input:checkbox:checked').parent().parent();
          var Opt1 = "";
          $(y).each(function () {
            Opt1 = Opt1 + this.outerHTML;
          });

          if ($(y).length > 1) {
            $(addCategoriesUL).append("<div class=\"merged\"><ul class=\"mergedUL\">" + Opt1 + "</ul><button class=\"separate\" tabindex=\"0\" role=\"button\"><div class=\"across4\"><i class=\"fal fa-arrow-left\"></i>&nbsp;|&nbsp;<i class=\"fal fa-arrow-right\"></i></div></button></div>");
            $(y).remove();
            $(mergedCategories).addClass('bottomZero');
            $(mergedCheck).removeAttr('checked');
            $(words).html('Select to group');
            $(button).removeClass('brightBlue');
          }

          if ($(y).length == 1) {
            alert("You must select 2 or more");
          }

          if ($('.merged').length > 1) {
            $('.merged').css({
              'margin-top': '1em',
              'margin-bottom': '1em'
            });
          }

          $(separate).click(function () {
            var item = $(this).closest('.merged').find('input:checkbox:checked').parent().parent();
            var items = $(this).closest('.merged').find('input').parent().parent(); // var input = $(this).closest('.merged').find('input:checkbox:checked')

            var listItem = $(this).closest('.merged').find('.mergedUL');
            $('.addCategories .categories').append(item);
            $(addCustomControl).removeClass('bottomZero'); // $('inputs').removeAttr('checked');

            $('.addCategories input[type="checkbox"]').prop('checked', false);

            if ($(listItem).children().length == 1) {
              $('.addCategories .categories').append(items); // $(separate).css('top', '24%')
            }

            if ($(listItem).children().length == 0) {
              $(this).closest('.merged').remove();
            }

            if ($('.merged').length == 1) {
              $('.merged').css({
                'margin-top': '0em',
                'margin-bottom': '0em'
              });
            }
          });
        });
      });
      $('#rowTopic').on('click', '.removeLevel', function () {
        var items = $('.merged').find('input').parent().parent();
        $('.addCategories .categories').append(items);
        $('.merged').remove();
        $('.addCategories input[type="checkbox"]').prop('checked', false);
        var el = $(this).closest('.levels').find('input[data-level]').val();
        var putBack = $(this).closest('.levels');
        $('.listArea .topicLevels').append(putBack);
        $('.addRow').closest('.levels').find("input[data-level='" + el + "']").prop("checked", false);

        if ($(rowLevel).length < 3) {
          $('#rowTopic').animate({
            minHeight: "none",
            maxHeight: "85px",
            height: "auto"
          }, 400);
        }

        if ($(rowLevel).length > 3) {
          $('.whiteBar').fadeOut('slow');
        }

        if ($(rowLevel).length == 0) {
          $('.plusRow').hide();
        }

        $('.numberCounter').html(function (i, val) {
          return val * 1 - 1;
        });
        $(".allLevels input").prop('checked', false).change();
        var el = $(this).closest('.levels').find('input[data-level]').val();

        if ($(rowLevel).length <= 2) {
          $('.plusRow').removeClass('green');
        }
      });
      $('#columnTopic').on('click', '.removeLevel', function () {
        $(horizontal).empty().append(original);
        $('#columnTopic p .evenSmaller').css('color', '#07477d');
        $('#columnTopic p .evenSmaller').html('limit 1');
        $('#columnTopic .fal.fa-info-circle').css('color', '#07477d');

        if ($(columnLevel).length > 0) {
          $('.addColumn').on("click", addColumnTopic);
        }

        $('.levels').find('.addColumn').show();

        if ($('#layerTopic .levels').length > 0) {
          $('.levels').find('.addLayer').hide();
        }

        var el = $(this).closest('.levels').find('input[data-level]').val();
        var putBack = $(this).closest('.levels');
        $('.listArea .topicLevels').append(putBack);
        $('.addColumn').closest('.levels').find("input[data-level='" + el + "']").prop("checked", false);
      });
      $('#layerTopic').on('click', '.removeLevel', function () {
        $('#layerTopic p .evenSmaller').css('color', '#07477d');
        $('#layerTopic p .evenSmaller').html('limit 1');
        $('#layerTopic .fal.fa-info-circle').css('color', '#07477d');

        if ($(layerLevel).length > 0) {
          $('.addLayer').on("click", addLayerTopic);
        }

        $('.levels').find('.addLayer').show();

        if ($(columnLevel).length > 0) {
          $('.levels').find('.addColumn').hide();
        }

        var putBack = $(this).closest('.levels');
        $('.listArea .topicLevels').append(putBack);
        var el = $(this).closest('.levels').find('input[data-level]').val();
        $('.addLayer').closest('.levels').find("input[data-level='" + el + "']").prop("checked", false);
      });
      $('#analysisTopic').on('click', '.removeLevel', function () {
        $('#analysisTopic p .evenSmaller').css('color', '#07477d');
        $('#analysisTopic p .evenSmaller').html('limit 1');
        $('#analysisTopic .fal.fa-info-circle').css('color', '#07477d');

        if ($(analysisLevel).length > 0) {
          $('.addAnalysis').on("click", addAnalysisTopic);
        }

        $('.listArea2 .topicLevels .custom-control').removeClass("noShow");
        var putBack = $(this).closest('.levels');
        $('.listArea2 .topicLevels').append(putBack);
        var el = $(this).closest('.levels').find('input[data-level]').val();
        $('.addAnalysis').closest('.levels').find("input[data-level='" + el + "']").prop("checked", false);
      });
    },
    getnumberFunc: function getnumberFunc() {
      var number = pageModule.config.classes.numberCounter;
      var showNumber = $(number).html(function (i, activeLevel) {
        return activeLevel * 1 + 1;
      });
      return showNumber;
    },
    showExpandFunc: function showExpandFunc() {
      var expand = pageModule.config.classes.expand;
      var plus = pageModule.config.classes.plusRow;
      var rowLevel = pageModule.config.classes.rowLevel;
      var columnLevel = pageModule.config.classes.columnLevel;
      var layerLevel = pageModule.config.classes.layerLevel;
      var analysisLevel = pageModule.config.classes.analysisLevel;

      var showExpand = function showExpand() {
        if ($(rowLevel).length > 0 || $(columnLevel).length > 0 || $(layerLevel).length > 0 || $(analysisLevel).length > 0) {
          $(expand).show();
        } else {
          $(expand).hide();
        }
      };

      $('body').keypress(showExpand).click(showExpand);
    },
    globalRemoveFunc: function globalRemoveFunc() {
      var inputs = pageModule.config.classes.globalCheckbox;
      var remove = pageModule.config.classes.removeLevel;
      var save = pageModule.config.classes.save;
      var reorderOptions = pageModule.config.classes.reorderOptions;
      $(remove).click(function () {
        $(inputs).removeAttr('checked');
        $(inputs).parents().removeClass('reorderActive');
        $(reorderOptions).addClass('hidden');
      });
      $(save).click(function () {
        $(inputs).removeAttr('checked');
        $(inputs).parents().removeClass('reorderActive');
        $(reorderOptions).addClass('hidden');
      });
    },
    // modalKeypressFunc: function() {
    //
    // },
    init: function init() {
      var self = this;
      console.log('this is started');
    }
  };
  pageModule.init();
  pageModule.modalFunc(); // pageModule.buttonFunc()
  // pageModule.modalKeypressFunc()

  pageModule.globalRemoveFunc();
  pageModule.getnumberFunc();
  pageModule.showExpandFunc();
  $(".listArea .levels :checkbox").change(function () {
    $(this).closest('.topicLevels .levels').addClass('activeLevel');

    if ($(this).prop("checked") == true) {
      $('.addAsRow').on('click', function () {
        $('.numberCounter').html($('#rowTopic .levels').length);
        $(this).closest('.topicLevels').find('.levels').removeClass('activeCustomControl');
        $(this).closest('.topicLevels').find('.collapse').collapse('hide');
        $(this).closest('.topicLevels').find('.accordion-toggle i').fadeIn();
        $(this).closest('.topicLevels').find('.orangeHover').removeClass('showIt2');
        $(this).closest('.topicLevels').find('.endOptions').removeClass('showIt');
        $('.activeLevel').removeClass('activeLevel').appendTo('#rowTopic');

        if ($('.levels input').is(':checked')) {}

        $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 140);

        if ($('#rowTopic .levels').length > 3) {
          $('.whiteBar').fadeIn();
        }

        $("#rowTopic .levels:nth-child(4)").nextAll(".levels").addClass('noWidth');
        $('.categoriesModal').unbind("click").on('click', function () {
          $('#reorderCategories').modal('show');
          var categoryLi = $(this).closest('.levels').find('.categories');
          var Opt02 = "";
          $(categoryLi).each(function () {
            Opt02 = Opt02 + this.outerHTML;
          });
          $('.addCategories').append(Opt02).parent();
          $('.addCategories li .custom-control').removeClass('hidden');
          $('.closeCategoryModal').click(function () {
            $('.addCategories').empty();
          });
        });
        $('.categoriesModal').unbind("keyup").on('keyup', function (e) {
          var code = e.keyCode ? e.keyCode : e.which;

          if (code == 13) {
            $('#reorderCategories').modal('show');
            var categoryLi = $(this).closest('.levels').find('.categories');
            console.log(categoryLi);
            var Opt02 = "";
            $(categoryLi).each(function () {
              Opt02 = Opt02 + this.outerHTML;
            });
            $('.addCategories').append(Opt02).parent();
            $('.addCategories li .custom-control').removeClass('hidden');
          }
        });

        var emptyModal = function emptyModal() {
          $('.addCategories').empty();
        };

        $('.closeCategoryModal').keypress(emptyModal).click(emptyModal);
      });
    } else {
      $(this).closest('.levels').removeClass('activeLevel');
    }

    ;

    if ($(".topicLevels .levels :checkbox:checked").length >= 1) {
      $('.plusRow').show();
    } else {
      $('.plusRow').hide();
    }

    if ($(".topicLevels .levels :checkbox:checked").length >= 2) {
      $('.plusRow').addClass('green');
    } else {
      $('.plusRow').removeClass('green');
    }
  });
  $(".allLevels input").click(function () {
    if (this.checked) {
      $(".listArea .levels").addClass('activeLevel'); // $(".levels :checkbox").prop('checked', true).change();
      // $(".allLevels input").prop('checked', true).change();
    } else {
      $(".listArea .levels").removeClass('activeLevel'); // $(".levels :checkbox").prop('checked', false).change();
      // $(".allLevels input").prop('checked', false).change();
    }
  }); //hover over rows

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
    }
  });

  var addRow = function addRow() {
    var horizontal = $(this).closest('.levels').find('.horizontal:eq(1)');
    var original_form = $(this).closest('.levels').find('.categories').clone();
    $('#rowTopic').on('click', '.removeLevel', function () {
      console.log(original_form);
      $(horizontal).empty().append(original_form);
    });
    var obj = $(this).closest('.levels').find('input[data-level]').val();
    var x = $(this).closest('.levels').find('input[data-level]').prop("checked", true);
    var variableObj = $(this).closest('.levels').find(".variableName li[data-variable]").html();
    var categoryObj = $(this).closest('.levels').find('.categories li');
    var Opt01 = "";
    $(categoryObj).each(function () {
      Opt01 = Opt01 + this.outerHTML;
    });
    var item = $(this).closest('.levels');
    $(this).closest('.levels').removeClass('activeCustomControl');
    $(this).closest('.levels').find('.collapse').collapse('hide');
    $(this).closest('.levels').find('.accordion-toggle i').fadeIn();
    $(this).closest('.levels').find('.orangeHover').removeClass('showIt2');
    $(this).closest('.levels').find('.endOptions').removeClass('showIt');

    if ($(this).closest('.levels').find('input[data-level]').prop("checked") == true) {
      $('#rowTopic').append(item);
    }

    $("#rowTopic .levels:nth-child(4)").nextAll(".levels").addClass('noWidth');

    if ($('#rowTopic .levels').length > 3) {
      console.log("more than");
      $('.whiteBar').fadeIn();
    }

    $('.numberCounter').html(function (i, val) {
      return val * 1 + 1;
    });
  };

  $('.addRow').keypress(addRow).click(addRow); // $('#rowTopic').on('click', '.removeLevel' , function() {
  //
  //
  //   var items = $('.merged').find('input').parent().parent()
  //
  //   $('.addCategories .categories').append(items)
  //   $('.merged').remove()
  //
  //  $('.addCategories input[type="checkbox"]').prop('checked' , false);
  //
  //   var el = $(this).closest('.levels').find('input[data-level]').val()
  //
  //   var putBack = $(this).closest('.levels')
  //
  //   $('.listArea .topicLevels').append(putBack)
  //
  //   $('.addRow').closest('.levels').find(`input[data-level='${el}']`).prop("checked", false);
  //
  //   if ($('#rowTopic .levels').length < 3 ) {
  //     $('#rowTopic').animate({
  //       minHeight: "none",
  //       maxHeight:"85px",
  //       height:"auto"
  //
  //     },400);
  //
  //   }
  //
  //   if ($('#rowTopic .levels').length >3 ) {
  //
  //     $('.whiteBar').fadeOut('slow')
  //
  //   }
  //
  //   if($('#rowTopic .levels').length == 0) {
  //     $('.plusRow').hide();
  //   }
  //
  //   $('.numberCounter').html(function(i, val) { return val*1 - 1 });
  //
  //   $(".allLevels input").prop('checked', false).change();
  //   var el = $(this).closest('.levels').find('input[data-level]').val()
  //
  //   if ($('#rowTopic .levels').length <= 2 ) {
  //     $('.plusRow').removeClass('green')
  //
  //   }
  //
  // })

  $('#rowTopic').on('keyup', '.removeLevel', function (e) {
    var code = e.keyCode ? e.keyCode : e.which;

    if (code == 13) {
      var el = $(this).closest('.levels').find('input[data-level]').val();
      var putBack = $(this).closest('.levels');
      $('.listArea .topicLevels').append(putBack); // $('.addColumn').closest('.levels').find(`input[data-level='${el}']`).parent().show().css('display', 'flex')

      $('.addRow').closest('.levels').find("input[data-level='" + el + "']").prop("checked", false); // $(this).closest('.levels').remove();

      if ($('#rowTopic .levels').length < 3) {
        $('#rowTopic').animate({
          minHeight: "none",
          maxHeight: "85px",
          height: "auto"
        }, 400);
      }

      if ($('#rowTopic .levels').length > 3) {
        $('.whiteBar').fadeOut('slow');
      }

      $('.numberCounter').html(function (i, val) {
        return val * 1 - 1;
      });
      $(".allLevels input").prop('checked', false).change();
      var el = $(this).closest('.levels').find('input[data-level]').val();

      if ($('#rowTopic .levels').length <= 2) {
        $('.plusRow').removeClass('green');
      }
    }
  }); //clicking on add as column

  var addColumnTopic = function addColumnTopic() {
    var horizontal = $(this).closest('.levels').find('.horizontal:eq(1)');
    var original_form = $(this).closest('.levels').find('.categories').clone();
    $('#columnTopic').on('click', '.removeLevel', function () {
      console.log(original_form);
      $(horizontal).empty().append(original_form);
    });
    var obj = $(this).closest('.levels').find('input[data-level]').val();
    var x = $(this).closest('.levels').find('input[data-level]').prop("checked", true);
    var variableObj = $(this).closest('.levels').find(".variableName li[data-variable]").html();
    var categoryObj = $(this).closest('.levels').find('.categories li');
    var Opt01 = "";
    $(categoryObj).each(function () {
      Opt01 = Opt01 + this.outerHTML;
    });
    var item = $(this).closest('.levels');
    $(this).closest('.levels').removeClass('activeCustomControl');
    $(this).closest('.levels').find('.collapse').collapse('hide');
    $(this).closest('.levels').find('.accordion-toggle i').fadeIn();
    $(this).closest('.levels').find('.orangeHover').removeClass('showIt2');
    $(this).closest('.levels').find('.endOptions').removeClass('showIt');

    if ($(this).closest('.levels').find('input[data-level]').prop("checked") == true) {
      $('#columnTopic').append(item);
    }

    if ($('#columnTopic .levels').length > 0) {
      $('.addColumn').off("click");
      $('.levels').find('.addColumn').hide();
      $('#columnTopic p .evenSmaller').css('color', 'red');
      $('#columnTopic p .evenSmaller').html('limit filled');
      $('#columnTopic .fal.fa-info-circle').css('color', 'red');
    } else {
      $('.levels').find('.addColumn').show();
    }
  };

  $('.addColumn').keypress(addColumnTopic).click(addColumnTopic); //remove column

  $('#columnTopic').on('keyup', '.removeLevel', function (e) {
    var code = e.keyCode ? e.keyCode : e.which;

    if (code == 13) {
      if ($('#columnTopic .levels').length > 0) {
        $('.addColumn').on("click");
        console.log("re-adding column");
      }

      $('.levels').find('.addColumn').show();

      if ($('#layerTopic .levels').length > 0) {
        $('.levels').find('.addLayer').hide();
      }

      var el = $(this).closest('.levels').find('input[data-level]').val(); // $('.addColumn').closest('.levels').find(`input[data-level='${el}']`).parent().show().css('display', 'flex')

      var putBack = $(this).closest('.levels');
      $('.listArea .topicLevels').append(putBack);
      $('.addColumn').closest('.levels').find("input[data-level='" + el + "']").prop("checked", false); // $(this).closest('.levels').remove();
    }
  }); //clicking on add as layer

  var addLayerTopic = function addLayerTopic() {
    var horizontal = $(this).closest('.levels').find('.horizontal:eq(1)');
    var original_form = $(this).closest('.levels').find('.categories').clone();
    $('#layerTopic').on('click', '.removeLevel', function () {
      console.log(original_form);
      $(horizontal).empty().append(original_form);
    });
    var obj = $(this).closest('.levels').find('input[data-level]').val();
    var x = $(this).closest('.levels').find('input[data-level]').prop("checked", true);
    var variableObj = $(this).closest('.levels').find(".variableName li[data-variable]").html();
    var categoryObj = $(this).closest('.levels').find('.categories li'); // console.log(variableObj)

    var Opt01 = "";
    $(categoryObj).each(function () {
      Opt01 = Opt01 + this.outerHTML; // console.log(Opt01);
    });
    $(this).closest('.levels').removeClass('activeCustomControl');
    $(this).closest('.levels').find('.collapse').collapse('hide');
    $(this).closest('.levels').find('.accordion-toggle i').fadeIn();
    $(this).closest('.levels').find('.orangeHover').removeClass('showIt2');
    $(this).closest('.levels').find('.endOptions').removeClass('showIt');
    var item = $(this).closest('.levels');

    if ($(this).closest('.levels').find('input[data-level]').prop("checked") == true) {
      $('#layerTopic').append(item);
    }

    if ($('#layerTopic .levels').length > 0) {
      $('.addLayer').off("click");
      $('.levels').find('.addLayer').hide();
      $('#layerTopic p .evenSmaller').css('color', 'red');
      $('#layerTopic p .evenSmaller').html('limit filled');
      $('#layerTopic .fal.fa-info-circle').css('color', 'red');
    }
  };

  $('.addLayer').keypress(addLayerTopic).click(addLayerTopic); //remove layers

  $('#layerTopic').on('keyup', '.removeLevel', function (e) {
    var code = e.keyCode ? e.keyCode : e.which;

    if (code == 13) {
      if ($('#layerTopic .levels').length > 0) {
        $('.addLayer').on("click", addLayerTopic);
        console.log("re-adding column");
      }

      $('.levels').find('.addLayer').show();

      if ($('#columnTopic .levels').length > 0) {
        $('.levels').find('.addColumn').hide();
      }

      var el = $(this).closest('.levels').find('input[data-level]').val();
      var putBack = $(this).closest('.levels');
      $('.listArea .topicLevels').append(putBack); // $('.addLayer').closest('.levels').find(`input[data-level='${el}']`).parent().show().css('display', 'flex')

      $('.addLayer').closest('.levels').find("input[data-level='" + el + "']").prop("checked", false); // $(this).closest('.levels').remove();
    }
  }); //clicking on add analyis

  var addAnalysisTopic = function addAnalysisTopic() {
    var horizontal = $(this).closest('.levels').find('.horizontal:eq(1)');
    var original_form = $(this).closest('.levels').find('.categories').clone();
    $('#analysisTopic').on('click', '.removeLevel', function () {
      console.log(original_form);
      $(horizontal).empty().append(original_form);
    });
    var obj = $(this).closest('.levels').find('input[data-level]').val();
    var x = $(this).closest('.levels').find('input[data-level]').prop("checked", true);
    var variableObj = $(this).closest('.levels').find(".variableName li[data-variable]").html();
    var categoryObj = $(this).closest('.levels').find('.categories li');
    var Opt01 = "";
    $(categoryObj).each(function () {
      Opt01 = Opt01 + this.outerHTML;
    });
    $(this).closest('.levels').removeClass('activeCustomControl');
    $(this).closest('.levels').find('.collapse').collapse('hide');
    $(this).closest('.levels').find('.accordion-toggle i').fadeIn();
    $(this).closest('.levels').find('.orangeHover').removeClass('showIt2');
    $(this).closest('.levels').find('.endOptions').removeClass('showIt');
    var item = $(this).closest('.levels');

    if ($(this).closest('.levels').find('input[data-level]').prop("checked") == true) {
      $('#analysisTopic').append(item);
    }

    if ($('#analysisTopic .levels').length > 0) {
      $('.addAnalysis').off("click");
      $('.listArea2 .topicLevels .custom-control').addClass("noShow");
      $('#analysisTopic p .evenSmaller').css('color', 'red');
      $('#analysisTopic p .evenSmaller').html('limit filled');
      $('#analysisTopic .fal.fa-info-circle').css('color', 'red');
    }
  };

  $('.addAnalysis').keypress(addAnalysisTopic).click(addAnalysisTopic); //remove analyis

  $('#analysisTopic').on('keyup', '.removeLevel', function (e) {
    var code = e.keyCode ? e.keyCode : e.which;

    if (code == 13) {
      if ($('#analysisTopic .levels').length > 0) {
        $('.addAnalysis').on("click", addAnalysisTopic);
      }

      $('.listArea2 .topicLevels .levels').find('.endOptions').show();
      var putBack = $(this).closest('.levels');
      $('.listArea2 .topicLevels').append(putBack);
      var el = $(this).closest('.levels').find('input[data-level]').val(); // $('.addAnalysis').closest('.levels').find(`input[data-level='${el}']`).parent().show().css('display', 'flex')

      $('.addAnalysis').closest('.levels').find("input[data-level='" + el + "']").prop("checked", false); // $(this).closest('.levels').remove();
    }
  }); //adding href and id to accordions dynamically for checkboxes

  var hash = 1;
  $(".accordion-toggle").each(function (i) {
    var count = "collapseAccord" + ++hash;
    $(this).attr("href", "#" + count);
    $(this).attr("aria-controls", count);
    $(this).closest('.levels').find(".collapse").attr("id", count);
  });
  $(".levels .accordion-toggle").click(function () {
    console.log('show accordion');
    $(this).closest('.levels').addClass('activeCustomControl');
    $(this).closest('.levels').find('.collapse').collapse('show');
    $(this).closest('.levels').find('.accordion-toggle i').hide();
    $(this).closest('.levels').find('.orangeHover').addClass('showIt2');
    $(this).closest('.levels').find('.endOptions').addClass('showIt');
  });

  var closeToggle = function closeToggle() {
    // $(".levels .closeToggle").click(function(){
    console.log('hide accordion');
    $(this).closest('.levels').removeClass('activeCustomControl');
    $(this).closest('.levels').find('.collapse').collapse('hide');
    $(this).closest('.levels').find('.accordion-toggle i').fadeIn();
    $(this).closest('.levels').find('.orangeHover').removeClass('showIt2');
    $(this).closest('.levels').find('.endOptions').removeClass('showIt'); //
    // })
  };

  $(".levels .closeToggle").keypress(closeToggle).click(closeToggle); //scroll to open accordion in listArea

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
  });
  $('.addCategories').on('click', '.moveDown', function () {
    var after = $(this).closest('li').next();
    $(this).closest('li').insertAfter(after);
  });
  $('.addCategories').on('keyup', '.moveDown', function (e) {
    var code = e.keyCode ? e.keyCode : e.which;

    if (code == 13) {
      var after = $(this).closest('li').next();
      $(this).closest('li').insertAfter(after);
    }
  });
  $('.addCategories').on('click', '.moveUp', function () {
    var before = $(this).closest('li').prev();
    $(this).closest('li').insertBefore(before);
  });
  $('.addCategories').on('keyup', '.moveUp', function (e) {
    var code = e.keyCode ? e.keyCode : e.which;

    if (code == 13) {
      var before = $(this).closest('li').prev();
      $(this).closest('li').insertBefore(before);
    }
  });
  $('.addCategories').on('click', '.bottom', function () {
    if (!$('.addCategories .bottom').closest('li').parent().hasClass('mergedUL')) {
      $(this).closest('li').insertAfter($('.addCategories .categories li').last());
    }

    if ($('.merged').length > 0) {
      $(this).closest('li').insertBefore($('.merged').first());
    }
  });
  $('.addCategories').on('keyup', '.bottom', function (e) {
    var code = e.keyCode ? e.keyCode : e.which;

    if (code == 13) {
      if (!$('.addCategories .bottom').closest('li').parent().hasClass('mergedUL')) {
        $(this).closest('li').insertAfter($('.addCategories .categories li').last());
      }

      if ($('.merged').length > 0) {
        $(this).closest('li').insertBefore($('.merged').first());
      }
    }
  });
  $('.addCategories').on('click', '.top', function () {
    $(this).closest('li').insertBefore($('.addCategories .categories li').first());
  });
  $('.addCategories').on('keyup', '.top', function (e) {
    var code = e.keyCode ? e.keyCode : e.which;

    if (code == 13) {
      $(this).closest('li').insertBefore($('.addCategories .categories li').first());
    }
  });
  $('.addCategories').on('click', '.merged .bottom', function () {
    $(this).closest('li').insertAfter($('.addCategories .categories .mergedUL li').last());
  });
  $('.addCategories').on('keyup', '.merged .bottom', function (e) {
    var code = e.keyCode ? e.keyCode : e.which;

    if (code == 13) {
      $(this).closest('li').insertAfter($('.addCategories .categories .mergedUL li').last());
    }
  });
  $('.addCategories').on('click', '.merged .top', function () {
    $(this).closest('li').insertBefore($('.addCategories .categories .mergedUL li').first());
  });
  $('.addCategories').on('keyup', '.merged .top', function (e) {
    var code = e.keyCode ? e.keyCode : e.which;

    if (code == 13) {
      $(this).closest('li').insertBefore($('.addCategories .categories .mergedUL li').first());
    }
  }); //statistical Outputs
  // $('[data-type="stats"]').on('click', function() {
  //
  //   // if ($('#analysisTopic .levels').length > 0) {
  //
  //           $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() +  + $('.stats').height()+ 250 )
  //   // }
  // })

  $('[data-type="stats"] .whiteBubble').on('click', function () {// if ($('.stats li').length > 0 ) {
    //
    //     $('.editOutputs').show()
    //   //
    //   // $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() +   $('.stats').height() )
    // }
    //
    // else {
    //       $('.editOutputs').hide()
    // }
  });
  $('.stats').on('click', function () {
    if ($('.stats li').length == 0) {
      $('.editOutputs').hide();
    }
  });
  $("input[name='stat-analysis']").click(function () {
    if ($("input[name='stat-analysis']:checked").length == 0) {
      $('.editOutputs').hide();
      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height());
    } // if ($('.stats li').length > 0 ) {
    //
    //
    //


    $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + $('.stats').height() + 280); // }
    // if ($('.stats li').length == 0 ) {
    //
    //   $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() )
    // }
    //

    console.log(this.value);

    if ($(this).prop("checked") == true) {
      $('.editOutputs').show();
      $('.stats .row .outputs').append("<li class='results selected' data-stat=\"" + this.value + "\">" + this.value + "<div class='removeTag'><i class='fal fa-times ml-1'></i></div></li>");
    } else {
      $(".stats li[data-stat=" + this.value + "]").remove();
    }

    ;
    $(".stats [data-stat]").on('click', function () {
      // $("input[name=stat-analysis]").prop('checked', false);
      var statName = $(this).attr("data-stat");
      $("input[name='stat-analysis'][value=" + $(this).attr("data-stat") + "]").prop("checked", false);
      $(this).remove();
    });
  }); //reports

  $('.cube').on('mouseenter', function () {
    if ($('.orangeCircle', this).length > 0) {
      $(this).find('.reportX').html("Report Group");
    }

    if ($('.orangeCircle', this).length == 0) {
      $(this).find('.reportX').html("Report X");
    }
  });
  $('.cube').on('mouseleave', function () {
    $(this).find('.reportX').html("Report X");
  }); // 
  // var changeOverlayHeight = function (){
  //
  //
  //   if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length > 0 && $('#layerTopic .levels').length > 0 && $('#analysisTopic .levels').length > 0 && $('.stats li').length > 0  ) {
  //
  //
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() +  + $('.stats').height()+ 400 )
  //   }
  //
  //
  //   if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length == 0 && $('#layerTopic .levels').length > 0 && $('#analysisTopic .levels').length > 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 280 )
  //
  //   }
  //
  //
  //   if ($('#columnTopic .levels').length == 0 && $('#rowTopic .levels').length > 0 && $('#layerTopic .levels').length == 0 && $('#analysisTopic .levels').length > 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 210 )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length == 0 && $('#rowTopic .levels').length > 0 && $('#layerTopic .levels').length == 0 && $('#analysisTopic .levels').length == 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 140 )
  //
  //   }
  //
  //
  //   if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length == 0 && $('#layerTopic .levels').length == 0 && $('#analysisTopic .levels').length > 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 210 )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length > 0 && $('#layerTopic .levels').length == 0 && $('#analysisTopic .levels').length > 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 220 )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length > 0 && $('#layerTopic .levels').length > 0 && $('#analysisTopic .levels').length > 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 220 )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length > 0 && $('#layerTopic .levels').length > 0 && $('#analysisTopic .levels').length == 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 140 )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length == 0 && $('#layerTopic .levels').length > 0 && $('#analysisTopic .levels').length == 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 140 )
  //
  //   }
  //
  //
  //   if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length == 0 && $('#layerTopic .levels').length > 0 && $('#analysisTopic .levels').length > 0 ) {
  //
  //
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 210 )
  //
  //   }
  //
  //
  //   if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length == 0 && $('#layerTopic .levels').length == 0 && $('#analysisTopic .levels').length > 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 210 )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length > 0 && $('#layerTopic .levels').length == 0 && $('#analysisTopic .levels').length > 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 220 )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length > 0 && $('#layerTopic .levels').length > 0 && $('#analysisTopic .levels').length > 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 220 )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length > 0 && $('#layerTopic .levels').length > 0 && $('#analysisTopic .levels').length == 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 140 )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length == 0 && $('#layerTopic .levels').length > 0 && $('#analysisTopic .levels').length == 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 140 )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length == 0 && $('#layerTopic .levels').length == 0 && $('#analysisTopic .levels').length == 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 140 )
  //
  //   }
  //
  //
  //   if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length > 0 && $('#layerTopic .levels').length == 0 && $('#analysisTopic .levels').length == 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 140 )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length == 0 && $('#rowTopic .levels').length == 0 && $('#layerTopic .levels').length == 0 && $('#analysisTopic .levels').length == 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length == 0 && $('#rowTopic .levels').length == 0 && $('#layerTopic .levels').length == 0 && $('#analysisTopic .levels').length > 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 210 )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length == 0 && $('#layerTopic .levels').length > 0 && $('#analysisTopic .levels').length > 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 210 )
  //
  //   }
  //
  //
  //   if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length == 0 && $('#layerTopic .levels').length == 0 && $('#analysisTopic .levels').length > 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 210 )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length > 0 && $('#layerTopic .levels').length == 0 && $('#analysisTopic .levels').length > 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 220 )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length > 0 && $('#layerTopic .levels').length > 0 && $('#analysisTopic .levels').length > 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 220 )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length > 0 && $('#layerTopic .levels').length > 0 && $('#analysisTopic .levels').length == 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 140 )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length == 0 && $('#layerTopic .levels').length > 0 && $('#analysisTopic .levels').length == 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 140 )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length == 0 && $('#rowTopic .levels').length == 0 && $('#layerTopic .levels').length > 0 && $('#analysisTopic .levels').length > 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 210 )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length == 0 && $('#rowTopic .levels').length == 0 && $('#layerTopic .levels').length > 0 && $('#analysisTopic .levels').length == 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 140 )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length == 0 && $('#rowTopic .levels').length == 0 && $('#layerTopic .levels').length == 0 && $('#analysisTopic .levels').length == 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length == 0 && $('#rowTopic .levels').length == 0 && $('#layerTopic .levels').length == 0 && $('#analysisTopic .levels').length > 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 210 )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length == 0 && $('#rowTopic .levels').length == 0 && $('#layerTopic .levels').length == 0 && $('#analysisTopic .levels').length == 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length == 0 && $('#rowTopic .levels').length == 0 && $('#layerTopic .levels').length == 0 && $('#analysisTopic .levels').length > 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 210 )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length == 0 && $('#layerTopic .levels').length > 0 && $('#analysisTopic .levels').length > 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 220 )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length > 0 && $('#layerTopic .levels').length > 0 && $('#analysisTopic .levels').length > 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 220 )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length > 2 && $('#layerTopic .levels').length > 0 && $('#analysisTopic .levels').length > 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 220 )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length == 0 && $('#rowTopic .levels').length == 0 && $('#layerTopic .levels').length == 0 && $('#analysisTopic .levels').length == 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length == 0 && $('#rowTopic .levels').length == 0 && $('#layerTopic .levels').length == 0 && $('#analysisTopic .levels').length > 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 210 )
  //
  //   }
  //
  //
  //   if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length == 0 && $('#layerTopic .levels').length > 0 && $('#analysisTopic .levels').length > 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 280 )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length == 0 && $('#rowTopic .levels').length > 0 && $('#layerTopic .levels').length == 0 && $('#analysisTopic .levels').length > 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 210 )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length == 0 && $('#rowTopic .levels').length > 0 && $('#layerTopic .levels').length == 0 && $('#analysisTopic .levels').length == 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 140 )
  //
  //   }
  //
  //
  //   if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length == 0 && $('#layerTopic .levels').length == 0 && $('#analysisTopic .levels').length > 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 210 )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length > 0 && $('#layerTopic .levels').length == 0 && $('#analysisTopic .levels').length > 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 220 )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length > 0 && $('#layerTopic .levels').length > 0 && $('#analysisTopic .levels').length > 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 220 )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length > 0 && $('#layerTopic .levels').length > 0 && $('#analysisTopic .levels').length == 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 140 )
  //
  //   }
  //
  //   if ($('#columnTopic .levels').length > 0 && $('#rowTopic .levels').length == 0 && $('#layerTopic .levels').length > 0 && $('#analysisTopic .levels').length == 0 ) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + $('#layerTopic').height() + $('#analysisTopic').height() + 140 )
  //
  //   }
  //
  //
  //
  // }
  // $('.mNeg4').keypress(
  //   changeOverlayHeight
  //
  // ).click(
  //   changeOverlayHeight
  // );
  //move zip case tab on window shrink

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
  //   if (
  //     !document.querySelectorAll
  //     ||
  //     !('draggable' in document.createElement('span'))
  //     ||
  //     window.opera
  //   ) {
  //     return;
  //   }
  //
  //   //get the collection of draggable items and add their draggable attribute
  //   for (var items = document.querySelectorAll('[data-draggable="item"]'),
  //   len = items.length,
  //   i = 0; i < len; i ++
  // )
  // {
  //   items[i].setAttribute('draggable', 'true');
  // }
  //
  //
  // var item = null;
  //
  // document.addEventListener("drag", function(event) {
  //
  // }, false);
  //
  //
  //
  // // //dragstart event to initiate mouse dragging
  // document.addEventListener('dragstart', function(e) {
  //
  //
  //
  //   $('#rowTopic').animate({
  //
  //     minHeight: 100,
  //     paddingTop:40
  //
  //   },100);
  //
  //   $('#columnTopic').animate({
  //
  //     minHeight: 100
  //
  //   },100);
  //
  //   $('#layerTopic').animate({
  //
  //     minHeight: 100
  //
  //   },100);
  //
  //   // $('#analysisTopic').animate({
  //   //
  //   //   minHeight: 100
  //   //
  //   // },100);
  //
  //   //
  //   // if ($('#rowTopic .levels').length > 0 && $('#columnTopic .levels').length < 0 &&  $('#layerTopic .levels').length < 0 ) {
  //   //   $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height()+ 400)
  //   //
  //   // }
  //   //
  //   // if ($('#rowTopic .levels').length > 0 && $('#columnTopic .levels').length > 0 &&  $('#layerTopic .levels').length < 0 ) {
  //   //   $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() + 400 )
  //   //
  //   // }
  //   //
  //   //
  //   // if ($('#rowTopic .levels').length > 0 && $('#columnTopic .levels').length > 0 &&  $('#layerTopic .levels').length > 0 ) {
  //   //   $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height()  +  $('#layerTopic').height() + 400)
  //   //
  //   // }
  //
  //   $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height()  +  $('#layerTopic').height() + 500)
  //
  //   if ($('#rowTopic .levels').length > 3) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height()  +  $('#layerTopic').height() + 900)
  //   }
  //
  //   item = e.target;
  //
  //
  //   e.dataTransfer.setData('text', '');
  //
  //
  //
  //
  //
  // }, false);
  //
  //
  // document.addEventListener('dragover', function(e) {
  //
  //
  //   console.log('moving second time')
  //
  //
  //   if(item) {
  //     e.preventDefault();
  //
  //     // $(item).closest('.levels').find('input[data-level]').prop("checked", true);
  //
  //
  //
  //   }
  // }, false);
  //
  // //drop event to allow the element to be dropped into valid targets
  // document.addEventListener('drop', function(e) {
  //
  //
  //
  //   console.log('moving third time')
  //
  //
  //
  //   $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() +  $('#layerTopic').height() )
  //   if ($('#rowTopic .levels').length > 3) {
  //     $('.grayLayer').css('top', $('.lightBlueBack').height() + $('#rowTopic').height() + $('#columnTopic').height() +  $('#layerTopic').height() - 100)
  //
  //   }
  //
  //
  //   //if this element is a drop target, move the item here
  //   //then prevent default to allow the action (same as dragover)
  //   if(e.target.getAttribute('data-draggable') == 'target') {
  //
  //
  //     console.log('moving fourth time')
  //
  //     var thing = e.target.appendChild(item);
  //
  //
  //
  //     // if ($('#rowTopic .levels').length > 3) {
  //     //   console.log("more than")
  //     //
  //     //
  //     //
  //     //   $('.whiteBar').css({
  //     //     'height' : '120px',
  //     //     'top' : '20px',
  //     //
  //     //   }).fadeIn()
  //     //
  //     //
  //     //
  //     // }
  //     //
  //     // $('.numberCounter').html(function(i, val) { return val*1+1 });
  //
  //
  //     if ($(thing).children('.deleteOptions').length == 0 ) {
  //
  //       $("<div class='deleteOptions'><i class='fal fa-sort-alt categoriesModal' role='button' tabindex='0'></i>&nbsp;&nbsp;<i class='fal fa-trash-alt removeDrag' role='button' tabindex='0'></i></div>").appendTo(thing)
  //     }
  //
  //
  //
  //     $('#rowTopic').animate({
  //
  //       minHeight: 0,
  //       paddingTop:0
  //
  //     },100);
  //
  //     $('#columnTopic').animate({
  //
  //       minHeight: 0
  //     },100);
  //
  //     $('#layerTopic').animate({
  //
  //       minHeight: 0
  //
  //     },100);
  //
  //     // $('#analysisTopic').animate({
  //     //
  //     //   minHeight: 0
  //     //
  //     // },100);
  //
  //
  //
  //     $('.categoriesModal').unbind("click").on('click', function() {
  //       $('#reorderCategories').modal('show');
  //
  //       var categoryLi =  $(this).closest('.levels').find('.categories li')
  //
  //       console.log(categoryLi)
  //
  //       var Opt02 = "";
  //       $(categoryLi).each(function() {
  //         Opt02 = Opt02 + this.outerHTML;
  //
  //
  //       });
  //
  //
  //       $('.addCategories').append(Opt02)
  //
  //       $('.addCategories li .custom-control').removeClass('hidden')
  //
  //       $('.closeCategoryModal').click(function() {
  //         $('.addCategories').empty()
  //       })
  //
  //
  //     })
  //
  //
  //
  //     e.preventDefault();
  //   }
  // }, false);
  //
  //
  //
  // document.addEventListener('dragend', function(e) {
  //
  //   console.log('moving fifth time')
  //
  //
  //   item = null;
  //
  //
  //
  //
  //
  // }, false);
  //
  // //end drag and drop functions
  //
  //
  // $('#rowTopic').on('click', '.removeDrag' , function() {
  //
  //   $(this).closest('.levels').appendTo('.topicLevels')
  //
  //   $('#rowTopic').animate({
  //
  //     minHeight: 0,
  //     paddingTop:0
  //
  //   },100);
  //
  //
  //   // $('.whiteBar').css({
  //   //   'height' : '60px',
  //   //   'top' : '40px',
  //   //
  //   // }).fadeOut('slow')
  //   //
  //   //
  //   //
  //   //
  //   // $('.numberCounter').html(function(i, val) { return val*1 - 1 });
  //
  //
  // })
  //
  //
  // $('#columnTopic').on('click', '.removeDrag' , function() {
  //
  //   $(this).closest('.levels').appendTo('.topicLevels')
  //
  //   $('#columnTopic').animate({
  //
  //     minHeight: 0,
  //     paddingTop:0
  //
  //   },100);
  //
  // })
  //
  //
  // $('#layerTopic').on('click', '.removeDrag' , function() {
  //
  //   $(this).closest('.levels').appendTo('.topicLevels')
  //
  //   $('#layerTopic').animate({
  //
  //     minHeight: 0,
  //     paddingTop:0
  //
  //   },100);
  //
  // })
  //
  // $('#analysisTopic').on('click', '.removeDrag' , function() {
  //
  //   $(this).closest('.levels').appendTo('.topicLevels')
  //
  //   $('#analysisTopic').animate({
  //
  //     minHeight: 0,
  //     paddingTop:0
  //
  //   },100);
  //
  //
  //
  // })
  //
  //make the nav item have active line on current page

  var path = window.location.href; // $('.navbar-nav li a').each(function() {
  //   if (this.href === path) {
  //     $(this).addClass('active');
  //   }
  //   else {
  //     $(this).removeClass('active');
  //   }
  //
  // });

  $('.navbar-nav li .nav-link').each(function () {
    if (this.href === path) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  }); // $('.navbar-nav li .dropdown-toggle').click(function () {
  //   window.location = $(this).attr('href');
  // });
  //make the nav item children have active line on current page

  $('.navbar-nav li .dropdown-menu .dropdown-item').each(function () {
    if (this.href === path) {
      $(this).parent().siblings('a').addClass('active'); // $(this).removeClass('active');
    } else {
      $(this).removeClass('active');
    }
  });
});
