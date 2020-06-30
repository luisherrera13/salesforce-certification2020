importPackage( dw.system );

exports.modifyGETResponse = function(scriptCategory, categoryWO)
{
    if(!scriptCategory.online)
    {
        categoryWO.c_modify_response_data = "Esta categoria NO esta en Online";
        categoryWO.c_testx= "this is a custom property 'c_', see documentation: OCAPI custom properties 20.4";//this is a custom properties "c_" see documentation: OCAPI custom properties 20.4" 
        //notice that c_modify_response_data belongs to a "c_" (custom properties see documentation: OCAPI custom properties 20.4) 
    } else
    {
        categoryWO.c_modify_response_data = "Esta categoria SI esta en Online";
        categoryWO.c_testx = "this is a custom property 'c_', see documentation: OCAPI custom properties 20.4";//this is a custom properties "c_" see documentation: OCAPI custom properties 20.4"
         //notice that c_modify_response_data belongs to a "c_" (custom properties see documentation: OCAPI custom properties 20.4) 
    }

    return new Status(Status.OK);
}