var util = require('airlift/util');
var _ = require('underscore');
var openFda = require('handler/lib/open-fda');

exports.handle = function(_web)
{
	var drug = _web.extract('drug');

	var drugs = openFda.fetchDrugNames()||[];

	util.info('Got this as the result', drugs, 'and looking for', drug.name);
	
	_web.getContentContext().isJson();
	
	_web.setContent(JSON.stringify(_.map(_.filter(drugs,
		function(v) {
			return new RegExp(drug.name, 'i').test((v.term && v.term.toLowerCase())||'');
		}),
		function(v) {
			return (v.term && v.term.toLowerCase())||'';
		})
	));
};