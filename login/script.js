console.log('login')

const emailInput = document.getElementById('email').value;
const senhaInput = document.getElementById('senha').value;

console.log(emailInput);
console.log(senhaInput);

function login() {
    console.log('clicou no botão de login', emailInput, senhaInput);
}