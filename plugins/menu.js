
import pkg from '@whiskeysockets/baileys';
const { proto, prepareWAMessageMedia, generateWAMessageFromContent } = pkg;
import moment from 'moment-timezone';
import { createHash } from 'crypto';
import { xpRange } from '../lib/levelling.js';

let handler = async (m, { conn, usedPrefix }) => {
    let d = new Date(new Date() + 3600000);
    let locale = 'en';
    let week = d.toLocaleDateString(locale, { weekday: 'long' });
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);

    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`;

    let user = global.db.data.users[who];
    let { level } = user;
    let { min, xp, max } = xpRange(level, global.multiplier);
    let greeting = ucapan();

    let str = `
      『 *MEGA-AI* 』  
      © 2025 *GlobalTechInfo*`;

    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: str
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "Use The Below Buttons"
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: { url: './assets/DEW-XMD.jpg' } }, { upload: conn.waUploadToServer })),
                        title: null,
                        subtitle: null,
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "single_select",
                                "buttonParamsJson": JSON.stringify({
                                    "title": "TAP TO OPEN",
                                    "sections": [{
                                        "title": "HERE IS BUTTONS MENU",
                                        "highlight_label": "ULTRA",
                                        "rows": [
                                            { "header": "", "title": "🌄 NSFW Menu", "description": "The After Dark menu.", "id": `${usedPrefix}nsfwmenu` }
                                        ]
                                    }]
                                })
                            },
                            {
                                "name": "cta_url",
                                "buttonParamsJson": JSON.stringify({
                                    "display_text": "SCRIPT 💕",
                                    "url": "https://github.com/GlobalTechInfo/ULTRA-MD"
                                })
                            }
                        ],
                    })
                })
            }
        }
    }, {});

    await conn.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}

handler.help = ['main'];
handler.tags = ['group'];
handler.command = ['menu2', 'help2', 'h', 'commands2'];

export default handler
