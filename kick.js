module.exports = {
    kack: async function(client){ 
        client.on('message' , message => {
        if (message.content.startsWith('!!kick')) {
            if(!message.member.roles.cache.some(role => role.name === "CmdsvonBot"))
                      return message.reply("Ich vertrau dir nicht");
            const user = message.mentions.users.first();
            if (user) {
              const member = message.guild.member(user);
              if (member) {
                member
                  .kick('Optional reason that will display in the audit logs')
                  .then(() => {
                    message.reply(`Der Lappen ${user.tag} wurde gekickt`);
                  })
                  .catch(err => {
                    message.reply('Er ist eine höhere macht oder sowas');
                    console.error(err);
                  });
              } else {
                message.reply("Der wurde schon gekickt. lol");
              }
            } else {
              message.reply("Du huso sag mir wen ich kicken soll");
            }
        }})}};
