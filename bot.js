const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(Mzk3Nzg3NTAzMjAzMDU3NjY1.DS1Pxw.HLmQbV5dbGSp3Y0BoSxwnY-lUTY);
