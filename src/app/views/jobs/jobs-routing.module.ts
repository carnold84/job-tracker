import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { JobsCreateComponent } from './components/jobs-create/jobs-create.component';
import { JobComponent } from './components/job/job.component';


const routes: Routes = [
  {
    component: JobsListComponent,
    data: { animation: 'JobList' },
    path: ''
  },
  {
    component: JobsCreateComponent,
    data: { animation: 'CreateJob' },
    path: 'create-job'
  },
  {
    component: JobComponent,
    data: { animation: 'Job' },
    path: ':id'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
