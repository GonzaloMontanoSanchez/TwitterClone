const form = document.querySelector('form');
const tuatsList = document.querySelector('.tuats');
const API_URL = 'http://localhost:3000/tuat';


listAllTuats();

form.addEventListener('submit',(event)=>{
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content');

    const tuat = {
        name,
        content
    }
    event.preventDefault();

    fetch(API_URL, {
        method : "POST",
        body : JSON.stringify(tuat),
        headers: {
            'content-type' : ' application/json'
        }

    }).then(response => response.json())
    .then(createdTuat=>{
        console.log(createdTuat);
        form.reset();
        listAllTuats();
    });
});

function listAllTuats(){
    tuatsList.innerHTML='';
    fetch(API_URL)
        .then(response => response.json())
        .then(tuats =>{
        console.log(tuats)
        tuats.reverse();
        tuats.forEach(tuat => {
            const div = document.createElement('div');

            const header = document.createElement('h3');
            header.textContent = tuat.name;

            const content = document.createElement('p');
            content.textContent = tuat.content;

            const date = document.createElement('small');
            date.textContent = new Date(tuat.created)

            div.appendChild(header);
            div.appendChild(content);
            div.appendChild(date);

            tuatsList.appendChild(div);
        });
    });
}
