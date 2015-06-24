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
	var previous_drug_Metadata = root.drug_Metadata;

	var drug_Metadata = function(obj) {
		if (obj instanceof drug_Metadata) return obj;
		if (!(this instanceof drug_Metadata)) return new drug_Metadata(obj);
		this._wrapped = obj;
	};

	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = drug_Metadata;
		}
		exports.drug_Metadata = drug_Metadata;
	} else {
		root.drug_Metadata = drug_Metadata;
	}

	var create = drug_Metadata.create = function()
	{
		var metadata = resourceMetadata.create({ persistable:true, securable:true, presentable:true });

		metadata.name = 'drug';
		metadata.attributes = ['name', 'auditPostDate', 'auditPutDate', 'auditUserId', 'auditRequestId', 'id'];
		metadata.foreignKeys = {};
		metadata.indexedProperties = {"auditPostDate": 1,"auditPutDate": 1,"auditUserId": 1,"auditRequestId": 1};
		metadata.searchProperties = {"auditPostDate": 1,"auditPutDate": 1,"auditUserId": 1,"auditRequestId": 1};
		metadata.encryptedProperties = {};

		return metadata;
	};
	
}).call(this);