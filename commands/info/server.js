module.exports = {

    name: 'server',
    description: 'displays server name and server member count',
    cooldown: 3,

    execute(message, args) {

        message.channel.send(`Server name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nServer owner: ${message.guild.owner}`)
            .catch(err => {
            console.log(err);
            message.channel.send('Error displaying server info.');
        });
    }
}