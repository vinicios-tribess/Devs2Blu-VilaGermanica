
// montagem das questões

var q1 = {pergunta : "Qual dessas medidas NÃO é cientificamente comprovada para o combate e prevenção da Covid-19?", 
            alternativa1 : "Usar álcool em gel", 
            alternativa2 : "Manter distânciamento social", 
            alternativa3 : "Tratamento com cloroquina", 
            alternativa4 : "Uso de másca", 
            correta : "Tratamento com cloroquina", 
            explicacao : "O tratamento com cloroquina não é uma medida cientificamente comprovada para o combate e prevenção da Covid-19, todas as demais estão corretas."};

var q2 = {pergunta : "Os sintomas mais comuns da COVID-19 são:", 
            alternativa1 : "perda de visão, tontura e pele amarelada", 
            alternativa2 : "febre, tosse, cansaço, dor de cabeça e alteração do olfato", 
            alternativa3 : "queda de cabelo, coceira na pele e falta de apetite", 
            alternativa4 : "pele avermelhada, catarro e vista embaçada", 
            correta : "febre, tosse, cansaço, dor de cabeça e alteração do olfato", 
            explicacao : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper dictum sem, ac volutpat ipsum. Donec rutrum nibh interdum justo lacinia, vitae rutrum elit tempor."};

var q3 = {pergunta : "Terceira pergunta?", 
            alternativa1 : "alternativa1", 
            alternativa2 : "Correta", 
            alternativa3 : "alternativa3", 
            alternativa4 : "alternativa4", 
            correta : "Correta", 
            explicacao : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nunc erat, ultricies nec semper ac, euismod sed enim. Etiam vitae ultrices magna. Ut et faucibus neque."};            

let perguntas = [q1, q2, q3]; // array com 6 objetos contendo as que
let acertos = 0;
let erros = 0;
let questao = 0;
let campoAcertos = 0;
let campoErros = 0;

let p = "";
let a1 = "";
let a2 = "";
let a3 = "";
let a4 = "";
let resultado = "";
let jogo = "";
let lista = "";

// coloca a questão na tela

function montaQuestao(){

    jogo = document.querySelector(".jogo");

    p = jogo.querySelector("#pergunta");
    a1 = jogo.querySelector("#alternativa-1");
    a2 = jogo.querySelector("#alternativa-2");
    a3 = jogo.querySelector("#alternativa-3");
    a4 = jogo.querySelector("#alternativa-4");
    resultado = jogo.querySelector("#resultado");
    campoAcertos = jogo.querySelector("#acertos");
    campoErros = jogo.querySelector("#erros");

    p.textContent = perguntas[questao].pergunta;
    a1.textContent = perguntas[questao].alternativa1;
    a2.textContent = perguntas[questao].alternativa2;
    a3.textContent = perguntas[questao].alternativa3;
    a4.textContent = perguntas[questao].alternativa4;
    resultado.textContent = "Escolha uma das alternativas";
    
    lista = document.querySelector("#lista-alternativas");

}

montaQuestao();



lista.addEventListener("click", function(event){

    var escolha = event.target.parentNode.textContent;
    var correta = perguntas[questao].correta;
    var mensagem = "";

    if(escolha == correta){
        //event.target.parentNode.classList.add("correta");        
        console.log("acertou!");
        acertos = acertos + 1;        
        mensagem = "Parabéns, você acertou: ";
        
    }else{
        //event.target.parentNode.classList.add("errada");
        console.log("Errou.")
        erros = erros + 1;        
        mensagem = "Infelizmente você errou: ";
    }
    
    setTimeout(function(){},500);

    campoAcertos.textContent = acertos;
    campoErros.textContent = erros;
    resultado.textContent = perguntas[questao].explicacao;

    console.log(escolha);    
    questao = questao + 1;    

})

let botao = document.querySelector("#proxima");

botao.addEventListener("click",function(){

    if(questao < perguntas.length){
        montaQuestao();
    }else{
        fimDeJogo();
    }

})

function fimDeJogo(){

    let mensagemFim = "Você acertou " + acertos + " perguntas, ";

    console.log(acertos);

    switch(acertos){
        case 0 : mensagemFim = mensagemFim + "então sabe pouco sobre a prevenção, Que tal dar uma olha neste site https://portal.fiocruz.br/coronavirus/perguntas-e-respostas ?";
        break;
        case 1 : mensagemFim = mensagemFim + "então está ficando bom, que tal ler esse artigo (link) para melhorar seu conhecimento sobre Covid-19?";
        break;
        case 2 : mensagemFim = mensagemFim + "então sabe bastante sobre prevenção, esperamos que as dicas durante o jogo, tenham melhorado ainda mais seu conhecimento sobre prevenção da Covid-19";
        break;
        case 3 : mensagemFim = mensagemFim + "parabéns, você está sabe como se prevenir, ajude a conscientizar outras pessoas.";
        break;
    }

        resultado.textContent = mensagemFim;
}




// console.log((Math.round(Math.random()*4)))


