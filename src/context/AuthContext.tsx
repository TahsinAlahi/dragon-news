import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useContext } from "react";
import { firebaseAuth } from "../firebase/firebase.auth";

interface AuthContext {
  register: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContext | undefined>(undefined);

function AuthProvider({ children }: { children: React.ReactNode }) {
  async function register(email: string, password: string) {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  }

  const value = { register };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("useAuth must be used within a AuthProvider");

  return context;
}

export default AuthProvider;
export { useAuth };
