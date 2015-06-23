(function() {
	var metadata;

	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			var resourceMetadata = require('airlift/ResourceMetadata');
		}
	}
	else
	{
		resourceMetadata = Airlift_ResourceMetadata;
	}

	var root = this;
	var previous_cocktail_Metadata = root.cocktail_Metadata;

	var cocktail_Metadata = function(obj) {
		if (obj instanceof cocktail_Metadata) return obj;
		if (!(this instanceof cocktail_Metadata)) return new cocktail_Metadata(obj);
		this._wrapped = obj;
	};

	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = cocktail_Metadata;
		}
		exports.cocktail_Metadata = cocktail_Metadata;
	} else {
		root.cocktail_Metadata = cocktail_Metadata;
	}

	var create = cocktail_Metadata.create = function()
	{
		var metadata = resourceMetadata.create({ persistable:true, securable:true, presentable:true });

		metadata.name = 'cocktail';
		metadata.attributes = ['drugList', 'auditPostDate', 'auditPutDate', 'auditUserId', 'auditRequestId', 'id'];
		metadata.foreignKeys = {};
		metadata.indexedProperties = {"auditPostDate": 1,"auditPutDate": 1,"auditUserId": 1,"auditRequestId": 1};
		metadata.searchProperties = {"auditPostDate": 1,"auditPutDate": 1,"auditUserId": 1,"auditRequestId": 1};
		metadata.encryptedProperties = {};

		return metadata;
	};
	
}).call(this);