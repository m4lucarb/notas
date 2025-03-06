function calcularMedia() {
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));

    // Verifica se as entradas são válidas
    if (isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        alert("Por favor, insira notas válidas entre 0 e 10.");
        return;
    }

    let media = (nota1 + nota2) / 2;
    let situacao;

    if (media >= 7) {
        situacao = "Aprovado";
    } else if (media >= 5) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    alert(`Média: ${media.toFixed(2)}\nSituação: ${situacao}`);
}

calcularMedia();
