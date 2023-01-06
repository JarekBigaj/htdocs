import { renderDentistsList } from "./renderDentistsList.js";
import { API_URL_ALL_DENTISTS } from "./accessToData/urlAccess.js";


const getDataAllDentistsFromUrl = fetch(API_URL_ALL_DENTISTS);

const getDataAllDentists = getDataAllDentistsFromUrl.then((dentist)=>dentist.json());

const getOnlyAvailableDentist = getDataAllDentists.then((dentists) => {
    const availableDentists =  dentists.filter((dentist) => dentist.isAvailable !== 0);
    return availableDentists;
})

const renderAvailableDentistsData = getOnlyAvailableDentist.then((dentists) => {
    const availableDentists =  dentists.map((dentist) => {
        const basicDataAboutAvailableDentist = {
            id: dentist[0],
            firstName: dentist[1],
            lastName: dentist[2]
        }      
        return basicDataAboutAvailableDentist;
    })
    renderDentistsList(availableDentists);
})
