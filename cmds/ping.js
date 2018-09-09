exports.info = {description: 'Показать пинг бота', required: 'SEND_MESSAGES'}
exports.run = (client, msg, args) => {
  var embed = new client.RichEmbed()
    .setTitle('Пинг')
    .setDescription(client.emojis.get(emojis.razreshenie) + ` Пинг: ${Math.round(client.ping)}ms`)    
    .setColor('FFFFFF')
  msg.channel.send({embed})
}
