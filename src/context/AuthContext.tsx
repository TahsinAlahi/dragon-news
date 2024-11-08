import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { firebaseAuth } from "../firebase/firebase.auth";
import { FirebaseError } from "firebase/app";
import { AuthPromise, AuthResponse, AuthType } from "../@types/auth";

const AuthContext = createContext<AuthType | undefined>(undefined);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthType["user"]>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  async function register(email: string, password: string): AuthPromise {
    setIsAuthLoading(true);
    try {
      const userRes = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      const { user } = userRes;

      if (user) {
        setUser(user);
        return { status: "success", message: "User created successfully" };
      }
    } catch (err) {
      if (err instanceof FirebaseError) {
        if (err.code === "auth/email-already-in-use") {
          return { status: "error", message: "Email already in use" };
        } else if (err.code === "auth/weak-password") {
          return { status: "error", message: "Weak password" };
        } else if (err.code === "auth/too-many-requests") {
          return { status: "error", message: "Too many requests" };
        } else {
          return { status: "error", message: err.message };
        }
      } else {
        console.error(err);
        return { status: "error", message: "Something went wrong" };
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
      (user: AuthType["user"]) => {
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
