import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { JobsService } from 'src/app/shared/services/jobs.service';
import { STATUSES } from 'src/app/shared/components/status-picker/status-picker.component';
import { Job, JobResponse } from 'src/app/shared/services/types';

@Component({
  selector: 'app-jobs-create',
  templateUrl: './jobs-create.component.html',
  styleUrls: ['./jobs-create.component.scss'],
})
export class JobsCreateComponent implements OnInit {
  companyControl: FormControl = new FormControl('');
  dueDateControl: FormControl = new FormControl('');
  linkControl: FormControl = new FormControl('');
  notesControl: FormControl = new FormControl('');
  status: string = STATUSES.ACTIVE;
  titleControl: FormControl = new FormControl('Front End Developer');

  constructor(private jobsService: JobsService, private router: Router) {}

  ngOnInit() {}

  public onCreate = async () => {
    const job: Job = {
      company: this.companyControl.value,
      dueDate: this.dueDateControl.value,
      link: this.linkControl.value,
      notes: this.notesControl.value,
      status: this.status,
      title: this.titleControl.value,
    };
    const result: JobResponse = await this.jobsService.createJob(job);

    if (result.success) {
      this.router.navigateByUrl('/');
    }
  };

  public onStatusSelect = (value: string) => {
    this.status = value;
  };
}
