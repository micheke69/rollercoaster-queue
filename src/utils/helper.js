export const convertInputToString = (str) =>{
    str = str.replaceAll(/\s/g,"");
    str = str.replaceAll(/\d{3}/g,"");
    str = str.replaceAll(/\s,/g,",");
    str = str.replaceAll(/,,/g,",");
    str = str.replaceAll(/[^0-9],\s/g,"");
    str = str.replaceAll(/[a-z]/g,"");

    return str;
}

export const convertStringToArray = (str) =>{
    return str
    .split(',')
    .filter(v=>v !== '')
    .map(v=>+v);
}
