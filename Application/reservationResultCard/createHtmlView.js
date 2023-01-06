const createElement = (labelName, value) =>{
    const infoElement = document.createElement("div");
    infoElement.className="card-text";
    
    const labelElement = document.createElement("strong");
    labelElement.innerText = labelName;
    const valueElement = document.createElement("span");
    valueElement.innerText = value;

    infoElement.appendChild(labelElement);
    infoElement.appendChild(valueElement);

    return infoElement
}

const createTitleElement = (value) => {
    const titleElement =  document.createElement("h5");
    titleElement.className = "card-title";
    titleElement.textContent = value;
    return titleElement;
}

const createItemDentistElement = (dentist) =>{

    const itemElement = document.createElement("div");
    itemElement.className = "card shadow-sm p-2 mb-1 bg-light-subtle rounded";
    itemElement.appendChild(createTitleElement("Stomatolog przyjmujący"));
    itemElement.appendChild(createElement("Imię : ", dentist.firstName));
    itemElement.appendChild(createElement("Nazwisko : ", dentist.lastName));

    return itemElement;
}

const createItemVisitElement = (visit)=>{
    
    const itemElement = document.createElement("div");
    itemElement.className = "card shadow-sm p-2 mb-1 bg-light-subtle rounded";

    itemElement.appendChild(createTitleElement("Wizyta"));
    itemElement.appendChild(createElement("Data : ", visit.date));
    itemElement.appendChild(createElement("Godzina : ", visit.hour));

    return itemElement;
}

const createItemClientElement = (client)=>{
    
    const itemElement = document.createElement("div");
    itemElement.className = "card shadow-sm p-2 mb-1 bg-light-subtle rounded";
    itemElement.appendChild(createTitleElement("Pacjent"));
    itemElement.appendChild(createElement("Imię : ", client.firstName));
    itemElement.appendChild(createElement("Nazwisko : ", client.lastName));
    itemElement.appendChild(createElement("Telefon : ", client.phoneNumber));
    itemElement.appendChild(createElement("Email : ", client.email));

    return itemElement;
}

export function createDentistElements(dentist){
    const rootElement = document.querySelector("#root");
    rootElement.appendChild(createItemDentistElement(dentist));
}

export function createVisitElements(visit){
    const rootElement = document.querySelector("#root");
    rootElement.appendChild(createItemVisitElement(visit));
}

export function createClientElements(client){
    const rootElement = document.querySelector("#root");
    rootElement.appendChild(createItemClientElement(client));
}

export const createButtonReturnItem = () =>{
    const returnField = document.querySelector("#return");
    const returnButton = document.createElement("button");
    returnButton.textContent = "Przejdź do strony głównej";
    returnButton.className = "btn btn-success shadow p-3 mb-5 rounded";
    returnButton.addEventListener('click', ()=>{
        location.href = "../";
    })
    returnField.appendChild(returnButton);
}