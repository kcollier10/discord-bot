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

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();


    if (command === 'whoami') {
        message.channel.send(`You are: ${message.member}`);
    } else if (command === 'arguments') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`)
        }
        message.channel.send(`Command name: ${command}\nArguments: ${args}\nArguments total: ${args.length}`);
    }
    // if (command === 'sunshine') {
    //     client.commands.get('sunshine').execute(message, args);
    // } else if (command === 'kick') {
    //     client.commands.get('kick').execute(message, args);
    // } else if (command === 'allUsers') {
    //     client.commands.get('allUsers').execute(message, args);
    // } else if (command === 'random') {
    //     client.commands.get('randomSun').execute(message, args);
    // } else if (command === 'info') {
    //     client.commands.get('serverInfo').execute(message, args);
    // }

});

client.login(token);



        // message.channel.send({files: ["https://gyazo.com/703940223a34b3288d561c00bbb0b82c"]});
