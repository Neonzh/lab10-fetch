async function mostrarPosts() {
  const lista = document.querySelector("#posts");
  try {
    // 1. Petición a la URL de publicaciones del usuario 1
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=1"
    );

    // Verificar si la respuesta fue exitosa
    if (!res.ok) throw new Error("No se pudo cargar la información");

    // 2. Convertir respuesta a JSON
    const posts = await res.json();

    // 3. Mostrar los títulos en la lista usando map, join e innerHTML
  } catch (error) {
    // 4. Mostrar mensaje de error si algo falla
  }
}

mostrarPosts();
