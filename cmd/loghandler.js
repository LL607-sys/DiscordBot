const fs = require("fs")
const colors = require("colors")

module.exports = {
    messagelog: async function(client){
        client.on(`message`, async message => {
            write("<message send> by "+message.author.tag+" with content \""+message.content+"\" was send");
        });
    },
    leaveguild: async function(client){
        client.on('guildMemberRemove', async member => {
            write("<user leve> "+member.displayName)
        });
    },
    joinguild: async function(client){
        client.on('guildMemberAdd', async member => {
            write("<new user joined> "+member.displayName)
        });
    },
    messageDelete: async function(client){
        client.on('messageDelete', async message => {
            write("<messge deleated> by "+message.author.tag+" with content: \""+message.content+"\"")
        });
    },
    messageUpdate: async function(client){
        client.on('messageUpdate', (oldMessage, newMessage) => {
            write("<messge edited> message by "+oldMessage.author.tag+" with the the content \""+oldMessage.content+"\" was eddited to \""+newMessage.content+"\"")
        });
    },
    banLog: async function(client){
        client.on("guildBanAdd", function(guild, user) {
            write("<ban> "+user.tag+"was banned")
        });
    }
}

function write(s){
    console.log(getTimeExact().bgGreen.white+" "+s.replace("\n","__NEWLINE__"))
    fs.appendFile('log/latest.log', getTimeExact()+" "+s.replace("\n","__NEWLINE__")+"\n", function (err) {
        if (err) throw err;
    });
}

function getTimeExact(){
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    return("["+date + "." + month + "." + year + " " + hours + ":" + minutes + ":" + seconds+"]");
}
