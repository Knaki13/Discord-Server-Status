const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { SlashCommandBuilder } = require('@discordjs/builders');
const ping = require('minecraft-server-util');
const { token, clientId, guildId } = require('./config.json');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        // Si cela ne fonctionne pas,
        // Allez sur le Portail des Développeurs Discord.
        // Sélectionnez votre application.
        // Faites défiler jusqu'à la section "Privileged Gateway Intents".
        // Activez les intents nécessaires.
        // Ajoutez d'autres intents ici si nécessaire
    ],
});

const PREFIX = '!';

const commands = [
    new SlashCommandBuilder()
        .setName('update')
        .setDescription('Actualise le nombre de joueurs sur le serveur Minecraft')
        .toJSON(),
];

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
    try {
        console.log('Actualisation des (/) commandes.');
        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commands },
        );
        console.log('(/) commandes parfaitement recharger (/).');
    } catch (error) {
        console.error(error);
    }
})();

async function updateActivity() {
    try {
        const result = await ping.status("**.***.*.**", 25565); // Remplacez par l'adresse IP de votre serveur 
        client.user.setActivity({
            name: `${result.players.online} / 999 en ligne`,
            type: ActivityType.Watching
        });
    } catch (error) {
        console.error(error);
        client.user.setActivity({
            name: "Serveur OFF",
            type: ActivityType.Watching
        });
    }
}

client.on('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag}!`);
    client.user.setStatus("online");

    updateActivity();

    setInterval(updateActivity, 60000); // 60000 millisecondes = 1 minute
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'update') {
        await updateActivity();
        await interaction.reply('Nombre de joueurs actualisé!');
    }
});

client.login(token);
