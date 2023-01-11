import { createContext, useState } from "react";

export const FirebaseContext = createContext(null);

export const AuthContext = createContext(null);

export const LoadingContext = createContext();

export default function context({ children }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function Loading({ children }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [load, setLoad] = useState(false);

  return (
    <LoadingContext.Provider value={{ load, setLoad }}>
      {children}
    </LoadingContext.Provider>
  );
}
