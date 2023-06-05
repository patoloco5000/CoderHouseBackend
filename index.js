const express = require('express')
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

let product = []

app.use(express.json())

app.get('/allproducts', (req, res)=>{
    res.send(product)
})

app.post('/saveProduct', (req, res)=>{
    let newProduct = req.body

    newProduct.id = Math.random()
    
    console.log(newProduct)
    product.push(newProduct)

    res.send({msg : 'producto creado', data: newProduct})
})

app.put('/updateProduct/:id', (req, res)=>{
    let id = req.params.id
    let productUpdate = req.body

    console.log(product)
    let arrayNewProduct = product.map(ele => {
        if(ele.id == id){
            return {...ele, productUpdate}
        }else{
            return ele
        }
    })
    console.log(arrayNewProduct)
})

app.delete('/deleteProduct/:id', (req, res)=>{
    let id = req.params.id
    console.log('id: ', id)
    let newArray = product.filter(elem => {
        return elem.id !== id
    })

    console.log(newArray)
    product = newArray

    res.send({msg : 'Producto Eliminado', data: 'newProduct'})

})

app.listen('8080', ()=>{
    console.log('Server running on port 8080')
})