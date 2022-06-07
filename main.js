let calculador = document.getElementById("calculador")
calculador.addEventListener("click", () => {
  calculadora();
});


let listado = document.getElementById("listado")
listado.addEventListener("click", () => {
  mostrarMenu();
});


//calculadora
function calculadora() {
  let div = document.createElement("div");
  document.body.appendChild(div);

  btnSuma();
  btnResta();
  btnMultiplica();
  btnDivide();


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
        suma.innerHTML = "<b>SUMAR</b>";
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
        resta.innerHTML = "";
        document.body.appendChild(resta);
        resta.innerHTML = "<b>RESTAR</b>";
        resta.setAttribute("id", "btnResta");
        resta.addEventListener("click", () => {
            restar();
        });
    }


    //Boton MULTIPLICACÍON
    function btnMultiplica() 
    {
        let multiplica = document.getElementById("btnMultiplica");
        if (!multiplica) 
        {
            multiplica = document.createElement("button");
        }
        multiplica.innerHTML = "";
        document.body.appendChild(multiplica);
        multiplica.innerHTML = "<b>MULTIPLICAR</b>";
        multiplica.setAttribute("id", "btnMultiplica");
        multiplica.addEventListener("click", () => {
            multiplicar();
        });
    }


    //Boton DIVISIÓN
    function btnDivide() 
    {
        let divide = document.getElementById("btnDivide");
        if (!divide) 
        {
            divide = document.createElement("button");
        }
        divide.innerHTML = "";
        document.body.appendChild(divide);
        divide.innerHTML = "<b>DIVIDIR</b>";
        divide.setAttribute("id", "btnDivide");
        divide.addEventListener("click", () => {
            dividir();
        });
    }
}


//Función SUMAR
function sumar() 
{
    let br = document.createElement("br");
    document.body.appendChild(br);


    let numero1 = document.getElementById("inputCalcu");
    if (!numero1) 
    {
        numero1 = document.createElement("input");
    }
    numero1.innerHTML = "";
    document.body.appendChild(numero1);
    numero1.setAttribute("id", "inputCalcu");


    let numero2 = document.getElementById("inputCalcu2");
    if (!numero2) 
    {
        numero2 = document.createElement("input");
    }
    numero2.innerHTML = "";
    document.body.appendChild(numero2);
    numero2.setAttribute("id", "inputCalcu2");


    let btnSuma2 = document.getElementById("button3");
    if (!btnSuma2) 
    {
        btnSuma2 = document.createElement("button");
    }
    btnSuma2.innerHTML = "";
    document.body.appendChild(btnSuma2);
    btnSuma2.innerHTML = "Sumar";
    btnSuma2.setAttribute("id", "button3");
    btnSuma2.addEventListener("click", () => {
      resultado();
    });


    function resultado() 
    {
      const resultado = Number(numero1.value) + Number(numero2.value);
      const mostResultado = document.createElement("p");
      document.body.appendChild(mostResultado);
      mostResultado.innerHTML = `El resultado de su suma es ${resultado}`;
    }
}


//Funcion RESTAR
function restar() 
{
    let br = document.createElement("br");
    document.body.appendChild(br);


    let numero1 = document.getElementById("inputCalcu");
    if (!numero1) 
    {
        numero1 = document.createElement("input");
    }
    numero1.innerHTML = "";
    document.body.appendChild(numero1);
    numero1.setAttribute("id", "inputCalcu");
    
    
    let numero2 = document.getElementById("inputCalcu2");
    if (!numero2) 
    {
        numero2 = document.createElement("input");
    }
    numero2.innerHTML = "";
    document.body.appendChild(numero2);
    numero2.setAttribute("id", "inputCalcu2");
    
    
    let btnSuma2 = document.getElementById("button3");
    if (!btnSuma2) 
    {
        btnSuma2 = document.createElement("button");
    }
    btnSuma2.innerHTML = "";
    document.body.appendChild(btnSuma2);
    btnSuma2.innerHTML = "Restar";
    btnSuma2.setAttribute("id", "button3");
    btnSuma2.addEventListener("click", () => {
        resultado();
    });
    
    
    function resultado() {
        const resultado = Number(numero1.value) - Number(numero2.value);
        const mostResultado = document.createElement("p");
        document.body.appendChild(mostResultado);
        mostResultado.innerHTML = `El resultado de su resta es ${resultado}`;
    }
}


//Función MULTIPLICAR
function multiplicar() 
{
    let br = document.createElement("br");
    document.body.appendChild(br);


    let numero1 = document.getElementById("inputCalcu");
    if (!numero1) 
    {
        numero1 = document.createElement("input");
    }
    numero1.innerHTML = "";
    document.body.appendChild(numero1);
    numero1.setAttribute("id", "inputCalcu");
    
    
    let numero2 = document.getElementById("inputCalcu2");
    if (!numero2) 
    {
        numero2 = document.createElement("input");
    }
    numero2.innerHTML = "";
    document.body.appendChild(numero2);
    numero2.setAttribute("id", "inputCalcu2");
    
    
    let btnSuma2 = document.getElementById("button3");
    if (!btnSuma2) 
    {
        btnSuma2 = document.createElement("button");
    }
    btnSuma2.innerHTML = "";
    document.body.appendChild(btnSuma2);
    btnSuma2.innerHTML = "Multiplicar";
    btnSuma2.setAttribute("id", "button3");
    btnSuma2.addEventListener("click", () => {
        resultado();
    });
    
    
    function resultado() {
        const resultado = Number(numero1.value) * Number(numero2.value);
        const mostResultado = document.createElement("p");
        document.body.appendChild(mostResultado);
        mostResultado.innerHTML = `El resultado de su multiplicación es ${resultado}`;
    }
}


//Función DIVIDIR
function dividir() 
{
    let br = document.createElement("br");
    document.body.appendChild(br);
    
    
    let numero1 = document.getElementById("inputCalcu");
    if (!numero1) 
    {
        numero1 = document.createElement("input");
    }
    numero1.innerHTML = "";
    document.body.appendChild(numero1);
    numero1.setAttribute("id", "inputCalcu");
    
    
    let numero2 = document.getElementById("inputCalcu2");
    if (!numero2) {
      numero2 = document.createElement("input");
    }
    numero2.innerHTML = "";
    document.body.appendChild(numero2);
    numero2.setAttribute("id", "inputCalcu2");
    
    
    let btnSuma2 = document.getElementById("button3");
    if (!btnSuma2) {
      btnSuma2 = document.createElement("button");
    }
    btnSuma2.innerHTML = "";
    document.body.appendChild(btnSuma2);
    btnSuma2.innerHTML = "Dividir";
    btnSuma2.setAttribute("id", "button3");
    btnSuma2.addEventListener("click", () => {
      resultado();
    });
    
    
    function resultado() {
      const resultado = Number(numero1.value) / Number(numero2.value);
      const mostResultado = document.createElement("p");
      document.body.appendChild(mostResultado);
      mostResultado.innerHTML = `El resultado de su división es ${resultado}`;
    }
}


//clase de usuarios
class Usuario 
{
    constructor(id, nombre, apellido, años, ciudad) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.años = años;
        this.ciudad = ciudad;
    }
}   


//Usuarios
const usuario1 = new Usuario(1, "Nehuen", "Gutierrez", 22, "CABA");
const usuario2 = new Usuario(2, "Fiona", "Gancedo", 25, "Corrientes");
const usuario3 = new Usuario(3, "Morena", "Nuñez", 21, "CABA");
const usuario4 = new Usuario(4, "Aldana", "Morales", 28, "Mendoza");
const usuario5 = new Usuario(5, "Alfonsina", "Diaz", 0, "CABA");

const usuarios = [usuario1, usuario2, usuario3, usuario4, usuario5];
console.log("INICIAL:", usuarios);


//Menú del listado de usuarios
function mostrarMenu() 
{
    let br = document.createElement("br");
    document.body.appendChild(br);


    // Boton AGREGAR USUARIO
    let agreUsuario = document.getElementById("btnAgreUsuario");
    if (!agreUsuario) 
    {
        agreUsuario = document.createElement("button");
    }
    agreUsuario.innerHTML = "";
    document.body.appendChild(agreUsuario);
    agreUsuario.innerHTML = "<b>Agregar Usuario</b>";
    agreUsuario.setAttribute("id", "btnAgreUsuario");
    agreUsuario.addEventListener("click", () => {
        agregarUsuario();
    });


    // Boton ELIMINAR USUARIO
    let elimUsuario = document.getElementById("btnElimUsuario");
    if (!elimUsuario) 
    {
        elimUsuario = document.createElement("button");
    }
    elimUsuario.innerHTML = "";
    document.body.appendChild(elimUsuario);
    elimUsuario.innerHTML = "<b>Eliminiar Usuario</b>";
    elimUsuario.setAttribute("id", "btnElimUsuario");
    elimUsuario.addEventListener("click", () => {
        eliminarUsuario();
    });


    // Boton MODIFICAR USUARIO
    let modiUsuario = document.getElementById("btnModiUsuario");
    if (!modiUsuario) 
    {
        modiUsuario = document.createElement("button");
    }
    modiUsuario.innerHTML = "";
    document.body.appendChild(modiUsuario);
    modiUsuario.innerHTML = "<b>Modificar Usuario</b>";
    modiUsuario.setAttribute("id", "btnModiUsuario");
    modiUsuario.addEventListener("click", () => {
        modificarUsuario();
    });


    // Boton LISTAR USUARIOS
    let listUsuario = document.getElementById("btnListUsuario");
    if (!listUsuario) 
    {
        listUsuario = document.createElement("button");
    }
    listUsuario.innerHTML = "";
    document.body.appendChild(listUsuario);
    listUsuario.innerHTML = "<b>Listar Usuarios</b>";
    listUsuario.setAttribute("id", "btnListUsuario");
    listUsuario.addEventListener("click", () => {
        listarUsuarios();
    });
}

//Función AGREGAR USUARIO
function agregarUsuario() 
{
    let h3 = document.createElement("h3");
    document.body.appendChild(h3);
    h3.innerHTML = "Agregar Usuario";


    //id
    let id = 1;
    if (usuarios.length > 0) 
    {
        id = usuarios[usuarios.length - 1].id + 1;
    }


    //nombre
    let nombre = document.getElementById("inputUsuarios1");
    if (!nombre) 
    {
        let label = document.createElement("label");
        document.body.appendChild(label);
        label.innerHTML = "Nombre";
        nombre = document.createElement("input");
    }
    nombre.innerHTML = "NOMBRE";
    document.body.appendChild(nombre);
    nombre.setAttribute("id", "inputUsuarios1")
    

    //apellido
    let apellido = document.getElementById("inputUsuarios2");
    if (!apellido) 
    {
        let label = document.createElement("label");
        document.body.appendChild(label);
        label.innerHTML = "Apellido";
        apellido = document.createElement("input");
    }
    apellido.innerHTML = "";
    document.body.appendChild(apellido);
    apellido.setAttribute("id", "inputUsuarios2");


    //años
    let años = document.getElementById("inputUsuarios3");
    if (!años) 
    {
        let label = document.createElement("label");
        document.body.appendChild(label);
        label.innerHTML = "Edad";
        años = document.createElement("input");
    }
    años.innerHTML = "";
    document.body.appendChild(años);
    años.setAttribute("id", "inputUsuarios3");


    //ciudad
    let ciudad = document.getElementById("inputUsuarios4");
    if (!ciudad) 
    {
        let label = document.createElement("label");
        document.body.appendChild(label);
        label.innerHTML = "Ciudad";
        ciudad = document.createElement("input");
    }
    ciudad.innerHTML = "";
    document.body.appendChild(ciudad);
    ciudad.setAttribute("id", "inputUsuarios4");


    //boton que agrega los usuarios
    let agreUsuario2 = document.getElementById("button1");
    if (!agreUsuario2) 
    {
        agreUsuario2 = document.createElement("button");
    }
    agreUsuario2.innerHTML = "";
    document.body.appendChild(agreUsuario2);
    agreUsuario2.innerHTML = "<b>Agregar</b>";
    agreUsuario2.setAttribute("id", "button1");
    agreUsuario2.addEventListener("click", () => {
        let usuario = new Usuario(id, nombre.value, apellido.value, años.value, ciudad.value);
        usuarios.push(usuario);
        listarUsuarios();
    });
}


//Función ELIMINAR USUARIO
function eliminarUsuario() 
{
    let h3 = document.createElement("h3");
    document.body.appendChild(h3);
    h3.innerHTML = "Eliminar Usuario";


    let id = document.getElementById("inputUsuarios1");
    if (!id) 
    {
        let label = document.createElement("label");
        document.body.appendChild(label);
        label.innerHTML = "Ingrese ID a eliminar";
        id = document.createElement("input");
    }
    id.innerHTML = "";
    document.body.appendChild(id);
    id.setAttribute("id", "inputUsuarios1");


    let elimUsuario2 = document.getElementById("button2");
    if (!elimUsuario2) 
    {
        elimUsuario2 = document.createElement("button");
    }
    elimUsuario2.innerHTML = "";
    document.body.appendChild(elimUsuario2);
    elimUsuario2.innerHTML = "<b>Eliminar</b>";
    elimUsuario2.setAttribute("id", "button2");
    elimUsuario2.addEventListener("click", () => {
        let encontrado = usuarios.find((usuario) => usuario.id === Number(id.value));
        if (!encontrado) 
        {
            alert("Usuario no Encontrado");
        } 
        else 
        {
            let index = usuarios.indexOf(encontrado);
            usuarios.splice(index, 1); 
            console.log("Borrar usuario");
            console.log(usuarios);
        }

        listarUsuarios();
    });

    listarUsuarios()
}

//Función MODIFICAR USUARIO
function modificarUsuario() 
{
    let h3 = document.createElement("h3");
    document.body.appendChild(h3);
    h3.innerHTML = "Modificar Usuario";


    let id = document.getElementById("inputUsuarios5");
    if (!id) 
    {
        let label = document.createElement("label");
        document.body.appendChild(label);
        label.innerHTML = "Ingrese ID a modificar";
        id = document.createElement("input");
    }
    id.innerHTML = "";
    document.body.appendChild(id);
    id.setAttribute("id", "inputUsuarios5");


    let modiUsuario2 = document.getElementById("button1");
    if (!modiUsuario2) 
    {
        modiUsuario2 = document.createElement("button");
    }
    modiUsuario2.innerHTML = "";
    document.body.appendChild(modiUsuario2);
    modiUsuario2.innerHTML = "<b>Modificar</b>";
    modiUsuario2.setAttribute("id", "button1");
    modiUsuario2.addEventListener("click", () => {
        let existe = usuarios.some((usuario) => usuario.id === Number(id.value));

        if (existe) 
        {
            let encontrado = usuarios.find((usuario) => usuario.id === Number(id.value));
            
            
            //Nuevo Nombre
            let nombre = document.getElementById("inputUsuarios1");
            if (!nombre) 
            {
                let label = document.createElement("label");
                document.body.appendChild(label);
                label.innerHTML = "Nuevo Nombre";
                nombre = document.createElement("input");
            }
            nombre.innerHTML = "NOMBRE";
            document.body.appendChild(nombre);
            nombre.setAttribute("id", "inputUsuarios1")
            

            //Nuevo Apellido
            let apellido = document.getElementById("inputUsuarios2");
            if (!apellido) 
            {
                let label = document.createElement("label");
                document.body.appendChild(label);
                label.innerHTML = "Nuevo Apellido";
                apellido = document.createElement("input");
            }
            apellido.innerHTML = "";
            document.body.appendChild(apellido);
            apellido.setAttribute("id", "inputUsuarios2");


            //Nueva Edad
            let años = document.getElementById("inputUsuarios3");
            if (!años) 
            {
                let label = document.createElement("label");
                document.body.appendChild(label);
                label.innerHTML = "Nueva Edad";
                años = document.createElement("input");
            }
            años.innerHTML = "";
            document.body.appendChild(años);
            años.setAttribute("id", "inputUsuarios3");


            //Nueva Ciudad
            let ciudad = document.getElementById("inputUsuarios4");
            if (!ciudad) 
            {
                let label = document.createElement("label");
                document.body.appendChild(label);
                label.innerHTML = "Nueva Ciudad";
                ciudad = document.createElement("input");
            }
            ciudad.innerHTML = "";
            document.body.appendChild(ciudad);
            ciudad.setAttribute("id", "inputUsuarios4");


            //boton que modifica los usuarios
            let modiUsuario3 = document.getElementById("button2");
            if (!modiUsuario3) 
            {
                modiUsuario3 = document.createElement("button");
            }
            modiUsuario3.innerHTML = "";
            document.body.appendChild(modiUsuario3);
            modiUsuario3.innerHTML = "<b>Aceptar Modificacion</b>";
            modiUsuario3.setAttribute("id", "button2");
            modiUsuario3.addEventListener("click", () => {
                let usuario = new Usuario(id, nombre.value, apellido.value, años.value, ciudad.value);
                existe.nombre = nombre;
                existe.apellido = apellido;
                existe.años = años;
                existe.ciudad = ciudad;

                usuarios.push(usuario);
                listarUsuarios();
            });


            console.log("MODIFICACION");
            console.log(usuarios);
        } 
        else 
        {
            alert("Usuario no econtrado");
        }
    });

    listarUsuarios()
}


//Función LISTAR USUARIOS
function listarUsuarios() 
{
    let miLista = document.querySelector("#listaUsuarios");
    if (!miLista) 
    {
        miLista = document.createElement("ul");
        miLista.setAttribute("id", "listaUsuarios");
    }
    miLista.innerHTML = "";

    usuarios.forEach((usuario) => {
        const nodoli = document.createElement("li");
        nodoli.innerHTML = `${usuario.id}, ${usuario.nombre} ${usuario.apellido}, ${usuario.años} años, ${usuario.ciudad}`;
        miLista.appendChild(nodoli);
    });

    document.body.appendChild(miLista);
}