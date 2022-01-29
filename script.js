const prompt = require('prompt-sync')();

console.log(`\n  Jornada do Pai Herói!\n\n Sua esposa saiu e te deixou você com a função de cuidar da sua filha.\n Você tem algumas tarefas e a não realização delas pode te custar a vida, cuidado!\n Essa é uma jornada difícil, porém acredito em VOCê! =P\n\n`);
let per1 = +prompt(`Deu mama para a sua filha? 1-SIM 0-NÃO `);
let per2 = +prompt(`Trocou sua fralda? 1-SIM 0-NÃO `);
let per3 = +prompt(`Levou para passear? 1-SIM 0-NÃO `);
let per4 = +prompt(`Deu banho? 1-SIM 0-NÃO `);
let per5 = +prompt(`Brincou com ela? 1-SIM 0-NÃO `);

let total = per1+per2+per3+per4+per5;

    if(total === 5){
    console.log(`Parabéns, você é um Excelente Papai! Gabaritou a tarefa!!!`);
}   
    else if(total === 4){
    console.log(`Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita!`);
}   
    else if(total === 3){
    console.log(`Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.!`);
}   
    else if(total === 2){
    console.log(`Você falha, mas ainda consegue fugir da situação!`);
}   
    else{
    console.log(`Sua esposa vai te Matar! kkk`);
}
