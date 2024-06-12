import { Button } from "@/components/ui/button";
import { Examiner } from "@/data/models";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export const TableColumn = (key: string, header: string, cell: (row: Examiner) => React.ReactNode, sortable: boolean = true): ColumnDef<Examiner> => ({
  accessorKey: key,
  header: ({ column }) => {
    return sortable ? (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        <ArrowUpDown className="m-2 h-4 w-4" />
        {header}
      </Button>
    ) : (
      <span>{header}</span>
    );
  },
  cell: ({ row }) => cell(row.original),
});
