const Discord = require('discord.js');
const client = new Discord.Client();
const UserBlocked = new Set(); 
const pretty = require('pretty-ms')
,ti={};

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});




const discord = require('discord.js');

const Util = require('discord.js');

const getYoutubeID = require('get-youtube-id');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const queue = new Map();

const ytdl = require('ytdl-core');

const fs = require('fs');

const Client = new Discord.Client({disableEveryone: true});

const prefix = "*";
/////////////////////////
////////////////////////

client.on('message', async msg =>{
	if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
    
    let args = msg.content.split(' ');

	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)

    if(command === `1ping`) {
    let embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setTitle("Pong!!")
    .setDescription(`${client.ping} ms,`)
    .setFooter(`Requested by | ${msg.author.tag}`);
    msg.delete().catch(O_o=>{})
    msg.channel.send(embed);
    }
});
/////////////////////////
////////////////////////
////////////////////
/////////////////////////
////////////////////////
//////////////////////
/////////////////////////
////////////////////////
//////////////////////

/////////////////////////
////////////////////////
//////////////////////
/////////////////////////
////////////////////////
//////////////////////
client.on('message', async msg => { 
	if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
    
    const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
    
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)

	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
        
        if (!voiceChannel) return msg.channel.send("I can't find you in any voice channel!");
        
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        
        if (!permissions.has('CONNECT')) {

			return msg.channel.send("I don't have enough permissions to join your voice channel!");
        }
        
		if (!permissions.has('SPEAK')) {

			return msg.channel.send("I don't have enough permissions to speak in your voice channel!");
		}

		if (!permissions.has('EMBED_LINKS')) {

			return msg.channel.sendMessage("I don't have enough permissions to insert a URLs!")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {

			const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            

			for (const video of Object.values(videos)) {
                
                const video2 = await youtube.getVideoByID(video.id); 
                await handleVideo(video2, msg, voiceChannel, true); 
            }
			return msg.channel.send(`**${playlist.title}**, Just added to the queue!`);
		} else {

			try {

                var video = await youtube.getVideo(url);
                
			} catch (error) {
				try {

					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
                    const embed1 = new Discord.RichEmbed()
                    .setTitle(":mag_right:  YouTube Search Results :")
                    .setDescription(`
                    ${videos.map(video2 => `${++index}. **${video2.title}**`).join('\n')}`)
                    
					.setColor("#f7abab")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					
/////////////////					
					try {

						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('No one respone a number!!');
                    }
                    
					const videoIndex = parseInt(response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                    
				} catch (err) {

					console.error(err);
					return msg.channel.send("I didn't find any results!");
				}
			}

            return handleVideo(video, msg, voiceChannel);
            
        }
        
	} else if (command === `skip`) {

		if (!msg.member.voiceChannel) return msg.channel.send("You Must be in a Voice channel to Run the Music commands!");
        if (!serverQueue) return msg.channel.send("There is no Queue to skip!!");

		serverQueue.connection.dispatcher.end('Ok, skipped!');
        return undefined;
        
	} else if (command === `stop`) {

		if (!msg.member.voiceChannel) return msg.channel.send("You Must be in a Voice channel to Run the Music commands!");
        if (!serverQueue) return msg.channel.send("There is no Queue to stop!!");
        
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Ok, stopped & disconnected from your Voice channel');
        return undefined;
        
	} else if (command === `vol`) {

		if (!msg.member.voiceChannel) return msg.channel.send("You Must be in a Voice channel to Run the Music commands!");
		if (!serverQueue) return msg.channel.send('You only can use this command while music is playing!');
        if (!args[1]) return msg.channel.send(`The bot volume is **${serverQueue.volume}**`);
        
		serverQueue.volume = args[1];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
        
        return msg.channel.send(`Volume Now is **${args[1]}**`);

	} else if (command === `np`) {

		if (!serverQueue) return msg.channel.send('There is no Queue!');
		const embedNP = new Discord.RichEmbed()
	    .setDescription(`Now playing **${serverQueue.songs[0].title}**`)
        return msg.channel.sendEmbed(embedNP);
        
	} else if (command === `queue`) {
		
		if (!serverQueue) return msg.channel.send('There is no Queue!!');
		let index = 0;
//	//	//
		const embedqu = new Discord.RichEmbed()
        .setTitle("The Queue Songs :")
        .setDescription(`
        ${serverQueue.songs.map(song => `${++index}. **${song.title}**`).join('\n')}
**Now playing :** **${serverQueue.songs[0].title}**`)
        .setColor("#f7abab")
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('Ok, paused');
		}
		return msg.channel.send('There is no Queue to Pause!');
	} else if (command === "resume") {

		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
            return msg.channel.send('Ok, resumed!');
            
		}
		return msg.channel.send('Queue is empty!');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	

	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}!`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`Can't join this channel: ${error}!`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(`**${song.title}**, just added to the queue! `);
	} 
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`**${song.title}**, is now playing!`);
}






        client.on('message', message => {
          var prefix = '*';
          if (message.content.startsWith(prefix + 'موسيقى')) {
      let embed = new Discord.RichEmbed()
      .addField('*play' ,'   :headphones:تشغيل الاغنيه باسم او برابط:headphones: ')
      .addField('*stop' ,'    :mute: ايقاف الاغنيه:mute:   ')
      .addField('*skip' ,'     :play_pause: تخطي الاغنيه :play_pause:  ')
      .addField('*pause' ,'    :clock1: ايقاف الاغنيه مؤقت:clock1:  ')
      .addField('*resume' ,'    :musical_note: تكملةالاغنيه:musical_note:  ')
      .addField('*queue' ,'    :pencil: اظهار قائمة التشغيل :pencil:   ')
      .addField('*np' ,'    :page_facing_up: اظهار الاغنية اللي انت مشغلها حاليا:page_facing_up:  ')
       .addField('*vol' ,'   :loud_sound: :sound:  زيادة الصوت ونقص الصوت :loud_sound: :sound: ')
      .setColor('RANDOM')
      .setTitle('═════ஜ۩۞۩ஜ══════════ஜ۩۞۩ஜ═════')
      message.channel.send(embed)
      }
  });















        client.on('message', message => {
          var prefix = '*';
          if (message.content.startsWith(prefix + 'music')) {
      let embed = new Discord.RichEmbed()
      .addField('*play' ,'   :headphones:تشغيل الاغنيه باسم او برابط:headphones: ')
      .addField('*stop' ,'    :mute: ايقاف الاغنيه:mute:   ')
      .addField('*skip' ,'     :play_pause: تخطي الاغنيه :play_pause:  ')
      .addField('*pause' ,'    :clock1: ايقاف الاغنيه مؤقت:clock1:  ')
      .addField('*resume' ,'    :musical_note: تكملةالاغنيه:musical_note:  ')
      .addField('*queue' ,'    :pencil: اظهار قائمة التشغيل :pencil:   ')
      .addField('*np' ,'    :page_facing_up: اظهار الاغنية اللي انت مشغلها حاليا:page_facing_up:  ')
      .addField('*vol' ,'   :loud_sound: :sound:  زيادة الصوت ونقص الصوت :loud_sound: :sound: ')
      .setColor('RANDOM')
      .setTitle('═════ஜ۩۞۩ஜ══════════ஜ۩۞۩ஜ═════')
      message.channel.send(embed)
      }
  });




























  client.on('guildMemberAdd', member => {
        let channel = member.guild.channels.find('name', '『welcome』');
        let memberavatar = member.user.avatarURL
          if (!channel) return;
        let embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(memberavatar)
            .addField('🎽 | name :  ',`${member}`)
            .addField('📢 | نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
            .addField('🆔 | user :', "**[" + `${member.id}` + "]**" )
                    .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
                   
                      .addField("Name:",`<@` + `${member.id}` + `>`, true)
                         
                                         .addField(' الـسيرفر', `${member.guild.name}`,true)
                                           
         .setFooter(`${member.guild.name}`)
            .setTimestamp()
       
          channel.sendEmbed(embed);
        });











 const devs = ['427054141492297728' , '292042690470739968' , '' , ''];
const adminprefix = "*";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
  });









client.on('message', message => {
   if(!message.channel.guild) return;
  var prefix = "*"
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(`محتوى الرساله ${args}`)
.setDescription(`برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست\nيمكنك اضافة اسم السيرفر في البرودكاست عن طريق كتابة <server>\nيمكنك اضافة اسم المرسل في البرودكاست عن طريق كتاية <by>\nيمكنك منشنة العضو في الرساله عن طريق كتابة <user>`)
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
msg.react('📝')
.then(() => msg.react('✏'))
.then(() =>msg.react('📝'))
 
let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
 
let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
 
EmbedBc.on("collect", r => {
 
message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
let EmbedRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(EmbedRep)
.setThumbnail(message.author.avatarURL)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
let NormalRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
m.send(NormalRep);
msg.delete();
})
})
})
}
});









        client.on('message', message => {
          var prefix = '*';
          if (message.content.startsWith(prefix + 'help')) {
      let embed = new Discord.RichEmbed()
      .addField('*bc' ,':incoming_envelope: رسالة جماعية الى كل اعضاء السيرفر:incoming_envelope: ')
      .addField('*inv' ,':mailbox_with_mail:يتم ارسال رساله لك في الخاص ويوجد بها رابط البوت:mailbox_with_mail:')
      .addField('*موسيقى' ,'     :musical_note:   للحصول على قائمة  الموسيقى :musical_note:  ')
      .addField('*support' ,':love_letter: رابط سيرفر الدعم الفني :love_letter: ')
      .addField('*clear' ,':wastebasket: مسح الشات بعدد من 2-100:wastebasket: ')
      .addField('welcome' ,':wave:حتى البوت يرحب في الاشخاص يجيب عليك عمل شات باسم『welcome』:wave:')
      .setColor('RANDOM')
      .setTitle('═════ஜ۩۞۩ஜ══════════ஜ۩۞۩ஜ═════')
      message.channel.send(embed)
      }
  });














client.on('message', msg => {
    if(msg.author.bot) return;
    
    if(msg.content === '*رابط') {
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












client.on('guildCreate', guild => {
         const embed = new Discord.RichEmbed()
     .setColor("RED")
     .setTitle('Click Here To Add Bot .!')
     .setURL('https://discordapp.com/oauth2/authorize?client_id=487424028899016714&scope=bot&permissions=21469585838')
  .setDescription(`**
 تم اضافة بوتك في سيرفر جديد ✅
Server Name: ${guild.name}
Server Owner: ${guild.owner}
Server ID: ${guild.id}
Count: ${guild.memberCount}**`);
client.channels.get("488002185955639296").sendEmbed(embed)
});

client.on('guildDelete', guild => {
         const embed = new Discord.RichEmbed()
     .setColor("GOLD")
     .setTitle('Click Here To Add Bot .!')
     .setURL('https://discordapp.com/oauth2/authorize?client_id=487424028899016714&scope=bot&permissions=21469585838')
  .setDescription(`**
  تم تطرد بوتك من سيرفر :cry:
Server Name: ${guild.name}
Server Owner: ${guild.owner}
Server ID: ${guild.id}
Count: ${guild.memberCount}**`);
client.channels.get("488002185955639296").sendEmbed(embed)
});







  client.on('message' , message => {

    if (message.content === "*support") {
	    message.reply(`تم ارساله الرابط في الخاص`)
        if(!message.channel.guild) return message.reply('**الآمر فقط في السيرفرات**');
     const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL)     
 .setDescription(" ***welcome To server support*** " + `
 **
رابط السيرفر | https://discord.gg/5usKNMa
 **
`);
  message.author.sendEmbed(embed);
   }
});









  client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('*adminbc')){
if(!message.author.id === 'bot_owner_id') return;
message.channel.sendMessage('**جار ارسال الرسالة |✅**')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});








 client.on('message' , message => {

    if (message.content === "*inv") {
	    message.reply(`تم ارساله الرابط في الخاص`) 
        if(!message.channel.guild) return message.reply('**الآمر فقط في السيرفرات**');
     const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL)     
 .setDescription("Add me" + `
 **
رابط البوت |
http://cutt.us/algamerzeuon_bot
 **
`);
  message.author.sendEmbed(embed);
   }
});




client.on('message' , async (message) => {
	var prefix = "*";
       if(message.content.startsWith(prefix + "clear")) {
           let args = message.content.split(" ").slice(1);
		   if(!message.member.hasPermission('MANAGE_MESSAGES')) return    message.channel.send('**لا يوجد لديك صلاحية لمسح الشات**');
 if (isNaN(args[0])) return message.channel.send('**Please supply a valid amount of messages to purge**');
  if (args[0] > 100) return message.channel.send('**Please supply a number less than 100**');
  message.channel.bulkDelete,message.channel.bulkDelete,message.channel.bulkDelete(args[0])
    .then(messages => message.channel.send(`**Successfully deleted \`${messages.size}/${args[0]}\` messages**`).then(message => message.delete({
      timeout: 10000
    }))) 
}
});





















client.on('message' , async (message) => {
  var prefix = "*";
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
           const embed = new Discord.RichEmbed()
     if (message.content === "%csc") {
message.channel.send("@everyone" + `  **
لاي مساعده او استفسار  كلم اي شخص من الاداره
•● W E L C O M E - T O - 【 GMZN 】 ●•
═════════════════════════ஜ۩۞۩ஜ═════════════════════
                                                              نورتا  اقرا الشروط قبل الاستمتاع
:lock: -  الاحترام مطلب في كل مكان
:lock: -  ممنوع الخوض في المواضيع السياسية والدينية وكل ماليس له علاقة بالسوالف والعاب
:lock: -  ممنوع السبام في الشات أو الكلام اللي ماله لازم
:lock: - ممنوع الإعلان عن أي سيرفر ديسكورد آخر
:lock: - لا تزعج الموجودين بالخاص
:lock: -  إذا أحد أزعجك من السيرفر بالخاص راسل الآدمنية أي واحد منهم
:lock: - * الغرف الخاصة "المقفلة" لا تحرج نفسك وتطلب انك تدخلها *
:lock: -  لازم تتأكد من عدم وجود صوت مزعج بالمايك ضبط الصوت ولا تزعج الموجودين
:lock: -  عدم وضع صورة او اسم مخل بالأداب العامة وللإدارة كامل الأحقية بتعديل الاسم او اتخاذ الإجراء المناسب في حال عدم التجاوب
═════════════════════════ஜ۩۞۩ஜ═════════════════════
                                                                       •●  Enjoy  | استمتع     •●
═════════════════════════ஜ۩۞۩ஜ═════════════════════


قوانين الأعضاء

1- ازعاج الأداريين بدون سبب مهم
2- سب اي شخص سواء كان عضو او اداري
3- العنصريه ممنوعه تماما
4- استخدام برامج تغيير الصوت او اي شئ مشابه
5- يمنع طلب الرتبه احنا نعطي رتبه للي نشوفه نستاهل


قوانين الأداره

1- سب الأعضاء او التعالي عليهم
2- التكبر بالرتبه
3- الواسطات و اعطاء الاعضاء رتب بدون اذن من الدفلوبر و الماستر و الاونر
4- الالتزام بقوانين الاعضاء ايضا
**`);
    }
}); 


























 
  
  
client.login(process.env.BOT_TOKEN);
