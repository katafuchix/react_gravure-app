import { IJobInterval } from "./IJobInterval";
import { IMemberCondition } from "./IMemberCondition";

export interface IFootprintJobParams {
  member?: IMemberCondition;
  member_interval?: IJobInterval;
  target?: IMemberCondition;
  target_interval?: IJobInterval;
}
