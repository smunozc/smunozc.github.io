let imagenes = ['../../img/imagen1.jpg', '../../img/imagen2.jpg', '../../img/imagen3.jpg', '../../img/imagen4.jpg'];
let contador = 0;

function carrousel(direccion) {
    let direccion1 = direccion;

    if (direccion1 === 'atras') {
        if (contador === 0) {
            document.getElementById('imagen').src = imagenes[imagenes.length - 1];
            contador = imagenes.length - 1;
        } else if (contador > 0 && contador <= imagenes.length - 1) {
            contador--;
            document.getElementById('imagen').src = imagenes[contador];
        }
    }

    if (direccion1 === 'siguiente') {
        if (contador >= 0 && contador < imagenes.length-1) {
            contador++;
            document.getElementById('imagen').src = imagenes[contador];
        } else if(contador === imagenes.length -1){
            contador = 0;
            document.getElementById('imagen').src = imagenes[contador];
        }
    }

}