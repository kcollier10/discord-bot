"use strict";

const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json')
const client = new Discord.Client();

client.commands = new Discord.Collection();
const allCommandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of allCommandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log("Hello, Sunshine!")
});

client.on('message', message => {
    if (message.content === `${prefix}sunshine`) {
        message.channel.send('You are my sunshiiiiine <3');
    } else if (message.content === `${prefix}owner`) {
        message.channel.send(`Server owner: ${message.guild.owner}`);
    } else if (message.content === `${prefix}whoami`) {
        message.channel.send(`You are: ${message.member}`);
    }
});

client.login(token);



        // message.channel.send({files: ["https://gyazo.com/703940223a34b3288d561c00bbb0b82c"]});
