import { Report } from './report.d'

export interface Match extends Report {
    overall: number;
    actions: number;
}