const Commando = require('discord.js-commando');
const bot = new Commando.Client();

bot.on('message', function(message){
    if(message.content == 'Ping')
    {
        message.channel.send('Pong');
    }
});

bot.on('ready', function(){
    console.log('Ready')
});

bot.login(process.env.TOKEN)
