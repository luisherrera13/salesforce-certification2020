'use strict';

//var server = require('server');
var Logger = require('dw/system/Logger');
var CustomObjectMgr = require('dw/object/CustomObjectMgr');
var Transaction = require('dw/system/Transaction');


/**
 * @function getCOs
 * @description Function that gets a custom object for a CO type and key attribute passed as a parameter.
 *
 * @param {Object} parameters Represents the parameters defined in the steptypes.json file
 */
module.exports = {
	getCOs : function getCOs(parameters) {
			
				var CustomObjectDescription = CustomObjectMgr.getCustomObject(parameters.CustomObjectType, parameters.KeyAttributeValue);;

				var infoLog = Logger.getLogger("info-customjobselfx", "customjobselfxobjects");
				infoLog.info("The custom object "+parameters.CustomObjectType+" with the name value of user "+CustomObjectDescription.custom.name+" is "+CustomObjectDescription.custom.agex+" years old");
				
		}
	
	};
	
