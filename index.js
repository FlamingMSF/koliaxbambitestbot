const Discord = require('discord.js');
const client = new Discord.Client();

bot.registry.registerGroup('simple', 'simple');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands')

bot.on('message', function(message){
    if(message.content == 'Ping')
    {
        message.channel.sendMessage('Pong');
    }
});

bot.on('ready', function(){
    console.log('Ready')
});

client.login(process.env.TOKEN);
