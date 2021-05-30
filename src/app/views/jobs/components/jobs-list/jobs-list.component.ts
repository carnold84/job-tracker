import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/shared/services/jobs.service';
import { Job } from 'src/app/shared/services/types';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss'],
})
export class JobsListComponent implements OnInit {
  jobs: Array<Job> | undefined;
  view: String = 'jobs';

  constructor(private jobsService: JobsService) {}

  ngOnInit() {
    this.loadJobs();
  }

  private loadJobs = async () => {
    this.jobs = await this.jobsService.getJobs();
  };
}
