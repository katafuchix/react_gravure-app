
export class OfferStatusConverter {
  static convert(value?: string): string {
    switch(value) {
      case 'offered':
        return '未成立';
      case 'complete':
        return '成立';
      case 'reoffered':
        return '再オファー';
      default:
        return '';
    }
  }
}
