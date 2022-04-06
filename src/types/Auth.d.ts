export interface AuthResponseItem {
  user: User;
  tokens: Tokens;
}

export interface Tokens {
  access: Token;
  refresh: Token;
}

export interface Token {
  token: string;
  expires: string;
}

export interface User {
  name: string;
  email: string;
  role: string;
  isEmailVerified: boolean;
  id: string;
}
