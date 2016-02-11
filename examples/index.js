'use strict';

var repos = require( './../lib' );

var opts = {
	'org': 'math-io',
	'useragent': 'beep-boop-bop'
};

repos( opts, clbk );

function clbk( error, results, info ) {
	if ( info ) {
		console.error( info );
	}
	if ( error ) {
		throw new Error( error.message );
	}
	console.log( results );
}