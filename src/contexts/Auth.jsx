import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [connected, setConnected] = useState();

  return (
    <AuthContext.Provider value={{ connected, setConnected }}>
      {children}
    </AuthContext.Provider>
  );
}

