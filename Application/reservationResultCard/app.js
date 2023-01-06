import { API_URL_ALL_DENTISTS, API_URL_ALL_VISITS, API_URL_ALL_CLIENTS } from "../accessToData/urlAccess.js";
import { createDentistElements,createVisitElements, createClientElements } from "./createHtmlView.js";
import { createButtonReturnItem } from "./createHtmlView.js";

const url = location.href;

function getQueryParams(url) {
    const paramArr = url.slice(url.indexOf('?') + 1).split('&');
    const params = {};
    paramArr.map(param => {
        const [key, val] = param.split('=');
        params[key] = decodeURIComponent(val);
    })
    return params;
}

const params = getQueryParams(url);

const getDataAllDentist = fetch(API_URL_ALL_DENTISTS).then(response => response.json());

const getSelectedDentist = getDataAllDentist.then((response)=>{
    const selectedDentist = response.filter(value => value[0] === params.id_dentist);

    const [dentist] = selectedDentist.map(value => {
        const dentist = {
            id_dentist : value[0],
            firstName: value[1],
            lastName: value[2]
        }
        return dentist;
    })
    
    createDentistElements(dentist);
}).then(response =>{
    const getDataAllClients = fetch(API_URL_ALL_CLIENTS).then(response => response.json());
    
    const getSelectedClients = getDataAllClients.then((response)=>{
        const selectedClient = response.filter(value => value[5] === params.id_visit);
    
        const [client] = selectedClient.map(value => {
            const client = {
                firstName: value[1],
                lastName: value[2],
                phoneNumber: value[3],
                email: value[4]
            }
            return client;
        })
         createClientElements(client);
    }).then(response => {

        const getDataAllVisits = fetch(API_URL_ALL_VISITS).then(response => response.json());
    
        const getSelectedVisit = getDataAllVisits.then((response)=>{
        const selectedVisit = response.filter(value => value[0] === params.id_visit);
    
        const [visit] = selectedVisit.map(value => {
            const visit = {
                date: value[1],
                hour: value[2]
            }
            return visit;
        })
        
        createVisitElements(visit);
        })
    })

})
createButtonReturnItem();