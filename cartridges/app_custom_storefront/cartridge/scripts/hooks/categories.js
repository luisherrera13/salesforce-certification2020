importPackage( dw.system );

exports.modifyGETResponse = function(scriptCategory, categoryWO)
{
    if(!scriptCategory.online)
    {
        categoryWO.c_modify_response_data = "Esta categoria NO esta en Online Esta respuesta fue generada mediante un hook con un Custom GetRsponse";
    } else
    {
        categoryWO.c_modify_response_data = "Esta categoria SI esta en Online Esta respuesta fue generada mediante un hook con un Custom GetRsponse";
    }

    return new Status(Status.OK);
}