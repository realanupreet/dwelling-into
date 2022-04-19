import "./styles.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Navigate
} from "react-router-dom";
import BlogDetail from "./BlogDetail";
import { Redirect } from "react-router-dom";

// import BrowserRouter as Router from "react-router-dom/BrowserRouter";
// import Route from "react-router-dom/Route";
// import Switch from "react-router-dom/Switch";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/redirect" element={<Navigate to="/create" />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
