import { ToastContainer } from "react-toastify";
import "./App.css";
import CityDropdown from "./components/CityDropdown";
import { useStore } from "./stores/store";

const App = ({ children }) => {
  const { selectedCity } = useStore();

  return (
    <div className="container mt-4">
      <div className="flex w-full flex-col">
        <h1 className="text-3xl">Jadwal Sholat Wilayah</h1>
        <h2>{selectedCity}</h2>
        <CityDropdown />
        <ToastContainer />
        {children}
      </div>
      <div></div>
    </div>
  );
};

export default App;
