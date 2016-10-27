var fs = require('fs');
var pJson = require('./package.json');
if( ! pJson ) {
  console.error('NOT_FOUND package.json');
  process.exit(1);
}
var version = pJson.version;

var type = process.argv[2];
var major = Number( version.split('.')[0] );
var minor = Number( version.split('.')[1] );
var patch = Number( version.split('.')[2].match(/^\d+/)[0] );

var subfix = version.split('-')[1];
var subfixType, subfixVersion;
if( subfix ) {
  subfixType = subfix.split('.')[0];
  subfixVersion = Number( subfix.split('.')[1] );
}

console.log( pJson.version );
console.log( major, minor, patch, subfixType, subfixVersion );

if( type === 'major' ) {

  major++;
  minor = 0;
  patch = 0;
  subfix = ""

} else if( type === 'minor' ) {

  minor++;
  patch = 0;
  subfix = ""

} else if( type === 'patch' ) {
    
  patch++;
  subfix = ""

} else if( type === 'clear' ) {

  subfix = ""

} else if( ! type && ! subfix ) {

  patch++;
  subfix = ""

} else if( ! type && subfix ) {

  subfixVersion++;
  subfix = subfixType + "." + subfixVersion;

} else if( type === subfixType ) {

  subfixVersion++;
  subfix = subfixType + "." + subfixVersion;

} else if( type !== subfixType ) {

  subfixType = type;
  subfixVersion = 1;
  subfix = subfixType + "." + subfixVersion;
}

var newVersion = [ major, minor, patch ].join('.');
if( subfix ) {
  newVersion += ('-'+subfix);
}

pJson.version = newVersion;

fs.writeFileSync('./package.json', JSON.stringify( pJson, null, 2 ));

console.log('new version is: ' + newVersion );

