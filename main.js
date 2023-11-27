let nome = document.getElementById('nome');
let peso = document.getElementById('nota');
let peso2 = document.getElementById('notinha');
let resultado = document.getElementById('resultado');
let btn = document.getElementById('btn');
let error = document.getElementById('error')

btn.addEventListener('click',function calcular(e) {
    e.preventDefault();
    if(nome.value == '' || peso.value == '' || peso2.value == ''){
        error.textContent = 'Preencha corretamente!'
        error.style.color = 'yellow'
        setTimeout(() =>{
            error.textContent = ''
        },2000);
        return;
    }else{
        peso = Number(peso.value)
        peso2 = Number(peso2.value)
        let media = peso.value + peso2.value
        resultado.textContent = `${nome.value}, sua média foi ${media}`
        resultado.style.color = 'white';
        peso.value = ''
        peso2.value = ''
        nome.value = ''
        
    }
})
