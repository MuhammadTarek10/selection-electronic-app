"use client";

import { Button } from "@/components/ui/button";
import { Examiner } from "@/data/models";
import { cn } from "@/lib/utils";
import { ConvertQualificationCode } from "@/utils/converters";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export const columns: ColumnDef<Examiner>[] = [
  {
    accessorKey: "qualification_code",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          المؤهل
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const education = ConvertQualificationCode(
        row.original.qualification_code
      );

      return (
        <div
          className={cn("rounded-lg px-4 py-2 mx-auto", {
            "bg-green-800": education === "عليا",
            "bg-blue-800": education === "متوسط",
            "bg-yellow-800": education === "فوق متوسط",
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
