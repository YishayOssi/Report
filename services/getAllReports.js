import { reports } from "../db/reports.db.js";

export function getAllReports() {
  return [...reports];
}
