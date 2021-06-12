import { IJobInterval } from "./IJobInterval";
import { IMemberCondition } from "./IMemberCondition";

export interface ILoginJobParams {
  member?: IMemberCondition;
  member_interval?: IJobInterval;
}
