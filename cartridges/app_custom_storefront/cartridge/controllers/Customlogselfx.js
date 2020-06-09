'use strict';

var server = require('server');
var Logger = require('dw/system/Logger');

var debugLog = Logger.getLogger("debug-selfx", "customselfxDebug");
debugLog.debug("This is the first category a debug for selfx site123");

var warnLog = Logger.getLogger("warn-selfx", "customselfxWarn");
warnLog.warn("This is the second category a warn for selfx site123");

var errorLog = Logger.getLogger("error-selfx", "customselfxError");
errorLog.error("This is the third category an error for selfx site123");

var infoLog = Logger.getLogger("info-selfx", "customselfxInfo");
infoLog.info("This the fourth category an info for selfx site123");

server.get('Show', function (req, res, next){
        res.render('/exercises/logselfxRender', {
            //info : infoLog
        });

        next();
    }
);

module.exports = server.exports();