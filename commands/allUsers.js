module.exports = {

    name: 'allUsers',
    description: 'displays all users in a channel',

    execute(message, args) {

        message.guild.members.cache.forEach(member => message.channel.send(`${member.user.username}\n`))
            .catch(err => {
            console.log(err);
            message.channel.send('Error displaying all users.');
        });

    }
}
