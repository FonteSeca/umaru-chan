  const Discord = require('discord.js');
  const music = require('discord.js-music-v11');
  const Bot = new Discord.Client();
  const token = "MzM2MjcwODE2NTE1OTgxMzIy.DE19wQ.XNIVAlwWq4Q9WR2-7UvYYBkmEhM" // Recommended to load from json file.

  Bot.on('ready', () => {
      console.log(`[Start] ${new Date()}`);
      Bot.user.setGame('O-onii-san... <3')
  });

  music(Bot);

  let PREFIX = '+';

  Bot.on('message', msg => {

    const message = msg.content.trim();

    // Verifica se a mensagem é um comando
    if (message.toLowerCase().startsWith(PREFIX.toLowerCase())) {
      // Get the command and suffix.
      const command = message.substring(PREFIX.length).split(/[ \n]/)[0].toLowerCase().trim();
      const suffix = message.substring(PREFIX.length + command.length).trim();

      // Comando
     switch (command) {
    case 'permission':
      return test(msg, suffix);
    case 'say':
      return say(msg, suffix);
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

  function say(msg, suffix) {
    msg.delete();
    msg.channel.send(basicembed('5351170', suffix));
  }

 Bot.login(process.env.token);
