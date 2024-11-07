/**Descrizione
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail 
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/

// Funzione per ottenere un indirizzo email tramite API
function generateEmail() {
  return fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => response.json())
    .then((data) => data.response);
}

// Funzione per generare 10 email
function generateEmails() {
  const emailList = document.getElementById("email-list");

  // Chiamata all'API per generare 10 email
  for (let i = 0; i < 10; i++) {
    generateEmail().then((email) => {
      const li = document.createElement("li");
      li.textContent = email;
      emailList.appendChild(li);
    });
  }
}

window.onload = generateEmails;
