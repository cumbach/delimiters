var fs = require( 'fs' );
var path = require( 'path' );
var process = require( "process" );

var moveFrom = "./locales";
var moveTo = "./locales"

// Loop through all the files in the temp directory
fs.readdir( moveFrom, function( err, files ) {
        if( err ) {
            console.error( "Could not list the directory.", err );
            process.exit( 1 );
        }

        files.forEach( function( file, index ) {

                // Make one pass and make the file complete
                var fromPath = path.join( moveFrom, file );
                var toPath = path.join( moveTo, file );

                var obj = JSON.parse(fs.readFileSync(fromPath + '/delimiters.json', 'utf8'));
                var locale = file.toString();

                console.log(obj['main'][locale]);
        } );
} );
