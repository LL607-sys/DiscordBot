const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
  ticket: async function(client){ 
client.on('message', message => {
    if(message.content === '!!ticket') {
      if(!message.member.roles.cache.some(role => role.name === "Admin"))
      return message.reply("Ich hab gesagt Admin Only"); 
      try{
        const embed = new Discord.MessageEmbed()
        .setTitle('Support Ticket')
        .setColor(0xff0000)
        .setDescription('If you want a separately Channel to ask Questions.\n React with 📄 to create.');
        message.channel.send(embed).then(sentEmbed => {
        sentEmbed.react("📄")
      })
      
    }catch (e) {console.error('Failed to remove reactions.');} 
  }; 
});

client.on('messageReactionAdd', (reaction, user) => {
  var message = reaction.message
  if(!user.bot) {
    try{
      var userid = user.id
      var names = user.tag.substring(0, user.tag.length - 5);
      var everyoneRole = message.guild.roles.everyone.id;
      message.guild.channels.create(names, {
        type: "text",
         parent: "811643384770986005",
          permissionOverwrites: [
              {
                 id: userid,
                 allow: ['VIEW_CHANNEL'],
              },
              {
                id: everyoneRole,
                deny: ['VIEW_CHANNEL']
              }
            ]
      });
        reaction.users.remove(userid);
    }catch (e) {console.error('Failed to create the Channel');}
  }
})
}}