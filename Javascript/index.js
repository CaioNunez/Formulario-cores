const passwordI = document.getElementById("input-password");
const passwordStatus = document.getElementById('password-status')
const validacao = document.getElementById('password-color')




passwordI.addEventListener("input", (event) => {
    const caracteresFaltantes = event.target.value.length;
    if (caracteresFaltantes > 0) {
        passwordStatus.innerText = "Pequeno demais";
        passwordStatus.style.color = 'red';
        validacao.style.background = 'red';
    }
    if (caracteresFaltantes > 3) {
        passwordStatus.innerText = "Pequeno";
        passwordStatus.style.color = 'orange';
        validacao.style.background = 'orange';
    }
    if (caracteresFaltantes > 5) {
        passwordStatus.innerText = "ok";
        passwordStatus.style.color = 'black';
        validacao.style.background = 'black';
    }
    if (caracteresFaltantes > 7) {
        passwordStatus.innerText = "ok";
        passwordStatus.style.color = 'white';
        validacao.style.background = 'white';
    }
    if (caracteresFaltantes > 9) {
        passwordStatus.innerText = "Boa Demais";
        passwordStatus.style.color = 'green';
        validacao.style.background = 'green';
    }
})


