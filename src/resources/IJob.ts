import { IResource } from "./IResource";

export interface IJob extends IResource {
  job_type?: string;
}
