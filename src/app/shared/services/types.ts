export interface Job {
  company?: string;
  dueDate?: string;
  id?: string;
  link?: string;
  name?: string;
  notes?: string;
  status: string;
  title?: string;
}

export interface JobResponse {
  job?: Job;
  msg: string;
  success: boolean;
}
