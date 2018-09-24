const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});








const mysql = require("mysql")
var con = mysql.createConnection({

});
 
client.on('message', message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
    con.query(`SELECT * FROM top WHERE gid = '${message.guild.id}' AND id = '${message.author.id}'`, (e, rows) => {
      if(e) throw e;
      if(!rows || !rows[0] || !rows.lenght < 0) {
        con.query(`INSERT INTO top (id, gid, txp) VALUES ('${message.author.id}', '${message.guild.id}', 1)`);
      } else {
          con.query(`UPDATE top SET txp = ${parseInt(rows[0].txp)+1} WHERE id = '${message.author.id}' AND gid = '${message.guild.id}'`)
      }
    })
    var prefix = "%"
if(message.content.toLowerCase() === prefix + "top") {
  con.query(`SELECT * FROM top WHERE gid = '${message.guild.id}' ORDER BY txp DESC LIMIT 5`, (e, rows) => {
    con.query(`SELECT * FROM top WHERE gid = '${message.guild.id}' ORDER BY vxp DESC LIMIT 5`, (e, rowa) => {
  var text = '';
  var voice = '';
if(rows.lenght >= 5) {
    for (var i = 0; i < 4; i++) {
 
    text += `#${parseInt(i)+1} <@${rows[i].id}> XP: \`${rows[i].txp}\`\n`
 
}
for (var i2 = 0; i2 < 4; i2++) {
  voice += `#${parseInt(i2)+1} <@${rowa[i2].id}> XP: \`${rowa[i2].vxp}\`\n`
}
const embed1 = new Discord.RichEmbed()
.setAuthor("📋 Guild Leaderboard!", message.guild.iconURL)
.setColor(hlc.jsmc)
.addField(`**TOP 5 TEXT :speech_balloon:**`, `**${text}  \n For More: \`${prefix}top text\`**`, true)
.addField("TOP 5 VOICE :microphone2:", `**${voice} \n For More: \`${prefix}top voice\`**`, true)
.setFooter(message.author.tag, message.author.displayAvatarURL)
 
message.channel.send(embed1)
} else {
  for (var row in rows) {
 
    text += `#${parseInt(row)+1} <@${rows[row].id}> XP: \`${rows[row].txp}\`\n`
}
for (var rowq in rowa) {
  voice += `#${parseInt(rowq)+1} <@${rowa[rowq].id}> XP: \`${rowa[rowq].vxp}\`\n`
}
const embed2 = new Discord.RichEmbed()
 
.setAuthor("📋 Guild Leaderboard!", message.guild.iconURL)
.setColor(hlc.jsmc)
.addField(`**TOP 5 TEXT :speech_balloon:**`, `**${text}  \n For More: \`${prefix}top text\`**`, true)
.addField("**TOP 5 VOICE **:microphone2:", `**${voice} \n For More: \`${prefix}top voice\`**`, true)
.setFooter(message.author.tag, message.author.displayAvatarURL)
 
message.channel.send(embed2)
  }
})
  })
}
    if(message.content.toLowerCase() === (prefix + 'top text')) {
      con.query(`SELECT * FROM top WHERE gid = '${message.guild.id}' ORDER BY txp DESC LIMIT 10`, (e, rows) => {
        var text = '';
        var voice = '';
       {
        for (var row in rows) {
 
          text += `#${parseInt(row)+1} <@${rows[row].id}> XP: \`${rows[row].txp}\`\n`
      }
 
      const embed2 = new Discord.RichEmbed()
 
      .setAuthor("📋 Guild Leaderboard!", message.guild.iconURL)
      .setColor(hlc.jsmc)
      .addField(`**TEXT LEADERBOARD :speech_balloon:**`, `**${text}**`, true)
 
      .setFooter(message.author.tag, message.author.displayAvatarURL)
 
      message.channel.send(embed2)
        }
      })
    }
    if(message.content.toLowerCase() === (prefix + 'top voice')) {
      con.query(`SELECT * FROM top WHERE gid = '${message.guild.id}' ORDER BY vxp DESC LIMIT 10`, (e, rows) => {
        var text = '';
        var voice = '';
       {
        for (var row in rows) {
 
          text += `#${parseInt(row)+1} <@${rows[row].id}> XP: \`${rows[row].vxp}\`\n`
      }
 
      const embed2 = new Discord.RichEmbed()
 
      .setAuthor("📋 Guild Leaderboard!", message.guild.iconURL)
      .setColor(hlc.jsmc)
      .addField(`**VOICE LEADERBOARD :microphone2:**`, `**${text}**`, true)
 
      .setFooter(message.author.tag, message.author.displayAvatarURL)
 
      message.channel.send(embed2)
        }
      })
    }
 
})
 
client.on('voiceStateUpdate', (oM, nM) => {
 let guild = nM.guild;
 let channel = nM.voiceChannel;
 
 if(channel || channel === nM.guild.afkChannel) return undefined;
 if(nM.user.bot) return undefined;
 
  setInterval(() => {
 
    con.query(`SELECT * FROM top WHERE id = '${nM.user.id}' AND gid = '${nM.guild.id}'`, (err, rows) => {
  if(!rows || !rows[0] || rows.lenght < 0) {
        con.query(`INSERT INTO top (id, gid, vxp) VALUES ('${nM.user.id}', '${nM.guild.id}', 1)`);
        console.log('inserted')
      } else {
        con.query(`UPDATE top SET vxp = ${parseInt(rows[0].vxp)+1} WHERE id = '${nM.user.id}' AND gid = '${nM.guild.id}'`)
        console.log('updated')
      }
    })
 
  }, 60000);
 
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
