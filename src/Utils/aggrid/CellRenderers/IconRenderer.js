import * as Icons from '../../icons'
const browserIconRenderer = (node) =>{
    return iconRenderer(node.value,"browserIcons")
}

const deviceIconRenderer = (node) =>{
    return iconRenderer(node.value,"deviceIcons")
}

const osIconRenderer = (node) =>{
   return iconRenderer(node.value,"osIcons")
}

const iconRenderer =(value,iconType)=>{
    return "<span class='iconCell'>"+(Icons[iconType][value.toLowerCase()]|| " ")+`</span>`;
}

export {browserIconRenderer,deviceIconRenderer,osIconRenderer};