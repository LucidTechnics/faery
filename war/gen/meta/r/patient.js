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
	var previous_patient_Metadata = root.patient_Metadata;

	var patient_Metadata = function(obj) {
		if (obj instanceof patient_Metadata) return obj;
		if (!(this instanceof patient_Metadata)) return new patient_Metadata(obj);
		this._wrapped = obj;
	};

	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = patient_Metadata;
		}
		exports.patient_Metadata = patient_Metadata;
	} else {
		root.patient_Metadata = patient_Metadata;
	}

	var create = patient_Metadata.create = function()
	{
		var metadata = resourceMetadata.create({ persistable:true, securable:true, presentable:true });

		metadata.name = 'patient';
		metadata.attributes = ['sex', 'age', 'auditPostDate', 'auditPutDate', 'auditUserId', 'auditRequestId', 'id'];
		metadata.foreignKeys = {};
		metadata.indexedProperties = {"auditPostDate": 1,"auditPutDate": 1,"auditUserId": 1,"auditRequestId": 1};
		metadata.searchProperties = {"auditPostDate": 1,"auditPutDate": 1,"auditUserId": 1,"auditRequestId": 1};
		metadata.encryptedProperties = {};

		return metadata;
	};
	
}).call(this);