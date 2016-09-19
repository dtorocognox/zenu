/**
 * Array con las imagenes que se iran mostrando en la web
 */
var imagenes=new Array(
    'image/practicarnes.png',
    'image/salchichon.jpg',
    'image/huevo.jpg'
);

var cuadros = new Array(
    'image/iconoc16x16px/c2.png',
    'image/iconoc16x16px/c1.png'
)

var caja1, caja2, caja3;


/**
 * Funcion para cambiar la imagen
 */
function rotarImagenes()
{
    // obtenemos un numero aleatorio entre 0 y la cantidad de imagenes que hay
    var index=Math.floor((Math.random()*imagenes.length));

    if(index == 0) {
        caja1 = 0;
        caja2 = 1;
        caja3 = 1;
    }else if(index == 1){
        caja1 = 1;
        caja2 = 0;
        caja3 = 1;
    }else{
        caja1 = 1;
        caja2 = 1;
        caja3 = 0;
    }

    // cambiamos la imagen
    document.getElementById("imagen").src=imagenes[index];
    document.getElementById("cuadros1").src=cuadros[caja1];
    document.getElementById("cuadros2").src=cuadros[caja2];
    document.getElementById("cuadros3").src=cuadros[caja3];
}

/**
 * Función que se ejecuta una vez cargada la página
 */
onload=function()
    {
        // Cargamos una imagen aleatoria
        rotarImagenes();

        // Indicamos que cada 5 segundos cambie la imagen
        setInterval(rotarImagenes,3000);
    }
