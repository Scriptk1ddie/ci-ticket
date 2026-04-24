import Ticket from "./components/Ticket";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Ticket />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
