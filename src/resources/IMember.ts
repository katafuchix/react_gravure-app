import { IImage } from "./IImage";
import { IResource } from "./IResource";

export interface IMember extends IResource {
  name?: string;
  password?: string;
  sex?: string;
  birth_day?: string;
  purchased_point?: number;
  bonus_point?: number;
  height?: number;
  body_type?: number;
  prefecture?: number;
  hometown?: number;
  annual_income?: number;
  drinking_type?: number;
  smoking_type?: number;
  occupation?: number;
  desired_dating_plan?: number;
  introduction?: string;
  tweet?: string;
  desired_meeting_place?: string;
  profile_image?: IImage;
  sub_images?: IImage[];
}
