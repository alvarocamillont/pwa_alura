let logado = Json.parse(localStorage.getItem('logado'));

LoginUsuario_render({
  logado,
  usuario: localStorage.getItem('nomeUsuario'),
  onLogin: (nomeUsuario) => {
    logado = true;
    localStorage.setItem('logado', logado);
    localStorage.setItem('nomeUsuario', nomeUsuario);
  },
  onLogout: () => {
    logado = false;
    localStorage.setItem('logado', logado);
    localStorage.removeItem('nomeUsuario');
  }
});
