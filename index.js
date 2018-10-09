const Commando = require('discord.js-commando');
const bot = new Commando.Client();

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

bot.login('BOT_TOKEN');
