Swal.fire({
  title: "Bienvenido al Formulario",
  text: "Por favor, rellenar los campos",
  width: '50%',
});

const formConsulta = document.getElementById('form');

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

formConsulta.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {

  var nombreInput = document.getElementById("nombre").value;
  var consultaInput = document.getElementById("consulta").value;

  event.preventDefault();

  nombres.push(nombreInput);
  consulta.push(consultaInput);

  const form = new FormData(this);

  const response = await fetch(this.action, {
    method: this.method,
    body: form, 
    headers: {
      'Accept': 'application/json'
    }
  })
  console.log("aca3");
  console.log(response);
  if (response.ok){
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

    limpiarFormulario(formConsulta);
    llenarTabla(nombres);
  }
}
