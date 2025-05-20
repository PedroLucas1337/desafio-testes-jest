const notificarUsuario = require('./notificacao.js');

test ('chama o email do usuario', () => {
    const mockEmail = jest.fn((nome) => `email enviado para ${nome}`);

    const resultado = notificarUsuario('hugo', mockEmail);

    expect(mockEmail).toHaveBeenCalled();
    expect(mockEmail).toHaveBeenCalledWith('hugo');
    expect(resultado).toBe('email enviado para hugo')
});