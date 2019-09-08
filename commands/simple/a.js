const commando = require('discord.js-commando');

class ACommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'a',
            group: 'simple',
            memberName: 'a',
            description: '```Gives Link To Pokémons starting with A```'
        });
    }

    async run(message, _args)
    {
        var chance = Math.floor(Math.random() * 0) +1;
        if(chance == 1)
            {
                message.channel.send("```Pokémons name that start with A```" + "https://bulbapedia.bulbagarden.net/wiki/List_of_Pokémon_by_name#A");
            }
    }
}

module.exports = ACommand;
