<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>

	<?php include("header/main.php"); ?>


</head>
<body class="initial">
	<a href="#themaincontent" id="skiptocontent" tabindex="1" aria-hidden="false">skip to main content</a>
	<div class="container-fluid">
		<div class="navigation-wrap bg-light start-header start-style">

			<div class="row">
				<div class="col-12">

					<nav class="navbar navbar-expand-md navbar-light">
					  <div class="navbar-collapse collapse order-1 order-md-0 dual-collapse2" id="navbarSupportedContent">
					    <ul class="navbar-nav ml-auto py-4 py-md-0">

					      <li class="projects">
					        <i class="fal fa-angle-left"></i>
					        <i class="fas fa-circle"><p class="initials">PN</p></i>
					        <h3>Project Name</h3>
					      </li>
					      <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
					        <a class="nav-link active" href="index.php">Welcome</a>
					        <i class="fal fa-door-open"></i>
					      </li>
					      <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
					        <a class="nav-link" href="about.php">About</a>
					        <i class="fal fa-info-circle"></i>
					      </li>
					      <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
					        <a class="nav-link dropdown-toggle" tabindex="0" href="analysis.html" id="navbarDropdownMenuAnalysis" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					          <p class="down">Analysis</p>
					        </a>
					        <i class="fal fa-chart-bar"></i>
					        <div class="dropdown-menu" id="analysis" aria-labelledby="navbarDropdownMenuAnalysis">
					          <a class="dropdown-item" href="view1.php">Years</a>
					          <a class="dropdown-item" href="view2.php">Topics</a>
					          <a class="dropdown-item" href="view3.php">Subset Data</a>
					          <a class="dropdown-item" href="view4.php">Benchmarks</a>
					          <a class="dropdown-item" href="view4.php">Statistical Outputs</a>
					        </div>
					      </li>
					      <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">

					        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="reports.html" role="button" aria-haspopup="true" aria-expanded="false">
					          <p class="down">Reports</p>
					        </a>
					        <i class="fal fa-clipboard-list"></i>
					        <div class="dropdown-menu">
					          <a class="dropdown-item" href="#">Action</a>
					          <a class="dropdown-item" href="#">Another action</a>
					          <a class="dropdown-item" href="#">Another action</a>
					          <a class="dropdown-item" href="#">Another action</a>
					        </div>
					      </li>
					      <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">

					        <a class="nav-link" href="documents.html">Documents</a>
					        <i class="fal fa-file-alt"></i>
					      </li>
					    </ul>

					    <ul class="navbar-nav ml-auto nav-flex-icons">

					      <li class="nav-item dropdown">
					        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" tabindex="0" role="button">
					          <h6 class="user">{{USER}}</h6>

					        </a>
					        <div class="dropdown-menu dropdown-menu-right dropdown-unique" aria-labelledby="navbarDropdownMenuLink">
					          <a class="dropdown-item" href="#">Action</a>
					          <a class="dropdown-item" href="#">Another action</a>
					          <a class="dropdown-item" href="#">Something else here</a>
					        </div>
					      </li>
					      <li class="nav-item">
					        <a class="nav-link signOut" role="button" aria-haspopup="true" aria-expanded="false" tabindex="0">
					          <i class="fal fa-sign-out-alt"></i>
					        </a>
					      </li>
					    </ul>
					  </div>

					  <a class="navbar-brand" href="default.html" target="_blank">
					    <img src="images/WesDax_logo.svg" alt="WesDax Logo">
					  </a>
					  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					    <span class="navbar-toggler-icon"></span>
					  </button>

					</nav>

				</div>
			</div>

		</div>

		<div id="themaincontent">

			<div class="modal" tabindex="2" role="dialog" id="myModal">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title">Welcome to WesDax</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>

						</div>
						<div class="modal-body">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
							<div class="row">
								<div class="col-lg-1 col-md-1 col-sm-2 col-xs-3">
									<i class="fal fa-atom-alt"></i>
								</div>
								<div class="col-lg-11 col-md-11 col-sm-10 col-xs-9">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-1 col-md-1 col-sm-2 col-xs-3">
									<i class="fal fa-chart-line"></i>
								</div>
								<div class="col-lg-11 col-md-11 col-sm-10 col-xs-9">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-1 col-md-1 col-sm-2 col-xs-3">
									<i class="fal fa-chart-network"></i>
								</div>
								<div class="col-lg-11 col-md-11 col-sm-10 col-xs-9">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
								</div>
							</div>

						</div>
						<div class="modal-footer">
							<a href="https://www.wesdax.com/"><p class="orange">Learn More at WesDax.com  <i class="fal fa-external-link"></i></p></a>
						</div>
					</div>
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
					<h4>Welcome Project Member</h4>
					<p>Welcome to the WesDaX&reg; demo site. Within the WesDaX demo site, users can generate estimates in real-time from the 2013 and 2014 Behavioral Risk Factor Surveillance System (BRFSS) data that were extracted from public use files (PUFs). Anyone can conduct interactive, live analyses with the weighted BRFSS data to produce results.</p>

					<p>Select what you would like to do:</p>
					<ul class="bullet">
						<li>
							<a class="orange" href="RptList.aspx?ScreenID=48">Documentation</a>: Provide project reports and other useful guidance.</li>
							<li>
								<a class="orange"href="RptList.aspx?ScreenID=14778">About the data</a>: Review BRFSS WesDaX site file contents and the BRFSS codebook. A subset of variables was selected from the PUFs for this demo site.
							</li>
							<li>
								<a class="orange" href="ReqFltr.aspx?ScreenID=14777&amp;tabID=24">Create a query</a>: To get started, the user simply selects the year, the topic, and then click on the “Get Results” button. Topics are categorical variables that form the table shell for the tabular results. Queries can be expanded upon by selecting a subgroup through the “Population Limits” panel. Analytical options are available under the “Statistical Options” panel. In that panel, other continuous variables are available for computing means or percentiles under the “Statistics of another Variable” option.</li>
							</ul>
							<p>Produce a customized report<p>
								<ul class="bullet">
									<li>
										<a class="orange" href="RptList.aspx?ScreenID=14782">Run distributions &amp; summary statistics</a>: Examples are provided to illustrate customizable sets of frequencies and summary statistics that can be produced.</li>
										<li>
											<a class="orange" href="RptList.aspx?ScreenID=14783">Run a regression model</a>:  Examples are provided for processing regression analyses. Projects can set up SAS macros to process queries through the WesDaX data tool.
										</li>
										<li>
											<a class="orange" target="_blank" href="../Public/Documents/WesDaX_Features.pdf">WesDaX system</a>: Learn about the special <a class="orange" target="_blank" href="../Public/Documents/WesDaX_Features.pdf">capabilities and benefits</a> of the WesDaX system and how to get started using the <a class="orange" target="_blank" href="../Public/Documents/WesDaX_QuickStartGuide.pdf">WesDaX&reg; Quick Start Guide</a>.
										</li>
									</ul>

									<p>WesDaX enables clients, collaborators, and Westat staff to run online analyses and display various types of reports in real time using weighted (from complex samples) or unweighted data files. WesDaX is run from any standard web browser and is designed to allow users without high levels of technical and statistical expertise to have easy access to data. For more information, contact the <a class="orange" href="mailto:WesdaxHelp@westat.com">WesDaX team</a>.</p>

									<p>The purpose is to demonstrate WesDaX using a subset of BRFSS variables, and although the results will match, we encourage you to make use of all the variables in the BRFSS public use data directly from CDC.</p>
									<center>
										<a href="#"><div class="orangeBubble">View Tutorial</div></a>
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
							<script src="js/index.js"></script>


						</body>
						</html>
