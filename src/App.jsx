import { Link, Outlet } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <nav>
        <Link to="/test">Home</Link>
        {" | "}
        <Link to="/test/contact">Contact</Link>
      </nav>

      <Outlet />

      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;