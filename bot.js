const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("5507864878605926808")
setInterval(function() {
channel.send(`spam-by-mody spam-by-mody `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
