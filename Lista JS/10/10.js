let btnCreateNote = document.querySelector("button");
let notesUl = document.getElementById("list-created-notes");
let createdNotes = [];
btnCreateNote.addEventListener("click", () => {
     let currentNote = document.getElementById("text").value.trim();
     try {
          createdNotes.push(currentNote);
          console.log(createdNotes);
          let noteLi = document.createElement("li");
          noteLi.textContent = currentNote;
          notesUl.appendChild(noteLi);
          console.log("Nota Adicionada");
     } catch (error) {
          console.log("Erro ao copiar a lista");
     }

})
