import { Client, IntentsBitField } from 'discord.js';
import config from './config';
import * as commandsModules from './commands';

const commands = Object(commandsModules);

export const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildMessages,
  ],
});

client.once('ready', () => {
  console.log('{{name}} is online!');
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;
  commands[commandName].execute(interaction, client);
});

client.login(config.BOT_TOKEN);
