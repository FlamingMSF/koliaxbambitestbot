const Commando = require('discord.js-commando');
const client = new Commando.Client();

client.on('message', function(message){
    if(message.content == 'Ping')
    {
        message.channel.send('Pong');
    }
});

client.on('ready', function(){
    console.log('Ready')
});

client.login(process.env.TOKEN)
