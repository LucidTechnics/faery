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
	var previous_cocktail_Attribute_Metadata = root.cocktail_AttributeMetadata;

	var cocktail_AttributeMetadata = function(obj) {
		if (obj instanceof cocktail_AttributeMetadata) return obj;
		if (!(this instanceof cocktail_AttributeMetadata)) return new cocktail_AttributeMetadata(obj);
		this._wrapped = obj;
	};

	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = cocktail_AttributeMetadata;
		}
		exports.cocktail_AttributeMetadata = cocktail_AttributeMetadata;
	} else {
		root.cocktail_AttributeMetadata = cocktail_AttributeMetadata;
	}

	var MetaData = function()
	{
		this.resourceName = 'cocktail';
		this.attributes = {};

		this.attributes['drugList'] = attributeMetadata.create({ name:"drugList", type:"java.util.Set", displayOrder:10, label:"drug list" }); 
		this.attributes['auditPostDate'] = attributeMetadata.create({ name:"auditPostDate", type:"java.util.Date", isSearchable:true, isIndexable:true, required:false, label:"record created date" }); 
		this.attributes['auditPutDate'] = attributeMetadata.create({ name:"auditPutDate", type:"java.util.Date", isSearchable:true, isIndexable:true, required:false, label:"record updated date" }); 
		this.attributes['auditUserId'] = attributeMetadata.create({ name:"auditUserId", type:"java.lang.String", isSearchable:true, isIndexable:true, required:false, label:"changed by user id", isPresentable:false }); 
		this.attributes['auditRequestId'] = attributeMetadata.create({ name:"auditRequestId", type:"java.lang.String", isSearchable:true, isIndexable:true, required:false, label:"web request id", isPresentable:false }); 
		this.attributes['id'] = attributeMetadata.create({ name:"id", type:"java.lang.String", isSearchable:false, isPrimaryKey:true, isIndexable:false, required:false, displayOrder:0, label:"record id" }); 
	};

	var create = cocktail_AttributeMetadata.create = function()
	{
		return new MetaData();
	};
	
}).call(this);