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
	var previous_drug_Attribute_Metadata = root.drug_AttributeMetadata;

	var drug_AttributeMetadata = function(obj) {
		if (obj instanceof drug_AttributeMetadata) return obj;
		if (!(this instanceof drug_AttributeMetadata)) return new drug_AttributeMetadata(obj);
		this._wrapped = obj;
	};

	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = drug_AttributeMetadata;
		}
		exports.drug_AttributeMetadata = drug_AttributeMetadata;
	} else {
		root.drug_AttributeMetadata = drug_AttributeMetadata;
	}

	var MetaData = function()
	{
		this.resourceName = 'drug';
		this.attributes = {};

		this.attributes['name'] = attributeMetadata.create({ name:"name", type:"java.lang.String", displayOrder:10, label:"name" }); 
		this.attributes['auditPostDate'] = attributeMetadata.create({ name:"auditPostDate", type:"java.util.Date", isSearchable:true, isIndexable:true, required:false, label:"record created date" }); 
		this.attributes['auditPutDate'] = attributeMetadata.create({ name:"auditPutDate", type:"java.util.Date", isSearchable:true, isIndexable:true, required:false, label:"record updated date" }); 
		this.attributes['auditUserId'] = attributeMetadata.create({ name:"auditUserId", type:"java.lang.String", isSearchable:true, isIndexable:true, required:false, label:"changed by user id", isPresentable:false }); 
		this.attributes['auditRequestId'] = attributeMetadata.create({ name:"auditRequestId", type:"java.lang.String", isSearchable:true, isIndexable:true, required:false, label:"web request id", isPresentable:false }); 
		this.attributes['id'] = attributeMetadata.create({ name:"id", type:"java.lang.String", isSearchable:false, isPrimaryKey:true, isIndexable:false, required:false, displayOrder:0, label:"record id" }); 
	};

	var create = drug_AttributeMetadata.create = function()
	{
		return new MetaData();
	};
	
}).call(this);