import * as localforage from 'localforage';
import { v4 as uuidv4 } from 'uuid';
import { Job } from './types';

const init = async () => {
  localforage.config({
    driver: localforage.LOCALSTORAGE,
    name: 'job-tracker',
    version: 1.0,
    size: 4980736,
    storeName: 'job_tracker',
  });

  const jobs = await localforage.getItem('jobs');
  if (jobs === null) {
    await localforage.setItem('jobs', [
      {
        company: 'Google',
        dueDate: '20 Sep',
        id: '1',
        link: 'https://google.com/',
        notes: '',
        status: 'active',
        title: 'Brand Manager',
      },
      {
        company: 'Apple',
        dueDate: '21 Sep',
        id: '2',
        link: 'https://www.apple.com/',
        notes: '',
        status: 'active',
        title: 'Graphic Designer',
      },
      {
        company: 'Microsoft',
        dueDate: '21 Sep',
        id: '3',
        link: 'https://www.microsoft.com/',
        notes: '',
        status: 'active',
        title: 'Interaction Designer',
      },
      {
        company: 'BBDO',
        dueDate: '24 Sep',
        id: '4',
        link: 'https://www.bbdo.com/',
        notes: '',
        status: 'waiting',
        title: 'Graphic Designer',
      },
    ]);
  }
};

export default {
  init,
  createJob: async (job: Job): Promise<any> => {
    let jobs: Array<Job> = (await localforage.getItem('jobs')) || [];
    job.id = uuidv4();
    jobs.push(job);

    await localforage.setItem('jobs', jobs);

    return {
      job,
      msg: `${job.name} was added`,
    };
  },
  updateJob: async (updatedJob: Job): Promise<any> => {
    let jobs: Array<Job> = (await localforage.getItem('jobs')) || [];
    let job: any;
    jobs = jobs.map((currentJob) => {
      if (currentJob.id === updatedJob.id) {
        const newJob = {
          ...currentJob,
          ...updatedJob,
        };
        job = newJob;

        return newJob;
      }
      return currentJob;
    });

    await localforage.setItem('jobs', jobs);

    return {
      job,
      msg: `${job.name} was added`,
    };
  },
  deleteJob: async (id: string): Promise<any> => {
    let jobs: Array<Job> = (await localforage.getItem('jobs')) || [];
    let deletedJob;
    jobs = jobs.filter((job) => {
      deletedJob = job.id === id ? job : undefined;
      return job.id !== id;
    });

    await localforage.setItem('jobs', jobs);

    return {
      job: deletedJob,
      msg: `${name} was added`,
    };
  },
  getJobs: async (): Promise<Array<Job>> => {
    return (await localforage.getItem('jobs')) || [];
  },
  getJob: async (id: string): Promise<Job> => {
    let jobs: Array<Job> = (await localforage.getItem('jobs')) || [];
    return jobs.filter((job) => {
      return job.id === id;
    })[0];
  },
};
