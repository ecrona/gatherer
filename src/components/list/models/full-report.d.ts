import { Report } from './report.d'

export interface FullReport extends Report {
    actions: number;
    description: string;
}