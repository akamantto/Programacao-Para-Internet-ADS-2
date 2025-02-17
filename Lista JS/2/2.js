let btnClick = document.querySelector("button");
let countlicks = 0;


btnClick = addEventListener("click",()=>{
     countlicks += 1;
     let showClicks = document.querySelector("span").innerHTML=`
          Contagem de cliques : ${countlicks}
     `;
     console.log(`Contagem de cliques : ${countlicks}`);
     
})