function somarDoisNumeros(valor1, valor2) {
   // Erro * , sinal correto +
    const resultado = valor1 + valor2;
    return resultado;
}

function calculadoraMediadeDoisNumeros(valor1, valor2) {
    // 1. Soma todos os valores
    const resultadoSomaDeDoisValores = somarDoisNumeros(valor1, valor2);
    // 2. Divide pela quantidade de números passados
    const resultadoDaMediaDeDoisValores = resultadoSomaDeDoisValores / 2;
    // 3. Exibe resultado
    return resultadoDaMediaDeDoisValores;
}

module.exports = {
  somarDoisNumeros
};