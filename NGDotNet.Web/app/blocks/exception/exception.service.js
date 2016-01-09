'use strict';

var exceptionModule = require('./exception.module.js');

exceptionModule.factory('exception', exception);

exception.$inject = ['logger'];
function exception(logger) {
    var service = {
        catcher: catcher
    };
    
    return service;

    function catcher(message) {
        return function (reason) {
            logger.error(message, reason);
        };
    }
}