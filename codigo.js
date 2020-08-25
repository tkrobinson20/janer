//variables
/*const nombre = document.getElementById('name');
const email = document.getElementById('email');
const comment = document.getElementById('mensaje');
const enviarM = document.getElementById('btnEnviar');
const formularioEnviar = document.getElementById('contact');



//event
function eventListeners(){
    document.addEventListener('DomContentLoaded', inicioApp);
    
    nombre.addEventListener('blur', validarCampo);
    email.addEventListener('blur', validarCampo);
    comment.addEventListener('blur', validarCampo);
    formularioEnviar.addEventListener('submit', enviarEmail);
}
eventListeners();

//function
function inicioApp(){
   enviarM.disabled = true;
}

function validarCampo(){
    validarLongitud(this);
    
    
    if(this.type === 'email' ){
        validarEmail(this);
    }
    
    
    
    if(email.value !=='' && comment.value !== '' && nombre.value !== '' ){
           enviarM.disabled = false;
         enviarM.style.background = '#0d84fc';
       }
}


function enviarEmail(e){
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.classList.add('d-block');
   
    
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.classList.add('d-block');
    enviado.style.width = '150px';
    
    setTimeout(function(){
        spinnerGif.classList.remove('d-block');
        
        document.querySelector('#loaders').appendChild( enviado );
        
        setTimeout(function(){
            enviado.remove();
            formularioEnviar.reset();
        },4000);
    },3000);
    
     
}
function soloLetras(e){
    tecla = (document.all) ?
    e.keyCode : e.which;
    if(tecla == 8)return true;
    patron = /[A-Za-z]/;
    te = String.fromCharCode(tecla);
    return patron.test(e)
}

function validarLongitud(campo){
    console.log(campo.value.length);
    
    if(campo.value.length > 0 ){
        
        campo.classList.add('is-valid');
        campo.classList.remove('is-invalid');
       
    }else{
        campo.classList.add('is-invalid');
        campo.classList.remove('is-valid');
        return false;
    }
}
 /*function validarEmail (campo){
    const mensaje = campo.value
  if(mensaje.indexOf('@') !== -1 && mensaje.indexOf('.') !== -1){
        campo.classList.add('is-valid');
        campo.classList.remove('is-invalid');
    }else{
        campo.classList.add('is-invalid');
        campo.classList.remove('is-valid');
        return false;
    }
    
}
function validarNombre(){
    
   
    
    if(document.getElementById('name').value.match(!resultado)){
        console.log('correcto');
    }else{
        console.log('incorrecto');
    }
}
validarNombre();*/



window.onload = function(){
    let wave = document.querySelector('.wave');
    let wave1 = document.querySelector('#wave1');
    let footer = document.querySelector('#footer');
    if(window.outerWidth < 700){
        wave.style.height = '100px'
        wave1.style.height = '140px';
        footer.style.height = '120px'
    }
    console.log(wave,wave1)
}()

