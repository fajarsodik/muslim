import { Children, Fragment } from "react";
import "./App.css";

const App = ({ children }) => {
  return (
    <div>
      <p>test</p>
      {children}
      <p>test</p>
    </div>
  );
};

export default App;
