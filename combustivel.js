function calcularCombustivel(distancia, tipoCombustivel){
    if(distancia <= 0){
        return("Erro, a distância deve ser positiva!");
    }

    if(tipoCombustivel !== "gasolina" && tipoCombustivel !== "etanol"){
        return("Erro, o tipo de combustível deve ser (gasolina/etanol)");
    }

    let Gasolina = 16;
    let Etanol = 11;

    let distanciaKm = distancia / 1000;
    let litrosNecessarios;

    if(tipoCombustivel === "gasolina"){
        litrosNecessarios = distanciaKm / Gasolina;
    } else {
        litrosNecessarios = distanciaKm / Etanol;
    }
    
    let litrosArredondados = Math.round(litrosNecessarios);

    return `Você precisará de aproximadamente ${litrosArredondados} litros de ${tipoCombustivel}.`;
}

module.exports = calcularCombustivel;