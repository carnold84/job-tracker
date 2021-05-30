import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { JobsComponent } from './jobs.component';
import { JobsCreateComponent } from './components/jobs-create/jobs-create.component';
import { JobComponent } from './components/job/job.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  bootstrap: [JobsComponent],
  declarations: [
    JobsListComponent,
    JobsComponent,
    JobsCreateComponent,
    JobComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    JobsRoutingModule
  ]
})
export class JobsModule { }
