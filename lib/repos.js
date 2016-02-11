'use strict';

// MODULES //

var factory = require( './factory.js' );


// REPOS //

/**
* FUNCTION: repos( opts, clbk )
*	Gets meta data for all repositories belonging to an organization.
*
* @param {Object} opts - function options
* @param {String} opts.org - Github organization name
* @param {String} [opts.token] - Github access token
* @param {String} [opts.useragent] - user agent string
* @param {Function} clbk - callback to invoke upon query completion
* @returns {Void}
*/
function repos( opts, clbk ) {
	factory( opts, clbk )();
} // end FUNCTION repos()


// EXPORTS //

module.exports = repos;
