let btnSum = document.querySelector("button");

function SumInputs(n1, n2) {
     return n1 + n2;
}

btnSum = addEventListener("click", () => {

     let input1 = parseInt(document.getElementById("n1").value);
     let input2 = parseInt(document.getElementById("n2").value);
     if (isNaN(input1) && isNaN(input2)) {
          console.log("Por favor, insira números válidos.");
          return;
     }
     let result = SumInputs(input1, input2);

     let divResult = document.getElementById("resultado");

     if(!divResult){
          divResult = document.createElement("div");
          divResult.id = "resultado";
          document.body.appendChild(divResult);
     }
     divResult.innerHTML=`O resultado é ${result}`;
     console.log(result);
});