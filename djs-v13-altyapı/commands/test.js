const { MessageActionRow, MessageButton } = require("discord.js");
module.exports = {
	name: 'test',
	description: 'test',
	execute(message, args) {
		const button = new MessageButton()
			.setCustomID('sj')
			.setLabel('bas butona')
			.setStyle('PRIMARY');
  
      message.reply({ content: 'test',components: [[button]]});
	},
};