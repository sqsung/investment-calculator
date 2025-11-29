import { Button } from "./components/ui/button";

const App = () => {
  return (
    <div className="flex h-full min-h-screen">
      <div className="flex flex-col bg-white p-3">
        <h1 className="text-2xl font-bold tracking-wide">PF/RB</h1>
        <Button className="mt-auto w-52">계산하기</Button>
      </div>
      <div className="flex-1 p-1">
        <div className="h-full w-full rounded-2xl bg-zinc-900"></div>
      </div>
    </div>
  );
};

export default App;
