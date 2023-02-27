function enviar() {
    var variable_nombre = document.getElementById('fname').value;
    var variable_apellido = document.getElementById('lname').value;

    //obtener todos los valores de los inputs y guardarlos en una variable

    alert("Gracias por contactarte: " + variable_nombre + " " + variable_apellido);
}