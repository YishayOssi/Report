export function isNonEmptyString(str) {
  return typeof str === "string" && str.trim() !== "";
}




export function isValidWeaponsArray(arr) {
  if (!Array.isArray(arr)) return false;

  for (const weapon of arr) 
    if (isNonEmptyString(weapon) === false) {return false;}
  

return true;
}




