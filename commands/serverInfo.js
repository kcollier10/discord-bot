client.on('message', message => {
    if (message.content === `${prefix}userlist`) {
        list.members.cache.forEach(member => message.channel.send(`${member.user.username}\n`))
    } else if (message.content === `${prefix}serverinfo`) {
        message.channel.send(`Server name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    }

});