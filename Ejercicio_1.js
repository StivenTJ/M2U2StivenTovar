function enviarForm() {
    var nombreEstudiante = document.getElementById("nombre_estudiante").value;
    var cantidadMaterias = document.getElementById("cantidad_materias").value;
    for (let index = 0; index < cantidadMaterias; index++) {
        var contador = index + 1;
        var valorMaterias = [prompt("Ingrese el valor de la materia" + contador)];
    }
    document.getElementById("demo").innerHTML = valorMaterias;
}