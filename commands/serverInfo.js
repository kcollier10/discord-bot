module.exports = {

    name: 'info',
    description: 'displays server name and server member count',

    execute(message, args) {

        message.channel.send(`Server name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`)
            .catch(err => {
            console.log(err);
            message.channel.send('Error displaying server info.');
        });

    }
}