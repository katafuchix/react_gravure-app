
export class YesNoConverter {
  static convert(value?: boolean): string {
    return value ? 'はい' : 'いいえ';
  }
}
