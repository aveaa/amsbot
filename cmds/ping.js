exports.info = {description: 'Показать пинг бота', required: 'SEND_MESSAGES'}
exports.run = (client, msg, args) => {
  var razreshenie = client.emojis.get(emojis.razreshenie);
  var embed = new client.RichEmbed()
    .setTitle('Пинг')
    .setDescription('${razreshenie} Пинг: ${Math.round(client.ping)}ms`)    
    .setColor('FFFFFF')
  msg.channel.send({embed})
}
