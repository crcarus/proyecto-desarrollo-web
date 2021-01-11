//ALERTA
//document.addEventListener('DOMContentLoaded', function(event){
//    document.getElementById('button').addEventListener('click', getData, true);
//});

const formulario = document.getElementById('formulario'); //Const para acceder al elemento bajo id Formulario
const inputs = document.querySelectorAll('#formulario input'); //Const para acceder a los elementos del DOM: Accedemos al CSS


var getData=function(){
    //alert("Ha ingresado su siniestro de manera correcta?");
    var nombre= document.getElementById("nombre").value;
    var apellido= document.getElementById("apellido").value;
    var rut= document.getElementById("rut").value;
    var poliza= document.getElementById("poliza").value;
    var tiposiniestro= document.getElementById("tiposiniestro").value;
    var cia= document.getElementById("cia").value;
    var fechasiniestro= document.getElementById("fechasiniestro").value;
    console.log(nombre);
    console.log(apellido);
    console.log(rut);
    console.log(poliza);
    console.log(tiposiniestro);
    console.log(cia);
    console.log(fechasiniestro);
};


//Asignación de exprexión para cada la validación de variable.
const expresiones = {

    nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
    rut: /^(\d{2}\.\d{3}\.\d{3}-)([a-zA-Z]{1}$|\d{1}$)/, //expresión de RUT
    poliza: /^\d{7,14}$/ , // 7 a 14 numeros.
    correo:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/ //Valida expresión correo.
};

const campos = { //Entro variable booleana inicial a cada campo de mi form
	nombre: false,
	apellido: false,
	rut: false,
	poliza: false,
	correo: false
};

//Función Validación campos Formulario:
//Switch: Evaluación de una exprexión por medio de Case:
//target: es una referencia al objeto en el cual se lanzo el evento.
//e.target.value: accedo al valor del input.
const validarFormulario = (e) =>{
    switch (e.target.name) {
		case "nombre":
            if (expresiones.nombre.test(e.target.value)) { //Objeto para validar la const expresiones= si es nombre solo letras
                document.getElementById("grupo_nombre").classList.remove("formulario_grupo-incorrecto") //Remuevo el estilo Incorrecto (rojo)
                document.getElementById("grupo_nombre").classList.add("formulario_grupo-correcto") //Agrego el estilo Correcto (verde)
                document.querySelector("#grupo_nombre .formulario_input-error").classList.remove("formulario_input-error-activo")
                console.log("comple criterio expresion");
                campos["nombre"]=true
            } else {
                document.getElementById("grupo_nombre").classList.add("formulario_grupo-incorrecto")//Agrego el estilo Incorrecto
                document.getElementById("grupo_nombre").classList.remove("formulario_grupo-correcto")//Agrego el estilo Incorrecto
                document.querySelector("#grupo_nombre .formulario_input-error").classList.add('formulario_input-error-activo')
                console.log("No cumple criterio expresion");
            }
		break;
		case "apellido":
            if (expresiones.apellido.test(e.target.value)) { //Objeto para validar la variable const (expresiones)= si el apellido solo presenta letras
                document.getElementById("grupo_apellido").classList.remove("formulario_grupo-incorrecto") //Remuevo el estilo Incorrecto
                document.getElementById("grupo_apellido").classList.add("formulario_grupo-correcto") //Agrego el estilo Correcto (verde)
                document.querySelector("#grupo_apellido .formulario_input-error").classList.remove("formulario_input-error-activo")
                console.log("comple criterio expresion");
                campos["apellido"]=true

            } else {
                document.getElementById("grupo_apellido").classList.add("formulario_grupo-incorrecto")//Agrego el estilo Incorrecto
                document.getElementById("grupo_apellido").classList.remove("formulario_grupo-correcto")//Agrego el estilo Incorrecto
                document.querySelector("#grupo_apellido .formulario_input-error").classList.add('formulario_input-error-activo')
                console.log("No cumple criterio expresion");
            }
		break;
		case "rut":
            if (expresiones.rut.test(e.target.value)) { //Objeto para validar la variable const (expresiones)= si presenta formato RUT(con punto guion)
                document.getElementById("grupo_rut").classList.remove("formulario_grupo-incorrecto") //Remuevo el estilo Incorrecto
                document.getElementById("grupo_rut").classList.add("formulario_grupo-correcto") //Agrego el estilo Correcto (verde)
                document.querySelector("#grupo_rut .formulario_input-error").classList.remove("formulario_input-error-activo")
                console.log("comple criterio expresion");
                campos["rut"]=true

            } else {
                document.getElementById("grupo_rut").classList.add("formulario_grupo-incorrecto")//Agrego el estilo Incorrecto
                document.getElementById("grupo_rut").classList.remove("formulario_grupo-correcto")//Agrego el estilo Incorrecto
                document.querySelector("#grupo_rut .formulario_input-error").classList.add('formulario_input-error-activo')
                console.log("No cumple criterio expresion");
            }
		break;
		case "poliza":
            if (expresiones.poliza.test(e.target.value)) { //Objeto para validar la variable const(expresiones)= si la poliza solo tiene numero (entre 7 a 14)
                document.getElementById("grupo_poliza").classList.remove("formulario_grupo-incorrecto") //Remuevo el estilo Incorrecto
                document.getElementById("grupo_poliza").classList.add("formulario_grupo-correcto") //Agrego el estilo Correcto (verde)
                document.querySelector("#grupo_poliza .formulario_input-error").classList.remove("formulario_input-error-activo")
                console.log("comple criterio expresion");
                campos["poliza"]=true

            } else {
                document.getElementById("grupo_poliza").classList.add("formulario_grupo-incorrecto")//Agrego el estilo Incorrecto
                document.getElementById("grupo_poliza").classList.remove("formulario_grupo-correcto")//Agrego el estilo Incorrecto
                document.querySelector("#grupo_poliza .formulario_input-error").classList.add('formulario_input-error-activo')
                console.log("No cumple criterio expresion");
            }
        break;
        case "correo":
            if (expresiones.correo.test(e.target.value)) { //Objeto para validar la variable const (expresiones)=Si el correo presenta formato correo(exaple@exaple.com)
                document.getElementById("grupo_correo").classList.remove("formulario_grupo-incorrecto") //Remuevo el estilo Incorrecto
                document.getElementById("grupo_correo").classList.add("formulario_grupo-correcto") //Agrego el estilo Correcto (verde)
                document.querySelector("#grupo_correo .formulario_input-error").classList.remove("formulario_input-error-activo")
                console.log("comple criterio expresion");
                campos["correo"]=true

            } else {
                document.getElementById("grupo_correo").classList.add("formulario_grupo-incorrecto")//Agrego el estilo Incorrecto
                document.getElementById("grupo_correo").classList.remove("formulario_grupo-correcto")//Agrego el estilo Incorrecto
                document.querySelector("#grupo_correo .formulario_input-error").classList.add('formulario_input-error-activo')
                console.log("No cumple criterio expresion");
            }
        break;
        

	}
}



//KeyUP: Evento cuando el usuario presiona una tecla
//Blur: Evento cuando un elemento pierde el la referencia al ser clickado por el ratón
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario); //al presionar una tecla al levantarla se ejecutara la fx ValidarFormulario.
    input.addEventListener('blur', validarFormulario);//al hacer un click dentro del campo del form y al ahcer click fuera de este se ejecuta la fx ValidarFormulario.
});


//Función para limpiar el formulario una vez presionado el boton Enviar
//Add: Agrego el estilo Css correspondiente (classList) Rojo/verde segun validación
//Remove: Remueve el estilo Css obtenido previamiento
//SetTimeout: le entrego 5 segundos para mostrar el mensaje de exito al usuaio.
formulario.addEventListener('submit', (e) => {
	e.preventDefault();

    if (campos.nombre && campos.apellido && campos.correo && campos.poliza && campos.rut) {
		formulario.reset();

		document.getElementById('formulario_mensaje-exito').classList.add('formulario_mensaje-exito-activo');
		setTimeout(() => {
            document.getElementById('formulario_mensaje-exito').classList.remove('formulario_mensaje-exito-activo');

		}, 5000);

		document.querySelectorAll('.formulario_grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario_grupo-correcto');
            
        });
        
        document.getElementById('formulario_mensaje').classList.remove('formulario_mensaje-activo');

	} else {
		document.getElementById('formulario_mensaje').classList.add('formulario_mensaje-activo');
	}
});
