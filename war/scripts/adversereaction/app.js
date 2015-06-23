(function()
{
	google.load("visualization", "1.1", {packages:["sankey"]});


	angular.module('faery')
	.controller('AdverseReaction', ['$scope', '$http', 'AdverseReactionService', function($scope, $http)
	{
		$scope.drugList = [''];

		function hasEmpty(l)
		{
			return _.some(l, function(v) { return !v; });
		}
		
		$scope.add = function()
		{
			if (hasEmpty($scope.drugList) === false)
			{
				$scope.drugList.push('');
			}
		};

		$scope.needAdd = function()
		{
			return (hasEmpty($scope.drugList) === false);
		};

		$scope.remove = function(i)
		{
			$scope.drugList.splice(i,1);
		};
		
		$scope.drugs = ['azor', 'aspirin', 'viagra'];

		function drawChart() {
			var data = new google.visualization.DataTable();
			data.addColumn('string', 'From');
			data.addColumn('string', 'To');
			data.addColumn('number', 'Weight');
			data.addRows([
						  [ 'Azor', 'Accidental exposure to product by child', 5 ],
						  [ 'Azor', 'Abcessed limb', 7 ],
						  [ 'Aspirin', 'Accidental exposure to product by child', 6 ],
						  [ 'Viagra', 'Accidental exposure to product by child', 2 ],
						  [ 'Viagra', 'Drop in blood pressure', 9 ],
						  [ 'Viagra', 'Erection lasts for more than 4 hours', 4 ]
						 ]);

		// Sets chart options.
			var options = {
				width: 600
			};

		// Instantiates and draws our chart, passing in some options.
			var chart = new google.visualization.Sankey(document.getElementById('adverse-reactions-san-key'));
			chart.draw(data, options);
		}

		drawChart();
		
	}]).factory('AdverseReactionService', ['$http', function($http)
	{
		return {};
	}]);
	
}())


   
