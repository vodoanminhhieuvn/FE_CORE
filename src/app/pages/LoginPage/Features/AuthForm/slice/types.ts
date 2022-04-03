export interface AuthFormState {
  username: string;
  email: string;
  password: string;
  rePassword: string;
  token: string;
  refreshToken: string;
  loading: boolean;
  error?: AuthErrorType | null;
}

export enum AuthErrorType {
  MISSING_USERNAME = 1,
  MISSING_EMAIL = 2,
  MISSING_PASSWORD = 3,
  MISSING_RE_PASSWORD = 4,
}
export type ContainerState = AuthFormState;
