const emailList = document.getElementById(`email-list`);
const emailAPI = `https://flynn.boolean.careers/exercises/api/random/mail`;

for (let i = 0; i < 10; i++) {
    axios
        .get(emailAPI)
        .then(response => {
            const email = response.data.response;
            const listItem = document.createElement(`li`);

            listItem.textContent = email;
            emailList.append(listItem);
        })
}