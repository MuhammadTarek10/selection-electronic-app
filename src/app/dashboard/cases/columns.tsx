"use client";

import SortableButton from "@/components/SortableButton";
import { Button } from "@/components/ui/button";
import { Case } from "@/data/models";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export const columns: ColumnDef<Case>[] = [
  {
    accessorKey: "final_hospital_result",
    header: ({ column }) => (
      <SortableButton title="رأي المستشفى" column={column} />
    ),
    cell: ({ row }) => {
      const result = row.original.final_hospital_result;

      return (
        <div
          className={cn("rounded-lg p-2", {
            "bg-green-700": result === "عودة للوحدة",
            "bg-red-600": result?.includes("رفت"),
            "bg-gray-500": result?.includes("انتظار"),
          })}>
          {result}
        </div>
      );
    },
  },
  {
    accessorKey: "complaint",
    header: "الشكوى",
  },
  {
    accessorKey: "examiner_status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          الحالة
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
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
