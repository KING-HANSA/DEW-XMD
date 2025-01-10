let handler = async (m, { conn, usedPrefix, isOwner }) => {
  let vcard = `BEGIN:VCARD
VERSION:3.0
N:;Hansa;;;
FN:Hansa Dewmina
ORG:Dew-Coders
TITLE:Owner
item1.TEL;waid=94701515609:94778721239
item1.X-ABLabel:Owner
X-WA-BIZ-DESCRIPTION:Developer of the Bot
X-WA-BIZ-NAME:Hansa Dewmina
END:VCARD`;

  await conn.sendMessage(m.chat, {
    contacts: {
      displayName: 'Hansa Dewmina',
      contacts: [{ vcard }]
    }
  }, { quoted: m });
}

handler.help = ['owner'];
handler.tags = ['main'];
handler.command = ['creator', 'creador', 'dueño'];

export default handler;
