const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('MzkyMDAyMDgxNDUzNjM3NjMy.DS1ZJg.ZxbOF2XMlJ8ATWp6Kive6DzqYUY');
