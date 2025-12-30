const config = require("../settings");
const prefix = config.PREFIX; // now hardcoded

const mono = "```";
const { cmd, commands } = require('../lib/command');
const os = require('os');
const fetch = require("node-fetch");
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, fetchJson , runtime , sleep, mode, formatTime } = require('../lib/functions');
const moment = require("moment");

let botStartTime = Date.now();

cmd({
    pattern: "active",
    desc: "Check bot online or no.",
    category: "main",
    use: ".active",
    react: "🖤",
    filename: __filename
}, 
async (conn, mek, m, { from, pushname, reply }) => {
    try {
    
    const senderNumber = m.sender.split("@")[0];
        const senderName = pushname || "𝐇𝐞𝐥𝐥𝐎 𝐐𝐮𝐞𝐞𝐧 𝐓𝐚𝐝𝐚𝐬𝐡𝐢 𝐁𝐨𝐭 𝐔𝐬𝐞𝐫";

        // 🧠 Fake quoted message with user info
        const fakeQuoted = {
            key: {
                fromMe: false,
                participant: "0@s.whatsapp.net",
                ...(from ? { remoteJid: "status@broadcast" } : {})
            },
            message: {
                extendedTextMessage: {
                    text: `👤 User: ${senderName}\n📱 Number: wa.me/${senderNumber}`,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        externalAdReply: {
                            title: "𝐐𝐔𝐄𝐄𝐍 𝐓𝐀𝐃𝐀𝐒𝐇𝐈 𝐂𝐑𝐀𝐒𝐇𝐄𝐑",
                            body: "© 𝙙𝙚𝙫𝙚𝙡𝙤𝙥 𝙗𝙮 𝙢𝙖𝙣𝙪𝙨𝙝𝙖 𝙡𝙖𝙨𝙞𝙩𝙝",
                            mediaType: 1,
                            thumbnailUrl: "https://files.catbox.moe/h81ey8.jpg",
                            sourceUrl: "https://github.com/CyberRushModz0",
                            renderLargerThumbnail: true
                        }
                    }
                }
            }
        };
        
        let des = `*😏🔕  𝙃𝙀𝙔, _${pushname}_      𝙄 𝙖𝙢 𝘼𝙘𝙩𝙞𝙫𝙚 𝙉𝙤𝙬😈⚠️*

❍⟆⟆⟆⟆⟆⟆𝙌𝙐𝙀𝙀𝙉 𝙏𝘼𝘿𝘼𝙎𝙃𝙄 𝘽𝙐𝙂 𝘽𝙊𝙏⟆⟆⟆⟆⟆⟆❍👿🖤💢

*╭─「 𝘼𝘾𝙏𝙄𝙑𝙀 𝘿𝙀𝙏𝘼𝙄𝙇𝙎🎃🚨💥 」*
*│*👿 *User*: ${pushname}
*│*🪀 *User Number*: ${senderNumber}
*│*✒️ *Prefix*: .
*│*🧬 *Version*: Beta 
*│*🎈 *Platform*: 
*│*📡 *Host*: ${os.hostname()}
*│*📟 *Uptime*: ${runtime(process.uptime())}
*│*📂 *Memory*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
*╰──────────●●►*
*╭─「 вσт ¢σяяє¢т ву 🚨🎃」*
*│*🤭🍁 *тα∂αѕнι - мαηυѕнα ℓαѕιтн*
*╰──────────●●►*

*𝐌𝐘 𝐎𝐓𝐇𝐄𝐑 𝐌𝐎𝐃* - https/te.me//wt_modz_bot

*𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐎𝐖𝐍𝐄𝐑* - https://wa.me//+94773742779

*╭──────────●●►🚨🎃*
*│* *тнαηк уσυ υѕє тнє α¢тινє ¢σммαη∂💥♠️*
*╰──────────●●►*`;

await conn.sendMessage(from, {
        video: {
            url: 'https://files.catbox.moe/7h8onj.mp4?raw=true'
        },
        mimetype: 'video/mp4',
        ptv: true
    }, { quoted: mek });
    
        await conn.sendMessage(from, {
    buttons: [
        {
            buttonId: `${prefix}menu`,
            buttonText: { displayText: '𝐁𝐔𝐆 𝐌𝐄𝐍𝐔🎃🖤' },
            type: 1,
        },
        {
            buttonId: `${prefix}ping`,
            buttonText: { displayText: '𝐒𝐏𝐄𝐄𝐃♻️🔥' },
            type: 1,
        },
        {
            buttonId: 'action',
            buttonText: {
                displayText: '𝐌𝐄𝐍𝐔 𝐎𝐏𝐓𝐈𝐎𝐍📃'
            },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: '𝐂𝐋𝐈𝐂𝐊 𝐇𝐀𝐑𝐄🙌',
                    sections: [
                        {
                            title: `𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐓𝐀𝐃𝐀𝐒𝐇𝐈`,
                            highlight_label: '',
                            rows: [
                                {
                                    title: '𝐁𝐔𝐆 𝐌𝐄𝐍𝐔',
                                    description: '© 𝐝𝐞𝐠𝐞𝐥𝐨𝐩 𝐛𝐲 𝐦𝐚𝐧𝐮𝐬𝐡𝐚 𝐥𝐚𝐬𝐢𝐭𝐡',
                                    id: `${prefix}menu`,
                                },
                                {
                                    title: '𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑💢',
                                    description: '> 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝐓𝐀𝐃𝐀𝐒𝐇𝐈 𝐌𝐎𝐃𝐙 🫟',
                                    id: `${prefix}owner`,
                                },
                                {
                                    title: '𝐒𝐏𝐄𝐄𝐃💥',
                                    description: '> 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝐓𝐀𝐃𝐀𝐒𝐇𝐈 𝐌𝐎𝐃𝐙 🫟',
                                    id: `${prefix}ping`,
                                },
                                {
                                    title: '𝐒𝐘𝐒𝐓𝐄𝐌 ♻️',
                                    description: '> 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝐓𝐀𝐃𝐀𝐒𝐇𝐈 𝐌𝐎𝐃𝐙 𝙾𝙵𝙲 🫟',
                                    id: `${prefix}system`,
                                },
                                {
                                    title: '𝐑𝐄𝐏𝐎 𝐒𝐈𝐓𝐄',
                                    description: '> 𝐒𝐎𝐑𝐑𝐘 𝐁𝐑𝐎 . 𝐍𝐎𝐓 𝐓𝐇𝐄 𝐑𝐄𝐏𝐎 𝐒𝐈𝐓𝐄 🙂 𝐁𝐎𝐓 𝐇𝐎𝐒𝐓 𝐏𝐀𝐓𝐅𝐎𝐌 𝐈𝐒 𝐇𝐎𝐒𝐓𝐈𝐍𝐆 𝐏𝐀𝐍𝐍𝐀𝐋𝐒😓⚠️',
                                    id: `${prefix}repo`,
                                },
                            ],
                        },
                    ],
                }),
            }
        }
    ],
    headerType: 1,
    viewOnce: true,
    image: { url: "https://files.catbox.moe/h81ey8.jpg" },
    caption: des,
}, { quoted: fakeQuoted });

      await conn.sendMessage(from, {
            audio: { url: '' }, // Audio URL
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: m.key } });
        reply('❌ An error occurred while processing your request.');
    }
});