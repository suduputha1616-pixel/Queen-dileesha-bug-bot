const os = require("os");
const axios = require("axios");
const { cmd, commands } = require("../lib/command");
const { runtime, sleep } = require("../lib/functions");

cmd({
  pattern: "menu",
  alias: ["menu", "commands", "list", "panel"],
  desc: "Command list with menu button.",
  category: "main",
  use: ".menu",
  react: "🙈",
  dontAddCommandList: true,
  filename: __filename
}, async (conn, m, msg, { from, prefix, pushname, reply }) => {
  try {
    const { data } = await axios.get("https://raw.githubusercontent.com/CyberRushModz0/QueenRashu-Database/refs/heads/main/ditels.json");
    const footerText = data.footer;

    const des = `*𝐀𝐋𝐋 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐋𝐈𝐒𝐓...▣▢■*
*👋 Hye ${pushname} 𝐈𝐦 𝐐𝐮𝐞𝐞𝐧 𝐃𝐞𝐥𝐞𝐞𝐬𝐡𝐚 𝐗 𝐓𝐚𝐝𝐚𝐬𝐡𝐢 𝐁𝐎𝐓

⏳ *Runtime :*  
> ${runtime(process.uptime())}
💾 *RAM Usage :*  
> ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${Math.round(require('os').totalmem() / 1024 / 1024)} MB
🧬 *Version :*  
> 2.00
🖥️ *Host Name :*  
> ${os.hostname()}

🔽 Choose a category from the menu below:\n\n

    `.trim();

    await conn.sendMessage(from, {
      buttons: [
        {
          buttonId: 'action',
          buttonText: {
            displayText: '📂 Menu Options'
          },
          type: 4,
          nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
              title: '𝐂𝐋𝐈𝐂𝐊 𝐇𝐄𝐑𝐄 📂',
              sections: [
                {
                  title: `‼️𝐐𝐔𝐄𝐄𝐍 𝐃𝐄𝐋𝐄𝐄𝐒𝐇𝐀 𝐗𝐃 ❤️‍🩹`,
                  highlight_label: '',
                  rows: [
                    {
                      title: '𝐀𝐂𝐓𝐈𝐕𝐄 🎃',
                      description: 'Show bot status',
                      id: `${prefix}category active`,
                      
                    },
                    {
                      title: '𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔',
                      description: 'Owner only tools',
                      id: `${prefix}category owner`,
                    },
                    {
                  
                      title: '𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔',
                      description: 'Other tools',
                      id: `${prefix}category other`,
                    },
                    {
              
                      title: '𝐁𝐔𝐆 𝐌𝐄𝐍𝐔🎃💢💥',
                      description: 'bug command',
                      id: `${prefix}category bugmenu`,
           
                    },
                  ],
                },
              ],
            }),
          },
        },
      ],
      headerType: 1,
      viewOnce: true,
      image: { url: "https://files.catbox.moe/6wxg35.jpg" },
      caption: des,
      footer: footerText
    }, { quoted: m });
    
          await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/lntkli.mp3' }, // Audio URL
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        

  } catch (err) {
    console.error(err);
    reply("❌ Error occurred while generating menu.");
  }
});


cmd({
  pattern: "category",
  dontAddCommandList: true,
  filename: __filename
}, async (conn, m, msg, { from, q: query, pushname, reply }) => {
  try {
    const { data } = await axios.get("https://raw.githubusercontent.com/CyberRushModz0/QueenRashu-Database/refs/heads/main/ditels.json");
    const footerText = data.footer;

    const category = query.trim().toUpperCase();
    if (!category) return reply("⚠️ Please specify a category name.");
    if (category === "MISC") return reply("⚠️ MISC category is hidden.");

    const cmds = commands.filter(c => c.category?.toUpperCase() === category && !c.dontAddCommandList);
    if (cmds.length === 0) return reply(`❌ No commands found under category: ${category}`);

    let text = `*📜 𝐐𝐔𝐄𝐄𝐍 𝐃𝐄𝐋𝐄𝐄𝐒𝐇𝐀 𝐗𝐃 ${category} 𝐀𝐋𝐋 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐋𝐈𝐒𝐓*

🔋 *RAM     :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${Math.round(require('os').totalmem() / 1024 / 1024)} MB
⏱️ *RUN TIME :* ${runtime(process.uptime())}
`;

    for (const command of cmds) {
      text += `*█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
█-----╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗-----█
█-----║║║╠─║─║─║║║║║╠─-----█
█-----╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝-----█
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█*



*⃟🌝⃤⃦💋 ⃟𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐋𝐈𝐒𝐓⃞ッ*

*⃝⃪⃪⃪⃪⃪⃪⃪⃪⃪𝐂𝐎𝐌𝐌𝐀𝐍𝐃💗🙈 :* _${command.pattern}_
*⃝⃪⃪⃪⃪⃪⃪⃪⃪⃪𝐃𝐄𝐒𝐂💗🙈 :* _${command.desc}_*\n`;
    }

    await conn.sendMessage(from, {
      image: { url: "https://i.ibb.co/7N087ZHh/Queen-Rashu-Md.jpg" },
      caption: text + `\n\n${footerText}\n\n> ලත්තන ටඩාෂි බබහ් තමා හැදුවෙ🌝💋`
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    reply("❌ Error occurred while fetching category.");
  }
});