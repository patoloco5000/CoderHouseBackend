const express = require('express')

const app = express()
const http = require('http')
const handlebars = require('express-handlebars')
const routerHome = require('./routes/home.router')
const server = http.createServer(app)


const {Server} = require('socket.io')
const io = new Server()

const PORT = 8080


app.use(express.static(__dirname+'/public'))


app.engine('handlebars', handlebars.engine())
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars')

let messages = []

app.use('/home', routerHome)

io.on('connection', (socket)=>{
    console.log('nuevo usuario conectado')
    socket.emit('menssage', 'Hola Cliente Bienvenido')

    socket.on('new-message', (data)=>{
        console.log(data)
        messages.push(messages)
        io.socket.emit('messages', messages)
    })
})



let users = [
    ,
    {
        name: 'pedro',
        lastName: 'rodriguez',
        age: '30',
        email:"pedro.rodriguez@gmail.com",
        phone:'1187654321'
    },
    {
        name: 'ramiro',
        lastName: 'rojas',
        age: '24',
        email:"ramiro.rojas@gmail.com",
        phone:'1187821372'
    },
    {        
        name: 'paula',
        lastName: 'gomez',
        age: '35',
        email:"paula.gomez@gmail.com",
        phone:'1187651234'
    }
]


app.get('/', (req, res)=>{
    res.render('index', users[Math.floor(Math.random() * users.length)])
})


app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})