const getUrlParam = location.search;

const iDSelectedDentist = getUrlParam.slice(4);

const API_URL_ALL_DENTISTS = 'http://127.0.0.1/api/getDentists.php';

const getDataAllDentistsFromUrl = fetch(API_URL_ALL_DENTISTS);

const getDataAllDentists = getDataAllDentistsFromUrl.then((dentist)=>dentist.json());

const getSelectedDentist = getDataAllDentists.then((dentists) => {
    const selectedDentists =  dentists.filter((dentist) => dentist[0]===iDSelectedDentist);
    return selectedDentists;
})

const dentistNameElement = document.querySelector("#dentistName");
const dentistFullName = getSelectedDentist.then((dentist) => {
    const [selectedDentistName] = dentist.map(fullName => fullName[1] + " " + fullName[2]);
    dentistNameElement.textContent = selectedDentistName;
});

cancelButton.addEventListener('click',()=>{
    location.href = "../index.html";
})


reservationForm.addEventListener("submit", (event)=>{
    event.preventDefault();

    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const phoneNumber = document.querySelector("#phoneNumber").value;
    const email = document.querySelector("#email").value;

    const hour = document.querySelector("#hour").value;
    const date = document.querySelector("#date").value;
    const id_dentist = iDSelectedDentist;

    const visitSpecifyData = {
        hour : hour,
        date : date,
        id_dentist : id_dentist
    }


    const visitSpecifyDataJSON = JSON.stringify(visitSpecifyData);
    
    fetch('http://127.0.0.1/api/postVisit.php', {
        method: 'POST',
        body: visitSpecifyDataJSON
        })

    const lastIdVisit = fetch('http://127.0.0.1/api/getLastIdVisit.php')
    .then((value) => value.json());

    const lastId = lastIdVisit.then((idVisit) => {
        const [id_visit] = idVisit.map(id => id[0]);
        console.log(id_visit);

    const clientPersonality = {
        firstName : firstName,
        lastName : lastName,
        phoneNumber : phoneNumber,
        email : email,
        id_visit : id_visit
    };

    const clientPersonalityJSON = JSON.stringify(clientPersonality);

    
    const sendDataClient = fetch('http://127.0.0.1/api/postClientVisit.php', {
        method: 'POST',
        body: clientPersonalityJSON
    });

    sendDataClient.then((result) =>result.json()).then((response) => {
        const {id_dentist} = visitSpecifyData;
        const {id_visit} = clientPersonality;
        const queryParam = `?id_dentist=${id_dentist}&id_visit=${id_visit}`
        const isSuccessSendData = response.status;
        if(!isSuccessSendData){
            location.href = "/reservationResultCard/failedCard.html";
        }
        location.href = "/reservationResultCard/successCard.html"+queryParam;
    })
    });
    
})


