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
