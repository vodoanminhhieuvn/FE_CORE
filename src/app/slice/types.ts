import { Token } from 'types/Auth';

export interface SessionState {
  loading: boolean;
  accessToken?: Token;
  isAuthenticated: boolean;
  redirectPath: string;
}
