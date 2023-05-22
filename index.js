const express = rquire('express')
const app = express()


app.get('/bienvenida', (req, res)=>{
    res.send('<h1 style="color: black;"> Bienvenidos!! </h1>')
})

app.get('/usuario', (req, res)=>{
    res.json({nombre:'Patricio', apellido:'Peluffo', edad:24, correo:'peluffoj5@gmail.com'})
})

let prs =[
    {id:1, title:"tv", price:120},
    {id:2, title:"bici", price:120},
    {id:3, title:"laptop", price:120}
]



app.get('/productos/:id', (req, res)=>{
    console.log(req.params)
    let idPr = req.params
    let prFound = prs.find((elem)=>{
        return elem.id == idPr
    })
    res.send(prFound)
})

app.get('/categorias', (req, res)=>{
    console.log(req.query)
})



app.listen('8080', ()=>{
    console.log('Server running on port 8080')
})