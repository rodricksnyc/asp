<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
<?php include("header/main.php"); ?>


</head>

<style>



</style>


<body class="analysis">
<a href="#themaincontent" id="skiptocontent" tabindex="1" aria-hidden="false">skip to main content</a>
<div class="container-fluid view1">


<div class="navigation-wrap bg-light start-header start-style">

<div class="row">
<div class="col-12">

	<?php include("navbar/nav.php"); ?>
</div>
</div>

</div>

<div class="content-spacer"></div>
<div class="row">
<div class="col-lg-12 col-xs-12">

<?php include("includes/projects.php"); ?>

<?php include("includes/zip-case.php"); ?>


</div>
</div>

<div class="row d-flex">
<!-- <div class="col-xl-8 col-lg-6 col-md-6 col-sm-12 col-xs-12"> -->

<div id="levels">

<!-- <div id="root"></div> -->
<div class="btn-group">
	<button type="button" id="level1" class="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">First Level<i class="fas fa-caret-down"></i></button>

	<div class="dropdown-menu">
		<button class="dropdown-item" type="button">{{Data View 1}}</button>
		<button class="dropdown-item submenu" type="button">{{Data View 2}}</button>
		<div class="dropdown-menu">
			<button class="dropdown-item" type="button">{{Data View A}}</button>
			<button class="dropdown-item" type="button">{{Data View B}}</button>
			<button class="dropdown-item" type="button">{{Data View C}}</button>
		</div>
		<button class="dropdown-item" type="button">{{Data View 3}}</button>
		<button class="dropdown-item" type="button">{{Data View 4}}</button>
	</div>

</div>


</div>
<!-- </div> -->

<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 ml-auto">
<div class="tours d-flex justify-content-around align-items-center">
	<p class="smallest">ON THIS PAGE</p>

	<input type="range" min="0" value="100" max="100">
	<p class="blue">Hover Tooltips</p>
	<div class="orangeBubble small">Tour</div>

</div>
</div>

</div>

<div class="content-spacer2"></div>

<div class="row">
<div class="col-lg-9 col-md-12">
<div class="optionPicker">

	<div class="optional-line"><p class="smallest">OPTIONAL</p></div>
	<div class="getResults">
		<button type="button" class="btn btn-success">
			<i class="fas fa-calculator"></i>&nbsp;Results
		</button>
	</div>

	<nav class="optionPicker-nav">
		<!-- <span class="prevOption"><i class="fal fa-angle-left"></i></span> -->
		<a href="#years" data-type="years" class="NavItem NavItem--is-active">Year(s)</a>
		<a href="#topics" data-type="topics" class="NavItem">Topic(s)</a>
		<a href="#stats" data-type="stats" class="NavItem">Statistical Outputs</a>
		<a href="#data" data-type="data" class="NavItem">Subset Data</a>
		<a href="#marks" data-type="marks" class="NavItem">Benchmarks</a>
		<!-- <span class="nextOption"><i class="fal fa-angle-right"></i></span> -->
	</nav>

	<div class="optionListWindow">

		<div class="option" data-type="years">

			<p>ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>

			<center><p class="smaller">*this is a required field</p></center>

			<form method="post" id="years">
				<div class="allYears custom-control custom-checkbox">
					<input type="checkbox" name="addall" class="custom-control-input" id="allYears">
					<label class="custom-control-label" for="allYears">Include all years</label>
				</div>
				<div class="years custom-control custom-checkbox">
					<input type="checkbox" name="year" data-year="2016" value="2016" class="custom-control-input" id="2016">
					<label class="custom-control-label" for="2016">2016</label>
				</div>
				<div class="years custom-control custom-checkbox">
					<input type="checkbox" name="year" data-year="2015" value="2015" class="custom-control-input" id="2015">
					<label class="custom-control-label" for="2015">2015</label>
				</div>
				<div class="years custom-control custom-checkbox">
					<input type="checkbox" name="year" data-year="2014" value="2014" class="custom-control-input" id="2014">
					<label class="custom-control-label" for="2014">2014</label>
				</div>

				<div class="years custom-control custom-checkbox">
					<input type="checkbox" name="year" data-year="2013" value="2013" class="custom-control-input" id="2013">
					<label class="custom-control-label" for="2013">2013</label>
				</div>


			</form>

		</div>

		<div class="option" data-type="topics">
			<div class="row">

				<div class="col-lg-6 col-md-6">

					<p class="strong text-center">Browse</p>

					<div id="search">
						<div class="clearfix">

							<fieldset>
								<legend class="hidden"></legend>
								<label for="ctl00_HeaderContentPlaceHolder_Search1_txtSearchText" id="ctl00_HeaderContentPlaceHolder_Search1_lblSearch" class="hiddenOffScreen">
									<i class="fal fa-search searchBar"></i>
								</label>
								<input name="ctl00$HeaderContentPlaceHolder$Search1$txtSearchText" type="text" placeholder="Search" id="ctl00_HeaderContentPlaceHolder_Search1_txtSearchText" class="searchTopics searchTxt-default">

							</fieldset>

						</div>
					</div>

				</div>

				<div class="col-lg-6 col-md-6">
					<p class="strong text-center">Select</p>

				</div>
			</div>
			<div class="row">
				<div class="col-lg-6 col-md-6">
					<p class="text-center mostSmall orange">Build your table frame</p>
				</div>
			</div>
			<div class="row rel">
				<div class="col-lg-6 col-md-6 variables">
					<div class="row">
						<div class="col-lg-6 col-md-6 categoricalHeader padding-0">
							<div class="heading"><p class="text-center">Table Variables</p></div>
						</div>
						<div class="col-lg-6 col-md-6 continuousHeader padding-0">
							<div class="heading"><p class="text-center">Analysis Variables</p></div>
						</div>
					</div>


					<div class="row">
						<div class="col-lg-12 col-md-12 categoricalHeader padding-0">
							<div class="levels-accordion"><?php include("includes/levels-accordion.php"); ?></div>
							<div class="levels-accordion2"><?php include("includes/levels-accordion2.php"); ?></div>

						</div>
					</div>

				</div>

				<div class="col-lg-6 col-md-6">

					<div class="selectTopic">
						<i class="fal fa-angle-left"></i>
						<p>Select a<br>Topic Area</p>

					</div>

					<div class="listArea" data-draggable="target">
						<div class="selectedLevels">
							<p class="blue">Level <span class="levelTopicListNumber"></span> Topic List Area <span class="levelTopicAreaNumber"> </span></p>
						</div>

						<?php include("includes/topic-levels-form.php"); ?>

					</div>


				</div>

			</div>
		</div>



		<div class="option" data-type="data">

			<p>SUBSET DATA</p>

		</div>

		<div class="option" data-type="marks">

			<p>BENCHMARKS</p>

		</div>

		<div class="option" data-type="stats">

			<p>STATISTICAL OUTPUTS</p>

		</div>

	</div>



</div>

</div>

<div class="col-lg-3 col-md-12 append">
<p class="blue text-center">Query Summary</p>
<div class="appendOptions">
	<div class="grayLayer"></div>

	<div class="lightBlueBack">

		<ul class="filter-attr-list">
			<p class="saveYear">Year(s)*</p>


		</ul>

	</div>
	<p class="text-center mostSmall">&ndash;DRAG AND DROP TOPICS IN DESIRED ORDER&ndash;</p>

	<div class="topics">

		<div class="container">
			<div class="row">
				<p><i class="far fa-bars"></i>&nbsp;Row Topic()&nbsp;<i class="fal fa-info-circle"></i> <span class="evenSmaller">no limit</span></p>
				<div id="rowTopic" data-draggable="target">
				</div>
			</div>
			<div class="row">
				<p><i class="fal fa-line-columns"></i>&nbsp;Column Topic&nbsp;<i class="fal fa-info-circle"></i> <span class="evenSmaller">limit 1</span></p>
			</div>
			<div class="row">
				<p><i class="fal fa-layer-group"></i></i>&nbsp;Layer Topic&nbsp;<i class="fal fa-info-circle"></i> <span class="evenSmaller">limit 1</span></p>
			</div>
		</div>
	</div>


	<!-- <div class="grayLayer"> -->
	<div class="analysis-topic">
		<div class="container">
			<div class="row">
				<p><i class="fal fa-chart-bar"></i>&nbsp;Analysis Topic&nbsp;<i class="fal fa-info-circle"></i> <span class="evenSmaller">limit 1</span></p>
			</div>
		</div>
	</div>
	<!-- </div> -->

	<!-- <div class="grayLayer"> -->
	<div class="stats">
		<div class="container">
			<div class="row">
				<p>Statistical Output</p>
			</div>
		</div>
	</div>
	<!-- </div> -->


	<p class="text-center mostSmall">OPTIONAL FILTERS</p>

	<!-- <div class="grayLayer"> -->
	<div class="data">
		<div class="container">
			<div class="row">
				<p>Subset Data</p>
			</div>
		</div>
	</div>
	<!-- </div> -->

	<!-- <div class="grayLayer"> -->
	<div class="benchmarks">
		<div class="container">
			<div class="row">
				<p>Benchmarks</p>
			</div>
		</div>
	</div>
</div>


<!-- </div> -->
</div>
</div>


<div class="backdropShadow"></div>
</div>


<?php include("footer/main.php"); ?>

<script
src="https://code.jquery.com/jquery-3.4.1.min.js"
integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
crossorigin="anonymous"></script>

 <!-- <script type="text/javascript" src="js/jquery-ui/jquery-ui.js"></script> -->



<script src="js/jquery.js" type="text/javascript"></script>
<script src="js/migrate.js" type="text/javascript"></script>

<script src="js/slick.js" type="text/javascript"></script>
<script src="js/cookie.js" type="text/javascript"></script>
<script src="js/responsiveTabs.js" type="text/javascript"></script>
<script src="js/onmediaquery.js" type="text/javascript"></script>
<script src="js/ui.js" type="text/javascript"></script>

<script src="js/nhis.js" type="text/javascript"></script>


<script src="js/westat.js" type="text/javascript"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="js/bootstrap.js"></script>

<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.24.0/babel.js"></script>
<script src="https://unpkg.com/react@15/dist/react.js"></script>
<script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script> -->
<!-- <script src="js/react-components.js"></script> -->

<script
  src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"
  integrity="sha256-eGE6blurk5sHj+rmkfsGYeKyZx3M4bG+ZlFyA7Kns7E="
  crossorigin="anonymous"></script>

 <script type="text/javascript" src="js/index.js"></script>
<!-- <script>
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


	$('.option[data-type="topics"]').addClass('hidden').show();
	$('.option[data-type="data"]').addClass('hidden').show();
	$('.option[data-type="marks"]').addClass('hidden').show();
	$('.option[data-type="stats"]').addClass('hidden').show();




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

})



$('.toggle').click(function(e) {
	e.preventDefault();

	var $this = $(this);

	if ($this.next().hasClass('show')) {
		$this.next().removeClass('show');


		$this.removeClass("activeState");

		$this.next().slideUp(350);
	}
	else {
		$this.parent().parent().find('li .inner').removeClass('show');

		if($this.hasClass('parent')){



			$this.parents(".accordion").find(".toggle").removeClass("activeState");

		}

		else if($this.hasClass('child')){


			$this.parents(".accordion").find(".toggle.child1").removeClass("activeState");

		}

		else if($this.hasClass('child')){


			$this.parents(".accordion").find(".toggle.child2").removeClass("activeState");

		}

		else if($this.hasClass('child')){


			$this.parents(".accordion").find(".toggle.child3").removeClass("activeState");

		}

		else if($this.hasClass('child')){

			$this.parents(".accordion").find(".toggle.child4").removeClass("activeState");

		}

		else if($this.hasClass('child')){

			$this.parents(".accordion").find(".toggle.child5").removeClass("activeState");

		}

		else

		{


			$this.parents(".accordion").find(".toggle.child6").removeClass("activeState");

		}

		$this.parent().parent().find('li .inner').slideUp(350);
		$this.next().toggleClass('show');

		$this.addClass("activeState");
		$this.addClass("minus-sign");
		$this.next().slideToggle(350);
	}
});


  $(".panel-body .accordions .panel .panel-header").click(function (){
    if ($(".panel-body .accordions .panel .panel-header").hasClass('darkerBlue') && $('.nested').hasClass('show')) {
      setTimeout(function() {
        $(".panel-body .accordions .panel .panel-header").addClass('lighterBlue');
        $(".panel-body .accordions .panel .panel-header").removeClass('darkerBlue');
      },400)

      console.log("blahhhhh")
    }
    else {
      $(".panel-body .accordions .panel .panel-header").addClass('darkerBlue');
      $(".panel-body .accordions .panel .panel-header").removeClass('lighterBlue');
      console.log("2blahhhhh")
    }

  });

  $('#accordion .panel .panel-header').click(function() {
    if ($(".panel-body .accordions .panel .panel-header").hasClass('darkerBlue') && $('.nested').hasClass('show')) {
      console.log("3blahhhhh")
      $(".panel-body .accordions .panel .panel-header").removeClass('lighterBlue');
      $(".panel-body .accordions .panel .panel-header").removeClass('darkerBlue')
    setTimeout(function() {
      $('.nested').removeClass('show')
    },400)
    }

    else if ($(".panel-body .accordions .panel .panel-header").hasClass('darkerBlue') && !$('.nested').hasClass('show'))  {

      $(".panel-body .accordions .panel .panel-header").removeClass('lighterBlue');
    }
  })




  if($('body').hasClass('analysis')) {
    $('#navbarDropdownMenuAnalysis .down').html('Analysis on Demand');
    $('.down:after').css('content' , 'none ');
  }



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

    $('#slideOutRight').css('z-index', '10')
  })


  $('.projects').click(function() {

    $('.backdropShadow').fadeIn()
    $( "#slideOutLeft" ).animate({
      left: "0",
    }, 800, function() {

    });

    $('#slideOutRight').css('z-index', '1')
  });




  $('#one').on('click', function() {
    $('.backdropShadow').fadeIn()
    $( "#slideOutRight" ).addClass('showSlideOut')

  })


  $('#close').on('click', function() {
    $('.backdropShadow').fadeOut()
    $( "#slideOutRight" ).removeClass('showSlideOut')

  })




  var one = 1
  var two = 2
  var three = 3
  var four = 4
  var five = 5
  var six = 6
  var seven = 7

  $("input[name=allLevels]").click(function() {
    if (this.checked) {

      $("input[name=levels]").prop('checked', true).change();
      $("input[name=allLevels]").prop('checked', true).change();
    }

    else  {
      $("input[name=levels]").prop('checked', false).change();
      $("input[name=allLevels]").prop('checked', false).change();
    }
  });

  $("input[name=levels]").change(function() {

    $("input[name=allLevels]").prop('checked', false);
  });


  $('.level1 .addToList').click(function() {
    if($(this).attr('value')) {


      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() + 94)

      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(one).val();



      $('.listArea').addClass('animated fadeIn').show()

    }

  })

  $('.level2 .addToList').click(function() {
    if($(this).attr('value')) {

      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() + 94)
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(two).val();



      $('.listArea').addClass('animated fadeIn').show()

    }

  })

  $('.level3 .addToList').click(function() {
    if($(this).attr('value')) {

      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() + 94)
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(three).val();

      $('.listArea').addClass('animated fadeIn').show()

    }

  })

  $('.level4 .addToList').click(function() {
    if($(this).attr('value')) {
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(four).val();

      $('.listArea').addClass('animated fadeIn').show()

    }

  })

  $('.level5 .addToList').click(function() {
    if($(this).attr('value')) {

      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() + 94)
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(five).val();

      $('.listArea').addClass('animated fadeIn').show()

    }

  })

  $('.level6 .addToList').click(function() {
    if($(this).attr('value')) {

      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() + 94)
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(six).val();

      $('.listArea').addClass('animated fadeIn').show()

    }

  })

  $('.level7 .addToList').click(function() {
    if($(this).attr('value')) {

      $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() + 94)
      $('.selectTopic').hide();
      $('.levelTopicListNumber').empty().append(seven).val();

      $('.listArea').addClass('animated fadeIn').show()

    }

  })




  var resizeText = function () {

    var preferredFontSize = 56;
    var preferredSize = 1024 * 768;

    var currentSize = $(window).width() * $(window).height();
    var scalePercentage = Math.sqrt(currentSize) / Math.sqrt(preferredSize);
    var newFontSize = preferredFontSize * scalePercentage + 2;
    $(".navbar-brand img").css("width", newFontSize + '%');
  };


  var resizeText2 = function () {

    var preferredFontSize2 = 50;
    var preferredSize2 = 1024 * 768;

    var currentSize2 = $(window).width() * $(window).height();
    var scalePercentage2 = Math.sqrt(currentSize2) / Math.sqrt(preferredSize2);
    var newFontSize2 = preferredFontSize2 * scalePercentage2 + 2;

  }



  $(window).bind('resize', function() {
    resizeText2();
  }).trigger('resize');



  $(window).bind('resize', function() {
    resizeText();
  }).trigger('resize');





  $('.grayLayer').css('top', $('.lightBlueBack').height())
  console.log($('.lightBlueBack').height())

  $(".years :checkbox").change(function(){

    console.log(this.value)
    if($(this).prop("checked")==true){
      $('.filter-attr-list').append("<li class='results selected' data-year=" + this.value + ">" + this.value + "<div class='removeTag'><i class='fal fa-times ml-1'></i></div></li>");
    }

    else{
      $(".filter-attr-list li[data-year=" + this.value + "]").remove()
    };

    $(".filter-attr-list [data-year]").on('click',  function(){
      $("input[name=addall]").prop('checked', false);
      var yearName = $(this).attr("data-year");

      $(".years :checkbox[value=" + $(this).attr("data-year") + "]").prop("checked",false);

      $(this).remove();
    });
  });



  $("input[name=addall]").click(function() {
    if (this.checked) {
      $('.filter-attr-list').find('li').remove();
      $("input[name=year]").prop('checked', true).change();
      $("input[name=addall]").prop('checked', true).change();
    }

    else  {
      $("input[name=year]").prop('checked', false).change();
      $("input[name=addall]").prop('checked', false).change();
    }
  });



  $("input[name=year]").change(function() {

    $("input[name=addall]").prop('checked', false);
  });




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


	//
	//
  // (function() {
  // 	if (
  // 		!document.querySelectorAll
  // 		||
  // 		!('draggable' in document.createElement('span'))
  // 		||
  // 		window.opera
  // 	) {
  //   return;
  //   }
	//
  // 	for (var items = document.querySelectorAll(
  //     '[data-draggable="item"]'),
  // 		len = items.length,
  // 		i = 0; i < len; i ++
  //   ) {
  // 		items[i].setAttribute('draggable', 'true');
  // 	}
	//
	//
  // 	var item = null;
	//
  // 	document.addEventListener('dragstart', function(e) {
	//
  // 		item = e.target;
	//
  //     console.log('moving first time')
	//
  // 		$('#rowTopic').animate({
	//
  // 			minHeight: "300px"},
	//
  //     );
	//
	//
  // 		e.dataTransfer.setData('text', '');
  //   }, false);
	//
	//
  // 	document.addEventListener('dragover', function(e) {
  //       console.log('moving second time')
	//
  // 		if(item) {
  //       e.preventDefault();
	//
  //     }
  // 	}, false);
	//
	//
  // 	document.addEventListener('drop', function(e) {
  // console.log('moving third time')
	//
  //       $('.grayLayer').css('top', $('.lightBlueBack').height() + $('.topics').height() + $('.analysis-topic').height() + 90)
	//
	//
  // 		if(e.target.getAttribute('data-draggable') == 'target') {
	//
  //         console.log('moving fourth time')
	//
  // 			e.target.appendChild(item);
  // 			e.preventDefault();
  // 		}
  // 	}, false);
	//
  // 	document.addEventListener('dragend', function(e) {
  //       console.log('moving fifth time')
	//
  // 		item = null;
  // 	}, false);
  // })();



  $('#one').keyup(function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {

      $("#slideOutRight").addClass('showSlideOut');

    }
  });


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

    }
    else {
      $(this).removeClass('active');
    }

  });



</script> -->



</body>
</html>
