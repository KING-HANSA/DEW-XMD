let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { // Switch Case Like :v
        'unmute': 'not_announcement',
        'mute': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)

    return m.reply(`
🛡️ ${mssg.gpSetting}

*▢ ${command}*
*▢ ${command}*
`)
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['group']
handler.tags = ['group']
handler.command = ['mute', 'unmute'] 
handler.admin = true
handler.botAdmin = true
handler.group = true

export default handler
