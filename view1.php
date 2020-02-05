<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
	<?php include("header/main.php"); ?>


</head>


<body class="analysis">
	<a href="#themaincontent" id="skiptocontent" tabindex="1" aria-hidden="false">skip to main content</a>
	<div class="container-fluid">


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

		<div class="row">
			<div class="col-lg-3">


			</div>

			<div class="col-lg-2 col-lg-offset-3">
			</div>
		</div>

		<div class="content-spacer2"></div>

		<div class="row">
			<div class="col-lg-9 col-md-12">
				<div class="optionPicker">
					<div class="optional-line"><p class="smaller">OPTIONAL</p></div>
					<nav class="optionPicker-nav">
						<a href="#years" data-type="years" class="NavItem NavItem--is-active">Year(s)</a>
						<a href="#topics" data-type="topics" class="NavItem">Topic(s)</a>
						<a href="#stats" data-type="stats" class="NavItem">Statistical Outputs</a>
						<a href="#data" data-type="data" class="NavItem">Subset Data</a>
						<a href="#marks" data-type="marks" class="NavItem">Benchmarks</a>


					</nav>

					<div class="optionListWindow">

						<div class="option" data-type="years">

							<p>ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>

							<center><p class="smaller">*this is a required field</p></center>

							<form method="post" id="years">

								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="allYears">
									<label class="custom-control-label" for="allYears">Include all years</label>
								</div>
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="y2016">
									<label class="custom-control-label" for="y2016">2016</label>
								</div>
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="y2015">
									<label class="custom-control-label" for="y2015">2015</label>
								</div>
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="y2014">
									<label class="custom-control-label" for="y2014">2014</label>
								</div>

							</form>

						</div>

						<div class="option" data-type="topics">

							<p>S;S;S;S;S;S;S;S;S;S;  </p>

						</div>

						<div class="option" data-type="data">

							<p>ed OIRIOHGERHO-0234987438977942378933443T344T34T34T3443T43T4T34T3T43TT34T4798ut  </p>

						</div>

						<div class="option" data-type="marks">

							<p>983458Y9534879543789ROHIGE48Y9Y8934TY89 </p>

						</div>

						<div class="option" data-type="stats">

							<p>OIHDFGOHIGERHIOU </p>

						</div>

					</div>



				</div>

			</div>

			<div class="col-lg-3 col-md-12">
				<div class="appendOptions">

				</div>
			</div>


			</div>


		<div class="backdropShadow"></div>
	</div>


	<?php include("footer/main.php"); ?>



	<script
	src="https://code.jquery.com/jquery-3.4.1.min.js"
	integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
	crossorigin="anonymous"></script>
	<script src="http://code.jquery.com/ui/1.10.0/jquery-ui.js"></script>


	<script src="js/jquery.js" type="text/javascript"></script>
	<script src="js/migrate.js" type="text/javascript"></script>

	<script src="js/slick.js" type="text/javascript"></script>
	<script src="js/cookie.js" type="text/javascript"></script>
	<script src="js/responsiveTabs.js" type="text/javascript"></script>
	<script src="js/onmediaquery.js" type="text/javascript"></script>
	<script src="js/ui.js" type="text/javascript"></script>

	<script src="js/nhis.js" type="text/javascript"></script>


	<script src="js/westat.js" type="text/javascript"></script>
	<script src="js/bootstrap.js"></script>
	<script src="js/index.js"></script>

	<script>


	$('.option[data-type="topics"]').addClass('hidden');
	$('.option[data-type="data"]').addClass('hidden');
	$('.option[data-type="marks"]').addClass('hidden');
	$('.option[data-type="stats"]').addClass('hidden');

	</script>


</body>
</html>
