import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface CoinContextType {
  symbol: string;
  updateSymbol: (newSymbol: string) => void;
}

const CoinContext = createContext<CoinContextType | undefined>(undefined);

interface ProviderProps {
  children: ReactNode;
}

export const CoinProvider: React.FC<ProviderProps> = ({ children }) => {
  const [symbol, setSymbol] = useState<string>("BTCUSDT");

  const updateSymbol = (newSymbol: string) => {
    setSymbol(newSymbol);
  };

  return (
    <CoinContext.Provider value={{ symbol, updateSymbol }}>
      {children}
    </CoinContext.Provider>
  );
};

export const useCoinContext = (): CoinContextType => {
  const context = useContext(CoinContext);
  if (!context) {
    throw new Error("useCoinContext must be used within a CoinProvider");
  }
  return context;
};
