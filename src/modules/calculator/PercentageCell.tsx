import { TableCell } from "@/modules/ui";
import { cn, getNumberWithCommas, getTargetAmount } from "@/utils";

const CellWrapper = ({ children }: WrapperComponent) => {
  return (
    <TableCell className="flex flex-1 flex-col items-center justify-center gap-1">
      {children}
    </TableCell>
  );
};

interface PercentageCellProps {
  percentage: number;
  total: number;
  unit: string;
  value: PortfolioInputObject;
  isCalculated: boolean;
}

export const PercentageCell = ({
  total,
  percentage,
  unit,
  value,
  isCalculated,
}: PercentageCellProps) => {
  if (!isCalculated) {
    return (
      <CellWrapper>
        <p>💡 {percentage}%</p>
        <p className="text-xl font-bold text-zinc-300">(N/A)</p>
      </CellWrapper>
    );
  }

  const targetAmount = Math.floor(getTargetAmount(total, percentage));
  const targetQty = value.price ? Math.floor(targetAmount / value.price) : 0;
  const differenceQty = Math.floor(targetQty - value.quantity);

  const status = (() => {
    if (differenceQty === 0) {
      return "equal";
    }

    if (differenceQty > 0) {
      return "more";
    }

    return "less";
  })();
  const goal = `> ${getNumberWithCommas(targetQty)}${unit}`;

  return (
    <CellWrapper>
      <p>
        💡 {percentage}% {goal}
      </p>
      <p
        className={cn(
          "text-xl font-bold text-zinc-500",
          status === "more" && "text-red-500",
          status === "less" && "text-blue-500",
        )}
      >
        {status === "more" ? "+" : ""}
        {getNumberWithCommas(differenceQty)}
        {unit}
      </p>
    </CellWrapper>
  );
};
