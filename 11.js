let btn = document.querySelector("button");

function gerarNumeroAleatorio(){
    return Math.floor(Math.random()*100 +1);
}



let numeros = [];
btn = btn.addEventListener("click",()=>{
    let ListaResultado = document.querySelector("ul");
    ListaResultado.innerHTML="";
    for(let i = 0;i<=10;i++){
    let numeroAleatorio = gerarNumeroAleatorio();
    numeros.push(numeroAleatorio);
    console.log(numeroAleatorio);
    }

    for(let i = 0;i<=10;i++){
        let resultadoLi = document.createElement("li");
        resultadoLi.innerHTML = `${numeros[i]}`;
        ListaResultado.appendChild(resultadoLi);
    }

    console.log(numeros);
    numeros = [];
})



