import { TableHeader as BaseTableHeader, TableHead } from "@/ui";

export const TableHeader = () => {
  return (
    <BaseTableHeader className="flex border-b border-zinc-300 bg-zinc-900">
      <TableHead className="flex flex-1 items-center justify-center py-2 text-sm font-bold text-white">
        자산군
      </TableHead>
      <TableHead className="flex flex-1 items-center justify-center py-2 text-sm font-bold text-white">
        보유
      </TableHead>
      <TableHead className="flex flex-1 items-center justify-center py-2 text-sm font-bold text-white">
        현재 비율
      </TableHead>
      <TableHead className="flex flex-1 items-center justify-center py-2 text-sm font-bold text-white">
        안정형
      </TableHead>
      <TableHead className="flex flex-1 items-center justify-center py-2 text-sm font-bold text-white">
        성장형
      </TableHead>
    </BaseTableHeader>
  );
};
