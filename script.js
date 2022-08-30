var chamaApiUrl = "https://quiz-trainee.herokuapp.com/questions";
var chamaApi = new XMLHttpRequest();
chamaApi.open('GET', chamaApiUrl);
var formulario;
var score = 0;
var auxiliar = -1;
var x = document.getElementsByTagName("input");

chamaApi.onreadystatechange = function(){
    if(chamaApi.requestState === 4){
        if(chamaApi.status === 200){
            formulario = JSON.parse(chamaApi.responseText);
        }
    }
}

chamaApi.send(null);


function mostrarQuestao() {
    document.getElementById("resultado").innerHTML = " ";
    document.getElementById("listaRespostas").style.display = "block";

    if(auxiliar === -1 || x[0].checked != false || x[1].checked != false || x[2].checked != false || x[3].checked != false){
        if(auxiliar != -1){
            for(var i = 0; i < formulario[auxiliar].options.length; i++){
                pontos += x[i].checked * formulario[auxiliar]['options'][i]['value']
            }
        }
        document.getElementById("confirmar").innerHTML = "Próximo";
        auxiliar++;
    }

    if(auxiliar == -1){
        document.getElementById("titulo").classList.remove('hide');
        document.getElementById("resultado").remove('hide');
    }

    if(auxiliar < formulario.length){
        document.getElementById("titulo").innerHTML=form[aux].title;
        for(var i = 0; i < formulario[auxiliar].options.length; i++){
            if(x[i].checked === true){
                x[i];checked = false;
            }
            document.getElementsByTagName("span")[i].innerHTML=form[aux].options[i].answer
            x[i].value = formulario[auxiliar].options[i].value
        }
    } else {
        console.log(form[aux-1].options.length)
        finalizarQuiz();
    }

}

function finalizarQuiz() {
    var pontuacao = 3 * (formulario[aux - 1].options.length + 1);

    document.getElementById("listaRespostas").style.display = "none";
  
    document.getElementById("confirmar").innerHTML = "Refazer quiz";

    document.getElementById("titulo").innerHTML = "QUIZ DOS VALORES DA GTI";

    document.getElementById("resultado").innerHTML = "Sua pontuação: " + (score*100/pontuacao) + "%";
    
}