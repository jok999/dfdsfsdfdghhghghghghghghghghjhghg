const Discord = require("discord.js");
const client = new Discord.Client();
const yt = require('ytdl-core');

const prefix = '%'//تقد تغير البرفكس للي تبيه
 //الحقوق كامله محفوضه لدا سيرفر الفا
client.on('ready', () => {//الحقوق كامله محفوضه لدا سيرفر الفا
    console.log(`Logged in as ${client.user.tag}!`);//الحقوق كامله محفوضه لدا سيرفر الفا
    console.log(`in ${client.guilds.size} servers `)//الحقوق كامله محفوضه لدا سيرفر الفا
    console.log(`[Users] ${client.users.size}`)//الحقوق كامله محفوضه لدا سيرفر الفا
});//الحقوق كامله محفوضه لدا سيرفر الفا
//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
function commandIs(str, msg){//الحقوق كامله محفوضه لدا سيرفر الفا
    return msg.content.toLowerCase().startsWith('*' + str);//الحقوق كامله محفوضه لدا سيرفر الفا
}//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
function pluck(array) {//الحقوق كامله محفوضه لدا سيرفر الفا
    return array.map(function(item) { return item['name']; });//الحقوق كامله محفوضه لدا سيرفر الفا
}//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
function hasRole(mem, role) {//الحقوق كامله محفوضه لدا سيرفر الفا
    if(pluck(mem.roles).includes(role)){//الحقوق كامله محفوضه لدا سيرفر الفا
        return true;//الحقوق كامله محفوضه لدا سيرفر الفا
    } else {//الحقوق كامله محفوضه لدا سيرفر الفا
        return false;//الحقوق كامله محفوضه لدا سيرفر الفا
    }//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
  }//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
var servers = {};

var q1 = "%قران 1"//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
var q2 = "%قران 2"//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
var q3 = "%قران 3"//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
var q4 = "%قران 4"//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
var q5 = "%قران 5"//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
var q6 = "%قران 6"//الحقوق كامله محفوضه لدا سيرفر الفا
//الحقوق كامله محفوضه لدا سيرفر الفا
var q7 = "%قران 7"//الحقوق كامله محفوضه لدا سيرفر الفا

function play(connection, message) {//الحقوق كامله محفوضه لدا سيرفر الفا
    var server = servers[message.guild.id];//الحقوق كامله محفوضه لدا سيرفر الفا
    //الحقوق كامله محفوضه لدا سيرفر الفا
   server.dispatcher = connection.playStream(yt(server.queue[0], { fliter: "audionly" }));//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
    server.queue.shift();//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
    server.dispatcher.on("end", function() {//الحقوق كامله محفوضه لدا سيرفر الفا
        if (server.queue[0]) play(connection, message);//الحقوق كامله محفوضه لدا سيرفر الفا
        else connection.disconnect();//الحقوق كامله محفوضه لدا سيرفر الفا
    });//الحقوق كامله محفوضه لدا سيرفر الفا
}//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
client.on("ready", () => {//الحقوق كامله محفوضه لدا سيرفر الفا
    console.log(`Quran bot is in ${client.guilds.size} servers `)//الحقوق كامله محفوضه لدا سيرفر الفا
});//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
var PREFIX = "%";//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا //الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
client.on("message", message => {//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
                        if (message.content === q1 ) {//الحقوق كامله محفوضه لدا سيرفر الفا
                  message.react('🔊')//الحقوق كامله محفوضه لدا سيرفر الفا
    const voiceChannel = message.member.voiceChannel;//الحقوق كامله محفوضه لدا سيرفر الفا
    if (!voiceChannel) {//الحقوق كامله محفوضه لدا سيرفر الفا
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);  
    }//الحقوق كامله محفوضه لدا سيرفر الفا
    voiceChannel.join()//الحقوق كامله محفوضه لدا سيرفر الفا
      .then(connnection => {//الحقوق كامله محفوضه لدا سيرفر الفا
        let stream = yt('https://www.youtube.com/watch?v=V4b9f9BQTKI', {audioonly: true});//الحقوق كامله محفوضه لدا سيرفر الفا
        const dispatcher = connnection.playStream(stream);//الحقوق كامله محفوضه لدا سيرفر الفا
      });//الحقوق كامله محفوضه لدا سيرفر الفا
  }//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
                        if (message.content === q2 ) {//الحقوق كامله محفوضه لدا سيرفر الفا
                  message.react('🔊')//الحقوق كامله محفوضه لدا سيرفر الفا
    const voiceChannel = message.member.voiceChannel;//الحقوق كامله محفوضه لدا سيرفر الفا
    if (!voiceChannel) {//الحقوق كامله محفوضه لدا سيرفر الفا
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }//الحقوق كامله محفوضه لدا سيرفر الفا
    voiceChannel.join()//الحقوق كامله محفوضه لدا سيرفر الفا
      .then(connnection => {//الحقوق كامله محفوضه لدا سيرفر الفا
        let stream = yt('https://www.youtube.com/watch?v=rP18g3VSnaM', {audioonly: true});//الحقوق كامله محفوضه لدا سيرفر الفا
        const dispatcher = connnection.playStream(stream);//الحقوق كامله محفوضه لدا سيرفر الفا
      });//الحقوق كامله محفوضه لدا سيرفر الفا
  }//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
                            if (message.content === q3 ) {//الحقوق كامله محفوضه لدا سيرفر الفا
                  message.react('🔊')//الحقوق كامله محفوضه لدا سيرفر الفا
    const voiceChannel = message.member.voiceChannel;//الحقوق كامله محفوضه لدا سيرفر الفا
    if (!voiceChannel) {//الحقوق كامله محفوضه لدا سيرفر الفا
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }//الحقوق كامله محفوضه لدا سيرفر الفا
    voiceChannel.join()//الحقوق كامله محفوضه لدا سيرفر الفا
      .then(connnection => {//الحقوق كامله محفوضه لدا سيرفر الفا
        let stream = yt('https://www.youtube.com/watch?v=4Zr--4eLKPA', {audioonly: true});//الحقوق كامله محفوضه لدا سيرفر الفا
        const dispatcher = connnection.playStream(stream);//الحقوق كامله محفوضه لدا سيرفر الفا
      });//الحقوق كامله محفوضه لدا سيرفر الفا
  }//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
                            if (message.content === q4 ) {//الحقوق كامله محفوضه لدا سيرفر الفا
                  message.react('🔊')//الحقوق كامله محفوضه لدا سيرفر الفا
    const voiceChannel = message.member.voiceChannel;//الحقوق كامله محفوضه لدا سيرفر الفا
    if (!voiceChannel) {//الحقوق كامله محفوضه لدا سيرفر الفا
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }//الحقوق كامله محفوضه لدا سيرفر الفا
    voiceChannel.join()//الحقوق كامله محفوضه لدا سيرفر الفا
      .then(connnection => {//الحقوق كامله محفوضه لدا سيرفر الفا
        let stream = yt('https://www.youtube.com/watch?v=Ktync4j_nmA', {audioonly: true});//الحقوق كامله محفوضه لدا سيرفر الفا
        const dispatcher = connnection.playStream(stream);//الحقوق كامله محفوضه لدا سيرفر الفا
        });//الحقوق كامله محفوضه لدا سيرفر الفا
  }//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
                              if (message.content === q5 ) {//الحقوق كامله محفوضه لدا سيرفر الفا
                  message.react('🔊')//الحقوق كامله محفوضه لدا سيرفر الفا
    const voiceChannel = message.member.voiceChannel;//الحقوق كامله محفوضه لدا سيرفر الفا
    if (!voiceChannel) {//الحقوق كامله محفوضه لدا سيرفر الفا
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }//الحقوق كامله محفوضه لدا سيرفر الفا
    voiceChannel.join()//الحقوق كامله محفوضه لدا سيرفر الفا
      .then(connnection => {//الحقوق كامله محفوضه لدا سيرفر الفا
        let stream = yt('https://www.youtube.com/watch?v=_gzGlmWpocM', {audioonly: true});//الحقوق كامله محفوضه لدا سيرفر الفا
        const dispatcher = connnection.playStream(stream);//الحقوق كامله محفوضه لدا سيرفر الفا
        });//الحقوق كامله محفوضه لدا سيرفر الفا
  }//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
                                  if (message.content === q6 ) {//الحقوق كامله محفوضه لدا سيرفر الفا
                  message.react('🔊')//الحقوق كامله محفوضه لدا سيرفر الفا
    const voiceChannel = message.member.voiceChannel;//الحقوق كامله محفوضه لدا سيرفر الفا
    if (!voiceChannel) {//الحقوق كامله محفوضه لدا سيرفر الفا
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }//الحقوق كامله محفوضه لدا سيرفر الفا
    voiceChannel.join()//الحقوق كامله محفوضه لدا سيرفر الفا
      .then(connnection => {//الحقوق كامله محفوضه لدا سيرفر الفا
        let stream = yt('https://www.youtube.com/watch?v=WYT0pQne-7w', {audioonly: true});//الحقوق كامله محفوضه لدا سيرفر الفا
        const dispatcher = connnection.playStream(stream);//الحقوق كامله محفوضه لدا سيرفر الفا
        });//الحقوق كامله محفوضه لدا سيرفر الفا
  }//الحقوق كامله محفوضه لدا سيرفر الفا
    //الحقوق كامله محفوضه لدا سيرفر الفا
                                      if (message.content === q7 ) {//الحقوق كامله محفوضه لدا سيرفر الفا
                  message.react('🔊')//الحقوق كامله محفوضه لدا سيرفر الفا
    const voiceChannel = message.member.voiceChannel;//الحقوق كامله محفوضه لدا سيرفر الفا
    if (!voiceChannel) {//الحقوق كامله محفوضه لدا سيرفر الفا
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }//الحقوق كامله محفوضه لدا سيرفر الفا
    voiceChannel.join()//الحقوق كامله محفوضه لدا سيرفر الفا
      .then(connnection => {//الحقوق كامله محفوضه لدا سيرفر الفا
        let stream = yt('https://www.youtube.com/watch?v=a-JdEFdgBaU', {audioonly: true});//الحقوق كامله محفوضه لدا سيرفر الفا
        const dispatcher = connnection.playStream(stream);//الحقوق كامله محفوضه لدا سيرفر الفا
        });//الحقوق كامله محفوضه لدا سيرفر الفا
  }//الحقوق كامله محفوضه لدا سيرفر الفا
    //الحقوق كامله محفوضه لدا سيرفر الفا
    //الحقوق كامله محفوضه لدا سيرفر الفا
   //الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
  if(message.content === "%توقف" ) {//الحقوق كامله محفوضه لدا سيرفر الفا
                var servers = {};//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
            if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();//الحقوق كامله محفوضه لدا سيرفر الفا
   //الحقوق كامله محفوضه لدا سيرفر الفا
  }//الحقوق كامله محفوضه لدا سيرفر الفا
//الحقوق كامله محفوضه لدا سيرفر الفا
 if(message.content === "%القران") {//الحقوق كامله محفوضه لدا سيرفر الفا
   message.channel.send(` **القران الكريم**
**● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●ا
     🕋اوامر البوت 🕋
اذكار: يعرض لك الاذكار
 دعوه: اضافة البوت الى سيرفرك
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
        اوامر تشغيل القران  
:mosque: %قران 1 
|   القران الكريم كامل بصوت الشيخ عبد الباسط عبدالصمد|
:mosque: %قران 2
| القران الكريم كامل الشيخ أحمد العجمي |
:mosque: %قران 3
| القرآن الكريم كامل بصوت الشيخ فارس عبّاد|
:mosque: %قران 4
| القرآن الكريم كامل بصوت الشيخ ماهر المعيقلي|
:mosque: %قران 5
|  القران الكريم كامل بصوت الشيخ محمد أنور الشحات|
:mosque: %قران 6
| القران الكريم كامل بصوت الشيخ ياسر الدوسري|
:mosque: %قران 7
| القرآن الكريم كامل بصوت الشيخ عبدا لرحمن السديس|
:mosque: %توقف
|  أيقاف القران|
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
 `)
 }
 
       
});



var adkar = [
  '**اذكار  | **اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ.',
  '**اذكار  |  **اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى. ',
  '**اذكار  ‏|  **اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ، وَجِلَّهُ، وَأَوَّلَهُ، وَآخِرَهُ، وَعَلَانِيَتَهُ، وَسِرَّهُ. ',
  '**اذكار  |  **أستغفر الله .',
  '**اذكار  | **الْلَّهُ أَكْبَرُ',
  '**اذكار  |  **الل��َهُمّ�� صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ , وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ , اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ.',
  '**اذكار  |  **سُبْحَانَ الْلَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا الْلَّهُ، وَالْلَّهُ أَكْبَرُ',
  '**اذكار  | **لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ.',
  '**اذكار  | **أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ',
  '**اذكار  | **سُبْحـانَ اللهِ وَبِحَمْـدِهِ. ',
  '**اذكار**|  لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.',
  '**اذكار  ‏|   **اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.',
  '**اذكار  | ‏ **يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ.',
  'اذكار    |  **أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ.**',
  '**اذكار  |  **اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.',
  '**اذكار  |  **اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد. ',
  '**اذكار  |  **أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق.',
  '**اذكار  |  **يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ. ',
  '**اذكار  |  **اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ.',
  '**اذكار  |  **اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ.',
  '**اذكار  |  **سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه. ',
  '**اذكار  |  **اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور.',
  '**اذكار  |  **بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم. ',
  '**اذكار  |  **حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.',
  '**اذكار  |  **اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر.',
  '**اذكار  |  **اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك',
  '**اذكار  |  **رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً',
  '**اذكار  |  **اللهم إني أعوذ بك من العجز، والكسل، والجبن، والبخل، والهرم، وعذاب القبر، اللهم آت نفسي تقواها، وزكها أنت خير من زكاها. أنت وليها ومولاها. اللهم إني أعوذ بك من علم لا ينفع، ومن قلب لا يخشع، ومن نفس لا تشبع، ومن دعوة لا يستجاب لها',
  '**اذكار  |  **اللهم إني أعوذ بك من شر ما عملت، ومن شر ما لم أعمل',
  '**اذكار  |  **اللهم مصرف القلوب صرف قلوبنا على طاعتك',
  ]
  
  client.on('message', message => {
  if (message.content.startsWith("اذكار")) {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(message.author.avatarURL) 
  .addField('اذكار',
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
   }
  });










 client.on('message' , message => {

    if (message.content === "دعوه") {
	    message.reply(`تم ارساله الرابط في الخاص`) 
        if(!message.channel.guild) return message.reply('**الآمر فقط في السيرفرات**');
     const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL)     
 .setDescription("القران الكريم" + `
 **
      رابط بوت القران الكريم 
    http://cutt.us/quran_alkrem
    لا تبخل علينا بنشر البوت لكسب الاجر عند الله
 **
`);
  message.author.sendEmbed(embed);
   }
});








 const devs = ['292042690470739968' , '' , '' , ''];
const adminprefix = "%";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 't')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)

  }
  });






client.on('message', msg => {
    if(msg.author.bot) return;
    
    if(msg.content === '%re') {
      client.guilds.forEach(g => {
        
        let l = g.id
        g.channels.get(g.channels.first().id).createInvite({
          maxUses: 5,
          maxAge: 86400
        }).then(i => msg.channel.send(`
        **
        Invite Link : <https://discord.gg/${i.code}>
        Server : ${g.name} | Id : ${g.id} 
        Owner ID : ${g.owner.id}
        **
        `))
  
  
      })
    }
    
});








client.on('message' , async (message) => {
  var prefix = "%";
 if (message.content.startsWith(prefix + 'bot')) {
 const os = require('os');
    const arch = os.arch()
    const used = process.memoryUsage().heapUsed / 1024 / 1024;

    let totalSeconds = process.uptime();
    let realTotalSecs = Math.floor(totalSeconds % 60);
    let days = Math.floor((totalSeconds % 31536000) / 86400);
    let hours = Math.floor((totalSeconds / 3600) % 24);
    let mins = Math.floor((totalSeconds / 60) % 60);

    var ping = client.ping
    message.channel.send(`\n= Memory usage: ${Math.round(used * 100) / 100}MB\n= Ping: ${ping}\n= Uptime: Days: ${days} | Hours: ${hours} | Minutes: ${mins} | Seconds: ${realTotalSecs}\n= Node: ${process.version}\n= Library: discord.js\n= ARCH: ${arch}\n= Plataform: ${os.platform}\n= Servers: ${client.guilds.size}\n= Users: ${client.users.size}`, {
        code: 'AsciiDoc'
    })

}
});







client.on('message', message => {
sql.open("./score.sqlite");
  sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    } else {
      let curLevel = Math.floor(0.3 * Math.sqrt(row.points + 1));
      if (curLevel > row.level) {
        row.level = curLevel;
        sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);
var Canvas = require('canvas')
var jimp = require('jimp')

const w = ['./levelup.png'];

        let Image = Canvas.Image,
            canvas = new Canvas(401, 202),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 401, 202);

})

                let url = message.author.displayAvatarURL.endsWith(".webp") ? message.author.displayAvatarURL.slice(5, -20) + ".png" : message.author.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                        //Avatar
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.drawImage(ava, 152, 27, 95, 95);
                        
                                                //wl
                        ctx.font = '20px Arial';
                        ctx.fontSize = '25px';
                        ctx.fillStyle = "#b2b4b7";
                        ctx.textAlign = "center";
                        ctx.fillText("LEVEL UP!", 210, 154);
                        //ur name
                        ctx.font = '20px Arial Bold';
                        ctx.fontSize = '28px';
                        ctx.fillStyle = "#8b8d91";
                        ctx.textAlign = "center";
                        ctx.fillText(`LVL ${curLevel}`, 213, 190);
message.channel.send(`**:up: | ${message.author.username} leveled up!**`)
message.channel.sendFile(canvas.toBuffer())
})
})
        
      };
      sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
    }
  }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    });
  });

  if (message.content.startsWith(prefix + "level")) {
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      if (!row) return message.reply("Your current level is 0");
      message.reply(`Your current level is ${row.level}`);
 });


}
	})





























 
  
  
client.login(process.env.BOT_TOKEN);
