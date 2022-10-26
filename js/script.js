// Função para alterar o botão de resultado.
let btnCrypt = document.querySelector('#btn');
let optCode = document.querySelector('.optCode');
btnCrypt.remove();
let typeCrypt = document.querySelector('#crypt');
typeCrypt.addEventListener('click', btnCryptClick);
function btnCryptClick(){
    optCode.append(btnCrypt);
    btnCrypt.value = 'Criptografar';
}
let typeDecrypt = document.querySelector('#decrypt');
typeDecrypt.addEventListener('click', btnDecryptClick);
function btnDecryptClick(){
    optCode.append(btnCrypt);
    btnCrypt.value = 'Descriptografar';
}
