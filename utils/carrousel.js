let imagenes = ['../../img/imagen1.jpg','../../img/imagen2.jpg', '../../img/imagen3.jpg'];
let contador = 0;

function carrousel(direccion){
    let direccion1 = direccion;

    if(direccion1=='atras'){
        if(contador==0){
            document.getElementById('imagen1').src= imagenes[imagenes.length-1];
            contador++;
        }else if (contador<imagenes.length-1) {
            document.getElementById('imagen1').src= imagenes[imagenes.length-1-contador];
            contador++;

        }else {
            document.getElementById('imagen1').src= imagenes[0];
            contador=0;
        }
    }

    if(direccion1=='siguiente'){
        if(contador==0){
            document.getElementById('imagen1').src= imagenes[0];
            contador++;
        }else if (contador<imagenes.length-1) {
            document.getElementById('imagen1').src= imagenes[contador];
            contador++;

        }else {
            document.getElementById('imagen1').src= imagenes[imagenes.length-1];
            contador=0;
        }
    }

}
