import { createContext, ReactNode } from "react";

interface UserContextProps {
  children: ReactNode;
}

export const UserContext = createContext({});

export function UserContextProvider({ children }: UserContextProps) {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
}
