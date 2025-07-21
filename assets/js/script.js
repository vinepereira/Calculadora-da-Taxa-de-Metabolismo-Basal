
const activePhoto = () => {
    const homemMulher = document.querySelectorAll('.js-sexo input');
    const imgManWoman = document.querySelectorAll('.client-img img');

    if (homemMulher.length && imgManWoman.length) {
        function ativarFoto(index) {
            imgManWoman.forEach(imagem => {
                imagem.classList.remove('ativo');
            })
            imgManWoman[index].classList.add('ativo');
        }

        homemMulher.forEach((item, index) => {
            item.addEventListener('click', () => {
                ativarFoto(index);
            });
        })
    }
}
activePhoto();


const calcFormula = () => {
    const verificar = document.querySelectorAll('.js-sexo input');
    const button = document.querySelector('button');
    const total = document.querySelector('.total h2');

    function soma(event) {
        event.preventDefault();
        const peso = document.querySelector('#peso').value;
        const idade = document.querySelector('#idade').value;
        const altura = document.querySelector('#altura').value;
        const somaHomem = 66 + (13.8 * peso) + (5 * altura) - (6.8 * idade);
        const somaMulher = 655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade);

        if (peso && idade && altura && (verificar[0].checked || verificar[1].checked)) {

            if (Number.isInteger(Number(peso)) && Number.isInteger(Number(idade)) && Number.isInteger(Number(altura))) {
                    if (verificar[0].checked) {
                        total.innerHTML = `Você tem ${Math.floor(somaHomem)}kcal de TMB`;
                    } else if (verificar[1].checked) {
                        total.innerHTML = `Você tem ${Math.floor(somaMulher)}kcal de TMB`;
                    }
            } else {
                alert('Coloque somente números inteiros sem vírgulas e pontos.');
            }
            
        } else {
            alert('Por favor, preencha seus dados.')
        }
    }
    button.addEventListener('click', soma);
}
calcFormula();

// Number.isInteger(Number(peso))
