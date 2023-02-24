document.addEventListener("DOMContentLoaded", function () {
  iniciarApp();
});

function iniciarApp() {
  cargarAlfabeto();
}

function galeriaImagenes(id){
    const imagen = document.createElement('PICTURE');
    imagen.innerHTML = `<source srcset="build/img/${id}.webp" type="image/webp" />
    <img
      loading="lazy"
      width="200"
      height="300"
      src="build/img/${id}.png"
      alt="Imagen galería"
    />
    `;

    // Crea el overlay con la imagen
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    
    overlay.addEventListener('click', function(){
      overlay.remove();
    })

  // Añadir al body
  const body = document.querySelector('BODY');
  body.appendChild(overlay);
} // Fin galeriaImagenes

function cargarAlfabeto() {
  const alfabeto = document.querySelector(".alfabeto");

  const letrasAlfabeto = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "Ñ",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const alerta = document.createElement("H3");

  const btn_alfabeto = document.querySelector(".btn_consulta");

  btn_alfabeto.addEventListener("click", function () {
    const consultaAnterior = document.querySelectorAll(".alfabeto P");
        
    try {
      consultaAnterior.forEach(etiqueta=>{
        etiqueta.remove();
      })
    } catch (error) {
      console.log(error);
    }

    const number = parseInt(document.querySelector(".num_consulta").value);

    if (number > 27 || number < 1) {
      alerta.textContent = "Los valores deben estar entre 1 - 27";
      alerta.classList.add("error");
      alfabeto.appendChild(alerta);
      return;
    }

    for (let i = 1; i <= number; i++) {
      const letra = document.createElement("P");
      letra.textContent = letrasAlfabeto[i - 1];
      alfabeto.appendChild(letra);
      letra.addEventListener('click', function(){
        galeriaImagenes(i);
      })
    }

    alerta.remove();
  });
}
