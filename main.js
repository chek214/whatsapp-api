const qrcode = require('qrcode-terminal')

const puppeteerOptions = {
    puppeteer: {
        executablePath: '/usr/bin/chromium-browser',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
}


const { Client } = require('whatsapp-web.js')
const client = new Client(puppeteerOptions)

client.on('qr', qr => {
    qrcode.generate(qr, {small: true})
})

client.on('ready', () => {
    console.log('Client is ready!')
})

client.initialize()