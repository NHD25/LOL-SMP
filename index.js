const {Client, RichEmbed } = require('discord.js');
const bot = new Client();

 
const token = 'MTI3NDMwMDA3NTMzNzU4MDU0NQ.GmYbmQ.tfabVv2YzaqUdF-oQBwwsIMnx4Y2HDWewVgpB0';
 
bot.on('ready', () =>{
    console.log('Bot has come online.');
})
 
bot.login(token);