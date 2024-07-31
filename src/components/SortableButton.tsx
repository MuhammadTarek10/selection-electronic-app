import { Column } from "@tanstack/react-table";
import { Button } from "./ui/button";
import { ArrowUpDown } from "lucide-react";

const SortableButton = ({
  column,
  title,
}: {
  column: Column<any, unknown>;
  title: string;
}) => {
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
      {title}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
};
export default SortableButton;
