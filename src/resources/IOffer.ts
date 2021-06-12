import { IMember } from "./IMember";
import { IResource } from "./IResource";

export interface IOffer extends IResource {
  from_member?: IMember;
  to_member?: IMember;
  meeting_type?: string;
  status?: string;
  message?: string;
  skipped?: boolean;
  created_at?: string;
}
