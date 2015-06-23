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
	var previous_adversereaction_Attribute_Metadata = root.adversereaction_AttributeMetadata;

	var adversereaction_AttributeMetadata = function(obj) {
		if (obj instanceof adversereaction_AttributeMetadata) return obj;
		if (!(this instanceof adversereaction_AttributeMetadata)) return new adversereaction_AttributeMetadata(obj);
		this._wrapped = obj;
	};

	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = adversereaction_AttributeMetadata;
		}
		exports.adversereaction_AttributeMetadata = adversereaction_AttributeMetadata;
	} else {
		root.adversereaction_AttributeMetadata = adversereaction_AttributeMetadata;
	}

	var MetaData = function()
	{
		this.resourceName = 'adversereaction';
		this.attributes = {};

		this.attributes['name'] = attributeMetadata.create({ name:"name", type:"java.lang.String", required:false, displayOrder:10, label:"name" }); 
		this.attributes['probability'] = attributeMetadata.create({ name:"probability", type:"java.lang.Double", required:false, displayOrder:20, label:"probability" }); 
		this.attributes['drugList'] = attributeMetadata.create({ name:"drugList", type:"java.util.Set", displayOrder:10000, label:"drug list" }); 
		this.attributes['auditPostDate'] = attributeMetadata.create({ name:"auditPostDate", type:"java.util.Date", isSearchable:true, isIndexable:true, required:false, label:"record created date" }); 
		this.attributes['auditPutDate'] = attributeMetadata.create({ name:"auditPutDate", type:"java.util.Date", isSearchable:true, isIndexable:true, required:false, label:"record updated date" }); 
		this.attributes['auditUserId'] = attributeMetadata.create({ name:"auditUserId", type:"java.lang.String", isSearchable:true, isIndexable:true, required:false, label:"changed by user id", isPresentable:false }); 
		this.attributes['auditRequestId'] = attributeMetadata.create({ name:"auditRequestId", type:"java.lang.String", isSearchable:true, isIndexable:true, required:false, label:"web request id", isPresentable:false }); 
		this.attributes['id'] = attributeMetadata.create({ name:"id", type:"java.lang.String", isSearchable:false, isPrimaryKey:true, isIndexable:false, required:false, displayOrder:0, label:"record id" }); 
	};

	var create = adversereaction_AttributeMetadata.create = function()
	{
		return new MetaData();
	};
	
}).call(this);