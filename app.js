const content = document.getElementById("content");
const buttons = document.querySelectorAll(".nav button");

const sections = {
    muro: `
        <section class="muro">
            <div class="post">
                <textarea placeholder="Escribe algo..."></textarea>
                <button>Compartir</button>
            </div>
            <div class="post">
                <h4>Amigo 1</h4>
                <p>¡Hola, este es mi primer post en el muro! 😎</p>
            </div>
            <div class="post">
                <h4>Amigo 2</h4>
                <p>Qué buen día para programar una SPA con JS 💻</p>
            </div>
        </section>
    `,
    info: `
        <section class="info">
            <h2>Información</h2>
            <p>Email:<a href="mailto:ntaborda.2007@hotmail.com">ntaborda.2007@hotmail.com</a></p>
            <p><b>Teléfono:</b> +57 314 500 6408</p>
            <p><b>Ubicación:</b> Jamundí, Colombia</p>
            <p><b>Intereses:</b> Programación, música, videojuegos</p>
        </section>
    `,
    photos: `
        <section class="photos">
            <!-- Input para subir más fotos -->
            <input type="file" id="uploadPhotos" multiple>
            
            <!-- Contenedor de fotos iniciales -->
            <div id="photoContainer">
                <img src="./assets/file.jpg" class="photo-thumb">
                <img src="./assets/NicolasT.png" class="photo-thumb">
                <img src="./assets/backiee-266376.jpg" class="photo-thumb">
            </div>
        </section>
    `,
    boxes: `
        <section class="boxes">
            <h2>Boxes</h2>
            <p>Aquí puedes agregar contenido adicional, como widgets o enlaces.</p>
        </section>
    `
};

function loadSection(section) {
    content.innerHTML = sections[section];

    // Si se carga la sección de fotos, inicializar subida
    if (section === "photos") {
        initPhotoUpload();
    }
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        loadSection(btn.dataset.section);
    });
});

// Inicializa con muro
loadSection("muro");

// Función para manejar la subida de fotos
function initPhotoUpload() {
    const uploadPhotos = document.getElementById("uploadPhotos");
    const photoContainer = document.getElementById("photoContainer");

    if (!uploadPhotos) return;

    uploadPhotos.addEventListener("change", (e) => {
        const files = Array.from(e.target.files);
        files.forEach(file => {
            const img = document.createElement("img");
            img.src = URL.createObjectURL(file);
            img.classList.add("photo-thumb");
            photoContainer.appendChild(img);
        });
    });
}
