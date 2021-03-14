module.exports = {
    ban: async function(client){
        client.on('message', (message, user) => {
            if (message.content.startsWith("!!ban")) {
                if(!message.member.roles.cache.some(role => role.name === "Admin"))
                return message.reply("Ich vertrau dir nicht");
                var mem = message.mentions.members.first();                
                if(message) {
                    mem.ban();
                    message.channel.send(`<@`+ mem + `>` + ` was banned`)
                }else{
                    message.channel.send(`Unable to ban ` + `<@` + mem + `>`)
                }
            }
        })
    }
}
