let nomeHeroi = "Thanos"
let nivelHeroi = 20000
let experiencia = ""

if(nivelHeroi <1000){
    experiencia = "Ferro"
}
else if(nivelHeroi >=1001 && nivelHeroi <=2000){
    experiencia = "Bronze"
}
else if(nivelHeroi >=2001 && nivelHeroi <=5000){
    experiencia = "Prata"
}
else if(nivelHeroi >=6001 && nivelHeroi <=7000){
    experiencia = "Ouro"
}
else if(nivelHeroi >=7001 && nivelHeroi <=8000){
    experiencia = "Platina"
}
else if(nivelHeroi >=8001 && nivelHeroi <=9000){
    experiencia = "Ascendente"
}
else if(nivelHeroi >=9001 && nivelHeroi <=10000){
    experiencia = "Ascendente"
}
else{
    experiencia = "Radiante"
}
console.log("O Heroi de nome " + nomeHeroi + " está no nível  " + experiencia)

