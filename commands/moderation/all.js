module.exports = {

    name: 'all',
    description: 'displays all users in a channel',

    execute(message, args) {

        message.guild.members.cache.forEach(member => message.channel.send(`${member.user.username}\n`))
            .catch(err => {
            console.log(err);
        });
    }
}
