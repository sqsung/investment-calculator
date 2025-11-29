function App() {
  const name = "james";

  return (
    <div className="min-h-screen">
      <p className="custom-class custom-class-1 bg-red-500 text-center text-4xl font-bold text-yellow-500 hover:text-blue-500">
        {name}
      </p>
      <p className="custom-class custom-class-3 text-4xl hover:bg-red-500">
        Hello world!
      </p>
    </div>
  );
}

export default App;
