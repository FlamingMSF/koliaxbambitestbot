const { Client } = require('discord.js');
const commando = require('discord.js-commando');
const discord = require('discord.js');
var guilds = require('discord.js');
const bot = new commando.Client({
    commandPrefix: '\\'
    });
const client = new discord.Client();
const config = require('./tokens.json');
global.servers = {};

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands')

bot.on('message', function(message){
    const input = 'A wild pokémon has appeared!'
    if(message.content.includes(input))
    {
        var ts = new Date();
        let pokePingObject = message.guild.roles.find(role => role.name === "Poke Ping");
        const channel = message.guild.channels.find(channel => channel.name === 'poke')
channel.send(`${pokePingObject} A pokémon has spawned.\n  Time: ` + ts.toLocaleTimeString() +'\n  Date: '+ ts.toDateString());
    }
});
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
bot.on("message", message => {
  const args = message.content.split(" ").slice(1);
  const arg = '.eval'
  if (message.content.includes(arg)) {
    if(message.author.id !== config.ownerID) return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
});
bot.on("message", message => {
  const args = message.content.split(" ").slice(1);
  if (message.content.includes(',eval')) {
    if(message.author.id = config.ownerId) return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
});

bot.on('ready', function(){
    console.log('Ready')
});
bot.login(process.env.TOKEN)
