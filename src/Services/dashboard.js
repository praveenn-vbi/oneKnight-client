import {URL} from '../Utils/url'

const createDashboard = (dashboardName) =>{
    return fetch(URL.createDashboard, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({name:dashboardName}),
    }).then(res => res.json());
}

export {createDashboard}