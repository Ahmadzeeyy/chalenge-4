import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavbarMovie from "./componens/NavbarMovie";
import Slider from "./componens/Silder";

function App() {
  return (
    <BrowserRouter>
      <NavbarMovie />
      <Slider />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
