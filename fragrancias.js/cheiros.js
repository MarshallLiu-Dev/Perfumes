var perfumes = [
    { 
        nome: "Malbec",
        fabricante: "Boticario",
        tipo:"Amadeirado",
},
    { 
    nome: "Lilly",
    fabricante: "Boticario",
    tipo:" Floral Amadeirado",
},
    { 
    nome: "Essencial",
    fabricante: "Natura",
    tipo:"Floral Elegante",
},
    { 
    nome: "Puro Vudol",
    fabricante: "Mae do Cris",
    tipo:"Suave",
},
    { 
    nome: "Brisa do Deserto",
    fabricante: "Simpsons",
    tipo:"Floral Suave",
},
    { 
    nome: "Far Away Glamour",
    fabricante: "Avon",
    tipo:"Suave",
},
    { 
    nome: "Glamour Secrets Black Desodorant",
    fabricante: "Avon",
    tipo:"Suave",
}
];
    /* criando a funcão  */
function escrever_no_html() {
    let div_perfumes = document.querySelector("#div_perfumes");
    let lista_perfumes = document.querySelector("#lista_perfumes");


   for (var i = 0 ; i < perfumes.length; i++){

    /* criando o item da lista*/
    const item = document.createElement("li");

    /* crinado texto do li e colocando o texto como filho*/
    const texto = document.createTextNode(perfumes[i].nome)
    item.appendChild(texto)
    lista_perfumes.appendChild(item)
   }
 }

 escrever_no_html()