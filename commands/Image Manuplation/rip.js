const { MessageAttachment } = require('discord.js');
const { Canvas } = require('canvacord');

module.exports = {
  name: 'rip',
  run: async(client, message, args) => {

    const Target = message.mentions.users.first() || message.author;

    const avatar = Target.displayAvatarURL({ format: "png" })

    const image = await Canvas.rip(avatar);

    const attachment = new MessageAttachment(image, 'rip.gif')

    message.reply({
      files: [
        attachment
      ]
    })
  }
}