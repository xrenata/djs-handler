module.exports = {
    name: 'interactionCreate',
    execute(interaction, client) {
        if (!interaction.isCommand()) return
        if (interaction.commandName === 'ping') {//ping komutu işte bu kadar  if açarak falan yapabilirsiniz
            return interaction.reply({ content: "Pong!" })
        }
    }

}