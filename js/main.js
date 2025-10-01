
function backarriba(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });       
};

setTimeout(function() {
    var videoContainer = document.getElementById('videoContainer');
    videoContainer.classList.add('hidden');
}, 46000); // 



var btn = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    contador=0;


    function inicio() {
        backarriba();
        conta=0;
       
    }

    function arriba() {
        backarriba();
        conta=0;
       
    }

    function piscina() {
        document.getElementById("side").style.display = "none";
        document.getElementById("piscina").scrollIntoView();
        conta=0;
     
         
     }

     function ubicacion() {
        document.getElementById("side").style.display = "none";
        document.getElementById("ubicacion").scrollIntoView();
        conta=0;
     
         
     }


function contactanos() {
   document.getElementById("side").style.display = "none";
   document.getElementById("redes").scrollIntoView();
   conta=0;

    
}

function eventos() {
    document.getElementById("side").style.display = "none";
    document.getElementById("eventos").scrollIntoView();
    conta=0;
 
     
 }

function reserva() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("screen4").scrollIntoView();
    conta=0;
  
        
}


function reservasalir() {
    document.getElementById("screen4").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("screen4").scrollIntoView();
    conta=0;
  
        
}


//   boton atras


       //    menu laterl 

       var btns = document.getElementById("inicio"),
       informacion = document.getElementById("infomacion"),
       conta=0;
   
       function sidebar()  {
   
           if (conta==0) {
               document.getElementById("side").style.display = "block";
               conta=1;
           }
           else{
               document.getElementById("side").style.display = "none";
               conta=0;
           }
           }
   
           function cerrarside() {
               document.getElementById("side").style.display = "none";
               conta=0;
               
           }
   
           // llevar cerrar side automatico
   
           document.querySelector('.tarjeta').addEventListener('click',()=>{
               document.getElementById("side").style.display = "none";
               conta=0;
               });

   //    menu laterl 

    var btns = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    conta=0;

    function sidebar()  {

        if (conta==0) {
            document.getElementById("side").style.display = "block";
            conta=1;
        }
        else{
            document.getElementById("side").style.display = "none";
            conta=0;
        }
        }

        function cerrarside() {
            document.getElementById("side").style.display = "none";
            conta=0;
            
        }

        
//formulario>
        document.querySelector("#submit").addEventListener("click", e => {
            e.preventDefault();
          
            //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
            let telefono = "573998968077";
          
            let cliente = document.querySelector("#cliente").value;
            let edad = document.querySelector("#edad").value;
            let fecha = document.querySelector("#fecha").value;
            let hora = document.querySelector("#hora").value;
            let modulos = document.querySelector("#modulos").value;
            let resp = document.querySelector("#respuesta");
          
            resp.classList.remove("fail");
            resp.classList.remove("send");
          
            let url = `https://api.whatsapp.com/send?phone=593992835380&text=
                  *Hostería los Cedros*%0A
                  *Datos de la Reserva*%0A
                  *Nombre*%0A
                  ${cliente}%0A
                  *Cantidad*%0A
                  ${edad}%0A
                  *Fecha de Reserva*%0A
                  ${fecha}%0A
                  *Hora de Entrada*%0A
                  ${hora}%0A
                  *Alojamiento*%0A
                  ${modulos}%0A`;
          
            if (cliente === "" || edad === "" || fecha === "" || hora === "") {
              resp.classList.add("fail");
              resp.innerHTML = `Espera, ${cliente} faltan algunos Datos `;
              return false;
            }
            resp.classList.remove("fail");
            resp.classList.add("send");
            resp.innerHTML = `Tu Reserva Fue Enviada, ${cliente}`;
          
            window.open(url);
          });
          
          //ALERTAS>
         
          
          function msj2() {
            Swal.fire({
            showCloseButton: true,
            icon: 'success',
            title: 'Tarjeta Digital',
            text: 'Link Copiado a Portapapeles',
            footer: 'CliconlineStudios'
            });
          
           
          };
    
    
        
// share tarjeta

const shareData2 = {
    title: 'Hostería los Cedros',
    text: 'Alojamiento en Mindo',
    url: 'https://hosterialoscedrosdemindo.blogspot.com',
    }
    
    
    // Share must be triggered by "user activation"
   
    var urltarjeta = 'https://hosterialoscedrosdemindo.blogspot.com'
  
    function sharetarjeta(){
    if (navigator.share) {
        navigator
       .share(shareData2)
       .then(() => console.log('correcto'))
       .catch(error => console.log ('error sharing',error) );
    }else {
        sharetj();
    }
    } 

    document.addEventListener("DOMContentLoaded", function() {
        const tituloh = document.querySelector('.tituloh');
        tituloh.classList.add('start-animation');
    });


const scrollButton = document.getElementById("back");

window.onscroll = function() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight / 2) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};

