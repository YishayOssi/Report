import { reports } from "../db/reports.db.js";
import { isNonEmptyString } from "../utils/validators.js";

export function getReportById(id){
    if(isNonEmptyString(id)=== false){
        throw new Error("id must be a non-empty string") }
for(let i = 0; i < reports.length; i++){
    if(reports[i].id === id){
        return reports[i]}
   
}     
throw new Error("report not found")


}