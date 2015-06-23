var util = require('airlift/util');
var collection = require('airlift/collection');
var openFda = require('handler/lib/open-fda');

exports.handle = function(_web)
{
	var person = util.extract('patient', _web);
	var cocktail = util.extract('cocktail', _web);

	var counts = {};
	
	collection.each(cocktail.drugList, function(x)
	{
		if (x && !counts[x])
		{
			var reactions = openFda.fetchCounts(x);
			counts[x] = {combination: [x], reactions: reactions}

			collection.each(cocktail.drugList, function(y)
			{
				var key = [x,y].sort().join("::");

				if (key && !counts[key] && x.equals(y) === false)
				{
					var reactions = openFda.fetchCounts(x,y);
					counts[key] = {combination: [x,y], reactions: reactions};
				}
			});
		}
		
	});	

	_web.setContent(JSON.stringify(counts));
};