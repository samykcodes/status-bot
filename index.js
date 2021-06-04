const Discord = require('discord.js')
const Client =  new Discord.Client

Client.on('ready', () => {
    console.log("Bot is ready!")
})

Client.on('message', message => {
    console.log(message.content)
    if(message.content === "s.status") {
        const statusEmbed =  new Discord.MessageEmbed()
        .addField("Overall Meety Status(Not Including Bots)", "Working As Intended")
        .addField("Bot Status(Overall)", "Recieving Code Changes")
        .addField("Game Status", "On Hold")
        message.channel.send(statusEmbed)
    }
})

Client.login("ODUwNDE2MzQyMDc4NDU1ODU5.YLpZ7w.AZIqpgwMZMHF490dV4cl013_uS0")