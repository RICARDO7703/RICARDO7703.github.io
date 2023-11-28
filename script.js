document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const estudiante = {
        nombre: document.getElementById('nombre').value,
        usuario: document.getElementById('usuario').value,
        contrasena: document.getElementById('contrasena').value,
        seccion: document.getElementById('seccion').value
    };

    const datosRegistro = document.createElement('div');
    datosRegistro.innerHTML = `
        <h2>Datos del Registro:</h2>
        <p>Estudiante: ${estudiante.nombre}</p>
        <p>Usuario: ${estudiante.usuario}</p>
        <p>Sección: ${estudiante.seccion}</p>
    `;
    document.body.appendChild(datosRegistro);

    document.getElementById('preguntasForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const respuestas = {
            condicional: document.querySelector('input[name="condicional"]:checked')?.value || 'No respondida',
            bucles: Array.from(document.querySelectorAll('input[name="bucles"]:checked')).map(input => input.value),
            vectores: document.querySelector('input[name="vectores"]:checked')?.value || 'No respondida',
            matrices: Array.from(document.querySelectorAll('input[name="matrices"]:checked')).map(input => input.value),
            programacion: document.querySelector('input[name="programacion"]:checked')?.value || 'No respondida'
        };

        const resultadosContainer = document.createElement('div');
        resultadosContainer.innerHTML = `
            <h2>Respuestas:</h2>
            <p>Condicionales: ${respuestas.condicional}</p>
            <p>Bucles: ${respuestas.bucles.join(', ')}</p>
            <p>Vectores: ${respuestas.vectores}</p>
            <p>Matrices: ${respuestas.matrices.join(', ')}</p>
            <p>Programación: ${respuestas.programacion}</p>
        `;
        document.body.appendChild(resultadosContainer);
    });
});
