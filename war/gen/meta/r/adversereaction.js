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
	var previous_adversereaction_Metadata = root.adversereaction_Metadata;

	var adversereaction_Metadata = function(obj) {
		if (obj instanceof adversereaction_Metadata) return obj;
		if (!(this instanceof adversereaction_Metadata)) return new adversereaction_Metadata(obj);
		this._wrapped = obj;
	};

	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = adversereaction_Metadata;
		}
		exports.adversereaction_Metadata = adversereaction_Metadata;
	} else {
		root.adversereaction_Metadata = adversereaction_Metadata;
	}

	var create = adversereaction_Metadata.create = function()
	{
		var metadata = resourceMetadata.create({ persistable:true, securable:true, presentable:true });

		metadata.name = 'adversereaction';
		metadata.attributes = ['name', 'probability', 'drugList', 'auditPostDate', 'auditPutDate', 'auditUserId', 'auditRequestId', 'id'];
		metadata.foreignKeys = {};
		metadata.indexedProperties = {"auditPostDate": 1,"auditPutDate": 1,"auditUserId": 1,"auditRequestId": 1};
		metadata.searchProperties = {"auditPostDate": 1,"auditPutDate": 1,"auditUserId": 1,"auditRequestId": 1};
		metadata.encryptedProperties = {};

		return metadata;
	};
	
}).call(this);