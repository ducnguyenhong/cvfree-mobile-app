import { ReportJobInfo } from './report-job.type';
import { CvInfo } from './cv.type';
import { JobInfo } from './job.type';
import { CompanyInfo } from './company.type';

export interface DashboardInfo {
  statis: {
    cv: number;
    job: number;
    company: number;
  };
  reportJobs: ReportJobInfo[];
  cvs: CvInfo[];
  jobs: JobInfo[];
  companies: CompanyInfo[];
}
