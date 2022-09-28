let sliderContent = document.getElementById('box');

// dovrebbe contenere le immagini dentro un array
let image = ['a', 'b', 'c', 'd', 'e'];

let i = image.length;

// imposto la funzione per l'immagine successiva
function nextImage() {
    if (i<image.length) {
        i = i+1;
    } else {
        i = 1;
    }
    sliderContent.innerHTML = "<img src=" +image[i-1]+ ".jpeg>";
}

function preImage() {
    if (i<image.length+1 && i>1) {
        i = i-1;
    } else {
        i = image.length;
    }
    sliderContent.innerHTML = "<img src=" +image[i-1]+ ".jpeg>";

}