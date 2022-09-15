// 1) Crie uma função chamada imprimir que recebe um argumento e simplesmente imprime ele na tela;

function imprimir(i){
    console.log(i)
}
imprimir("Carla");

/*2) Lembra dos exercícios que propusemos na Aula 05 - Variáveis? Com base neles, faça o seguinte:
Crie uma função para cada algoritmo proposto lá, exceto o número 6;
Todas as funções devem retornar o valor final;
Procure dar nomes que façam sentido às funções. Ex.: a função para o item 4 poderia se chamar mediaAritmetica ou calcularMediaAritmetica;
Procure utilizar comentários para documentar cada método;
Na função da média aritmética, evite colocar todos os itens como argumentos do método, pois isso limitaria sua utilização a um número fixo de elementos. Tente implementar uma lógica para receber um array e calcular a média em cima dele, tornando a função mais reaproveitável em diferentes situações. 

3) Com as funções criadas, execute todo código abaixo e verifique se os resultados são os esperados (o resultado esperado de cada função está no comentário ao lado da chamada): */


function verificaNomesIguais(name1,name2){
    /* if (name1===name2){
    return true
    }
    else {
    return false
    }*/
    return (name1===name2)
}

function maiorIdade(idade){
    /* if (idade >=18){
        return true
    }
    else {
        return false
    } */
    return (idade >= 18)
}

function valorComJuros(valorBoleto){
    return valorBoleto * 1.1
}


function mediaAritmetica(valores){
    soma = 0;
  for (i = 0; i < valores.length; i++){
    soma += valores[i]}
    return (soma / valores.length)
}

function margemBruta(rlv, cpv){
    return ((rlv - cpv) / rlv * 100);
}

imprimir(verificaNomesIguais("cwi","cwi"));
imprimir(verificaNomesIguais("cwi","reset"));
imprimir(maiorIdade(30));
imprimir(maiorIdade(18));
imprimir(maiorIdade(5));
imprimir(valorComJuros(100));
imprimir(valorComJuros(984.5));
imprimir(mediaAritmetica([1]));
imprimir(mediaAritmetica([1, 4, 10]));   
imprimir(mediaAritmetica([1, 2, 3, 4, 5]));
imprimir (margemBruta(1000000, 500000));
imprimir(margemBruta(528459.11, 632501.87))


