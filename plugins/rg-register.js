//import db from '../lib/database.js'

import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true)
    throw `✳️ ඔබ දැනටමත් ලියාපදිංචි වී ඇත\n\nඔබට නැවත ලියාපදිංචි වීමට අවශ්‍යද?\n\n 📌 Use this command to remove your record \n*${usedPrefix}unreg* <Serial number>`
  if (!Reg.test(text))
    throw `⚠️ ආකෘතිය වැරදියි\n\n ✳️ මෙම command එක භාවිතා කරන්න: *${usedPrefix + command} name.age*\n📌Exemple : *${usedPrefix + command}* ${name2}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '✳️ නම හිස් විය නොහැක'
  if (!age) throw '✳️ වයස හිස් විය නොහැක.'
  if (name.length >= 30) throw '✳️නම දිග වැඩියි'
  age = parseInt(age)
  if (age > 100) throw '👴🏻 Wow grandpa wants to play bot'
  if (age < 5) throw '🚼  there is a grandpa baby jsjsj '
  user.name = name.trim()
  user.age = age
  user.regTime = +new Date()
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(
    `
┌─「 *REGISTERED* 」─
▢ *NUMBER:* ${name}
▢ *AGE* : ${age} years
▢ *SERIEL NUMBER* :
${sn}
└──────────────

 *${usedPrefix}help* to see menu
`.trim()
  )
}
handler.help = ['reg'].map(v => v + ' <name.age>')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register', 'registrar']

export default handler
