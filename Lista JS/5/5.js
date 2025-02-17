let btnGenerate = document.querySelector("button");



let container = document.getElementById("container");

function RandomizeByMinMax(min, max) {
     return Math.floor(Math.random() * (max - min + 1) + min);
}

btnGenerate.addEventListener("click", () => {
     let min = parseInt(document.getElementById("input1").value) || 0;
     let max = parseInt(document.getElementById("input2").value) || 0;

     let randomNumber = RandomizeByMinMax(min, max);

     let divResult = document.getElementById("result");
     if (!divResult) {
          divResult = document.createElement("div");
          divResult.id = "result";
          divResult = container.appendChild(divResult);
     }

     divResult.innerHTML = `<p>${randomNumber}</p>`;
});
