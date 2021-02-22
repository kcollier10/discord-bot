"use strict";

const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json')
const client = new Discord.Client();
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();
const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
    const allCommandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of allCommandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}


client.once('ready', () => {
    console.log("Hello, Sunshine!")
});


client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;


    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);
        // || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    // if (commandName === 'arguments') {
    //     if (!args.length) {
    //         return message.channel.send(`You didn't provide any arguments, ${message.author}!`)
    //     }
    //     message.channel.send(`Command name: ${commandName}\nArguments: ${args}\nArguments total: ${args.length}`);
    // }

    if (!command) return;

    // if (command.permissions) {
    //     const authorPerms = message.channel.permissionsFor(message.author);
    //     if (!authorPerms || !authorPerms.has(command.permissions)) {
    //         return message.reply('You do not have permission to do this.');
    //     }
    // }

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownTotal = (command.cooldown || 3) * 1000;

    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownTotal;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
        }
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownTotal);


    try {
        command.execute(message, args);
    } catch (e) {
        console.log(e);
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
    // } else if (command === 'whoami') {
    //     client.commands.get('userInfo').execute(message, args);
    // }

});

client.login(token);



// message.channel.send({files: ["https://gyazo.com/703940223a34b3288d561c00bbb0b82c"]});
