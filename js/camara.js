const botonCamara = document.querySelector("[data-video-boton]");
const datosVideo = document.querySelector("[data-video]");
const datosCamara = document.querySelector("[data-camera]");

botonCamara.addEventListener("click", async () => {
  const iniciarVideo = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });

  botonCamara.style.display = "none";
  datosCamara.style.display = "block";
  video.srcObject = iniciarVideo;
});
