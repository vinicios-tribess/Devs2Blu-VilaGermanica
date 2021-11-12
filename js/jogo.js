
// montagem das questões

var q1 = {pergunta : "Qual dessas medidas NÃO é cientificamente comprovada para o combate e prevenção da Covid-19?", 
            alternativa1 : "Usar álcool em gel", 
            alternativa2 : "Manter distânciamento social", 
            alternativa3 : "Tratamento com cloroquina", 
            alternativa4 : "Uso de másca", 
            correta : "Tratamento com cloroquina", 
            explicacao : "O tratamento com cloroquina não é uma medida cientificamente comprovada para o combate e prevenção da Covid-19, todas as demais estão corretas."};

var q2 = {pergunta : "Segunda pergunta?", 
            alternativa1 : "alternativa1", 
            alternativa2 : "alternativa2", 
            alternativa3 : "alternativa3", 
            alternativa4 : "alternativa4", 
            correta : "alternativa4", 
            explicacao : "Explicação."};

var perguntas = [q1, q2]; // array com 6 objetos contendo as que

// coloca a questão na tela

var jogo = document.querySelector(".jogo");

var p = jogo.querySelector("#pergunta");
var a1 = jogo.querySelector("#alternativa-1");
var a2 = jogo.querySelector("#alternativa-2");
var a3 = jogo.querySelector("#alternativa-3");
var a4 = jogo.querySelector("#alternativa-4");
var resultado = jogo.querySelector("#resultado");

p.textContent = perguntas[0].pergunta;
a1.textContent = perguntas[0].alternativa1;
a2.textContent = perguntas[0].alternativa2;
a3.textContent = perguntas[0].alternativa3;
a4.textContent = perguntas[0].alternativa4;
resultado.textContent = "Escolha uma das alternativas";

console.log(a1);

// capturar a resposta

var r;
a1.addEventListener("click", function(){    
    r = a1.textContent;
});

/*
a2.addEventListener("click", function(){
    var resposta = a2.textContent;
});
a3.addEventListener("click", function(){
    var resposta = a2.textContent;
});
a4.addEventListener("click", function(){
    var resposta = a2.textContent;
});
*/
console.log("Clicou em: " + r);






    // for para percorrer o array de perguntas

        // captura a resposta


            // testa se acertou (comparação)

            // mostra o hint


// troca a questão






// console.log((Math.round(Math.random()*4)))


