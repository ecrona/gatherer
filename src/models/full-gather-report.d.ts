import { GatherReport } from './gather-report.d';

export interface FullGatherReport extends GatherReport {
    incremental: Array<Array<string>>;
}