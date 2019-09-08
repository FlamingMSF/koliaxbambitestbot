const commando = require('discord.js-commando');

class BCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'b',
            group: 'simple',
            memberName: 'b',
            description: '```Gives Link To Pokémons starting with B```'
        });
    }

    async run(message, _args)
    {
        var chance = Math.floor(Math.random() * 1) +1;
        if(chance == 1)
            {
                message.channel.send("```Pokémons name that start with B```" + "https://bulbapedia.bulbagarden.net/wiki/List_of_Pokémon_by_name#B");
            }
    }
}

module.exports = BCommand;
