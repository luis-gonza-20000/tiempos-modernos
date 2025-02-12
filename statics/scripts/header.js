fetch('../pages/header.html')
            .then(response => response.text())  // Convierte el archivo HTML a texto
            .then(data => {
                document.getElementById('header').innerHTML = data;  // Inserta el contenido en el contenedor
            })
            .catch(error => console.error('Error al cargar el header:', error));