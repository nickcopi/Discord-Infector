const fs = require('fs');
const discordPath = process.env.AppData + '/Discord';
if(!fs.existsSync(discordPath)){
	console.error(`Cannot find discord data in ${discordPath}!`);
	process.exit();
}
