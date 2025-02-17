let btnGenerate = document.querySelector("button");

function Randomize() {
     let randomNumber = Math.floor((Math.random()*1001));
     return randomNumber;     
}

btnGenerate = btnGenerate.addEventListener("click", ()=>{
     let randomNumber = Randomize();
     let divRandomNumber = document.getElementById("random-number");
     if(!divRandomNumber){
          let divRandomNumber = document.createElement("div");
          divRandomNumber.id="random-number";
          document.body.appendChild(divRandomNumber);
     }
     divRandomNumber.innerHTML=`<p>${randomNumber}</p>`;
})
