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

		<div class="row d-flex justify-content-center">

			<div id="levels">

				<!-- <div id="root"></div> -->
				<div class="btn-group">

					<button type="button" id="level1" class="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">First Level<i class="fas fa-caret-down"></i></button>

					<div class="dropdown-menu">
						<button class="dropdown-item" type="button">Something else here</button>
						<button class="dropdown-item submenu" type="button">Actions in a submenu</button>
						<div class="dropdown-menu">
							<button class="dropdown-item" type="button">Action</button>
							<button class="dropdown-item" type="button">Another action</button>
							<button class="dropdown-item" type="button">Something else</button>
						</div>
						<button class="dropdown-item" type="button">Another action</button>
						<button class="dropdown-item" type="button">Something else here</button>
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


								<div class="custom-control custom-checkbox">
									<input type="checkbox" name="addall" class="custom-control-input" id="allYears">
									<label class="custom-control-label" for="allYears">Include all years</label>
								</div>
								<div class="custom-control custom-checkbox">
									<input type="checkbox" name="year" data-year="2016" value="2016" class="custom-control-input" id="2016">
									<label class="custom-control-label" for="2016">2016</label>
								</div>
								<div class="custom-control custom-checkbox">
									<input type="checkbox" name="year" data-year="2015" value="2015" class="custom-control-input" id="2015">
									<label class="custom-control-label" for="2015">2015</label>
								</div>
								<div class="custom-control custom-checkbox">
									<input type="checkbox" name="year" data-year="2014" value="2014" class="custom-control-input" id="2014">
									<label class="custom-control-label" for="2014">2014</label>
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

			<div class="col-lg-3 col-md-12 append">



				<p class="blue text-center">Query Summary</p>
				<div class="appendOptions">

					<div class="lightBlueBack">

						<ul class="filter-attr-list">
								<p>Year(s):</p>

						</ul>
					</div>

					<p class="text-center smallest">DRAG AND DROP TOPICS IN DESIRED ORDER</p>

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
		<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
		<script src="js/bootstrap.js"></script>

		<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.24.0/babel.js"></script>
		<script src="https://unpkg.com/react@15/dist/react.js"></script>
		<script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
		<!-- <script src="js/react-components.js"></script> -->
		<script src="js/index.js"></script>

		<script>


		$('.option[data-type="topics"]').addClass('hidden');
		$('.option[data-type="data"]').addClass('hidden');
		$('.option[data-type="marks"]').addClass('hidden');
		$('.option[data-type="stats"]').addClass('hidden');

		</script>

		<!-- <script type="text/babel">
		window.onload = function()

		{

		class Dropdown extends React.Component {
		constructor(props) {
		super(props);

		this.state = {
		open: false,
		selected: this.props.initial || -1
	};
}

toggleDropdown() {
this.setState({
active: !this.state.active
});
}

handleClick(i) {
this.setState({
selected: i
});
}

renderOptions() {
if (!this.props.options) {
return;
}

return this.props.options.map((option, i) => {
return (
<li
onClick={evt => this.handleClick(i)}
key={i}
className={"dropdown__list-item " + (i === this.state.selected ? 'dropdown__list-item--active' : '')}
>
{option}
</li>
);
});
}

render() {
return (
<div className="dropdown">
<div
onClick={() => this.toggleDropdown()}
className="dropdown__toggle dropdown__list-item"
>
{this.props.title}
<i className="fa fa-angle-down" aria-hidden="true"></i>
</div>
<ul className={"dropdown__list " + (this.state.active ? 'dropdown__list--active' : '')}>{this.renderOptions()}</ul>
</div>
);
}
}

Dropdown.propTypes = {
title: React.PropTypes.string,
options: React.PropTypes.array,

};

const options = ['Apple', 'Orange', 'Pear', 'Mango'];


ReactDOM.render(<Dropdown title="Dropdown Menu" options={options} />,



document.getElementById('levels'));

};

</script> -->


</body>
</html>
