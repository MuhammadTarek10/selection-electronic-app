"use client";

import SortableButton from "@/components/SortableButton";
import { Examiner } from "@/data/models";
import { cn } from "@/lib/utils";
import { ConvertQualificationCode } from "@/utils/converters";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Examiner>[] = [
  {
    accessorKey: "qualification_code",
    header: ({ column }) => <SortableButton title="المؤهل" column={column} />,
    cell: ({ row }) => {
      const education = ConvertQualificationCode(
        row.original.qualification_code,
        row.original.sold_id!
      );

      return (
        <div
          className={cn("rounded-lg px-4 py-2 mx-auto", {
            "bg-green-800": education === "عليا",
            "bg-blue-800": education === "متوسط",
            "bg-yellow-800": education === "فوق متوسط",
            "bg-gray-500": education === "تدريب مهني",
          })}>
          {education}
        </div>
      );
    },
  },
  {
    accessorKey: "sold_id",
    header: "الرقم العسكري",
  },
  {
    accessorKey: "name",
    header: "الاسم",
  },
];
