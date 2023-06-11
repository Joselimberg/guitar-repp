import { ISong } from "@/interfaces/song";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<ISong>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "link",
    header: "Enlace",
    cell: ({ row }) => {

      return <a href={row.getValue('link')}>{row.getValue('link')}</a>;
    },
  },
];
