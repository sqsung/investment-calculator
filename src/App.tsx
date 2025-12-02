import Classifier from "./components/Classifier";
import TableRow from "./components/TableRow";
import Sidebar from "./components/Sidebar";
import TableHeader from "./components/TableHeader";
import { Table, TableBody, TableFooter } from "./components/ui/table";

const PORTFOLIO = [
  {
    name: "미국 주식 (UH)",
    description: "(TIGER 미국배당다우존스)",
  },
  {
    name: "한국 주식",
    description: "(KODEX 200)",
  },
  {
    name: "금 (UH)",
    description: "(ACE KRX금현물)",
  },
  {
    name: "리츠",
    description: "(TIGER 리츠부동산인프라)",
  },
  {
    name: "미국채 10년 (UH)",
    description: "(KODEX 미국10년국채선물)",
  },
  {
    name: "현금성자산",
    description: "(TIGER KOFR금리액티브(합성))",
  },
  {
    name: "예수금",
    description: "(금액만 입력)",
  },
];

const App = () => {
  return (
    <div className="flex h-full min-h-screen">
      <Sidebar />
      <div className="flex-1 px-1 py-3">
        <div className="flex h-full w-full overflow-hidden rounded-2xl border border-zinc-300 bg-zinc-100">
          <Classifier />
          <Table className="flex h-full w-full flex-col">
            <TableHeader />
            <TableBody className="flex h-full flex-col bg-white">
              {PORTFOLIO.map((item) => (
                <TableRow
                  key={item.description}
                  name={item.name}
                  description={item.description}
                />
              ))}

              <TableFooter className="mt-auto h-[50px] border-t border-zinc-300 bg-zinc-900"></TableFooter>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default App;
