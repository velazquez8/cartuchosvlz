/*
let entrada= prompt("Nico dice");
let salida= entrada + ""; 
alert("dice " + salida);


let usuario=prompt ("Cree su nombre de usuario: ")


if(usuario.length>5)
{
    alert("Bienvenido "+ usuario)
}
else
{
    alert("Debe ingresar mas caracteres para el usuario")
    usuario=prompt("Cree su nombre de usuario")
}
*/
let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");

function cargar(item){
    quitarBordes();
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid black";

    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

    modeloSeleccionado.innerHTML =  item.getElementsByTagName("p")[0].innerHTML;

    descripSeleccionada.innerHTML = "Smartwatch ";

    precioSeleccionado.innerHTML =  item.getElementsByTagName("span")[0].innerHTML;

}
function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";
    quitarBordes();
}
function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for(i=0;i <items.length; i++){
        items[i].style.border = "none";
    }
}

function resumen() {
   
    const modelo = document.getElementById("modelo").textContent;
    const precio = document.getElementById("precio").textContent;
    var selectCantidad = document.getElementById("cantidad");
    var selectCuotas=document.getElementById("cuotas")

// Obtener el valor seleccionado del select
    var cantidadSeleccionada = selectCantidad.value;
    var cuotas=selectCuotas.value
  
 
    let total = precio * cantidadSeleccionada
      let precioCuotas= total/cuotas
   
    Swal.fire({
        title: "Detalles de la compra",
        html: "Modelo: " + modelo + "<br/>" +
              "Precio: $" + precio + "<br/>" +
              "Cantidad: " + cantidadSeleccionada + "<br/>" +
              "Total: $" + total + "<br/>"+
              "En "+ cuotas+ " cuotas de " + precioCuotas ,
              
              showCancelButton: true,
              confirmButtonText: 'Confirmar compra',
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.href = 'envios.html'; 
              }
      });
    }
function confirmar(){
    var nombre = document.getElementById("inputnombre").value;
    var direccion = document.getElementById("inputdirec").value;
    document.registro.nombreobtenido.value = nombre;
    var selectEnvio=document.getElementById("inputRetiro").value
    if(nombre=="")
    {
        Swal.fire({
            title:("Completar el nombre"),
            icon:"error"
        })
    }
        else if(direccion=="")
        {
            Swal.fire({
                title: ("Completa tu direccion"),
                icon:"error"
            })
        }
        else if(selectEnvio=="")
        {
            Swal.fire({
                title: ("Completa como retirar el pedido"),
                icon:"error"
            })
        }
            else if(selectEnvio=="Envio a Domicilio"){
                Swal.fire({
                  title: ('Gracias por la compra ' + nombre),
                 icon: 'success',
                 html:"Se enviara a la direccion: " + direccion,
                 confirmButtonText: "Finalizar compra",
                    showCancelButton: true
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.href = 'index.html'; 
                }
        });
         }
        else if(selectEnvio=="Retiro en local")
        {
             Swal.fire({
                title: ('Gracias por la compra ' + nombre),
                icon: 'success',
                html:"Lo podras retirar en la sucursal mas cercana en 48 horas ",
                    showCancelButton: true,
                    confirmButtonText: "Finalizar compra"
                
                }).then((result) => {
                if (result.isConfirmed) {
                  window.location.href = 'index.html'; 
                }
        });
        }
   
}
