import { isNonEmptyString, isValidWeaponsArray } from "../utils/validators.js"; 


export function createReport(id,  weapons, text, terroristName="Muhammad"){
    const dict = {"id": id, "terroristName": terroristName, "weapons": weapons, "text": text}

    if(isNonEmptyString(id) === false)
        throw new Error("id must be a non-empty string")

    if(isNonEmptyString(text) === false)
        throw new Error("text must be a string")
    
    if(isValidWeaponsArray(weapons) === false)
        throw new Error("weapons must be an array of non-empty strings");
        
     
return dict
}








