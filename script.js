// Función para generar la contraseña
function generatePassword() {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    
    // Generar 11 caracteres aleatorios
    for (let i = 0; i < 11; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    
    // Añadir el símbolo '#' al final de la contraseña
    password += '#';

    // Mostrar la contraseña en la interfaz
    document.getElementById('password').textContent = password;
}

// Función para borrar el contenido del campo de contraseña
function clearPassword() {
    document.getElementById('password').textContent = 'Genera una contraseña';
}

// Función para copiar la contraseña al portapapeles
function copyPassword() {
    const passwordText = document.getElementById('password').textContent;

    if (passwordText !== 'Genera una contraseña') {
        navigator.clipboard.writeText(passwordText).then(() => {
            alert('Contraseña copiada al portapapeles!');
        });
    } else {
        alert('No hay una contraseña para copiar.');
    }
}

// Asignar las funciones a los botones
document.getElementById('generateBtn').addEventListener('click', generatePassword);
document.getElementById('clearBtn').addEventListener('click', clearPassword);
document.getElementById('copyBtn').addEventListener('click', copyPassword);
