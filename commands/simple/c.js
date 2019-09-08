const commando = require('discord.js-commando');

class CCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'c',
            group: 'simple',
            memberName: 'c',
            description: '```Gives Link To Pokémons starting with C```'
        });
    }

    async run(message, _args)
    {
        var chance = Math.floor(Math.random() * 1) +1;
        if(chance == 1)
            {
                message.channel.send("```Pokémons name that start with C```" + "https://bulbapedia.bulbagarden.net/wiki/List_of_Pokémon_by_name#C");
            }
    }
}

module.exports = CCommand;
