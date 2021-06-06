import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { JobsCreateComponent } from './components/jobs-create/jobs-create.component';
import { JobComponent } from './components/job/job.component';

const routes: Routes = [
  {
    component: JobsListComponent,
    data: { animationState: 'JobsList' },
    path: '',
  },
  {
    component: JobsCreateComponent,
    data: { animationState: 'JobCreate' },
    path: 'create-job',
  },
  {
    component: JobComponent,
    data: { animationState: 'Job' },
    path: ':id',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobsRoutingModule {}
