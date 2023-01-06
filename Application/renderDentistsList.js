const createInfoDentistElement = (labelName, value) =>{
    const infoElement = document.createElement("div");
    
    const labelElement = document.createElement("strong");
    labelElement.innerText = labelName;
    const valueElement = document.createElement("span");
    valueElement.innerText = value;

    infoElement.appendChild(labelElement);
    infoElement.appendChild(valueElement);

    return infoElement
}

const createDentistItemElement = (dentist) =>{
    const dentistElement = document.createElement("li");
    dentistElement.className="list-group-item w-50 p-3 ";
    
    dentistElement.appendChild(createInfoDentistElement("Imię : ", dentist.firstName));
    dentistElement.appendChild(createInfoDentistElement("Nazwisko : ", dentist.lastName));

    const reservedVisitButton = document.createElement("button");
    reservedVisitButton.textContent = "Umów wizytę";
    reservedVisitButton.className ="btn btn-success btn-sm";
    reservedVisitButton.addEventListener("click", () => {
        return redirectToReservationVisitCard(dentist);
    })
    dentistElement.appendChild(reservedVisitButton);


    return dentistElement;
}


const createDetistListElement = (dentists) => {
    const listElement = document.createElement("ul");
    dentists.forEach(dentist => {
        listElement.appendChild(createDentistItemElement(dentist));
        listElement.className="list-group";
    });

    return listElement;
};

export const renderDentistsList = (dentists) => {
    const rootElement = document.querySelector("#root");
    rootElement.appendChild(createDetistListElement(dentists));
};

const redirectToReservationVisitCard = (dentist) => {
    const queryParam = `?id=${dentist.id}`;
    location.href = "/reservationCard/index.html"+queryParam;
}