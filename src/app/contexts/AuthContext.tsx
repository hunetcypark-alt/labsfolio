import { createContext, useContext, useState, ReactNode } from "react";
import { MockUser, MOCK_USERS } from "../data/mockData";

interface AuthContextType {
  user: MockUser | null;
  login: (role: "designer" | "sales") => void;
  logout: () => void;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  isLoggedIn: false,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<MockUser | null>(null);

  const login = (role: "designer" | "sales") => {
    const mockUser = MOCK_USERS.find((u) => u.role === role) || MOCK_USERS[1];
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
