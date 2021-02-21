module.exports = {

    name: 'random',
    description: 'picks a random user from the Discord server list, regardless of online status',

    execute(message, args) {

        message.channel.send(`Random sun: ${message.guild.members.cache.random()}`).catch(err => {
            console.log(err);
            message.channel.send('Error picking random user.');
        });
    }
}