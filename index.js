const Discord = require('discord.js');
const { prefix, token } = require('./config.json')
const client = new Discord.Client();

client.once('ready', () => {
    console.log("Hello, Sunshine!")
});

client.on('message', message => {
    // console.log(message.content);
    if (message.content === `${prefix}sunshine`) {
        message.channel.send('You are my sunshiiiiine <3');
    } else if (message.content === `${prefix}server`) {
        message.channel.send(`Server name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    } else if (message.content === `${prefix}owner`) {
        message.channel.send(`Server owner: ${message.guild.owner}`);
    } else if (message.content === `${prefix}whoami`) {
        message.channel.send(`You are: ${message.member}`)
    }
});

client.login(token);