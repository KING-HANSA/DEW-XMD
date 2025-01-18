
import fetch from 'node-fetch'

let handler = m => m
handler.all = async function (m) {
	
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
	let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://i.imgur.com/YXp71EV.jpeg')
	
	//reply link wa
   global.rpgc = { contextInfo: { externalAdReply: { mediaUrl: 'https://i.imgur.com/YXp71EV.jpeg', mediaType: 'VIDEO', description: 'support group', title: 'JOIN GROUP', body: 'support group', thumbnailUrl: 'https://i.imgur.com/YXp71EV.jpeg', sourceUrl: 'https://whatsapp.com/channel/0029Varwcfc7YSd60AulNF2h' }}} 
	
	//reply link Instagram 
    global.rpig = { contextInfo: { externalAdReply: { mediaUrl: 'https://i.imgur.com/YXp71EV.jpeg', mediaType: 'VIDEO', description: 'FOLLOW DEVELOPER', title: 'INSTAGRAM', body: 'Keep bot alive', thumbnailUrl: 'https://i.imgur.com/YXp71EV.jpeg', sourceUrl: 'https://www.instagram.com/hansa_dewmina_lk' }}}
	
	//reply link yt
    global.rpyt = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: 'https://i.imgur.com/YXp71EV.jpeg', mediaType: 'VIDEO', description: 'SUBSCRIBE : YT CHANNEL', title: 'YouTube', body: 'learn to create your own bots', thumbnailUrl: 'https://i.imgur.com/YXp71EV.jpeg', sourceUrl: 'https://www.youtube.com/@KingHansa' }}}

//reply link WhatsApp Channel
    global.rpwp = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: 'https://i.imgur.com/YXp71EV.jpeg', mediaType: 'VIDEO', description: 'Follow Channel', title: 'FOLLOW CHANNEL', body: '© DEW-XMD', thumbnailUrl: 'https://i.imgur.com/YXp71EV.jpeg', sourceUrl: 'https://whatsapp.com/channel/0029Varwcfc7YSd60AulNF2h' }}}
    
} 
export default handler
