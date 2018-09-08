const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
}); 




        client.on('message', message => {
          var prefix = '^^';
          if (message.content.startsWith(prefix + 'موسيقى')) {
      let embed = new Discord.RichEmbed()
      .addField('%play' ,'   :headphones:تشغيل الاغنيه باسم او برابط:headphones: ')
      .addField('%stop' ,'    :mute: ايقاف الاغنيه:mute:   ')
      .addField('%skip' ,'     :play_pause: تخطي الاغنيه :play_pause:  ')
      .addField('%pause' ,'    :clock1: ايقاف الاغنيه مؤقت:clock1:  ')
      .addField('%resume' ,'    :musical_note: تكملةالاغنيه:musical_note:  ')
      .addField('%queue' ,'    :pencil: اظهار قائمة التشغيل :pencil:   ')
      .addField('%np' ,'    :page_facing_up: اظهار الاغنية اللي انت مشغلها حاليا:page_facing_up:  ')
      .setColor('RANDOM')
      .setTitle('═════ஜ۩۞۩ஜ══════════ஜ۩۞۩ஜ═════')
      message.channel.send(embed)
      }
  });



















client.login(process.env.BOT_TOKEN);
