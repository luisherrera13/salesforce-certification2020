importPackage( dw.system );

exports.modifyGETResponse = function(doc)
{
    
       if(doc.status=="online") { 
        //not suppoorts custom properties see documentation: OCAPI custom properties 20.4
        //doc.c_string = "Este sitio esta online";
        doc.id = "Este sitio esta online";
           }
   // return new Status(Status.ERROR);
   return new Status(Status.OK);
}