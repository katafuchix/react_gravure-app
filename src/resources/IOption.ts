import { IResource } from "./IResource";
import { IOptionItem } from "./IOptionItem";

export interface IOption extends IResource {
  body_types?: IOptionItem[];
  prefectures?: IOptionItem[];
  hometowns?: IOptionItem[];
  annual_incomes?: IOptionItem[];
  drinking_types?: IOptionItem[];
  smoking_types?: IOptionItem[];
  occupations?: {
    male?: IOptionItem[];
    female?: IOptionItem[];
  };
  login_statuses: IOptionItem[];
  desired_dating_plans: IOptionItem[];
}
