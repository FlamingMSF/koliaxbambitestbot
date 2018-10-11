const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'dice',
            group: 'simple',
            memberName: 'diceroll',
            description: 'Rolls a 6 headed die'
        });
    }

    async run(message, _args)
    {
        var diceRoll = Math.floor(Math.random() * 6) + 1;
        {
            message.channel.send('Your dice landed on' + ' ' +  diceRoll);
        }
    }
}

module.exports = DiceRollCommand;
