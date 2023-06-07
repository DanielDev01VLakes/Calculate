function calcular(){
    var base = prompt("Qual é a medida da base do triângulo?")
    var altura = prompt("Qual é a altura do triângulo?")

    var area = (base*altura)/2;

    document.getElementById("area").innerHTML = 
    "Aréa do triângulo é" + area + "!";
}