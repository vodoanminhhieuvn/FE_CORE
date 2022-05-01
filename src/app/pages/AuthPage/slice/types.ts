import { Token } from 'types/Auth';

export interface AuthFormState {
  token: Token;
  refreshToken: Token;
  loading: boolean;
  error?: AuthErrorType | null;
}

export enum AuthErrorType {
  MISSING_USERNAME = 1,
  MISSING_EMAIL = 2,
  MISSING_PASSWORD = 3,
  MISSING_RE_PASSWORD = 4,
  WRONG_EMAIL_OR_PASSWORD = 5,
}

export type ContainerState = AuthFormState;
