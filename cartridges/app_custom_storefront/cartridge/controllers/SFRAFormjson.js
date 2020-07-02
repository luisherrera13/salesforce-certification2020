'use strict';

var server = require('server');
var URLUtils = require('dw/web/URLUtils');

server.get('Show', function(req, res, next) {
    //var SFRAFormForm = server.forms.getForm('SFRAFormDef');
    var CustomObjectMgr = require('dw/object/CustomObjectMgr');
   // var CustomObject = CustomObjectMgr.getCustomObject('SFRAFormDef', SFRAFormForm.emailx.value);
    var CustomObject = CustomObjectMgr.getCustomObject('SFRAFormDef','jcolorado@gmail.com');
    //var viewData = res.getViewData(CustomObject);
    //res.setViewData(viewData);
 
    res.json({ 
        
        Nickname: CustomObject.custom.nickname,
                 
        Email: CustomObject.custom.emailx,

        user: CustomObject.custom
        
        //ObjectTypeDefinition = require('dw/object/ObjectTypeDefinition');


                });
    next();
});

module.exports = server.exports();




