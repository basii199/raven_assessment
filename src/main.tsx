import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { CoinProvider } from "./context/coin-context.tsx";
import App from "./App.tsx";
import "@/styles/variables.css";
import "@/styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CoinProvider>
      <App />
    </CoinProvider>
  </StrictMode>
);
