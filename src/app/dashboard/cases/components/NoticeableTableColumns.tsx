"use client";

import { TableColumn } from "@/components/ui/table-column";
import { Examiner } from "@/data/models";
import { ConvertAgain } from "@/utils/converters";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Examiner>[] = [
  TableColumn("again", "ملحوظ", (examiner) => ConvertAgain(examiner.again), false),
  TableColumn("sold_id", "الرقم العسكري", (examiner) => examiner.sold_id),
  TableColumn("name", "الاسم", (examiner) => examiner.name),
];
