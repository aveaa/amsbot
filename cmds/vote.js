exports.info = {description: 'Голосование', required: 'SEND_MESSAGES'}
exports.run = async (client, msg, args) => {
  var embed = new client.RichEmbed()
    .setTitle('Голосование')
    .setDescription(args.join(' '))
    .setColor('RANDOM')
    .setFooter('Sahara | ' + msg.author.username + '#' + msg.author.discriminator)
  var m = await (msg.guild.channels.find('name', '🔔║votes')).send({embed})
  await m.react('✅')
  await m.react('❌')
  await m.react('✅')
  return msg.reply('**Голосование успешно начато**')
}
 
