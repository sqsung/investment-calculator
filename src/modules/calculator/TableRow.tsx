import { PercentageCell } from "@/modules/calculator/PercentageCell";
import { Input, TableCell, TableRow as BaseTableRow } from "@/ui";
import { cn } from "@/utils";

interface RebalancingRowProps {
  holding: Holding;
  className?: string;
}

export const TableRow = ({ holding, className = "" }: RebalancingRowProps) => {
  return (
    <BaseTableRow className={cn("flex h-[150px] w-full", className)}>
      <TableCell className="flex flex-1 flex-col items-center justify-center gap-1">
        <p className="text-xl font-bold">{holding.name}</p>
        <p className="text-sm text-zinc-700">{holding.description}</p>
      </TableCell>

      <TableCell className="flex flex-1 flex-col justify-center gap-3">
        <div className="flex items-center gap-1">
          <p className="w-[50px] font-bold">가격</p>
          <Input type="numeric" />
        </div>
        <div className="flex items-center gap-1">
          <p className="w-[50px] font-bold">보유량</p>
          <Input type="numeric" />
        </div>
      </TableCell>

      <TableCell className="flex flex-1 items-center justify-center">
        <p className="text-xl font-bold">77.88%</p>
      </TableCell>

      <PercentageCell percentage={holding.stable} />
      <PercentageCell percentage={holding.growth} />
    </BaseTableRow>
  );
};
