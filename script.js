document.addEventListener('DOMContentLoaded', function() {
    const senhaInput = document.getElementById('senha');
    const confirmarSenhaInput = document.getElementById('confirmarSenha');
    const senhaToggle = document.getElementById('toggleSenha');
    const confirmarSenhaToggle = document.getElementById('toggleConfirmarSenha');
    const atualizarButton = document.getElementById('atualizar');
    const feedback = document.getElementById('feedback');
    
    // Alterna visibilidade da senha
    senhaToggle.addEventListener('click', function() {
        senhaInput.type = senhaInput.type === 'password' ? 'text' : 'password';
    });

    confirmarSenhaToggle.addEventListener('click', function() {
        confirmarSenhaInput.type = confirmarSenhaInput.type === 'password' ? 'text' : 'password';
    });

    // Verifica se as senhas estão iguais e com o tamanho correto
    function validaSenhas() {
        const senha = senhaInput.value;
        const confirmarSenha = confirmarSenhaInput.value;

        if (senha.length <= 8 && confirmarSenha.length <= 8) {
            if (senha === confirmarSenha) {
                atualizarButton.disabled = false;
                feedback.style.display = 'none'; // Oculta mensagem se as senhas coincidirem
            } else {
                atualizarButton.disabled = true;
                exibeFeedback('Senhas não coincidem', 'erro');
            }
        } else {
            atualizarButton.disabled = true;
            exibeFeedback('As senhas devem ter no máximo 8 caracteres', 'erro');
        }
    }

    // Exibe feedback de acordo com o sucesso ou erro
    function exibeFeedback(mensagem, tipo) {
        feedback.textContent = mensagem;
        feedback.className = 'feedback ' + (tipo === 'erro' ? 'error' : '');
        feedback.style.display = 'block';
    }

    // Valida as senhas sempre que o valor mudar
    senhaInput.addEventListener('input', validaSenhas);
    confirmarSenhaInput.addEventListener('input', validaSenhas);

    // Exibe feedback ao clicar em atualizar
    atualizarButton.addEventListener('click', function() {
        exibeFeedback('Senha alterada com sucesso', 'sucesso');
    });
});
