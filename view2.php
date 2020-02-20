<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
<?php include("header/main.php"); ?>


</head>

<style>



</style>


<body class="analysis">
<a href="#themaincontent" id="skiptocontent" tabindex="1" aria-hidden="false">skip to main content</a>
<div class="container-fluid view2">


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
<div class="btn-group">
	<button type="button" id="level2" class="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Second Level<i class="fas fa-caret-down"></i></button>

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
							<?php include("includes/levels-accordion.php"); ?>
						</div>
					</div>

				</div>

				<div class="col-lg-6 col-md-6">

					<div class="selectTopic">
						<i class="fal fa-angle-left"></i>
						<p>Select a<br>Topic Area</p>

					</div>

					<div class="listArea">
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
			<p class="saveYear">Year(s):</p>


		</ul>

	</div>
	<p class="text-center mostSmall">&ndash;DRAG AND DROP TOPICS IN DESIRED ORDER&ndash;</p>

<?php include("includes/topics-div.php"); ?>

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
<script src="http://code.jquery.com/ui/1.10.0/jquery-ui.js"></script>
<script
  src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"
  integrity="sha256-eGE6blurk5sHj+rmkfsGYeKyZx3M4bG+ZlFyA7Kns7E="
  crossorigin="anonymous"></script>

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

<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.24.0/babel.js"></script>
<script src="https://unpkg.com/react@15/dist/react.js"></script>
<script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
<!-- <script src="js/react-components.js"></script> -->
<script type="text/javascript" src="js/index.js"></script>



</body>
</html>
