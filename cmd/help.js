const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
    help: async function(client){ 
        client.on('message', message => {
            if (message.content.startsWith("!!help")) {
                try{
                const embed = new Discord.MessageEmbed()
                .setTitle('Commands:')
                .setColor(000000)
                .setDescription('**!Attention!**\n\n**Prefix is !!**\n\n``!!help``\n_all cmds_\n\n``!!kick (@user)``\n_kicks the user_\n\n``!!ban (@user)``\n_bans the user_\n\n``!!log``\n_sends the log_\n\n``!!ticket``\n_creates a embed Message_');
                message.channel.send(embed)
                } catch (e) {console.error("Failed to create embed")}
            }
        })
    }}
