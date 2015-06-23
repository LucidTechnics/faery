(function() {
	var metadata;

	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			var attributeMetadata = require('airlift/AttributeMetadata');
		}
	}
	else
	{
		attributeMetadata = Airlift_AttributeMetadata;
	}

	var root = this;
	var previous_patient_Attribute_Metadata = root.patient_AttributeMetadata;

	var patient_AttributeMetadata = function(obj) {
		if (obj instanceof patient_AttributeMetadata) return obj;
		if (!(this instanceof patient_AttributeMetadata)) return new patient_AttributeMetadata(obj);
		this._wrapped = obj;
	};

	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = patient_AttributeMetadata;
		}
		exports.patient_AttributeMetadata = patient_AttributeMetadata;
	} else {
		root.patient_AttributeMetadata = patient_AttributeMetadata;
	}

	var MetaData = function()
	{
		this.resourceName = 'patient';
		this.attributes = {};

		this.attributes['sex'] = attributeMetadata.create({ name:"sex", type:"java.lang.String", required:false, displayOrder:10, label:"sex", allowedValues:{ "male": 1,"female": 1 } }); 
		this.attributes['age'] = attributeMetadata.create({ name:"age", type:"java.lang.Integer", required:false, maxValue:"150", displayOrder:20, label:"age" }); 
		this.attributes['auditPostDate'] = attributeMetadata.create({ name:"auditPostDate", type:"java.util.Date", isSearchable:true, isIndexable:true, required:false, label:"record created date" }); 
		this.attributes['auditPutDate'] = attributeMetadata.create({ name:"auditPutDate", type:"java.util.Date", isSearchable:true, isIndexable:true, required:false, label:"record updated date" }); 
		this.attributes['auditUserId'] = attributeMetadata.create({ name:"auditUserId", type:"java.lang.String", isSearchable:true, isIndexable:true, required:false, label:"changed by user id", isPresentable:false }); 
		this.attributes['auditRequestId'] = attributeMetadata.create({ name:"auditRequestId", type:"java.lang.String", isSearchable:true, isIndexable:true, required:false, label:"web request id", isPresentable:false }); 
		this.attributes['id'] = attributeMetadata.create({ name:"id", type:"java.lang.String", isSearchable:false, isPrimaryKey:true, isIndexable:false, required:false, displayOrder:0, label:"record id" }); 
	};

	var create = patient_AttributeMetadata.create = function()
	{
		return new MetaData();
	};
	
}).call(this);