
// AULA 07 - VETORES, MATRIZES E ARRAYS

// AULA 08 - ESTRUTURAS DE REPETIÇÃO (FOR, DO... WHILE, WHILE)
/* 1) Crie um array de 5 posições com quaisquer valores. Utilize qualquer estrutura de repetição apresentada no vídeo para exibir todos os valores do array */

arrayNomes = ["Carla", "Carol", "Carlos", "Dione", "Irmão"];
for (i = 0; i < arrayNomes.length; i++) {
    console.log(arrayNomes[i])
}
console.log("");

///////////////////////////////////////////////////////

arrayCidades = ["Parobé" , "Taquara" , "Novo Hamburgo", "Campo Bom"]
ind2 = 0;
do {
    console.log(arrayCidades[ind2])
    ind2++
}
while (ind2 < arrayCidades.length)

console.log("");

/////////////////////////////////

arrayCarros = ["Fusca" , "Gol" , "HB20" , "UP"]
ind3 = 0;

while (ind3 < arrayCarros.length) {
    console.log(arrayCarros[ind3])
    ind3++
}

console.log("")

/* 2)Crie um algoritmo capaz de calcular a média aritmética de um array com qualquer quantidade de elementos numéricos . Para fins de exemplo, o resultado do algoritmo com um array de valores 1, 2, 3, 5, 8, 13, 21, 23, 34, 55 deve ser 16.5. Procure usar uma estrutura de repetição diferente da que você usou para fazer o exercício anterior; */

arrayNumeros = [1, 2, 3, 5, 8, 13, 21, 23, 34, 55]

somaNumeros = 0
for (index = 0; index < arrayNumeros.length; index++){
    somaNumeros += arrayNumeros[index]

}
mediaArit = somaNumeros / arrayNumeros.length
console.log(mediaArit)

console.log("")

/* 3) Considerando a lista dos 60 nomes mais comuns no Brasil nos últimos 10 anos, crie um algoritmo para verificar se seu nome está lá. Se sim, exiba a mensagem: É, nome comum :P. Se não, exiba a mensagem: Diferentão, hein? XD. */

nomeComum = false;

nomesComuns = ["Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia", 
"Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa", "Gustavo", "Maria Eduarda", "Pedro", "Sofia", 
"Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila", "Heitor", "Lara", "Henrique", "Valentina", 
"Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo", "Yasmin", "Benjamin", "Sophia", 
"Vinícius", "Rebeca", "Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda", 
"Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória"] 

meuNome = "Carla";

for (ind = 0; ind < nomesComuns.length; ind++){

    if (meuNome === nomesComuns[ind]){
        nomeComum = true;
        break;  
    }
}

if (nomeComum) {
    console.log("É, nome comum :P")
}
    else {
        console.log("Diferentão, hein? XD.")
    }
    
