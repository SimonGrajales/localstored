let nombre,apellido,ciudad,usuario,email,direccion,cvv

let formulario = document.getElementById('Form')

formulario.addEventListener('submit', (e) =>{
    e.preventDefault()
    LeerData()
    GuardarLocalStorage()
})

function LeerData(){
    nombre = document.getElementById('firstName').value
    apellido = document.getElementById('lastName').value
    usuario = document.getElementById('username').value
    email = document.getElementById('email').value
    direccion = document.getElementById('address').value
    ciudad = document.getElementById('state').value

}

function GuardarLocalStorage (nombre,apellido,ciudad,usuario,email,direccion,cvv){
    localStorage.setItem('nombre',nombre)
    localStorage.setItem('apellido',apellido)
    localStorage.setItem('ciudad',ciudad)
    localStorage.setItem('usuario',usuario)
    localStorage.setItem('email',email)
    localStorage.setItem('direccion',direccion)
    localStorage.setItem('cvv',cvv)

}

function ExtraerData({
    localStorage.getItem('nombre')
    alert ('Bienvenido',nombre)
})