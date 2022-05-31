const saludo = document.getElementById("saludo")
let calculador = document.getElementById("calculador")
let listado = document.getElementById("listado")
const nombre = prompt("Ingrese su nombre")
const apellido = prompt("Ingrese su apellido")
saludo.innerHTML = `<b>¡Hola, bienvenido ${nombre} ${apellido}!</b>`

calculador.addEventListener("click", () => {
    calculadora()
})
listado.addEventListener("click", () => {
    mostrarMenu()
})

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
    constructor(id,nombre,apellido,años,ciudad)
    {
        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.años=años;
        this.ciudad=ciudad;
    }
}

const usuario1 = new Usuario(1, "Nehuen", "Gutierrez", 22, "CABA");
const usuario2 = new Usuario(2, "Fiona", "Gancedo", 25, "Corrientes");
const usuario3 = new Usuario(3, "Morena", "Nuñez", 21, "CABA");
const usuario4 = new Usuario(4, "Aldana", "Morales", 28, "Mendoza");
const usuario5 = new Usuario(5, "Martin", "Tomassoni", 32, "Mendoza");
const usuario6 = new Usuario(6, "Pietro", "Ochner", 24, "CABA");

const usuarios = [usuario1,usuario2,usuario3, usuario4, usuario5, usuario6];
console.log("INICIAL:", usuarios);

function mostrarMenu()
{
   let opcion = 0;
   
   while(opcion!==6)
   {
       opcion = Number(prompt(`Seleccione una acción:
                           1. Agregar Usuario
                           2. Eliminar Usuario
                           3. Modificar Usuario
                           4. Listar usuarios
                           5. Buscar Usuario
                           6. Salir`));

   switch(opcion)
   {
       case 1:
       {
           agregarUsuario();
           break;
       }
       case 2: 
       {
           eliminarUsuario();
       }
       case 3: 
       {
           modificarUsuario();
       }
       case 4:
       {
           listarUsuarios();
           break;
       }
       case 5:
       {
               buscarUsuario();
               break;
       }
       case 6:
       {
                alert("MUCHAS GRACIAS")
                listarNombreMasApellido();
                break;
       }
       default:{
           alert("opcion inválida");
           break;
       }
      
   }

   }
}

function agregarUsuario()
{      
    let id=1;
    if(usuarios.length>0)
    {
       id=usuarios[usuarios.length-1].id+1;
    }
    
    let nombre=prompt("ingrese un nombre");
    let apellido = prompt("ingrese un apellido");
    let años = Number(prompt("ingrese un años"));
    let ciudad = prompt("ingrese un ciudad");
    let usuario = new Usuario(id, nombre, apellido, años, ciudad);

    usuarios.push(usuario);
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
       nodoli.innerHTML=`${usuario.id}, ${usuario.nombre} ${usuario.apellido}, ${usuario.años}, ${usuario.ciudad}`;
       miLista.appendChild(nodoli);
   });

   document.body.appendChild(miLista);
}

function eliminarUsuario(){

   let id= Number(prompt("Ingrese el id del usuario que quiere eliminar"));

   let encontrado = usuarios.find((usuario)=>usuario.id===id);

  if(!encontrado)
  {
      alert("Usuario no Encontrado");
  }
  else{

       let index = usuarios.indexOf(encontrado);

       usuarios.splice(index,1);

       console.log("Borrar usuario");
       console.log(usuarios);
  }
}

function buscarUsuario()
{
   let nombre = prompt("Ingresa el nombre que quires buscar");

   let encontrados = usuarios.filter((usuario)=>usuario.nombre.toLowerCase().indexOf(nombre.toLocaleLowerCase())!==-1);

   console.log("BUCAR USUARIOS:", encontrados);

}


function modificarUsuario()
{
   let id= Number(prompt("Ingrese el id del usuario que quiere modificar"));

   let existe = usuarios.some((usuario)=>usuario.id===id);

   if(existe)
   {
       let encontrado = usuarios.find((usuario)=>usuario.id===id);
       let nuevoNombre = prompt("Ingrese el nuevo nombre");
       let nuevoApellido = prompt("Ingrese el nuevo apellido");

       encontrado.nombre = nuevoNombre;
       encontrado.apellido= nuevoApellido;

       console.log("MODIFICACION")
       console.log(usuarios);
   }
   else
   {
     alert("Usuario no econtrado");
   }
}