//ALERTA
//document.addEventListener('DOMContentLoaded', function(event){
//    document.getElementById('button').addEventListener('click', getData, true);
//});

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


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
}



const expresiones = {

    nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
    rut: /^(\d{2}\.\d{3}\.\d{3}-)([a-zA-Z]{1}$|\d{1}$)/, //expresión de RUT
    poliza: /^\d{7,14}$/ , // 7 a 14 numeros.
    correo:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/ //Valida expresión correo.
}


const validarFormulario = (e) =>{
    switch (e.target.name) {
		case "nombre":
            if (expresiones.nombre.test(e.target.value)) { //Objeto para validar la const expresiones= si es nombre solo letra, rut solo numero //e.target.value accedo al valor del input.
                document.getElementById("grupo_nombre").classList.remove("formulario_grupo-incorrecto") //Remuevo el estilo Incorrecto
                document.getElementById("grupo_nombre").classList.add("formulario_grupo-correcto") //Agrego el estilo Correcto (verde)
                document.querySelector("#grupo_nombre .formulario_input-error").classList.remove("formulario_input-error-activo")
                console.log("comple criterio expresion");
            } else {
                document.getElementById("grupo_nombre").classList.add("formulario_grupo-incorrecto")//Agrego el estilo Incorrecto
                document.getElementById("grupo_nombre").classList.remove("formulario_grupo-correcto")//Agrego el estilo Incorrecto
                document.querySelector("#grupo_nombre .formulario_input-error").classList.add('formulario_input-error-activo')
                console.log("No cumple criterio expresion");
            }
		break;
		case "apellido":
            if (expresiones.apellido.test(e.target.value)) { //Objeto para validar la const expresiones= si es nombre solo letra, rut solo numero //e.target.value accedo al valor del input.
                document.getElementById("grupo_apellido").classList.remove("formulario_grupo-incorrecto") //Remuevo el estilo Incorrecto
                document.getElementById("grupo_apellido").classList.add("formulario_grupo-correcto") //Agrego el estilo Correcto (verde)
                document.querySelector("#grupo_apellido .formulario_input-error").classList.remove("formulario_input-error-activo")
                console.log("comple criterio expresion");
            } else {
                document.getElementById("grupo_apellido").classList.add("formulario_grupo-incorrecto")//Agrego el estilo Incorrecto
                document.getElementById("grupo_apellido").classList.remove("formulario_grupo-correcto")//Agrego el estilo Incorrecto
                document.querySelector("#grupo_apellido .formulario_input-error").classList.add('formulario_input-error-activo')
                console.log("No cumple criterio expresion");
            }
		break;
		case "rut":
            if (expresiones.rut.test(e.target.value)) { //Objeto para validar la const expresiones= si es nombre solo letra, rut solo numero //e.target.value accedo al valor del input.
                document.getElementById("grupo_rut").classList.remove("formulario_grupo-incorrecto") //Remuevo el estilo Incorrecto
                document.getElementById("grupo_rut").classList.add("formulario_grupo-correcto") //Agrego el estilo Correcto (verde)
                document.querySelector("#grupo_rut .formulario_input-error").classList.remove("formulario_input-error-activo")
                console.log("comple criterio expresion");
            } else {
                document.getElementById("grupo_rut").classList.add("formulario_grupo-incorrecto")//Agrego el estilo Incorrecto
                document.getElementById("grupo_rut").classList.remove("formulario_grupo-correcto")//Agrego el estilo Incorrecto
                document.querySelector("#grupo_rut .formulario_input-error").classList.add('formulario_input-error-activo')
                console.log("No cumple criterio expresion");
            }
		break;
		case "poliza":
            if (expresiones.poliza.test(e.target.value)) { //Objeto para validar la const expresiones= si es nombre solo letra, rut solo numero //e.target.value accedo al valor del input.
                document.getElementById("grupo_poliza").classList.remove("formulario_grupo-incorrecto") //Remuevo el estilo Incorrecto
                document.getElementById("grupo_poliza").classList.add("formulario_grupo-correcto") //Agrego el estilo Correcto (verde)
                document.querySelector("#grupo_poliza .formulario_input-error").classList.remove("formulario_input-error-activo")
                console.log("comple criterio expresion");
            } else {
                document.getElementById("grupo_poliza").classList.add("formulario_grupo-incorrecto")//Agrego el estilo Incorrecto
                document.getElementById("grupo_poliza").classList.remove("formulario_grupo-correcto")//Agrego el estilo Incorrecto
                document.querySelector("#grupo_poliza .formulario_input-error").classList.add('formulario_input-error-activo')
                console.log("No cumple criterio expresion");
            }
        break;
        case "correo":
            if (expresiones.correo.test(e.target.value)) { //Objeto para validar la const expresiones= si es nombre solo letra, rut solo numero //e.target.value accedo al valor del input.
                document.getElementById("grupo_correo").classList.remove("formulario_grupo-incorrecto") //Remuevo el estilo Incorrecto
                document.getElementById("grupo_correo").classList.add("formulario_grupo-correcto") //Agrego el estilo Correcto (verde)
                document.querySelector("#grupo_correo .formulario_input-error").classList.remove("formulario_input-error-activo")
                console.log("comple criterio expresion");
            } else {
                document.getElementById("grupo_correo").classList.add("formulario_grupo-incorrecto")//Agrego el estilo Incorrecto
                document.getElementById("grupo_correo").classList.remove("formulario_grupo-correcto")//Agrego el estilo Incorrecto
                document.querySelector("#grupo_correo .formulario_input-error").classList.add('formulario_input-error-activo')
                console.log("No cumple criterio expresion");
            }
        break;
        

	}
}

const validarCampo = (expresion, input, campo) => { //1expresión 2input a comprobar 3campo
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}



inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario); //al presionar una tecla al levantarla se ejecutara la fx ValidarFormulario.
    input.addEventListener('blur', validarFormulario);//al hacer un click dentro del campo del form y al ahcer click fuera de este se ejecuta la fx ValidarFormulario.
});