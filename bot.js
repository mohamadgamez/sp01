const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("548938316486279168")
setInterval(function() {
channel.send(`spam-by-mody spam-by-mody `);
}, 3)
})

client.login(process.env.BOT_TOKEN);
