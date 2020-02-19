<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
	<?php include("header/main.php"); ?>


</head>
<body class="about">
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

			<center>
				<div class="row white w80">
					<div class="col-12 col-xs-12">
						<h4>About</h4>
						<p>Using the WesDaX&reg; system demo site, users are able to process tabular estimates in real-time from 2013 and 2014 Behavioral Risk Factor Surveillance System (BRFSS) data that were extracted from public use files (PUFs). The BFRSS datasets underlying the system contain a subset of variables from the PUFs. A codebook is available for users to review the variable and value labels.</p>

						<p>The BRFSS is the nation's premier system of health-related telephone surveys that collect state data about U.S. residents regarding their health-related risk behaviors, chronic health conditions, and use of preventive services. Established in 1984 with 15 states, BRFSS now collects data in all 50 states as well as the District of Columbia and three U.S. territories. BRFSS completes more than 400,000 adult interviews each year. Since 2011, BFRSS includes households serviced by landline, cellular telephones, or both.</p>

						<p>Point estimates (e.g., totals, percentages, percentiles, ratios, means) generated from WesDaX will match published results. Replicate weights were created to facilitate variance estimation. Specifically, the delete-one jackknife replicates were formed from the final full sample weights. Therefore, the resulting WesDaX variance estimates will differ from published results, which are based on the Taylor linearization approach. Unless a specific year is selected, the frequencies and totals will reflect the two years combined.</p>
						<center class="m2">
							<a href="#"><div class="grayBubble"><p class="orange"><i class="fal fa-file-pdf"></i> {{DATA}} Data Dictionary (PDF)</p><div class="orangeBubble small">View</div></div></a>
						</center>
					</div>
				</div>
			</center>

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
				<script type="text/javascript" src="js/index.js"></script>


			</body>
			</html>
