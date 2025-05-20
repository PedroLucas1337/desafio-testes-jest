function notificarUsuario(usuario, enviarEmail) {
    if (!usuario) throw new Error("Usuário inválido");
    return enviarEmail(usuario);
  }
  
  module.exports = notificarUsuario;
