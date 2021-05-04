const pokemon = "Raichu"
var inputUsuario = document.getElementById("chute-pokemon");
var botaoChute = document.getElementById("botao-confirmar");
var resultadoPokemon = document.getElementById("resultado-pokemon")


function verificar(){
    var chute = inputUsuario.value 
    if (chute.toLowerCase() == pokemon.toLowerCase()){
        resultadoPokemon.innerHTML = "Acertou!!!"
        resultadoPokemon.classList.remove("error")
    }else {
        resultadoPokemon.innerHTML = "Errou!!!"
        resultadoPokemon.classList.add("error")
    }
}
botaoChute.onclick = verificar

