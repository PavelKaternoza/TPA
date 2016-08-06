/**
 * 
 */

var getChartAttributes = function(ctx) {
	return {
		type : "line",
		data : {
			labels : ctx.data('labels'),
			datasets : [ {
				label : "Failed",
				data : ctx.data('fail'),
				pointBorderWidth : 1,
				borderColor : "rgba(230, 71, 89, 0.8)",
				backgroundColor : "rgba(230, 71, 89, 0.5)",
				pointBorderColor : "rgba(230, 71, 89, 0.8)",
				pointBackgroundColor : "rgba(230, 71, 89, 0.8)"
			}, {
				label : "Passed",
				data : ctx.data('pass'),
				pointBorderWidth : 1,
				borderColor : "rgba(27, 201, 142, 0.8)",
				backgroundColor : "rgba(27, 201, 142, 0.5)",
				pointBorderColor : "rgba(27, 201, 142, 0.8)",
				pointBackgroundColor : "rgba(27, 201, 142, 0.8)"
			} ]
		},
		options : {
			title : {
				text : ctx.data('title'),
				fontSize : 16,
				fontStyle : "normal"
			},
			scales : {
				yAxes : [ {
					stacked : true
				} ]
			}
		}
	};
};

window.onload = function() {

	$("#executions").tablesorter({
		sortList : [ [ 0, 1 ] ],
		cssAsc : "headerSortUp",
		cssDesc : "headerSortDown"
	});

	Chart.defaults.global.title.display = true;
	Chart.defaults.global.hover.mode = 'label';
	Chart.defaults.global.tooltips.mode = 'label';
	Chart.defaults.global.defaultFontColor = '#FFF';

	var testsExecutedCanvas = $("#testsExecuted");
	var testsExecuted = new Chart(testsExecutedCanvas,
			getChartAttributes(testsExecutedCanvas));

	var testStepsExecutedCanvas = $("#testStepsExecuted");
	var testStepsExecuted = new Chart(testStepsExecutedCanvas,
			getChartAttributes(testStepsExecutedCanvas));

	var environmentsTestedCanvas = $("#environmentsTested");
	var environmentsTested = new Chart(environmentsTestedCanvas,
			getChartAttributes(environmentsTestedCanvas));

	var executionTimeCanvas = $("#executionTime");
	var executionTime = new Chart(executionTimeCanvas,
			getChartAttributes(executionTimeCanvas));
}