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

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
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
kboosh.on('message', message => {
    if (message.content.split(' ')[0] == '%k')
       message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;


           member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                      message.delete();
            
                                                    });
            
                                                  });
   kboosh.on("message", message => {
       var prefix = "%";
 
             var args = message.content.substring(prefix.length).split(" ");
                if (message.content.startsWith(prefix + "%k")) {
                          if (!message.member.hasPermission("ADMINISTRATOR"))  return;

                          if (!args[1]) {
                            
                                 let embed3 = new Discord.RichEmbed()
                                     .setDescription(":white_check_mark: | تم ارسال رسالة لا يوجد فيها شيء")
                                       .setColor("#FF00FF")
                                          message.channel.sendEmbed(embed3);
                            
                                        } else {

                            
                                           let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':white_check_mark: | تم ارسال الرساله للجميع ..')
                                                                .setColor("#99999")
                               
                                                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            }
                          }
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
