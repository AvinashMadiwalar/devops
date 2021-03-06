export const gradientChartOptionsConfigWithTooltipRed: any = {
	maintainAspectRatio: false,
	legend: {
		display: false,
	},

	tooltips: {
		backgroundColor: '#f5f5f5',
		titleFontColor: '#333',
		bodyFontColor: '#666',
		bodySpacing: 4,
		xPadding: 12,
		mode: 'nearest',
		intersect: 0,
		position: 'nearest',
	},
	responsive: true,
	scales: {
		yAxes: [
			{
				barPercentage: 1.6,
				gridLines: {
					drawBorder: false,
					color: 'rgba(29,140,248,0.0)',
					zeroLineColor: 'transparent',
				},
				ticks: {
					suggestedMin: 60,
					suggestedMax: 125,
					padding: 20,
					fontColor: '#9a9a9a',
				},
			},
		],

		xAxes: [
			{
				barPercentage: 1.6,
				gridLines: {
					drawBorder: false,
					color: 'rgba(233,32,16,0.1)',
					zeroLineColor: 'transparent',
				},
				ticks: {
					padding: 20,
					fontColor: '#9a9a9a',
				},
			},
		],
	},
};

export const chartLabels = [10, 20, 30, 40, 50, 60];
