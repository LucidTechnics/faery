var col = require('airlift/collection');
var api_key = '17zmqxVRSU25MXorfWW9SdwUNjgdCpJ9LZd9Aa82';
var base = 'http://api.fda.gov/drug/event.json';
var util = require('airlift/util');

exports.fetchCounts = function()
{
	var fetchService = require('airlift/service').getUrlFetchService();
	var params = {'api_key': api_key, 'count': 'patient.reaction.reactionmeddrapt.exact', 'limit': 1000};

	params['search'] = col.reduce(Array.prototype.slice.call(arguments), function(b,v) {
		var s = 'patient.drug.medicinalproduct' + ":" + v;
		return (b && (b + '+AND+' + s)) || s; 
	});

	var query = col.reduce(params, function(b,v,n)
	{
		var q = b && (b + '&')||'?';
		return q + n + '=' + v;
	});

	var request = fetchService.request(base + query, {'Accept': 'application/json'}, 'GET');
	
	return JSON.parse(util.string(fetchService.fetchContent(request)));
};