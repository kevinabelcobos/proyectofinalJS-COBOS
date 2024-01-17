Swal.fire({
  title: "Bienvenido al Formulario",
  text: "Por favor, rellenar los campos",
  width: '50%',
});

const formPaciente = document.getElementById('form');

var nombreInput = document.getElementById("nombre").value;
var consultaInput = document.getElementById("consulta").value;

const nombres = [];
const consulta = [];

function limpiarFormulario(formulario) {

  formulario.reset();
};

function llenarTabla(array1) {
  const bodyTabla = document.getElementById("consultasRealizadas");

  bodyTabla.innerHTML = " ";

  array1.forEach((nom, index) => {
    bodyTabla.innerHTML =
      bodyTabla.innerHTML +
      (
        `<tr>
          <th>${index + 1}</th>
          <td>${nombres[index]}</td>
          <td>${consulta[index]}</td>
        </tr>`
      );
  });
}

function enviarConsulta(e) {
  var nombreInput = document.getElementById("nombre").value;
  var consultaInput = document.getElementById("consulta").value;
  e.preventDefault();
  console.log("aca");
  nombres.push(nombreInput);
  consulta.push(consultaInput);

  Swal.fire({
    title: '¿Desea enviar la consulta?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonText: 'Aceptar',
    confirmButtonColor: '#0d6efd',
}).then((result) => {


    if (result.isConfirmed) {
    
        Toastify({
            text: "Consulta enviada con exito",
            duration: 3000,
            close: true,
            gravity: "bottom",
            position: "right", 
            stopOnFocus: true, 
            style: {
              background: "green",
            },
          }).showToast();

          limpiarFormulario(formPaciente);
          llenarTabla(nombres);
    }

})

}







formPaciente.addEventListener("submit", enviarConsulta);

