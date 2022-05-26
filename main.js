const saludo = document.getElementById("saludo")
const calculador = document.getElementById("calculador")
const listado = document.getElementById("listado")
const nombre = prompt("Ingrese su nombre")
const apellido = prompt("Ingrese su apellido")
saludo.innerHTML = `<b>¡Hola, ${nombre} ${apellido}!</b>`

function calculadora()
{
    while(calculadora!==5) {
            
        calculadora = Number(prompt(`Seleccione una opción:   1. Sumar
                                        2. Restar
                                        3. Multiplicar
                                        4. Dividir
                                        5. Finalizar`))
        switch(calculadora){
            case 1:{
                sumar()
                break
            }
            case 2:{
                restar()
                break
            }
            case 3:{
                multiplicar()
                break
            }
            case 4:{
                dividir()
                break
            }
            case 5:{
                alert("MUCHAS GRACIAS")
                break
            }
        } 
    }

    function sumar()
    {
        alert("Usted va a elegir dos números para sumar")
        let numero1 = Number(prompt("Escoja su primer número para sumar"))
        let numero2 = Number(prompt("Escoja su segundo número para sumar"))
        alert(numero1+numero2)
    }
    function restar()
    {
        alert("Usted va a elegir dos números para restar")
        let numero1 = Number(prompt("Escoja su primer número para restar"))
        let numero2 = Number(prompt("Escoja su segundo número para restar"))
        alert(numero1-numero2)
    }
    function multiplicar()
    {
        alert("Usted va a elegir dos números para multiplicar")
        let numero1 = Number(prompt("Escoja su primer número para multiplicar"))
        let numero2 = Number(prompt("Escoja su segundo número para multiplicar"))
        alert(numero1*numero2)
    }
    function dividir()
    {
        alert("Usted va a elegir dos números para dividir")
        let numero1 = Number(prompt("Escoja su primer número para dividir"))
        let numero2 = Number(prompt("Escoja su segundo número para dividir"))
        alert(numero1/numero2)
    }
}
class Usuario{
    constructor(nombre,apellido,edad,ciudad){
        this.nombre=nombre
        this.apellido=apellido
        this.edad=edad
        this.ciudad=ciudad
    }
}

const usuario1 = new Usuario("Pietro", "Ochner", 21, "Agronomía");
const usuario2 = new Usuario("Nehuen Ezequiel", "Morales", 21, "Villa Del Parque");
const usuario3 = new Usuario("Noelia", "Di Matteo", 21, "Villa Lynch");

function listadoUsuarios(){

let usuarios = [usuario1,usuario2,usuario3]

mostMenu()

function mostMenu(){
    let opcion = 0 
    
    while(opcion!==4) {
    
        opcion = Number(prompt(`Seleccione una opción:   1. Agregar Usuario
                                    2. Listar Usuarios
                                    3. Eliminar Usuario
                                    4. Finalizar`))
        switch(opcion){
            case 1:{
                agregarUsuario()
                break
            }
            case 2:{
                listarUsuarios()
                break
            }
            case 3:{
                eliminarUsuario()
                break
            }
            case 4:{
                alert("MUCHAS GRACIAS")
                break
            }
        } 
    }
}

function agregarUsuario(){
    let nombre = prompt("Ingrese su nombre")
    let apellido = prompt("Ingrese su apellido")
    let edad = prompt("Ingrese su edad")
    let ciudad = prompt("Ingrese su ciudad")
    let usuario = new Usuario(nombre, apellido, edad, ciudad)
    usuarios.push(usuario)
}

function listarUsuarios()
{
   let miLista = document.querySelector("#listaUsuarios");
   if(!miLista)
   {
     miLista = document.createElement("ul");
     miLista.setAttribute("id", "listaUsuarios");
   }
   miLista.innerHTML="";

   
   usuarios.forEach((usuario)=>{
       const nodoli = document.createElement("li");
       nodoli.innerHTML=`${usuario.nombre} ${usuario.apellido}`;
       miLista.appendChild(nodoli);
   });

   document.body.appendChild(miLista);
}

function eliminarUsuario(){
    let nombre = prompt("Ingrese nombre del usuario a eliminar")

    let encontrado = usuarios.find((usuario)=>usuario.nombre===nombre)

   if(!encontrado){
       alert("Usuario no encontrado")
   } else {
       let index = usuarios.indexOf(encontrado)
       usuarios.splice(index,1)
       console.log("borrar usuarios")
       console.log(usuarios);
   }
   
    console.log("Se encontró para borrar", encontrado);
}
console.log("Estos son sus usuarios")
console.log(usuarios);  
}