export function ConvertQualificationCode(
  code: number | null | undefined,
  sold_id: string
): string {
  if (sold_id?.includes("470")) return "تدريب مهني";
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

export function ConvertExamId(id: number) {
  switch (id) {
    case 35:
      return "قبضة يمين";
    case 37:
      return "قبضة شمال";
    case 39:
      return "بذل الجهد";
    case 40:
      return "شدة السمع";
    case 46:
      return "الظهر والرجلين";
    case 69:
      return "التتبع الضوئي";
  }
}
