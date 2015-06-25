util = require('airlift/util');

var errors;

exports['test simple'] = function(_assert)
{
	_assert.eq(true, !errors, 'True is true');
};