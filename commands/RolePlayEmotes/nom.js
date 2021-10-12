const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'nom',
  run: async(client, message, args) => {

    const member = message.mentions.users.first() ;
    

    await fetch('https://shiro.gg/api/images/nom')
      .then(res => res.json())
      .then(json => {

        let noPing = new Discord.MessageEmbed()
          .setTitle('**🥢 Nom**')
          .setColor('ffffff')
          .setDescription(`${message.author} is getting hungry!`)
          .setImage(json.url)
          .setFooter(`Requested by ${message.author.tag}`);

        let selfPing = new Discord.MessageEmbed()
          .setTitle('**🥢 Nom**')
          .setColor('ffffff')
          .setDescription(`${message.author} is getting hungry!`)
          .setImage(json.url)
          .setFooter(`Requested by ${message.author.tag}`);

        let ping = new Discord.MessageEmbed()
          .setTitle('**🥢 Nom**')
          .setColor('ffffff')    
          .setDescription(`${member}, ${message.author} is getting hungry!`)
          .setImage(json.url)
          .setFooter(`Requested by ${message.author.tag}`)

        if(member === message.author){
          return message.reply({ embeds: [selfPing] })
        } else if(!member){
          return message.reply({ embeds: [noPing] })
        } else {
          return message.reply({ embeds: [ping] })
        }

      })
  }
}