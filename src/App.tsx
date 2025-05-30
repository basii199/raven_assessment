import ExchangePage from "./components/pages/exchange-page";
import { CoinProvider } from "./context/coin-context.tsx";

const App = () => {
  return (
    <CoinProvider>
      <ExchangePage />
    </CoinProvider>
  );
};

export default App;
