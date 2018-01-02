const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});
if (message.content === 'help') {
              var embed  = new Discord.RichEmbed()
   
.addField("**ID**" ,"معلومات عن الحــساب:** ``id``")
.addField("**SERVER**" ,"معلومات عن السيرفر:** ``server``")

.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});

    client.on('message', message => {
     if (message.content === "id") {
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
.setDescription("معلومات عن الحــساب")
               .setFooter(`Ahmed Bot.`, '')
  .setColor("#9B59B6")
  .addField("اســـم الحســاب", `${message.author.username}`)
  .addField('كود الحساب الخاص', message.author.discriminator)
  .addField("الرقـــم الشـــخصي", message.author.id)
  .addField('بــــوت', message.author.bot)
  .addField("تاريخ التسجيل", message.author.createdAt)
     
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
  if(message.content === 'server') {
      var servername = message.guild.name
      var اونر = message.guild.owner
      var اعضاء = message.guild.memberCount
      var ايدي = message.guild.id
      var بلدالسيرفر = message.guild.region
      var الرومات = message.guild.channels.size
      var الرتب = message.guild.roles
      var عمل = message.guild.createdAt
      var الروم = message.guild.defaultChannel
      var server = new Discord.RichEmbed()
      .setThumbnail(message.guild.iconURL)
      .addField('اسم السيرفر', servername)
      .addField('اي دي السيرفر ' , [ايدي])
      .addField('أعضاء السيرفر', اعضاء)
      .addField('رومات السيرفر', الرومات)
      .addField('روم الشات الأساسي', الروم)
      .addField('صاحب السيرفر', اونر)
      .addField('بلد السيرفر', بلدالسيرفر)
      .addField('تاريخ افتتاح السيرفر', عمل)
      .setColor('RANDOM')

      message.channel.sendEmbed(server)
  }
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
