export class ValidationErrorConverter {
  static convert(value?: string[]): string {
    return (value || []).map((o) => {
      let m;
      if (o === 'accept') {
        return '受諾してください';
      }
      if (o === 'blank') {
        return '必ず入力してください';
      }
      m = o.match(/^confirmation\(attribute=(\d+)\)/);
      if (m) {
        return `${m[1]} と一致していません`;
      }
      if (o === 'empty') {
        return '必ず入力してください';
      }
      m = o.match(/^equal_to\(value=(\d+)\)/);
      if (m) {
        return `${m[1]} にしてください`;
      }
      if (o === 'even') {
        return '偶数にしてください';
      }
      if (o === 'exclusion') {
        return '予約されています';
      }
      m = o.match(/^greater_than\(value=(\d+)\)/);
      if (m) {
        return `${m[1]} より大きい値にしてください`;
      }
      m = o.match(/^greater_than_or_equal_to\(value=(\d+)\)/);
      if (m) {
        return `${m[1]} 以上の値にしてください`;
      }
      if (o === 'inclusion') {
        return '一覧にありません';
      }
      if (o === 'invalid') {
        return '不正な値です';
      }
      m = o.match(/^less_than\(value=(\d+)\)/);
      if (m) {
        return `${m[1]} より小さい値にしてください`;
      }
      m = o.match(/^less_than_or_equal_to\(value=(\d+)\)/);
      if (m) {
        return `${m[1]} 以下の値にしてください`;
      }
      if (o === 'model_invalid') {
        return 'バリデーションに失敗しました';
      }
      if (o === 'not_a_number') {
        return '数値で入力してください';
      }
      if (o === 'not_an_integer') {
        return '整数で入力してください';
      }
      if (o === 'odd') {
        return '奇数にしてください';
      }
      m = o.match(/^other_than\(value=(\d+)\)/);
      if (m) {
        return `${m[1]} 以外の値にしてください`;
      }
      if (o === 'present') {
        return '入力しないでください';
      }
      if (o === 'required') {
        return '入力してください';
      }
      if (o === 'taken') {
        return 'すでに存在します';
      }
      m = o.match(/^too_long\(value=(\d+)\)/);
      if (m) {
        return `${m[1]} 文字以内で入力してください`;
      }
      m = o.match(/^too_short\(value=(\d+)\)/);
      if (m) {
        return `${m[1]} 文字以上で入力してください`;
      }
      m = o.match(/^wrong_length\(value=(\d+)\)/);
      if (m) {
        return `${m[1]} 文字で入力してください`;
      }
      return o;
    }).join(', ');  
  }
}
