const Discord = require('discord.js');
const kick = require('./cmd/kick.js');
const client = new Discord.Client();
const fs = require ('fs');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('LL607.me');
});
  const log = require("./cmd/loghandler.js")
  const kack = require("./cmd/kick.js")
  const help = require("./cmd/help.js")
  const logsend = require("./cmd/log.js")
  const ticket = require("./cmd/ticket.js")
  const ban = require("./cmd/ban.js")

      log.joinguild(client)
      log.leaveguild(client)
      log.messageDelete(client)
      log.messageUpdate(client)
      log.banLog(client)
      log.messagelog(client)

      kack.kack(client)

      help.help(client)

      logsend.Penis(client)

      ticket.ticket(client)

      ban.ban(client)
client.login('Token');
console.log(".____    .____     ________________________    \n|    |   |    |   /  _____/\\   _  \\______  \\   \n|    |   |    |  /   __  \\ /  /_\\  \\  /    /   \n|    |___|    |__\\  |__\\  \\\\  \\_/   \\/    /    \n|_______ \\_______ \\_____  / \\_____  /____/_____\n        \\/       \\/     \\/        \\/    /_____/")
