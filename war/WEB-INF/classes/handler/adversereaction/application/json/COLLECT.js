var util = require('airlift/util');
var col = require('airlift/collection');
var openFda = require('handler/lib/open-fda');

exports.handle = function(_web)
{
	var person = _web.extract('patient');
	var cocktail = _web.extract('cocktail');

	var counts = {};
	var requests = [];
	
	col.each(cocktail.drugList, function(x)
	{
		if (x && !counts[x])
		{
			requests.push(function()
			{
				var reactions = openFda.fetchCounts(x);
				counts[x] = {combination: [x], reactions: reactions};
			});

			col.each(cocktail.drugList, function(y)
			{
				var key = [x,y].sort().join("::");

				if (key && !counts[key] && x.equals(y) === false)
				{
					requests.push(function()
					{
						var reactions = openFda.fetchCounts(x,y);
						counts[key] = {combination: [x,y], reactions: reactions};
					});
				}
			});
		}
	});	
	
	//throttle requests
	col.each(requests, function(r, i)
	{
		if (i !== 0 && i % 6 === 0 && requests.length > 6)
		{
			Packages.java.lang.Thread.sleep(Math.sqrt(requests.length) * 1000);
		}

		r();
	});
	
	_web.setContent(JSON.stringify(counts));
};