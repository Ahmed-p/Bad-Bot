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
client.login(MzkyMDAyMDgxNDUzNjM3NjMy.DS1ZJg.ZxbOF2XMlJ8ATWp6Kive6DzqYUY);
