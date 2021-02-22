module.exports = {
    Penis: async function(client){
      client.on('message', message => {
        if (message.content === '!!log') {
          if(!message.member.roles.cache.some(role => role.name === "CmdsvonBot"))
          return message.reply("Ich vertrau dir nicht");
            message.channel.send(`You need some log? Take one`, {
                files: [
                "./log/latest.log"
                ]
                })
        }
        });
    }}
