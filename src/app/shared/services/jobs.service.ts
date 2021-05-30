import { Injectable } from '@angular/core';

import api from './demo-api';
import { Job, JobResponse } from './types';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  getJobs = async (): Promise<Array<Job>> => {
    return await api.getJobs();
  };

  getJob = async (id: string): Promise<Job> => {
    return await api.getJob(id);
  };

  createJob = async (data: Job): Promise<JobResponse> => {
    const job = await api.createJob(data);

    return {
      job,
      msg: `${job.name} was added.`,
      success: true,
    };
  };

  updateJob = async (data: Job): Promise<JobResponse> => {
    const { job } = await api.updateJob(data);

    return {
      job,
      msg: `${job.name} was update.`,
      success: true,
    };
  };

  deleteJob = async (data: Job): Promise<JobResponse> => {
    if (data.id) {
      const job = await api.deleteJob(data.id);

      return {
        job,
        msg: `${data.name} was removed.`,
        success: true,
      };
    }

    return {
      msg: `${data.name} was removed.`,
      success: false,
    };
  };
}
