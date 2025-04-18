// types.ts

// Action Types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// State Type
export interface AuthState {
  user: any;
  loading: boolean;
  error: string | null;
}

// Action Payload Types
export interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
  payload: { username: string; password: string };
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: any; // Adjust the type as per your response
}

export interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: string;
}

export type AuthActionTypes =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction;
