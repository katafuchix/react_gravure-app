import { IMember } from "../../resources/IMember";
import { BaseApiClient } from "./BaseApiClient"

export class GravuresApiClient extends BaseApiClient<IMember> {
  protected get endpoint(): string {
    return process.env.REACT_APP_API_ENDPOINT || 'http://gravure-api.mine.nu/';
  }

  protected basePath(): string {
    return 'gra/index.json';
  }
}
