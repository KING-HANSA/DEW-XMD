import fetch from 'node-fetch'

let handler = async (m, { conn, args, text }) => {
  if (!text) throw '*කෙටි කිරීමට URL එකක් ලබා දෙන්න.*'

  let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()

  if (!shortUrl1) throw `*Error: Could not generate a short URL.*`

  let done =
    `*SHORT URL CREATED!!*\n\n*Original Link:*\n${text}\n*Shortened URL:*\n${shortUrl1}`.trim()

  m.reply(done)
}

handler.help = ['tinyurl', 'shorten'].map(v => v + ' <link>')
handler.tags = ['tools']
handler.command = /^(tinyurl|short|acortar|corto)$/i
handler.fail = null

export default handler
