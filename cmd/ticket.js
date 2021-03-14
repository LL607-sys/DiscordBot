const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
var fb = []

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
      //creates the embed message
    }catch (e) {console.error('Failed to create embed message.');} 
  }; 
});

client.on("messageReactionAdd", (reaction, user) => {
    let message = reaction.message, emoji = reaction.emoji;
    fs.readFile("activeTickets.txt", async function (err, data) {
      if (err) throw err;
      //opens the activeTickets.txt file
        if (emoji.name == '📄') {
          if (!user.bot) {
          var userid = user.id;
          var names = user.tag.substring(0, user.tag.length - 5);
          var everyoneRole = message.guild.roles.everyone.id;
          if (data.includes(names)) {
            message.channel
              .send(names + "Du hast schon einen channel")
              .then((msg) => {
                msg.delete({ timeout: 10000 });
              });
            reaction.users.remove(userid);
            //checks if the user has already an channel
    
          } else {
            var names = user.tag.substring(0, user.tag.length - 5);
            //if he has not then it creates an new channel
            message.guild.channels
              .create(names, {
                type: "text",
                parent: "811643384770986005",
                permissionOverwrites: [
                  {
                    id: userid,
                    allow: ["VIEW_CHANNEL"],
                  },
                  {
                    id: everyoneRole,
                    deny: ["VIEW_CHANNEL"],
                  },
                ],
              })
              .then((cchannel) => {
                fb.push(cchannel.id.toString())
                reaction.users.remove(userid);
                fs.appendFile(
                  "activeTickets.txt",
                  names + "\n",
                  function (err) {
                    if (err) return console.log(err);
                    console.log("Saved");
                  }
                );
                //logs that this user now has an channel
                const embed = new Discord.MessageEmbed()
                  .setTitle("Support Ticket")
                  .setColor(0xff0000)
                  .setDescription(
                    "If you want to close this Channel.\n React with 🔒 to close."
                  );
                cchannel.send(embed).then((sentEmbed) => {
                  sentEmbed.react("🔒");
                });
              });
          }
      }}
    });
  if (emoji.name == '🔒') {
    fs.readFile("activeTickets.txt", async function (err, data) {
    if(!user.bot) {
      if((fb.indexOf(message.channel.id.toString()) > -1)){
          var names = user.tag.substring(0, user.tag.length - 5);
          var replace = "."
          const fetchchannel = message.channel;
          fetchchannel.delete();
          fs.writeFileSync("activeTickets.txt", replace);
      }
  }
  }
    )}
});
}}
