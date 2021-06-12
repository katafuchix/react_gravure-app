import { IResource } from "../resources/IResource";

export class InputValueReflector {
  execute<TResource extends IResource>(resource: TResource, e: any): TResource {
    if (!resource) {
      return resource;
    }

    const target = e.target;
    if (!target) {
      return resource;
    }

    const value = this.resolveTargetValue(target);
    const names = target.name.split('.');
    let obj: any = resource;
    for (let i = 0; i < names.length - 1; i++) {
      obj = obj[names[i]];
    }
    obj[names[names.length - 1]] = value;

    return resource;
  }

  private resolveTargetValue(target: any) {
    return target.type === 'checkbox' ? target.checked : target.value;
  }
}