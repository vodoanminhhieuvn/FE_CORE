export interface SignInState {
  email: string;
  password: string;
  loading: boolean;
}

export type ContainerState = SignInState;
