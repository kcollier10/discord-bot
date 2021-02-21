module.exports = {

    name: 'sunshine',
    description: 'sings a song to a user',

    execute(message, args) {

        message.channel.send('You are my sunshiiiiine <3')
            .catch(err => {
            console.log(err);
            message.channel.send('Error singing the sunshine song :(');
        });
    }
}