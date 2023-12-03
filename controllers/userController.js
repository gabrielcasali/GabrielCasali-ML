const registeredUsers = [];

// Página de inicio
exports.home = (req, res) => {
  res.render('index'); // Renderiza la vista 'index'
};

// Mostrar formulario de registro
exports.showRegisterForm = (req, res) => {
  res.render('register'); // Renderiza la vista 'register'
};

// Registrar usuario
exports.registerUser = (req, res) => {
  const { username, lastName, email, password } = req.body;

  // Comprobación básica para evitar registros duplicados (podrías mejorar esto)
  if (registeredUsers.some(user => user.username === username)) {
    return res.send('Usuario ya registrado. Inicia sesión si ya tienes una cuenta.');
  }

  // Registra al usuario como un objeto literal
  registeredUsers.push({ username, lastName, email, password });

  res.send('Registro exitoso. Ahora puedes iniciar sesión.');
};