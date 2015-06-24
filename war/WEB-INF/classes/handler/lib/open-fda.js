var fetchService = require('airlift/service').getUrlFetchService();
var col = require('airlift/collection');
var util = require('airlift/util');

function encode(s)
{
	var r = (s + '').replace(/\s/g, '+');
	util.info('encoding',s, 'to', r);

	return r;
}

function fetch(_params)
{
	var base = 'http://api.fda.gov/drug/event.json';

	var params = _params||{};
	params.api_key = '17zmqxVRSU25MXorfWW9SdwUNjgdCpJ9LZd9Aa82';
	params.limit = params.limit||1000;

	var query = col.reduce(params, function(b,v,n)
	{
		var q = b && (b + '&')||'?';
		return q + n + '=' + encode(v);
	});

	util.info('Sending this query', base + query);

	var request = fetchService.request(base + query, {'Accept': 'application/json'}, 'GET');

	var result = util.string(fetchService.fetchContent(request));

	util.info('Got this result', result);
	
	return JSON.parse(result);
}

exports.fetchCounts = function()
{
	var params = {'count': 'patient.reaction.reactionmeddrapt.exact'};

	params['search'] = col.reduce(Array.prototype.slice.call(arguments), function(b,v) {
		var s = '(patient.drug.medicinalproduct' + ':' + encode(v) + ')';
		return (b && (b + '+AND+' + s)) || s; 
	});

	return fetch(params);
};

exports.fetchDrugNames = function()
{
	return fetch({'count': 'patient.drug.medicinalproduct.exact'}).results;
};