import { createReducer, on } from '@ngrx/store';
import { AuthState } from '../states/auth.state';
import * as AuthActions from '../actions/auth.action';
import { User } from '../models/user.model';

export const initialState: AuthState = {
  isSuccess: false,
  error: '',
  user: <User>{},
}

export const authReducer = createReducer(
  initialState,
  on(AuthActions.signInWithGG, (state, action) => {
    console.log(action.type);
    return state;
  }),
  on(AuthActions.signInWithGGSuccess, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,
      user: action.user,
    };
    return newState;
  }),
  on(AuthActions.signInWithGGFailure, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,
      error: action.error,
    };
    return newState;
  }),
  on(AuthActions.signOut, (state, action) => {
    console.log(action.type);
    return state;
  }),
  on(AuthActions.signOutSuccess, (state) => {
    return {
      ...state,
      user: <User>{},
      isSuccess: true,
    };
  }),
  on(AuthActions.signOutFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(AuthActions.getUserInfoWhenAlreadySignedIn, (state, action) => {
    console.log(action.type);
    return {
      //trang thai hien gio
      ...state,
      isSuccess: true,
      user: action.user,
    };
  })
);
