const Discord = require('discord.js');
const Bot = new Discord.Client();

Bot.on('ready', () => {
    console.log(`[Startou] ${new Date()}`);
    Bot.user.setPresence({ game: { name: 'U.M.R Simulator!!', type: 0 } });
});

music(Bot);

let PREFIX = '+';

Bot.on('message', message => {

    const message = msg.content.trim();

    // Verifica se a mensagem é um comando
    if (message.toLowerCase().startsWith(PREFIX.toLowerCase())) {
    	// Get the command and suffix.
    	const command = message.substring(PREFIX.length).split(/[ \n]/)[0].toLowerCase().trim();
    	const suffix = message.substring(PREFIX.length + command.length).trim();

		switch (command) {
			case 'permission':
			return permission(msg, suffix);
    default:
      msg.channel.send(basicembed('5351170', 'Comando errado ' + msg.author + ' b-baka...'));
    }

	}

});

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

  function isAdmin(member) {
    return member.hasPermission("ADMINISTRATOR");
  }

  function permission(msg, suffix) {
    msg.delete();
    if (isAdmin(msg.member)) {
      msg.channel.send(basicembed('5351170', 'Com permissão, nha'));
    } else {
      msg.channel.send(basicembed('5351170', 'Sem permissão'));
    }
  }


Bot.login(process.env.token);
