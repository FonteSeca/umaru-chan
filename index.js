const Discord = require('discord.js');
const Bot = new Discord.Client();

Bot.on('ready', () => {
    console.log(`[Startou] ${new Date()}`);
    Bot.user.setGame('U.M.R Simulator!!')
});

music(Bot);

let PREFIX = '+';

Bot.on('message', message => {
    if(message.content === 'ping') {

    const message = msg.content.trim();

    // Verifica se a mensagem é um comando
    if (message.toLowerCase().startsWith(PREFIX.toLowerCase())) {
    	// Get the command and suffix.
    	const command = message.substring(PREFIX.length).split(/[ \n]/)[0].toLowerCase().trim();
    	const suffix = message.substring(PREFIX.length + command.length).trim();

		switch (command) {
			case 'permission':
			return permission(msg, suffix);
		}

    	if(message.content == 'ping') {
    		message.channel.send('PINGOU')
    	}
	}

}});

function basicembed(color,text) {
    return {embed: {
      color: color,
      description: text
      }};
  }

  function imageembed(color,image,text) {
  return {embed: {
    "color": color,
    "description": text,
    "image": {
    "url": image}
    }};
}


Bot.login(process.env.token);
