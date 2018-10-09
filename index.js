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

client.login(process.env.NDk4OTc3MTg2NTA2NzM1NjI4.Dp6OLA.uhjy9jcYIpo0uFp9fuwSGhnHFiw);
