import { BrowserRouter, Route, Routes } from "react-router-dom";

import ExchangePage from "./components/pages/exchange-page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExchangePage />} />
        <Route path="/wallets" element={<ExchangePage />} />
        <Route path="/roqqu-hub" element={<ExchangePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
