import { IResource } from "./IResource";

export interface IImage extends IResource {
  content?: string;
  delete?: boolean;
  url?: string;
}
