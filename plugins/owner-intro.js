import fetch from 'node-fetch'

let handler = async (m, { text, usedPrefix, command, conn }) => {
  try {
    // Expanded intro card text with additional fields
    const introText = `
 ◈ •╭═══ ━ ━ • ━ ━ ━ ═══♡᭄
 ◈ •│       「 𝗠𝗬 𝗜𝗡𝗧𝗥𝗢 」
 ◈ •│ Name    : Hansa Dewmina
 ◈ •│
 ◈ •│ Place     : Sri Lanka
 ◈ •│
 ◈ •│ Gender  : MALE
 ◈ •│
 ◈ •│ Age        : 16_
 ◈ •│
 ◈ •│ Status   : DEVELOPER
 ◈ •│
 ◈ •│ Skills     : JAVASCRIPT
 ◈ •│
 ◈ •│ Lang     : ENGLIASH,SINHALA
 ◈ •│
 ◈ •│ Project  : DEW-XMD
 ◈ •│
 ◈ •│ Hobbie  : 𝙲𝙾𝙳𝙸𝙽𝙶,𝙱𝙾𝚃𝚂
 ◈ •╰═══ ━ ━ • ━ ━ ━ ═══♡᭄
    `;

    let pp = 'https://i.imgur.com/YXp71EV.jpeg';

    // Try fetching the profile picture of the sender
    try {
      pp = await conn.profilePictureUrl(m.sender);
    } catch (e) {
      console.log("Error fetching profile picture:", e);
    }

    const sourceUrl = 'https://youtube.com/@KingHansa'; // Example source URL for the card

    const contextInfo = {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: 'DEW-XMD', // Title of the card
        body: '𝑇𝛩𝑈𝐶𝛨 𝛨𝛯𝑅𝛯',
        thumbnailUrl: 'https://github.com/KING-HANSA.png', // Fixed URL syntax with quotes
        mediaUrl: 'https://github.com/KING-HANSA.png', // Fixed URL syntax with quotes
        sourceUrl: sourceUrl, // Source URL for the card
      },
    };

    // Send the message with the extended intro text and external ad reply
    await conn.sendMessage(m.chat, { text: introText, contextInfo }, { quoted: m });

  } catch (e) {
    console.error(e);
    await conn.sendMessage(m.chat, { text: `❌ Something went wrong: ${e.message}` }, { quoted: m });
  }
};

handler.help = ['intro'];
handler.tags = ['fun'];
handler.command = /^owner|intro|duction$/i;

export default handler;
