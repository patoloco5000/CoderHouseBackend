const fs = require ('fs')
const crypto = require('crypto')


class UserManager{
    constructor(path){
        this.path = path
    }

async createUser(user){
    
    const cipher = crypto.createCipher('aes192', 'a password')
    let encryted = cipher.update(user.passsword, 'utf-8' , 'hex')
    encryted += cipher.final('hex')
    console.log(encryted)
    try{
        let credantials = {
            username : user.username,
            password : encryted
        }
        await fs.promises.writeFile(this.path,JSON.stringify(credantials), 'utf-8')
        console.log('User saved!')
      }catch(err){
        console.log('Error al crear usuario')
    }
  }
async validateUser(user){
    let userFound = await fs.promises.readFile(this.path, 'utf-8')
    let userExist = JSON.parse(userFound)

    const discipher = crypto.createDecipher('aes192', 'a password')
    let decrypted = discipher.update(userExist.password, 'hex', 'utf-8')
    decrypted += discipher.final('utf-8')

    if (user.username == userExist.username && user.password == decrypted){
        console.log('User Logueado')
    }else {
        console.log('User not found')
    }
}





}



let newUser = new UserManager('./Usuarios.json')
newUser.validateUser({username : 'Patricio' , password : '123456'})