function addItems() {
    var cantidadMaterias = document.getElementById("cantidad_materias").value;
    for (let index = 0; index < cantidadMaterias; index++) {
        var contador = index + 1;
        var input = document.createElement("input");
        var label = document.createElement("label");
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        input.id = "valor_materias" + contador;
        input.name = "valor_materias";
        input.required = true;
        input.autocomplete = "off";
        input.className = "form-control";
        label.id = "label_materias" + contador;
        label.innerHTML = "Valor de materia " + contador + ": ";
        var addTr = document.getElementById("nuevos_items").appendChild(tr);
        addTr.appendChild(td);
        td.appendChild(label);
        td.appendChild(input);
    }
}

function calcularTotal() {
    var nombreEstudiante = document.getElementById("nombre_estudiante").value;
    const valoresMaterias = document.getElementsByName("valor_materias");
    var totalMaterias = 0;
    for (let index = 0; index < valoresMaterias.length; index++) {
        totalMaterias = totalMaterias + parseInt(valoresMaterias[index].value);
    }
    var papeleria = 20000;
    var carne = 8000;
    var totalDescuento = (totalMaterias * 0.2).toFixed(2);
    var total = (papeleria + carne + totalMaterias - totalDescuento).toFixed(2);
    alert("Estudiante: " + nombreEstudiante +
        "\nCostos de Papelería: $" + papeleria +
        "\nCostos de Carné: $" + carne +
        "\nCosto Materias: $" + totalMaterias +
        "\nDescuento 20%: $" + totalDescuento +
        "\nTotal Matricula: $" + total);
}

function ordenarValores() {
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);
    var d = parseFloat(document.getElementById("d").value);
    if (a.length == '' || b.length == '' || c.length == '' || d.length == '') {
        alert("No debe tener campos VACÍOS");
    } else {
        if (a == b || a == c || a == d || b == c || b == d || c == d) {
            alert("No debe tener campos IGUALES");
        } else {
            var mayor = 0;
            var menor = 0;
            while (mayor == 0 && menor == 0) {
                // ENCONTRAR EL MAYOR
                if (a > b && a > c && a > d) {
                    alert("El valor MAYOR es: " + a);
                    mayor = 1;
                } else if (b > a && b > c && b > d) {
                    alert("El valor MAYOR es: " + b);
                    mayor = 1;
                } else if (c > a && c > b && c > d) {
                    alert("El valor MAYOR es: " + c);
                    mayor = 1;
                } else if (d > a && d > b && d > c) {
                    alert("El valor MAYOR es: " + d);
                    mayor = 1;
                }
                // ENCONTRAR EL MENOR
                if (a < b && a < c && a < d) {
                    alert("El valor MENOR es: " + a);
                    menor = 1;
                } else if (b < a && b < c && b < d) {
                    alert("El valor MENOR es: " + b);
                    menor = 1;
                } else if (c < a && c < b && c < d) {
                    alert("El valor MENOR es: " + c);
                    menor = 1;
                } else if (d < a && d < b && d < c) {
                    alert("El valor MENOR es: " + d);
                    menor = 1;
                }
            }
        }
    }

}