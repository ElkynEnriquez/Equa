// Para el cambio de color principal variantes azul, rojo y violeta

// Siempre que se cargue este script se consultará la variable local "color-theme-enabled" para establecer el último tema establecido
//comprobarTheme();
function comprobarTheme() {
    // la primera vez se limpia las clases y se establece el color por defecto "PRIMARY"
    //limpiarClases();
    //actualizarcolor("primary");
    let colorThemeEnabled = localStorage.getItem('color-theme-enabled');
    if (colorThemeEnabled=="azul") {    activarTheme("azul"); }
    else if (colorThemeEnabled=="rojo") {    activarTheme("rojo"); }
    else if (colorThemeEnabled=="violeta") {    activarTheme("violeta"); }
}

// Se declara la funcion para limpiar las clases que se utilizara antes de establecer el color primario

function limpiarClases ()
{
    document.body.classList.remove('themeazul');
    document.body.classList.remove('themerojo');
    document.body.classList.remove('themevioleta');
}

// La función "activarTheme" recibe y almacena el color elegido de manera local para posteriormente comprobar y establecer cada color

function activarTheme(colorPrimario)
{
    limpiarClases();
    // Envia a la función "actualizarcolor" el color seleccionado con el nombre asignado en ThemeColors
    actualizarcolor("primarioT" + colorPrimario);
    if (colorPrimario=="azul"){
        // Añade la clase "themeazul" al body
        let azulThemeEnabled = document.body.classList.toggle('themeazul');
        // Almacena como variable "color-theme-enabled" de manera local
        localStorage.setItem('color-theme-enabled', 'azul');
        $('li.nav-item').removeClass("active");
        $('li.nav-item.azul').addClass("active");
    }
    // El mismo proceso anterior con el color rojo
    else if (colorPrimario=="rojo"){
        let rojoThemeEnabled = document.body.classList.toggle('themerojo');
        localStorage.setItem('color-theme-enabled', 'rojo');
        $('li.nav-item').removeClass("active");
        $('li.nav-item.rojo').addClass("active");
    }
    // El mismo proceso con el color violeta
    else if (colorPrimario=="violeta"){
        let violetaThemeEnabled = document.body.classList.toggle('themevioleta');
        localStorage.setItem('color-theme-enabled', 'violeta');
        $('li.nav-item').removeClass("active");
        $('li.nav-item.violeta').addClass("active");
    }
}


// La función "actualizarcolor" recibe el color con la denominación de theme-colors y reemplaza la clase bg-, btn- y alert- de cada elemento en el documento por su equivalente de acuerdo al color elegido

function actualizarcolor(colorprincipal) {
    // Guarda todos los elementos que coincidan
    var elements = document.querySelectorAll(".bg-primary, .btn-primary, .alert-primary, .table-primary, .badge-primary, .btn-outline-primary, .text-primary, .bg-primarioTazul, .btn-primarioTazul, .alert-primarioTazul, .table-primarioTazul, .badge-primarioTazul, .btn-outline-primarioTazul, .text-primarioTazul, .bg-primarioTrojo, .btn-primarioTrojo, .alert-primarioTrojo, .table-primarioTrojo, .badge-primarioTrojo, .btn-outline-primarioTrojo, .text-primarioTrojo, .bg-primarioTvioleta, .btn-primarioTvioleta, .alert-primarioTvioleta, .table-primarioTvioleta, .badge-primarioTvioleta, .btn-outline-primarioTvioleta, .text-primarioTvioleta");
    // Para cada elemento y su posile variación  se reemplaza la clase por la nueva
    elements.forEach(function(item) {
            if (item.classList.contains('bg-primarioTazul')) item.classList.replace('bg-primarioTazul','bg-'+colorprincipal);
            if (item.classList.contains('btn-primarioTazul')) item.classList.replace('btn-primarioTazul','btn-'+colorprincipal);
            if (item.classList.contains('alert-primarioTazul')) item.classList.replace('alert-primarioTazul','alert-'+colorprincipal);
            if (item.classList.contains('table-primarioTazul')) item.classList.replace('table-primarioTazul','table-'+colorprincipal);
            if (item.classList.contains('badge-primarioTazul')) item.classList.replace('badge-primarioTazul','badge-'+colorprincipal);
            if (item.classList.contains('btn-outline-primarioTazul')) item.classList.replace('btn-outline-primarioTazul','btn-outline-'+colorprincipal);
            if (item.classList.contains('text-primarioTazul')) item.classList.replace('text-primarioTazul','text-'+colorprincipal);
        
            if (item.classList.contains('bg-primarioTrojo')) item.classList.replace('bg-primarioTrojo','bg-'+colorprincipal);
            if (item.classList.contains('btn-primarioTrojo')) item.classList.replace('btn-primarioTrojo','btn-'+colorprincipal);
            if (item.classList.contains('alert-primarioTrojo')) item.classList.replace('alert-primarioTrojo','alert-'+colorprincipal);
            if (item.classList.contains('table-primarioTrojo')) item.classList.replace('table-primarioTrojo','table-'+colorprincipal);
            if (item.classList.contains('badge-primarioTrojo')) item.classList.replace('badge-primarioTrojo','badge-'+colorprincipal);
            if (item.classList.contains('btn-outline-primarioTrojo')) item.classList.replace('btn-outline-primarioTrojo','btn-outline-'+colorprincipal);
            if (item.classList.contains('text-primarioTrojo')) item.classList.replace('text-primarioTrojo','text-'+colorprincipal);
        
            if (item.classList.contains('bg-primarioTvioleta')) item.classList.replace('bg-primarioTvioleta','bg-'+colorprincipal);
            if (item.classList.contains('btn-primarioTvioleta')) item.classList.replace('btn-primarioTvioleta','btn-'+colorprincipal);
            if (item.classList.contains('alert-primarioTvioleta')) item.classList.replace('alert-primarioTvioleta','alert-'+colorprincipal);
            if (item.classList.contains('table-primarioTvioleta')) item.classList.replace('table-primarioTvioleta','table-'+colorprincipal);
            if (item.classList.contains('badge-primarioTvioleta')) item.classList.replace('badge-primarioTvioleta','badge-'+colorprincipal);
            if (item.classList.contains('btn-outline-primarioTvioleta')) item.classList.replace('btn-outline-primarioTvioleta','btn-outline-'+colorprincipal);
            if (item.classList.contains('text-primarioTvioleta')) item.classList.replace('text-primarioTvioleta','text-'+colorprincipal);
        
            if (item.classList.contains('bg-primary')) item.classList.replace('bg-primary','bg-'+colorprincipal);
            if (item.classList.contains('btn-primary')) item.classList.replace('btn-primary','btn-'+colorprincipal);
            if (item.classList.contains('alert-primary')) item.classList.replace('alert-primary','alert-'+colorprincipal);
            if (item.classList.contains('table-primary')) item.classList.replace('table-primary','table-'+colorprincipal);
            if (item.classList.contains('badge-primary')) item.classList.replace('badge-primary','badge-'+colorprincipal);
            if (item.classList.contains('btn-outline-primary')) item.classList.replace('btn-outline-primary','btn-outline-'+colorprincipal);
            if (item.classList.contains('text-primary')) item.classList.replace('text-primary','text-'+colorprincipal);
    });
}