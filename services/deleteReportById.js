import { reports } from "../db/reports.db.js";

export function deleteReportById(id){
    for(let i = 0; i < reports.length; i++){
        if(reports[i].id === id){
            reports.splice(i, 1)
            return
        }
    }

throw new Error("report not found")

}