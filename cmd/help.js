module.exports = {
    help: async function(client){ 
        client.on('message', msg => {
            if (msg.content.startsWith("!!help")) {
                msg.channel.send("```\n!!help = alle cmds\n!!kick (@user) = kickt den user (admin only)\n!!log = schickt den log (admin only)\n!!ticket = erstellt eine msg für channel createn (admin only)```")
            }
        })
    }}