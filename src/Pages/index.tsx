import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LayoutDefault } from "./components/Layouts/LayoutDefault";
import HomePage from "./HomePage";

const Pages = () => {
  return (
    <LayoutDefault>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter >
    </LayoutDefault>
  );
}

export default Pages;