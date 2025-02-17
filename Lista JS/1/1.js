const text = "Hello World";

btnHello = document.querySelector("button");
btnHello = addEventListener("click",()=>{
     let textBox = document.querySelector("span");
     textBox.innerHTML=`<p style="font-size:40px;">${text}</p>`;
     window.alert("Hello World");
     console.log("Hello World");
})