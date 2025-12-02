import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import CalculatorPage from "./pages/calculator/CalculatorPage";
import SettingsPage from "./pages/settings/SettingsPage";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<CalculatorPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
