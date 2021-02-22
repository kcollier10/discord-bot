module.exports = {

    name: 'user',
    description: 'gives info about user to user',
    cooldown: 3,

    execute(message, args) {

        message.channel.send(`You are ${message.member} and we love u`)
            .catch(err => {
                console.log(err);
                message.channel.send('Error displaying user data.');
            });
    }
}