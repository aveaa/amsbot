exports.info = {description: 'Показать пинг бота', required: 'SEND_MESSAGES'}
exports.run = (client, msg, args) => {
  var emojis = {
  zapret: '488237552545955840',
  razreshenie: '488238174401986560'
}
  
  var embed = new client.RichEmbed()
    .setTitle('Пинг')
    .setDescription(`${client.emojis.get(emojis.razreshenie)} Пинг: ${Math.round(client.ping)}ms`)    
    .setColor('FFFFFF')
  msg.channel.send({embed})
}
