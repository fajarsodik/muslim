import "./App.css";

const App = ({ children }) => {
  return (
    <div className="container mt-4">
      <div className="flex w-full flex-col">
        <h1 className="text-3xl">Jadwal Sholat Wilayah</h1>
        <h2>Nama Wilayah</h2>
        {children}
      </div>
    </div>
  );
};

export default App;
