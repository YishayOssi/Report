import { reports } from "../db/reports.db.js";


export function saveReport(dict) {
    for (let report of reports) {
        if (report.id === dict.id) 
            throw new Error("report with this id already exists")
    }
    reports.push(dict)
}





