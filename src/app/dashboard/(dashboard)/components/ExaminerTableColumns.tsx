"use client";

import { Button } from "@/components/ui/button";
import { TableColumn } from "@/components/ui/table-column";
import { Examiner } from "@/data/models";
import { ConvertAgain, ConvertQualificationCode } from "@/utils/converters";
import { ColumnDef } from "@tanstack/react-table";
import { Edit3 } from "lucide-react";

export const columns: ColumnDef<Examiner>[] = [
  {
    id: "actions",
    cell: ({ row }) => (
      <div className="flex items-center">
        <Button variant="ghost" onClick={() => console.log("edit", row.original)}>
          <Edit3 className="h-5 w-5" />
        </Button>
      </div>
    ),
  },
  TableColumn("again", "ملحوظ", (examiner) => ConvertAgain(examiner.again)),
  TableColumn("mohafza_code", "المحافظة", (examiner) => examiner.mohafza_code),
  TableColumn("qualification_code", "المؤهل", (examiner) => ConvertQualificationCode(examiner.qualification_code)),
  TableColumn("sold_id", "الرقم العسكري", (examiner) => examiner.sold_id),
  TableColumn("name", "الاسم", (examiner) => examiner.name),
];
