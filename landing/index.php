<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>

	<?php include("../header/landing.php"); ?>


</head>
<body class="initial">
	<a href="#themaincontent" id="skiptocontent" tabindex="1" aria-hidden="false">skip to main content</a>
	<div class="container-fluid">
		<div class="navigation-wrap bg-light start-header start-style">

			<div class="row">
				<div class="col-12">

					<nav class="navbar navbar-expand-md navbar-light">
					  <div class="navbar-collapse collapse order-1 order-md-0 dual-collapse2" id="navbarSupportedContent">


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
					    <img src="../images/WesDax_logo.svg" alt="WesDax Logo">
					  </a>
					  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					    <span class="navbar-toggler-icon"></span>
					  </button>

					</nav>

				</div>
			</div>

		</div>

		<div id="themaincontent">

			<div class="modal" tabindex="2" role="dialog" id="myModal" data-keyboard="false" data-backdrop="static">
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

				<?php include("../includes/landing-projects.php"); ?>




			</div>
		</div>
		<center>
			<div class="row">
				<div class="col-12 col-xs-12">

							</div>
						</center>


						<div class="backdropShadow"></div>


					</div>

					<?php include("../footer/landing.php"); ?>

							<script
							src="https://code.jquery.com/jquery-3.4.1.min.js"
							integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
							crossorigin="anonymous"></script>
							<script src="http://code.jquery.com/ui/1.10.0/jquery-ui.js"></script>


							<script src="../js/jquery.js" type="text/javascript"></script>
							<script src="../js/migrate.js" type="text/javascript"></script>

							<script src="../js/slick.js" type="text/javascript"></script>
							<script src="../js/cookie.js" type="text/javascript"></script>
							<script src="../js/responsiveTabs.js" type="text/javascript"></script>
							<script src="../js/onmediaquery.js" type="text/javascript"></script>
							<script src="../js/ui.js" type="text/javascript"></script>

							<script src="../js/nhis.js" type="text/javascript"></script>


							<script src="../js/westat.js" type="text/javascript"></script>
							<script src="../js/bootstrap.js"></script>
							<script src="../js/index.js"></script>


						</body>
						</html>