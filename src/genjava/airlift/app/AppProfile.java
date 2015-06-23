package airlift.app;

@javax.annotation.Generated
(
	value="airlift.generator.Generator",
	comments="",
	date = ""
)

public class AppProfile
   implements airlift.AppProfile
{
	public static final java.util.Map<String, java.util.Map<String, java.util.Set<String>>> resourceSecurityMetadataMap = new java.util.HashMap<String, java.util.Map<String, java.util.Set<String>>>();
	public static final java.util.Map<String, String> viewMap = new java.util.HashMap<String, String>();
	public static final java.util.Set<String> viewSet = new java.util.HashSet<String>();
	public static final java.util.Map<String, java.util.Set<String>> hasViewMap = new java.util.HashMap<String, java.util.Set<String>>();

	static
	{
		
		
		resourceSecurityMetadataMap.put("cocktail", new java.util.HashMap<String, java.util.Set<String>>()); 
		resourceSecurityMetadataMap.put("patient", new java.util.HashMap<String, java.util.Set<String>>()); 
		resourceSecurityMetadataMap.put("adversereaction", new java.util.HashMap<String, java.util.Set<String>>()); 

		resourceSecurityMetadataMap.get("cocktail").put("COLLECT", new java.util.HashSet<String>()); 
		resourceSecurityMetadataMap.get("cocktail").put("PUT", new java.util.HashSet<String>()); 
		resourceSecurityMetadataMap.get("cocktail").put("POST", new java.util.HashSet<String>()); 
		resourceSecurityMetadataMap.get("cocktail").put("HEAD", new java.util.HashSet<String>()); 
		resourceSecurityMetadataMap.get("cocktail").put("DELETE", new java.util.HashSet<String>()); 
		resourceSecurityMetadataMap.get("cocktail").put("GET", new java.util.HashSet<String>()); 
		resourceSecurityMetadataMap.get("patient").put("COLLECT", new java.util.HashSet<String>()); 
		resourceSecurityMetadataMap.get("patient").put("PUT", new java.util.HashSet<String>()); 
		resourceSecurityMetadataMap.get("patient").put("POST", new java.util.HashSet<String>()); 
		resourceSecurityMetadataMap.get("patient").put("HEAD", new java.util.HashSet<String>()); 
		resourceSecurityMetadataMap.get("patient").put("DELETE", new java.util.HashSet<String>()); 
		resourceSecurityMetadataMap.get("patient").put("GET", new java.util.HashSet<String>()); 
		resourceSecurityMetadataMap.get("adversereaction").put("COLLECT", new java.util.HashSet<String>()); 
			
		resourceSecurityMetadataMap.get("cocktail").get("COLLECT").add("noone"); 
		resourceSecurityMetadataMap.get("cocktail").get("PUT").add("noone"); 
		resourceSecurityMetadataMap.get("cocktail").get("POST").add("noone"); 
		resourceSecurityMetadataMap.get("cocktail").get("HEAD").add("noone"); 
		resourceSecurityMetadataMap.get("cocktail").get("DELETE").add("noone"); 
		resourceSecurityMetadataMap.get("cocktail").get("GET").add("noone"); 
		resourceSecurityMetadataMap.get("patient").get("COLLECT").add("noone"); 
		resourceSecurityMetadataMap.get("patient").get("PUT").add("noone"); 
		resourceSecurityMetadataMap.get("patient").get("POST").add("noone"); 
		resourceSecurityMetadataMap.get("patient").get("HEAD").add("noone"); 
		resourceSecurityMetadataMap.get("patient").get("DELETE").add("noone"); 
		resourceSecurityMetadataMap.get("patient").get("GET").add("noone"); 
		resourceSecurityMetadataMap.get("adversereaction").get("COLLECT").add("all"); 
	}

	public AppProfile() {}

	public String appName = "faery";
	
	public String getAppName()
	{
		return appName;
	}

	public static final void addHasView(String _resource, String _view)
	{
		if (hasViewMap.get(_resource) == null)
		{
			hasViewMap.put(_resource, new java.util.HashSet());
		}

		hasViewMap.get(_resource).add(_view);
	}

	public boolean isView(String _resourceName)
	{
		return viewSet.contains(_resourceName.toLowerCase());
	}

	public String getLookingAt(String _resourceName)
	{
		return viewMap.get(_resourceName.toLowerCase());
	}

	public java.util.Set<String> getViews(String _resourceName)
	{
		return hasViewMap.get(_resourceName);
	}
	
	public java.util.Set<String> getValidResources()
	{
		return resourceSecurityMetadataMap.keySet();
	}

	public boolean isValidResource(String _resourceName)
	{
		return resourceSecurityMetadataMap.keySet().contains(_resourceName.toLowerCase());
	}

	public java.util.Map<String, java.util.Set<String>> getSecurityRoles(String _resourceName)
	{
		return resourceSecurityMetadataMap.get(_resourceName);
	}
}