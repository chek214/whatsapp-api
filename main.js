const qrcode = require('qrcode-terminal')

const puppeteerOptions = {
    puppeteer: {
        executablePath: '/usr/bin/chromium-browser',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
}

var express = require('express')
var app = express()
var cors = require('cors')


var qrcod = ''

app.use(cors())
app.use(express.json())

app.get('/', function(req, res, next){
})

app.get('/qr', function(req, res, next){
    res.send(JSON.stringify(qrcod))
})

app.post('/sendmsg', function(req, res, next){
})



const { Client } = require('whatsapp-web.js')
const client = new Client(puppeteerOptions)

client.on('qr', qr => {
    qrcode.generate(qr, {small: true})
    qrcod = qr
})

client.on('ready', () => {
    console.log('Client is ready!')
})

client.initialize()

app.listen(3200)