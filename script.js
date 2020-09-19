var ano = document.getElementById('anoNascimento');
var btnCalcularIdade = document.getElementById('btnCalcularIdade');
btnCalcularIdade.onclick = functionMostraIdade;

var btnLimpar = document.getElementById('btnLimpar');
    btnLimpar.addEventListener('click', limpar);


       function functionMostraIdade(){
            var anoAtual = new Date().getFullYear();
            var ano = anoNascimento.value.trim();
            var idade = anoAtual - ano;
            var menssagem = 'Sua idade é de ' + idade + ' anos.';
            document.getElementById('mostraIdade');
            mostraIdade.innerText = menssagem;
       } 
       
       function limpar(){
            document.getElementById('mostraIdade');
            mostraIdade.innerText = '';
       }