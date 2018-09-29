import {browserIconRenderer,deviceIconRenderer,osIconRenderer} from './CellRenderers/IconRenderer'
const getColumnData = () =>{
    return [
        {headerName:"View",field:"viewName"},
        {headerName:"Browser",field:"browser",cellRenderer:browserIconRenderer,width:30},
        {headerName:"Device",field:"device",cellRenderer:deviceIconRenderer,width:30},
        {headerName:"OS",field:"os",cellRenderer:osIconRenderer,width:30},
        {headerName:"Visited On",field:"createdOn"},
    ]
}
export {getColumnData};