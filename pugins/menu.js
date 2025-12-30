const os = require("os");
const axios = require("axios");
const { cmd, commands } = require("../lib/command");
const { runtime, sleep } = require("../lib/functions");

cmd({
  pattern: "bugmenu",
  alias: ["menu", "commands", "list", "panel"],
  desc: "Command list with bug menu button.",
  category: "bugmenu",
  use: ".bugmenu",
  react: "💀",
  dontAddCommandList: true,
  filename: __filename
}, async (conn, m, msg, { from, prefix, pushname, reply }) => {
  try {
    const logoUrl =  "https://files.catbox.moe/47c2w9.jpg";

    const des = `*BOT ALL BUG COMMAND Menu List ...*
*😈🔥HELLOWZZ HOW TO TODAY ${pushname} *

⏳ *Runtime :*  
> ${runtime(process.uptime())}
💾 *RAM Usage :*  
> ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${Math.round(require('os').totalmem() / 1024 / 1024)} MB
🧬 *Version :*  
> 2.00
🖥️ *Host Name :*  
> ${os.hostname()}

🔽 Choose a category from the menu below:\n\n`.trim();

    await conn.sendMessage(from, {
      buttons: [
        {
          buttonId: 'action',
          buttonText: {
            displayText: '𝐁𝐔𝐆 𝐎𝐏𝐓𝐈𝐎𝐍⚠️💥'
          },
          type: 4,
          nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
              title: '𝐂𝐋𝐈𝐂𝐊 𝐇𝐄𝐑𝐄 📂',
              sections: [
                {
                  title: `‼️𝐓𝐀𝐃𝐀𝐒𝐇𝐈 𝐌𝐎𝐃𝐙`,
                  highlight_label: '',
                  rows: [
                    { title: 'active 💥', description: 'Show bot status', id: `${prefix}alive` },
                    { title: 'main menu📃💢', description: 'General utilities', id: `${prefix}category main` },
                    { title: 'bugmenu🔥⚠️', description: 'Bug reporting commands', id: `${prefix}category bug` },
 
                  ],
                },
              ],
            }),
          },
        },
      ],
      headerType: 1,
      viewOnce: true,
      image: { url: logoUrl },
      caption: des,
      footer: '.bugmenu'
    }, { quoted: m });

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
    const logoUrl = data.logo || "https://i.ibb.co/7N087ZHh/Queen-Rashu-Md.jpg";

    const category = query.trim().toUpperCase();
    if (!category) return reply("⚠️ Please specify a category name.");
    if (category === "MISC") return reply("⚠️ MISC category is hidden.");

    const cmds = commands.filter(c => c.category?.toUpperCase() === category && !c.dontAddCommandList);
    if (cmds.length === 0) return reply(`❌ No commands found under category: ${category}`);

    let text = `*📜 𝐐𝐔𝐄𝐄𝐍 𝐓𝐀𝐃𝐀𝐒𝐇𝐈 𝐂𝐑𝐀𝐒𝐇𝐄𝐑${category} 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐋𝐈𝐒𝐓*

🔋 *RAM     :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${Math.round(require('os').totalmem() / 1024 / 1024)} MB
⏱️ *RUN TIME :* ${runtime(process.uptime())}
`;

    for (const command of cmds) {
      text += `*   
████▌▄▌▄▐▐▌█████
████▌▄▌▄▐▐▌▀████
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀*

*𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐒𝐋 𝐓𝐀𝐃𝐀𝐒𝐇𝐈 𝐌𝐎𝐃𝐙*👿🇱🇰💥

*🖤💢 💀𝐂𝐎𝐌𝐌𝐀𝐍𝐃 :* _${command.pattern}_
*🖤💢 💀𝐃𝐄𝐒𝐂 :* _${command.desc}_
*🖤💢 💀𝐔𝐒𝐄 :* _${command.use}_
*🖤💢 💀𝐒𝐇𝐎𝐑𝐓 :* _${command.alias}_
*🖤💢 💀𝐑𝐄𝐀𝐂𝐓 :* _${command.react}_*\n`;
    }

    await conn.sendMessage(from, {
      image: { url: "https://files.catbox.moe/47c2w9.jpg" },
      caption: text + `\n\n${footerText}\n\n> 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝐛𝐲 𝐭𝐚𝐝𝐚𝐬𝐡𝐢 𝐦𝐨𝐝𝐳`
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    reply("❌ Error occurred while fetching category.");
  }
});