import { User } from "firebase/auth";

type AuthResponse = {
  status: "success" | "error";
  message: string;
};

type AuthPromise = Promise<AuthResponse | undefined>;

type AuthType = {
  register: (email: string, password: string) => AuthPromise;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  user: User | null;
  isAuthLoading: boolean;
};
