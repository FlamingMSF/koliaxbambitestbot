const commando = require('discord.js-commando');

class DCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'd',
            group: 'simple',
            memberName: 'd',
            description: '```Gives Link To Pokémons starting with D```'
        });
    }

    async run(message, _args)
    {
        var chance = Math.floor(Math.random() * 1) +1;
        if(chance == 1)
            {
                message.channel.send("```Pokémons name that start with D```" + "https://bulbapedia.bulbagarden.net/wiki/List_of_Pokémon_by_name#D");
            }
    }
}

module.exports = DCommand;
