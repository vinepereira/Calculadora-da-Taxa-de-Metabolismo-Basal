// Foto dinamica homem/mulher
const activePhoto = () => {
  const homemMulher = document.querySelectorAll('.js-sexo input');
  const imgManWoman = document.querySelectorAll('.client-img img');

  if (homemMulher.length && imgManWoman.length) {
    function ativarFoto(index) {
      imgManWoman.forEach(imagem => imagem.classList.remove('ativo'));
      imgManWoman[index].classList.add('ativo');
    }
    homemMulher.forEach((item, index) => {
      item.addEventListener('click', () => ativarFoto(index));
    });
  }
};
activePhoto();

// Cálculo TMB com escolha de fórmula
const calcFormula = () => {
  const sexoInputs = document.querySelectorAll('.js-sexo input');
  const formulaInputs = document.querySelectorAll('.js-formula input');
  const button = document.querySelector('button');
  const total = document.querySelector('.total h2');

  const getSexo = () => (sexoInputs[0].checked ? 'homem' : (sexoInputs[1].checked ? 'mulher' : null));
  const getFormula = () => {
    if (formulaInputs[0].checked) return 'harris';
    if (formulaInputs[1].checked) return 'mifflin';
    return null;
  };

  function soma(e) {
    e.preventDefault();

    const peso = document.querySelector('#peso').value;
    const idade = document.querySelector('#idade').value;
    const altura = document.querySelector('#altura').value;

    const sexo = getSexo();
    const formula = getFormula();

    if (!peso || !idade || !altura || !sexo || !formula) {
      alert('Por favor, preencha todos os dados e selecione sexo e fórmula.');
      return;
    }

    // mantém sua validação original (apenas inteiros)
    if (!(Number.isInteger(Number(peso)) && Number.isInteger(Number(idade)) && Number.isInteger(Number(altura)))) {
      alert('Coloque somente números inteiros sem vírgulas e pontos.');
      return;
    }

    let tmb = 0;

    if (formula === 'harris') {
      // Harris–Benedict (kg, cm, anos)
      if (sexo === 'homem') {
        tmb = 66 + (13.8 * peso) + (5 * altura) - (6.8 * idade);
      } else {
        tmb = 655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade);
      }
    } else {
      // Mifflin–St Jeor (kg, cm, anos)
      if (sexo === 'homem') {
        tmb = (10 * peso) + (6.25 * altura) - (5 * idade) + 5;
      } else {
        tmb = (10 * peso) + (6.25 * altura) - (5 * idade) - 161;
      }
    }

    const nomeFormula = formula === 'harris' ? 'Harris–Benedict' : 'Mifflin–St Jeor';
    total.innerHTML = `Você tem ${Math.floor(tmb)}kcal de TMB (${nomeFormula}).`;
  }

  button.addEventListener('click', soma);
};
calcFormula();
