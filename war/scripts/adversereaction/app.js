(function()
{
	google.load("visualization", "1.1", {packages:["sankey"]});

	function drawChart(_counts) {
		var data = new google.visualization.DataTable();

		data.addColumn('string', 'From');
		data.addColumn('string', 'To');
		data.addColumn('number', 'Weight');

		var rows = [];
		
		_.each(_counts, function(_counts, _name)
		{
			_.each(_.range(4), function (v,i)
			{
				var reaction = _counts.reactions.results[i];
				rows.push([_name.replace('::', ' combined with '), reaction.term, reaction.count]);
			});
		});
		
		data.addRows(rows);
		
					// Sets chart options.
		var options = {
			height: 600,
			width: 900
		};

		// Instantiates and draws our chart, passing in some options.
		var chart = new google.visualization.Sankey(document.getElementById('adverse-reactions-san-key'));
		chart.draw(data, options);
	}

	angular.module('faery')
	.controller('AdverseReaction', ['$log', '$scope', 'DrugService', 'AdverseReactionService', function($log, $scope, DrugService, AdverseReactionService)
	{
		function redraw ()
		{
			AdverseReactionService.collect($scope.drugList).then(function(_counts)
			{
				drawChart(_counts);
			});
		}

		function hasEmpty(l)
		{
			return _.some(l, function(v) { return !v; });
		}
		
		$scope.add = function()
		{
			$scope.drugList = $scope.drugList||[];
			if (hasEmpty($scope.drugList) === false)
			{
				$scope.drugList.push('');
			}
		};

		$scope.needAdd = function()
		{
			return !$scope.drugList || $scope.drugList.length < 20;
		};

		$scope.selectedDrug = function(n)
		{
			$scope.drugList = $scope.drugList||[];
			$scope.drugList.push(n);
			$scope.newDrug = '';
			redraw();
		};

		$scope.remove = function(i)
		{
			$log.info("Removing",i);
			$scope.drugList.splice(i,1);

			redraw();
		};

		$scope.getMatchingDrugs = function(p)
		{
			return p && DrugService.collect(p)||undefined;
		};
		
		$scope.drugs = ['azor', 'aspirin', 'viagra'];
		
	}]).factory('DrugService', ['$log', '$q', '$http', function($log, $q, $http)
	{
		return {
			collect: function(_prefix)
			{
			  var deferred = $q.defer();
			  $log.info('Sending prefix', _prefix);
			  
			  $http.get('/a/drug', {params: {name: _prefix}}).success(function(drugs)
			  {
				  deferred.resolve(drugs);
			  })
			  .error(function(data)
			  {
				  deferred.reject(data);
			  });

			  return deferred.promise;
			}
		};

	}]).factory('AdverseReactionService', ['$log', '$q', '$http', function($log, $q, $http)
	{
		return {

			collect: function(_drugList)
			{
				var list = _.filter(_drugList, function(d) { return !!d; });
						 
				var deferred = $q.defer();

				$log.info('Sending drugList', list);

				$http.get('/a/adversereaction', {params: {drugList: list}}).success(function(drugs)
				{
					deferred.resolve(drugs);
				})
				.error(function(data)
				{
					deferred.reject(data);
				});

				return deferred.promise;
			}
		};

	}]);
	
}())


   
