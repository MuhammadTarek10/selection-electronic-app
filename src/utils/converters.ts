export function ConvertQualificationCode(
  code: number | null | undefined,
  sold_id?: string
): string {
  if (sold_id?.includes("470")) return "تدريب مهنى";
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
