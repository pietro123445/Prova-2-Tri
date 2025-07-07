
let times = 0;
let mostraResultado = document.querySelector("#resultado");
function cadastro() {
   
    let time = prompt("Digite o nome da equipe").toUpperCase();
    let jog1 = prompt("Digite o nome do jogador 1");
    let idade1 = Number(window.prompt('Digite a idade do jogador 1:'));
    let jog2 = prompt("Digite o nome do jogador 2");
    let idade2 = Number(window.prompt('Digite a idade do jogador 2:'));
    let jog3 = prompt("Digite o nome do jogador 3");
    let idade3 = Number(window.prompt('Digite a idade do jogador 3:'));
    times ++;

   
   
     if(times <=4) {

        
    mostraResultado.innerHTML +=`<p>time ${times}<p> Número de times: ${time}</p><p>Jogador: ${jog1}. Idade: ${idade1}</p><p>Jogador: ${jog2}. Idade: ${idade2}</p><p>Jogador: ${jog3}. Idade: ${idade3}</p>`;
     
    }else {
            alert ("ja atingiu o numero maximo de times")
        }
   
    if (idade1 >= 15) {
         alert ("Idade maxima atingida")
    }
   

    if (idade2 >= 15) {
         alert ("Idade maxima atingida")
    }

    if (idade3 >= 15) {
         alert ("Idade maxima atingida")
    }
}
