// Recupero l'ul in cui inserire le email
const emailList = document.getElementById(`email-list`);

// Salvo l'URL dell'API in una variabile
const emailAPI = `https://flynn.boolean.careers/exercises/api/random/mail`;

function generateEmailList () {
    // Creo un ciclo for per fare 10 richieste
    for (let i = 0; i < 10; i++) {
        // Uso Axios per fare una chiamata GET all'API
        axios
            .get(emailAPI)
            .then(response => {
                const email = response.data.response;
    
                // Creo un list item
                const li = document.createElement(`li`);
                li.classList.add(`list-group-item`, `fs-5`);
    
                // Il list item che contiene l'email viene aggiunta all'email list
                li.textContent = email;
                emailList.append(li);
            })
    }
}
generateEmailList();

const newEmailListBtn = document.getElementById(`new-email-list-btn`);

newEmailListBtn.addEventListener(`click`, (e) => {
    emailList.innerHTML = ``;

    generateEmailList();
})