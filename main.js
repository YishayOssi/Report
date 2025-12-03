import {createReport}from "./services/createReport.js"
import { saveReport } from "./services/saveReport.js";
import { reports } from "./db/reports.db.js";
import { getAllReports } from "./services/getAllReports.js";
import { getReportById } from "./services/getReportById.js";





const a = (createReport("211380738", ["M4", "RPG"], "hiiiiiii", "yishay"));
saveReport(a)
const b = (createReport("21138", ["M4", "RPG"], "hiiiiiii", "yishay"));
saveReport(b)
console.log(getReportById("2113807"));




