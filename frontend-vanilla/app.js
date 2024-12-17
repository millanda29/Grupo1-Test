const API_URL = "http://3.83.51.155:80/api/ciudades";
const cityForm = document.getElementById("city-form");
const cityTableBody = document.getElementById("city-table-body");

// Cargar todas las ciudades al iniciar
async function loadCities() {
    const response = await fetch(API_URL);
    const cities = await response.json();

    cityTableBody.innerHTML = ""; // Limpiar tabla
    cities.forEach(city => {
        const row = `
            <tr>
                <td>${city.id}</td>
                <td>${city.nombre}</td>
                <td>${city.pais}</td>
                <td>${city.poblacion}</td>
                <td><img src="${city.url_imagen}" alt="${city.nombre}" width="100"></td>
                <td>
                    <button onclick="editCity(${city.id})">Editar</button>
                    <button class="delete-btn" onclick="deleteCity(${city.id})">Eliminar</button>
                </td>
            </tr>
        `;
        cityTableBody.innerHTML += row;
    });
}

// Crear o actualizar ciudad
cityForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const id = document.getElementById("city-id").value;
    const nombre = document.getElementById("nombre").value;
    const pais = document.getElementById("pais").value;
    const poblacion = document.getElementById("poblacion").value;
    const url_imagen = document.getElementById("url_imagen").value;

    const cityData = { nombre, pais, poblacion, url_imagen };

    if (id) {
        // Actualizar ciudad
        await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cityData),
        });
    } else {
        // Crear ciudad
        await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cityData),
        });
    }

    cityForm.reset();
    loadCities();
});

// Cargar ciudad para editar
async function editCity(id) {
    const response = await fetch(`${API_URL}/${id}`);
    const city = await response.json();

    document.getElementById("city-id").value = city.id;
    document.getElementById("nombre").value = city.nombre;
    document.getElementById("pais").value = city.pais;
    document.getElementById("poblacion").value = city.poblacion;
    document.getElementById("url_imagen").value = city.url_imagen;
}

// Eliminar ciudad
async function deleteCity(id) {
    if (confirm("¿Estás seguro de eliminar esta ciudad?")) {
        await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        });
        loadCities();
    }
}

// Inicializar la tabla
loadCities();
