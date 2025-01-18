import { promises } from 'fs'
import { join } from 'path'
import axios from 'axios'

let handler = async (m, { conn, usedPrefix }) => {
    let d = new Date(new Date() + 3600000);
    let locale = 'en';
    let week = d.toLocaleDateString(locale, { weekday: 'long' });
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);

let handler = async function (m, { conn, __dirname }) {
  const githubRepoURL = 'https://github.com/KING-HANSA/DEW-XMD'

  try {
    const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/)

    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`)

    if (response.status === 200) {
      const repoData = response.data

      // Format the repository information with emojis
      const formattedInfo = `
📂 Repository Name: ${repoData.name}
📝 Description: ${repoData.description}
👤 Owner: ${repoData.owner.login}
⭐ Stars: ${repoData.stargazers_count}
🍴 Forks: ${repoData.forks_count}
🌐 URL: ${repoData.html_url}
      `.trim()

      // Send the formatted information as a message
      await conn.relayMessage(
        m.chat,
        {
          requestPaymentMessage: {
            currencyCodeIso4217: 'INR',
            amount1000: 69000,
            requestFrom: m.sender,
            noteMessage: {
              extendedTextMessage: {
                text: formattedInfo,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                  },
                },
              },
            },
          },
        },
        {}
      )
    } else {
      // Handle the case where the API request fails
      await conn.reply(m.chat, 'Repository තොරතුරු ලබා ගැනීමට නොහැකි විය.', m)
    }
  } catch (error) {
    console.error(error)
    await conn.reply(m.chat, 'Repository තොරතුරු ලබා ගැනීමේදී දෝෂයක් ඇති විය.', m)
  }
}

handler.help = ['script']
handler.tags = ['main']
handler.command = ['menu2', 'h']

export default handler;

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}

function ucapan() {
    const time = moment.tz('Asia/Karachi').format('HH');
    let res = "happy early in the day☀️";
    if (time >= 4) {
        res = "Good Morning 🥱";
    }
    if (time >= 10) {
        res = "Good Afternoon 🫠";
    }
    if (time >= 15) {
        res = "Good Afternoon 🌇";
    }
    if (time >= 18) {
        res = "Good Night 🌙";
    }
    return res;
}
