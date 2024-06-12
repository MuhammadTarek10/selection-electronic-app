export function ConvertQualificationCode(code: number | null | undefined): string {
  switch (code) {
    case 8:
      return "متوسط";
    case 1:
      return "فوق متوسط";
    case 2:
      return "عليا";
    default:
      return "";
  }
}

export function ConvertAgain(again: boolean | null | undefined): string {
  if (again) {
    return "نعم";
  } else {
    return "لا";
  }
}
