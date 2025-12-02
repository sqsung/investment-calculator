import { Input } from "./ui/input";
import { TableCell, TableRow as BaseTableRow } from "./ui/table";

interface RebalancingRowProps {
  name: string;
  description: string;
}

const TableRow = ({ name, description }: RebalancingRowProps) => {
  return (
    <BaseTableRow className="flex w-full flex-1">
      <TableCell className="flex flex-1 flex-col items-center justify-center gap-1">
        <p className="text-xl font-bold">{name}</p>
        <p className="text-sm text-zinc-700">{description}</p>
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

      <TableCell className="flex flex-1 flex-col items-center justify-center gap-1">
        <p>{"24% > 3,100주"}</p>
        <p className="text-xl font-bold">+2,191주</p>
      </TableCell>

      <TableCell className="flex flex-1 flex-col items-center justify-center gap-1">
        <p>{"24% > 3,100주"}</p>
        <p className="text-xl font-bold">+2,191주</p>
      </TableCell>
    </BaseTableRow>
  );
};

export default TableRow;
