let handler = m => m
handler.all = async function (m) {
  for (const message in audioMsg) {
    if (new RegExp(`^${message}$`, 'i').test(m.text)) {
      this.sendFile(m.chat, audioMsg[message], 'audio.mp3', null, m, true)
      break
    }
  }
  return !0
 }

export default handler

let audioMsg = {
  'pakaya':'https://d.top4top.io/m_330525jip1.mp3',
  'gm':'https://i.top4top.io/m_3305mqb1j1.mp3',
  'kawada':'https://j.top4top.io/m_330520o4j2.mp3',
  'mk':'https://k.top4top.io/m_3305geq693.mp3',
  'gn':'https://l.top4top.io/m_3305ef1254.mp3'
}
