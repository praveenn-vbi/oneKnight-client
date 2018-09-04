import {URL} from '../Utils/url'

const getRecentStats = (dashboardId) =>{
    return fetch(URL.dashboardStats+`/${dashboardId}/100`).then(res => res.json());
}

export {getRecentStats};