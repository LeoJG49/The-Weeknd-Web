// URLs normales de YouTube
const videos = [
  "https://www.youtube.com/watch?v=q1ULJ92aldE&list=PLHCvaq-UcL_Up7l72-rnwbGt_j63geFqd",
  "https://www.youtube.com/watch?v=__CRWE-L45k&list=PLHCvaq-UcL_Up7l72-rnwbGt_j63geFqd&index=2",
  "https://www.youtube.com/watch?v=s8XIgR5OGJc&list=PLHCvaq-UcL_Up7l72-rnwbGt_j63geFqd&index=10"
];

// Función para convertir "watch?v=" en "embed/"
function getEmbedUrl(url) {
  const videoId = url.split("v=")[1].split("&")[0]; // obtiene el ID del video
  return `https://www.youtube.com/embed/${videoId}`;
}

// Generar los iframes
function createIframe(url) {
  return `
    <iframe 
      class="video-anim"
      width="560" 
      height="315" 
      src="${getEmbedUrl(url)}" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen>
    </iframe>
  `;
}

// Insertar todo al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("video-section");
  videos.forEach(video => {
    container.innerHTML += createIframe(video);
  });

  container.querySelectorAll("iframe").forEach(iframe => {
    iframe.style.width = "50vw";
    iframe.style.height = "28vw";
    iframe.style.maxWidth = "900px";
    iframe.style.borderRadius = "10px";
    iframe.style.boxShadow = "0 4px 20px rgba(255, 255, 255, 0.2)";
  });

  // Intersection Observer para animar los iframes
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.video-anim').forEach(iframe => {
    observer.observe(iframe);
  });
});


//Cambiando estilo de la sección de vídeos
const videoSection = document.getElementById("video-section");
videoSection.style.display = "flex";
videoSection.style.flexDirection = "column";
videoSection.style.justifyContent = "center";
videoSection.style.alignItems = "center";
videoSection.style.gap = "30px";
videoSection.style.marginTop = "50px"
videoSection.style.marginBottom = "50px";
videoSection.style.width = "90vw";
//Hacer que el vídeo sea más grande
videoSection.querySelectorAll("iframe").forEach(iframe => {
  iframe.style.width = "90%";
  iframe.style.height = "auto";
});

//Centrar el background a la web
videoSection.style.marginLeft = "auto";
videoSection.style.marginRight = "auto";
videoSection.style.padding = "20px";

