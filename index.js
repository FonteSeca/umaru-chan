const Discord = require('discord.js');
const Bot = new Discord.Client();

Bot.on('ready', () => {
    console.log(`[Startou] ${new Date()}`);
});

Bot.on('message', message => {
    if(message.content == 'ping') {
    	message.channel.send('PINGOU')
    }
});

Bot.login(process.env.token);
