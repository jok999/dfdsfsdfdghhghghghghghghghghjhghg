const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


var points = require ("points")
client.on('message', message => {
	var prefix = "+";
if (message.content.startsWith(prefix + 'نقاطي')) {
	if(!message.channel.guild) return
	let userData = points[message.author.id];
	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('#000000')
	.setDescription(`نقاطك: \`${userData.points}\``)
	message.channel.sendEmbed(embed)
  }
  fs.writeFile("./l3b/3wasmPTS.json", JSON.stringify(points), (err) => {  
    if (err) console.error(err)
  })
});




var points = require ("points")
client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
  var prefix = "^";
if (message.content.startsWith(prefix + 'فكك')) {
    if(!message.channel.guild) return

const type = require('./fkk/fkkk.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانية لتجيب**').then(msg => {

            
msg.channel.send(`${item.type}`).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **مبروك لقد كسبت نقطه
لمعرفة نقطاك الرجاء كتابة .نقاطي**`);
        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let userData = points[message.author.id];
            userData.points++;
          })
          .catch(collected => {
            message.channel.send(`:x: **خطأ حاول مرة اخرى**`);
            console.log('[Typing] Error: No one type the word.');
          })
        })
    })
}
});







client.on('message', async message =>{
  var prefix = "+";
  if(message.content.startsWith(prefix + 'fkk')) {
if (message.author.omar) return;
if (fkkRecently.has(message.author.id)) {
  message.delete();
  let timeoute = new Discord.RichEmbed()
.setColor("#C2C2C2")
.setTitle("إنتظر 10 ثواني");
  message.channel.send(timeoute).then(msg => {msg.delete(3000)});
} else {
let names = ['ويكيبيديا','عبدالله','سيباويه','طائر اللقلاق','كثر شطه',
'القس','القسطنطينية','الديموقراطية','الرفادة','الاباخس','الاثير','اثيوبيا','السعودية','الكويت','البحرين','الامارات','عمان',
'الناطس','سيناء','الاردن','همالايا','شهريار','شهرزاد','الشاهنشاه','الخنساء','الفررزدق','الجلجال','الاكتم',
'الوخواخ','الجاحظ','الشمطاء','اليمامة','كارتيه','كوستاريكا','الاعسر','الاوقص','الاخفش','الاشيم','القاريط',
'المتحفنش','متعقرط','شعافيل','القرانيط','الجرشى','كليجة','لاتينية','استاتيكا','استراتيجية','اكسسوار','ايدرولوجيا','اسكيمو',
'ابستيمولوجيا','امبريالي','إلكتروني','اصطبل','اسرائيليات','معايا زميل']
let a = names[Math.floor(Math.random() * names.length)]
let atime = Date.now()
let curChar2;
let ans =''
let last='';
let curback = ['./img/fkk/fkk1.jpg','./img/fkk/fkk2.jpg','./img/fkk/fkk3.jpg','./img/fkk/fkk4.jpg','./img/fkk/fkk5.jpg','./img/fkk/fkk6.jpg','./img/fkk/fkk7.jpg'];
let Image = Canvas.Image,
canvas = new Canvas(1000, 171),
ctx = canvas.getContext('2d');
ctx.patternQuality = 'bilinear';
ctx.filter = 'bilinear';
ctx.antialias = 'subpixel';
ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
ctx.shadowOffsetY = 2;
ctx.shadowBlur = 2;
fs.readFile(`${curback[Math.floor(Math.random() * curback.length)]}`,async function (err, Background) {
if (err) return console.log(err);
let ground = new Image;
ground.src = Background;
await ctx.drawImage(ground, 0, 0, 1000, 171);


                    ctx.font = '72px Arial';
                    ctx.fontSize = '72px';
                    ctx.fillStyle = "#000000";
                    ctx.textAlign = "center";
                    ctx.fillText(a, 500, 86);
message.channel.send(`**: فكك الكلام الموجود بالصورة التالية في اقل من **__10 ثواني__`)
message.channel.send({files: [canvas.toBuffer()]})
  .then(function(){
      setTimeout(function(){
    message.channel.send(`**إنتهى الوقت**`);
}, 10000);
           const collector = new Discord.MessageCollector(message.channel, m => m.guild.member, { time: 10000 })
    
  collector.on('collect', message => {

         let ans = message.content;
      
    let myArray2 = [];

    for(let i= 0; i < a.length ; i++){
         
curChar2= a.charAt(i);
myArray2[i] = curChar2;    
      }
      for(let i= 0; i < a.length ; i++){
        if(a.charAt(i) === ' ') continue; 
last = last +myArray2[i] +' '

}

   
      console.log(ans)
    console.log(last)
    
    if (ans = ans + ' ' === last) {
      let btime=Date.now()
      
     message.channel.send(`__${prettyMs((btime - atime), {verbose: true})}__ **إجابة صحيحة وفي وقت قياسي ${message.author} ألف مبروك**`)
     con.query(`SELECT * FROM score WHERE UserID = '${message.author.id}'`, (err, rows) =>{
      if (err) throw err;
      let curpoints = rows[0].Points;
  
     let sql;
    sql = `UPDATE score SET Points = ${curpoints + 1} WHERE UserID = '${message.author.id}'`;
    con.query(sql)
       })
     collector.stop();
    }
      else{
       last = '' 

      }

    })
})
})
}
fkkRecently.add(message.author.id);
    setTimeout(() => {
      fkkRecently.delete(message.author.id);
    }, 10000);
      
  
}

});































var fs = require("fs")
var moment = require("moment");
client.on('message', message => {
    if(message.content == ('-هويتي')) {    
 
             if (message.channel.type === 'dm') return message.reply('This Command Is Not Avaible In Dm\'s :x:');   
            var Canvas = module.require('canvas');
            var jimp = module.require('jimp');
    
     const w = ['./img/ID1.png','./img/ID2.png','./img/ID3.png','./img/ID4.png','./img/ID5.png'];
    
             let Image = Canvas.Image,
                 canvas = new Canvas(802, 404),
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
                 ctx.drawImage(ground, 0, 0, 802, 404);
    
     })
                                let user = message.mentions.users.first();
          var men = message.mentions.users.first();
             var heg;
             if(men) {
                 heg = men
             } else {
                 heg = message.author
             }
           var mentionned = message.mentions.members.first();
              var h;
             if(mentionned) {
                 h = mentionned
             } else {
                 h = message.member
             }
             var ment = message.mentions.users.first();
             var getvalueof;
             if(ment) {
               getvalueof = ment;
             } else {
               getvalueof = message.author;
             }//ما خصك ,_,
                                           let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                                             jimp.read(url, (err, ava) => {
                                                 if (err) return console.log(err);
                                                 ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                                                     if (err) return console.log(err);
                            
                                                                                           //Avatar
                                                             let Avatar = Canvas.Image;
                                                             let ava = new Avatar;
                                                             ava.src = buf;
                                                             ctx.beginPath();
                                                           ctx.drawImage(ava, 335, 3, 160, 169);
                                                                            //wl
                                                     ctx.font = '35px Arial Bold';
                                                     ctx.fontSize = '40px';
                                                     ctx.fillStyle = "#dadada";
                                                     ctx.textAlign = "center";
                                                    
                            
                                                     ctx.font = '30px Arial Bold';//Name ,_,
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${getvalueof.username}`,655, 170);
                                                                            
                                                                        
                                                          moment.locale('ar-ly');        
                                            
                                            
                                                                    ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${moment(h.joinedAt).fromNow()}`,150, 305);
                                                              
                                                              
                                                                                                     ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                 ctx.fillText(`${moment(heg.createdTimestamp).fromNow()}`,150, 170); 
                            
                                                       let status;
     if (getvalueof.presence.status === 'online') {
         status = 'اون لاين';
     } else if (getvalueof.presence.status === 'dnd') {
         status = 'مشغول';
     } else if (getvalueof.presence.status === 'idle') {
         status = 'خارج النطاق';
     } else if (getvalueof.presence.status === 'offline') {
         status = 'اوف لاين';
     }
     
     
                                          ctx.cont = '35px Arial';
                                          ctx.fontSize = '30px';
                                          ctx.filleStyle = '#ffffff'
                                          ctx.fillText(`${status}`,655,305)
                  
                                                                   ctx.font = 'regular 30px Cairo';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                         ctx.fillText(`${h.presence.game === null ? "no game" : h.presence.game.name}`,390,390);
                            
                               ctx.font = '35px Arial';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                                   ctx.fillText(`#${heg.discriminator}`,390,260)
                            
                                 ctx.beginPath();
                                 ctx.stroke();
                               message.channel.sendFile(canvas.toBuffer());
                            
                            
                          
                            
                             })
                            
                             })
 }
 });














 
  
  
client.login(process.env.BOT_TOKEN);
