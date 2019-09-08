const commando = require('discord.js-commando');

class ECommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'e',
            group: 'simple',
            memberName: 'e',
            description: '```Gives Link To Pokémons starting with E```'
        });
    }

    async run(message, _args)
    {
        var chance = Math.floor(Math.random() * 1) +1;
        if(chance == 1)
            {
                message.channel.send("```Pokémons name that start with E```" + "https://bulbapedia.bulbagarden.net/wiki/List_of_Pokémon_by_name#E");
            }
    }
}

module.exports = ECommand;
