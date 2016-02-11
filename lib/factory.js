'use strict';

// MODULES //

var isFunction = require( 'validate.io-function' );
var merge = require( 'utils-merge2' )();
var get = require( '@kgryte/github-get' );
var validate = require( './validate.js' );
var defaults = require( './defaults.json' );


// FACTORY //

/**
* FUNCTION: factory( options, clbk )
*	Returns a function for fetching meta data for all repositories belonging to an organization.
*
* @param {Object} options - function options
* @param {String} options.org - Github organization name
* @param {String} [options.token] - Github access token
* @param {String} [options.useragent] - user agent string
* @param {Function} clbk - callback to invoke upon query completion
* @returns {Function} function for getting repository meta data
*/
function factory( options, clbk ) {
	var opts;
	var err;
	opts = merge( {}, defaults );
	err = validate( opts, options );
	if ( err ) {
		throw err;
	}
	if ( !isFunction( clbk ) ) {
		throw new TypeError( 'invalid input argument. Callback argument must be a function. Value: `' + clbk + '`.' );
	}
	opts.pathname += 'orgs/'+opts.org+'/repos';
	/**
	* FUNCTION: repos()
	*	Gets repository meta data.
	*
	* @returns {Void}
	*/
	return function repos() {
		get( opts, done );
		/**
		* FUNCTION: done( error, data, info )
		*	Callback invoked after resolving resources.
		*
		* @private
		* @param {Error|Null} error - error object
		* @param {Object[]} data - query data
		* @param {Object} info - response info
		* @returns {Void}
		*/
		function done( error, data, info ) {
			error = error || null;
			data = data || null;
			info = info || null;
			clbk( error, data, info );
		} // end FUNCTION done()
	}; // end FUNCTION repos()
} // end FUNCTION factory()


// EXPORTS //

module.exports = factory;
