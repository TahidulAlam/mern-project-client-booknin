import { Outlet } from "react-router-dom";
import "./App.css";
import MainLayouts from "./components/layouts/MainLayouts";

function App() {
  return (
    <>
      <MainLayouts>
        <Outlet></Outlet>
      </MainLayouts>
    </>
  );
}

export default App;
