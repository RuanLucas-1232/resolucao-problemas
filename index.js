let apresentacao = "Sejam bemvindos(as) ao nosso evento!";
let data = "20/08/2021";
if (data == "19/08/2021") {
    console.log("O cadastro não pode ser feito, pois a data é invalida.");
}
let participantes = ["João Lucas","Maria do Santos","Pedro Henrique"];
let numeroDeParticipantes = participantes.length;
console.log(apresentacao);
if (participantes.length < 100) {
    console.log("Digite o nome de usuário");
    console.log("Digite sua idade");
    let idade = 18;
    if (idade >= 18) {
        console.log("Digite a senha");
    }
    else {
        console.log("Desculpa, você não tem idade suficiente para participar do evento!");
    }
}
else {
    console.log("Descupa, mas atingiu o limite de participantes!")
}