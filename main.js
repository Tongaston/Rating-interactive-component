let numberContainer = document.querySelector(".contenedor-botones")
let submitBtn = document.querySelector('.submit')
let rateNumber = document.querySelector('.voto2')
let primeraSeccion = document.querySelector('.primera-seccion')
let segundaSeccion = document.querySelector('.segunda-seccion')

numberContainer.addEventListener('click', (e) => {
    let numberSelected = e.target.innerText;
    rateNumber.innerText = numberSelected;
    if (numberSelected > 0 || numberSelected <= 5) {
        submitBtn.addEventListener('click', () => {
            primeraSeccion.style.display = 'none';
            segundaSeccion.style.display = 'flex';
        });
    }

})





