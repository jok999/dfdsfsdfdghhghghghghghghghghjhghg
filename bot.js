const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
}); 




client.on('message' , async (message) => {
  var prefix = "%";
 if (message.content.startsWith(prefix + 'prm')) {
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



















client.login(process.env.BOT_TOKEN);
