console.log("El script se ha cargado correctamente"); // Esto saldrá en la consola (F12)

let slideIndex = 1;
showSlides(slideIndex);

// Función para las flechas
function moveHeroSlide(n) {
    console.log("Flecha presionada: " + n); // Para probar si el click funciona
    showSlides(slideIndex += n);
}

// Función para los puntos
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("hero-slide");
    let dots = document.getElementsByClassName("dot");

    // Si no hay slides, no hacemos nada (evita errores)
    if (slides.length === 0) return;

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    // 1. Ocultar todos
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Forzamos el ocultado con JS también
        slides[i].classList.remove("active");
    }

    // 2. Desactivar puntos
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // 3. Mostrar el actual
    slides[slideIndex-1].style.display = "flex"; // Forzamos mostrar (flex para que mantenga el diseño)
    slides[slideIndex-1].classList.add("active");
    
    if (dots.length > 0) {
        dots[slideIndex-1].className += " active";
    }
}