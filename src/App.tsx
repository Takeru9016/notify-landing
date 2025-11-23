import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Footer, Header } from "./components";
import Privacy from "./pages/Privacy";
import Support from "./pages/Support";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
