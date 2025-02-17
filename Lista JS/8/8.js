let btnGenerate = document.querySelector("button");



function IsPrimeNumber(number) {
     let CountNumbers = 0;
     for (let i = 1; i <= number; i++) {
          if ((number % i == 0)) {
               CountNumbers += 1;
          }
     }
     if (CountNumbers == 2) {
          return true
     } else {
          return false;
     }
}

function GetNumberOfPrimeNumbers(intervalStart, intervalEnd) {
     let countPrime = 0;
     for (let i = intervalStart; i <= intervalEnd; i++) {
          if (IsPrimeNumber(i)) {
               countPrime += 1;
          }
     }
     return countPrime;
}

btnGenerate.addEventListener("click", () => {
     let divResult = document.getElementById("result");
     let firstNumber = Number(document.getElementById("interval-start").value);
     let lastNumber = Number(document.getElementById("interval-end").value);
     let result = GetNumberOfPrimeNumbers(firstNumber, lastNumber);
     divResult.innerHTML = `${result}`;
})