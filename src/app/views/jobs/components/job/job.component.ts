import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

import { JobsService } from 'src/app/shared/services/jobs.service';
import { Job, JobResponse } from 'src/app/shared/services/types';
import { STATUSES } from 'src/app/shared/components/status-picker/status-picker.component';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
})
export class JobComponent implements OnInit {
  canEdit: boolean = false;
  companyControl: FormControl = new FormControl('');
  dueDateControl: FormControl = new FormControl('');
  job: Job | undefined;
  linkControl: FormControl = new FormControl('');
  notesControl: FormControl = new FormControl('');
  showConfirmDialog: boolean = false;
  status: string = STATUSES.ACTIVE;
  titleControl: FormControl = new FormControl('');

  constructor(
    private jobsService: JobsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getJob(id);
    }
  }

  private getJob = async (id: string) => {
    this.job = await this.jobsService.getJob(id);
    const { company, dueDate, link, notes, status, title } = this.job;

    this.companyControl.setValue(company);
    this.dueDateControl.setValue(dueDate);
    this.linkControl.setValue(link);
    this.notesControl.setValue(notes);
    this.status = status;
    this.titleControl.setValue(title);
  };

  public onStatusSelect = (value: string) => {
    this.status = value;
  };

  public onStatusChange = (value: string) => {
    const data: Job = {
      ...this.job,
      status: value,
    };

    this.updateJob(data);
  };

  public updateJob = async (data: Job) => {
    const result: JobResponse = await this.jobsService.updateJob(data);

    if (result) {
      this.job = result.job;
      this.canEdit = false;
    }
  };

  public onUpdate = async () => {
    const id = this.job?.id;

    this.updateJob({
      company: this.companyControl.value,
      dueDate: this.dueDateControl.value,
      id,
      link: this.linkControl.value,
      notes: this.notesControl.value,
      status: this.status,
      title: this.titleControl.value,
    });
  };

  public onDelete = () => {
    this.showConfirmDialog = true;
  };

  public onDeleteConfirm = async () => {
    if (this.job) {
      const result: JobResponse = await this.jobsService.deleteJob(this.job);

      this.showConfirmDialog = false;

      if (result) {
        this.router.navigateByUrl('/');
      }
    }
  };

  public onDeleteCancel = () => {
    this.showConfirmDialog = false;
  };

  public onEdit = () => {
    this.canEdit = !this.canEdit;
  };

  public onEditCancel = () => {
    this.canEdit = false;
  };
}
