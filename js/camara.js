const botonCamara = document.querySelector("[data-video-boton]");
const datosVideo = document.querySelector("[data-video]");
const datosCamara = document.querySelector("[data-camera]");

const botonFoto = document.querySelector("[data-tomar-foto]");
const mensaje = document.querySelector("[data-mensaje]");
const canvas = document.querySelector("[data-video-canvas]");

const botonEnviar = document.querySelector("[data-enviar]");
let imgURL = "";

botonCamara.addEventListener("click", async () => {
  const iniciarVideo = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });

  botonCamara.style.display = "none";
  datosCamara.style.display = "block";
  datosVideo.srcObject = iniciarVideo;
});

botonFoto.addEventListener("click", async () => {
  canvas
    .getContext("2d")
    .drawImage(datosVideo, 0, 0, canvas.width, canvas.height);
  imgURL = canvas.toDataURL("image/jpeg");
  datosCamara.style.display = "none";
  mensaje.style.display = "block";
});

botonEnviar.addEventListener("click", () => {
  const recibirDatos = localStorage.getItem("registro");
  const convertirDatos = JSON.parse(recibirDatos);

  convertirDatos.img_url = imgURL;
  localStorage.setItem("registro", JSON.stringify(convertirDatos));

  window.location.href = "./abrir-cuenta-form-3.html";
});
