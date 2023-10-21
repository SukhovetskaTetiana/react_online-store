import "./App.css";
import Header from "./components/Header";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Error from "./components/Error";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/react_online-store" element={<Shop />} />
          <Route path="/react_online-store/cart" element={<Cart />} />
          <Route path="/react_online-store/*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
