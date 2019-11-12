// cambio de tema oscuro / claro
// al hacer click en el boton de cambio de fondo se activa la variable darkThemeEnabled de manera local y persistente
// seguido a esto se combrueba si la variale está activada y se añade la clase dark

document.getElementById('change-theme-btn').addEventListener('click', function () {
    let darkThemeEnabled = document.body.classList.toggle('dark');
    localStorage.setItem('dark-theme-enabled', darkThemeEnabled);
    if (document.body.classList.contains('dark')){
        $(".card-body").toggleClass('bg-secondary');
    }
    else {
        $(".card-body").removeClass('bg-secondary');
    }
});

// Combrobando y añadiendo clase dark
if (JSON.parse(localStorage.getItem('dark-theme-enabled'))) {
    document.body.classList.add('dark');
}

// Al hacer click en el boton "color-azul-btn" activa la función anterior "activarTheme" con el color azul
document.getElementById('color-azul-btn').addEventListener('click', function () {
    activarTheme("azul");
});

// El proceso anterior con el color rojo
document.getElementById('color-rojo-btn').addEventListener('click', function () {
    activarTheme("rojo");
});

// El mismo proceso con el color violeta
document.getElementById('color-violeta-btn').addEventListener('click', function () {
    activarTheme("violeta");
});