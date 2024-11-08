import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { firebaseAuth } from "../firebase/firebase.auth";

interface AuthContext {
  register: (email: string, password: string) => Promise<void>;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  user: User | null;
  isAuthLoading: boolean;
}

const AuthContext = createContext<AuthContext | undefined>(undefined);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthContext["user"]>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  async function register(email: string, password: string) {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  }

  async function loginWithEmail(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      firebaseAuth,
      (user: AuthContext["user"]) => {
        setUser(user);
        setIsAuthLoading(false);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const value = { register, loginWithEmail, user, isAuthLoading };

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
