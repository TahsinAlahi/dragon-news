import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { firebaseAuth } from "../firebase/firebase.auth";
import { FirebaseError } from "firebase/app";

interface AuthContext {
  register: (email: string, password: string) => Promise<void>;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  user: User | null;
  isAuthLoading: boolean;
  authError: string | null;
}

const AuthContext = createContext<AuthContext | undefined>(undefined);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthContext["user"]>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [authError, setAuthError] = useState<AuthContext["authError"]>(null);

  async function register(email: string, password: string) {
    setIsAuthLoading(true);
    setAuthError(null);
    try {
      const userRes = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      const { user } = userRes;

      if (user) {
        setUser(user);
      }
    } catch (err) {
      if (err instanceof FirebaseError) {
        if (err.code === "auth/email-already-in-use") {
          setAuthError("Email already in use");
        } else if (err.code === "auth/weak-password") {
          setAuthError("Weak password");
        } else if (err.code === "auth/too-many-requests") {
          setAuthError("Too many requests");
        } else {
          console.error(err.message);
        }
      } else {
        console.error(err);
        setAuthError("Something went wrong");
      }
    } finally {
      setIsAuthLoading(false);
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

  const value = { register, loginWithEmail, user, isAuthLoading, authError };

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
