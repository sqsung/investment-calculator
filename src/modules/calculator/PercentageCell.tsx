import { TableCell } from "@/modules/ui";

interface PercentageCellProps {
  percentage: number;
}

export const PercentageCell = ({ percentage }: PercentageCellProps) => {
  const goal = "> 3,100주";

  return (
    <TableCell className="flex flex-1 flex-col items-center justify-center gap-1">
      <p>
        {percentage}% {goal}
      </p>
      <p className="text-xl font-bold">+2,191주</p>
    </TableCell>
  );
};
