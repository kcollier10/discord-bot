module.exports = {

    name: 'kick',
    description: 'chat interaction kick, not intended for kicking from server entirely',
    guildOnly: true,
    permissions: 'KICK_MEMBERS',
    cooldown: 3,

    execute(message, args) {

        const taggedUser = message.mentions.users.first();
        message.channel.send(`You kicked ${taggedUser.username}!`)
            .catch(err => {
                console.log(err);
                if (!message.mentions.users.size) {
                    return message.reply('You need to tag a user!')
                }
                message.channel.send('Error kicking user. Try again!');
            });
    }
}
