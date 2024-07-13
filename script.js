document.getElementById('peticao-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const identidade = document.getElementById('identidade').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const cidade = document.getElementById('cidade').value;

    const template = `
    ${nome}, portador da Cédula de Identidade/RG sob o nº ${identidade}, inscrito no CPF/MF sob o nº ${cpf}, endereço eletrônico: ${email}, residente e domiciliado na Rua ${rua}, nº ${numero}, na Cidade de ${cidade}, vem respeitosamente perante Vossa Excelência, por seu bastante procurador e advogado ao final assinado (instrumento procuratório em anexo), devidamente inscrito na OAB/XX sob nº ______, com escritório profissional na Rua ______, nº ______, onde recebe intimações e notificações, com fundamento no artigo 186 e 932, do Código Civil c/c o artigo 1.049, do Código de Processo Civil.
    `;

    document.getElementById('resultado').textContent = template;
});
