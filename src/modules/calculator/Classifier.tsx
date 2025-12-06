import { CATEGORIES } from "@/constants";
import { cn } from "@/utils";

interface ClassifierProps {
  category: (typeof CATEGORIES)[PortfolioCategory];
  isEmpty: boolean;
  isLast?: boolean;
}

export const Classifier = ({
  category,
  isEmpty,
  isLast = false,
}: ClassifierProps) => {
  if (isEmpty) {
    return null;
  }

  return (
    <span
      className={cn(
        "flex w-[100px] shrink-0 items-center justify-center border-b border-zinc-700 bg-zinc-900 text-sm font-bold text-white",
        isLast && "border-0",
      )}
    >
      {category}
    </span>
  );
};
