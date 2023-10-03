import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavbarMovie from "./componens/NavbarMovie";

function App() {
  return (
    <BrowserRouter>
      <NavbarMovie />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
