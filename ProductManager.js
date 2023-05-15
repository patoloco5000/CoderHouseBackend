class ProductManager {
    // Constructor de la clase "ProductManager"
    constructor() {
      // Arreglo vacío para almacenar los productos
      this.products = [];
      // Id autoincrementable para cada producto
      this.id = 0;
    }
  
    // Método para agregar un producto al arreglo de productos inicial
    addProduct(title, description, price, thumbnail, code, stock) {
      // Validar que todos los campos sean obligatorios
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log("Todos los campos son obligatorios");
        return;
      }
  
      // Validar que no se repita el campo "code"
      if (this.products.some((product) => product.code === code)) {
        console.log("El código ya existe");
        return;
      }
  
      // Id autoincrementable para cada producto
      this.id++;
      // Crear un nuevo producto con los valores correspondientes
      const newProduct = {
        id: this.id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
      // Agregar el nuevo producto al arreglo de productos
      this.products.push(newProduct);
    }
  
    // Método para obtener el arreglo con todos los productos creado hasta ese momento
    getProducts() {
      return this.products;
    }
  
    // Método para buscar en el arreglo el producto que coincida con el id
    getProductById(id) {
      const product = this.products.find((product) => product.id === id);
      if (!product) {
        console.log("Not Found");
        return;
      }
      return product;
    }
  }

  //TESTEOO

  // Crear una instancia de la clase "ProductManager"
const productManager = new ProductManager();

// Agregar tres productos al arreglo de productos inicial
productManager.addProduct(
  "Producto 1",
  "Descripción del producto 1", 
  100, 
  "ruta/imagen1.jpg", 
  "code1",
  10 
);
productManager.addProduct(
  "Producto 2",
  "Descripción del producto 2", 
  200, 
  "ruta/imagen2.jpg", 
  "code2",
  20 
);
productManager.addProduct(
  "Producto 3",
  "Descripción del producto 3", 
  300, 
  "ruta/imagen3.jpg", 
  "code3",
  30 
);

// Mostrar en consola el arreglo con todos los productos creado hasta ese momento
console.log(productManager.getProducts());

// Mostrar en consola el objeto con el producto que coincida con el id especificado (en este caso, id = 2)
console.log(productManager.getProductById(2));

const fs = require('fs')

 

class MangerProduct{

  constructor(path){

    this.path = path

  }

 

  async getAllProducts(){

    let pr = await fs.promises.readFile(this.path, 'utf-8')

    let prParse = JSON.parse(pr)

    if(prParse.length <= 0){

      console.log('No hay productos en la base de datos !!')

    }else{

      console.log(prParse)

    }

    

  }

 

  async deletrreProducto(id){

    let pr = await fs.promises.readFile(this.path, 'utf-8')

    let prParse = JSON.parse(pr)

 

 

    const arrayNew = prParse.filter((ele) => {

      return ele.id !== id

    })

 

    await fs.promises.writeFile(this.path, JSON.stringify(arrayNew, null, 2), 'utf-8')

    console.log('Producto Elminado!!')

  }

 

  async updateProduct(id, infoNew){

    let pr = await fs.promises.readFile(this.path, 'utf-8')

    let prParse = JSON.parse(pr)

 

    let arrayUpdated = prParse.map((ele)=> {

      if(ele.id == id){

        return {...ele,   title:infoNew.title, price:infoNew.price}

      }else{

        return ele

      }

    })

 

    console.log(arrayUpdated)

    await fs.promises.writeFile(this.path, JSON.stringify(arrayUpdated, null, 2), 'utf-8')

    console.log('Producto Actualizado!!')

 

  }

}

 

let newPr = new MangerProduct('./productos.json')

 

//newPr.deletrreProducto('ldfldsg.545564567fds87f')

newPr.updateProduct('lhjtsa9h0.2538265a71cd', {price: 156666, title:"TITULOMODIFICADO"})

newPr.getAllProducts()

