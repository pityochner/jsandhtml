const saludo = document.getElementById("saludo")
let calculador = document.getElementById("calculador")
let listado = document.getElementById("listado")


listado.addEventListener("click", () => {
    mostrarMenu()
})

calculador.addEventListener("click", () => {
    calculadora()
})


//calculadora
function calculadora()
{
    btnSuma()
    btnResta()
    btnMultiplica()
    btnDivide()


    // Boton SUMA
    function btnSuma()
    {
        let suma = document.getElementById("btnSuma");
        if (!suma) 
        {
            suma = document.createElement("button");
        }
        suma.innerHTML = "";
        document.body.appendChild(suma);
        suma.innerHTML = "SUMAR";
        suma.setAttribute("id", "btnSuma");
        suma.addEventListener("click", () => {
            sumar();
        });
        
    }

    //Boton RESTA
    function btnResta()
    {
        let resta = document.getElementById("btnResta");
        if (!resta) 
        {
            resta = document.createElement("button");
        }
        resta.innerHTML=""
        document.body.appendChild(resta)
        resta.innerHTML="RESTAR"
        resta.setAttribute("id", "btnResta");
        resta.addEventListener("click", () => {
            restar()
        })
    }

    //Boton MULTIPLICACÍON
    function btnMultiplica()
    {
        let multiplica = document.getElementById("btnMultiplica");
        if (!multiplica) 
        {
            multiplica = document.createElement("button");
        }
        multiplica.innerHTML=""
        document.body.appendChild(multiplica)
        multiplica.innerHTML="MULTIPLICAR"
        multiplica.setAttribute("id", "btnMultiplica");
        multiplica.addEventListener("click", () => {
            multiplicar()
        })
    }
    
    //Boton DIVISIÓN
    function btnDivide()
    {
        let divide = document.getElementById("btnDivide");
        if (!divide) 
        {
            divide = document.createElement("button");
        }
        divide.innerHTML=""
        document.body.appendChild(divide)
        divide.innerHTML="DIVIDIR"
        divide.setAttribute("id", "btnDivide");
        divide.addEventListener("click", () => {
            dividir()
        })
    }

    //Función SUMAR
    function sumar()
    {
        let numero1 = document.getElementById("inputCalcu");
        if (!numero1) 
        {
            numero1 = document.createElement("input");
        }
        numero1.innerHTML = "";
        document.body.appendChild(numero1)
        numero1.setAttribute("id", "inputCalcu")

        let numero2 = document.getElementById("inputCalcu2");
        if (!numero2) 
        {
            numero2 = document.createElement("input");
        }
        numero2.innerHTML = "";
        document.body.appendChild(numero2)
        numero2.setAttribute("id", "inputCalcu2")

        let btnSuma2 = document.getElementById("button3");
        if (!btnSuma2) 
        {
            btnSuma2 = document.createElement("button");
        }
        btnSuma2.innerHTML=""
        document.body.appendChild(btnSuma2)
        btnSuma2.innerHTML="Sumar"
        btnSuma2.setAttribute("id", "button3");
        btnSuma2.addEventListener("click", () => {
            resultado()
        })

        function resultado()
        {
            const resultado = Number(numero1.value) + Number(numero2.value)
            const mostResultado = document.createElement("p")
            document.body.appendChild(mostResultado)
            mostResultado.innerHTML = `El resultado de su suma es ${resultado}`
        }
    }

    //Funcion RESTAR
    function restar()
    {
        let numero1 = document.getElementById("inputCalcu");
        if (!numero1) 
        {
            numero1 = document.createElement("input");
        }
        numero1.innerHTML = "";
        document.body.appendChild(numero1)
        numero1.setAttribute("id", "inputCalcu")
        
        let numero2 = document.getElementById("inputCalcu2");
        if (!numero2) 
        {
            numero2 = document.createElement("input");
        }
        numero2.innerHTML = "";
        document.body.appendChild(numero2)
        numero2.setAttribute("id", "inputCalcu2")

        let btnSuma2 = document.getElementById("button3");
        if (!btnSuma2) 
        {
            btnSuma2 = document.createElement("button");
        }
        btnSuma2.innerHTML=""
        document.body.appendChild(btnSuma2)
        btnSuma2.innerHTML="Restar"
        btnSuma2.setAttribute("id", "button3");
        btnSuma2.addEventListener("click", () => {
            resultado()
        })

        function resultado()
        {
            const resultado = Number(numero1.value) - Number(numero2.value)
            const mostResultado = document.createElement("p")
            document.body.appendChild(mostResultado)
            mostResultado.innerHTML = `El resultado de su resta es ${resultado}`
        }
    }

    //Función MULTIPLICAR
    function multiplicar()
    {
        let numero1 = document.getElementById("inputCalcu");
        if (!numero1) 
        {
            numero1 = document.createElement("input");
        }
        numero1.innerHTML = "";
        document.body.appendChild(numero1)
        numero1.setAttribute("id", "inputCalcu")
        
        let numero2 = document.getElementById("inputCalcu2");
        if (!numero2) 
        {
            numero2 = document.createElement("input");
        }
        numero2.innerHTML = "";
        document.body.appendChild(numero2)
        numero2.setAttribute("id", "inputCalcu2")

        let btnSuma2 = document.getElementById("button3");
        if (!btnSuma2) 
        {
            btnSuma2 = document.createElement("button");
        }
        btnSuma2.innerHTML=""
        document.body.appendChild(btnSuma2)
        btnSuma2.innerHTML="Multiplicar"
        btnSuma2.setAttribute("id", "button3");
        btnSuma2.addEventListener("click", () => {
            resultado()
        })

        function resultado()
        {
            const resultado = Number(numero1.value) * Number(numero2.value)
            const mostResultado = document.createElement("p")
            document.body.appendChild(mostResultado)
            mostResultado.innerHTML = `El resultado de su multiplicación es ${resultado}`
        }
    }
    
    //Función DIVIDIR
    function dividir()
    {
        let numero1 = document.getElementById("inputCalcu");
        if (!numero1) 
        {
            numero1 = document.createElement("input");
        }
        numero1.innerHTML = "";
        document.body.appendChild(numero1)
        numero1.setAttribute("id", "inputCalcu")
        
        let numero2 = document.getElementById("inputCalcu2");
        if (!numero2) 
        {
            numero2 = document.createElement("input");
        }
        numero2.innerHTML = "";
        document.body.appendChild(numero2)
        numero2.setAttribute("id", "inputCalcu2")

        let btnSuma2 = document.getElementById("button3");
        if (!btnSuma2) 
        {
            btnSuma2 = document.createElement("button");
        }
        btnSuma2.innerHTML=""
        document.body.appendChild(btnSuma2)
        btnSuma2.innerHTML="Dividir"
        btnSuma2.setAttribute("id", "button3");
        btnSuma2.addEventListener("click", () => {
            resultado()
        })

        function resultado()
        {
            const resultado = Number(numero1.value) / Number(numero2.value)
            const mostResultado = document.createElement("p")
            document.body.appendChild(mostResultado)
            mostResultado.innerHTML = `El resultado de su división es ${resultado}`
        }
    }
}


//listado de usuarios
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
const usuario5 = new Usuario(5, "Alfonsina", "Diaz", 0, "CABA");
const usuario6 = new Usuario(6, "Pietro", "Ochner", 21, "CABA");


const usuarios = [usuario1,usuario2,usuario3, usuario4, usuario5, usuario6];
console.log("INICIAL:", usuarios);


function mostrarMenu()
{
    const agreUsuario = document.createElement("button")
    document.body.appendChild(agreUsuario)
    agreUsuario.innerHTML="Agregar Usuario"
    agreUsuario.classList.add("button2");
    agreUsuario.addEventListener("click", () => {
        agregarUsuario()
    })

    const elimUsuario = document.createElement("button")
    document.body.appendChild(elimUsuario)
    elimUsuario.innerHTML="Eliminar Usuario"
    elimUsuario.classList.add("button2");
    elimUsuario.addEventListener("click", () => {
        eliminarUsuario()
    })

    const modiUsuario = document.createElement("button")
    document.body.appendChild(modiUsuario)
    modiUsuario.innerHTML="Modificar Usuario"
    modiUsuario.classList.add("button2");
    modiUsuario.addEventListener("click", () => {
        modificarUsuario()
    })

    const listUsuario = document.createElement("button")
    document.body.appendChild(listUsuario)
    listUsuario.innerHTML="Listar Usuarios"
    listUsuario.classList.add("button2");
    listUsuario.addEventListener("click", () => {
      listarUsuarios();
    });
}


//agregar usuario
function agregarUsuario()
{      
    let id=1;
    if(usuarios.length>0)
    {
       id=usuarios[usuarios.length-1].id+1;
    }
    
    let nombre=prompt("ingrese un nombre");
    let apellido = prompt("ingrese un apellido");
    let años = Number(prompt("ingrese su edad"));
    let ciudad = prompt("ingrese un ciudad");
    let usuario = new Usuario(id, nombre, apellido, años, ciudad);

    usuarios.push(usuario);
    listarUsuarios()
}


//listar usuarios
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
       nodoli.innerHTML=`${usuario.id}, ${usuario.nombre} ${usuario.apellido}, ${usuario.años} años, ${usuario.ciudad}`;
       miLista.appendChild(nodoli);
   });

   document.body.appendChild(miLista);
}


//eliminar usuario
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
  listarUsuarios()
}


//modificar usuario
function modificarUsuario()
{
   let id= Number(prompt("Ingrese el id del usuario que quiere modificar"));

   let existe = usuarios.some((usuario)=>usuario.id===id);

   if(existe)
   {
       let encontrado = usuarios.find((usuario)=>usuario.id===id);
       let nuevoNombre = prompt("Ingrese el nuevo nombre");
       let nuevoApellido = prompt("Ingrese el nuevo apellido");
       let nuevaEdad = prompt("Ingrese la nueva edad");
       let nuevaCiudad = prompt("Ingrese la nueva ciudad");

       encontrado.nombre = nuevoNombre;
       encontrado.apellido= nuevoApellido;
       encontrado.Edad = nuevaEdad;
       encontrado.Ciudad = nuevaCiudad;

       console.log("MODIFICACION")
       console.log(usuarios);
   }
   else
   {
     alert("Usuario no econtrado");
   }
   listarUsuarios()
}