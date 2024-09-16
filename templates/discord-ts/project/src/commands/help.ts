import { CommandInteraction, SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('help')
  .setDescription('Show a list of available commands.');

export async function execute(interaction: CommandInteraction) {
  const helpMessage = `
  **🆘 Available Commands:**    
  
  1. **🏓 /ping** - Replies with "Pong!" to check if the bot is online.  

  2. **💡 /help ** - Shows this help message.

  =======
  `;
  await interaction.reply(helpMessage);
}
