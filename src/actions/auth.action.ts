import { User } from '@angular/fire/auth';
import { createAction, props } from '@ngrx/store';

export const signInWithGG = createAction('[Auth] Sign In With Gg');
export const signInWithGGSuccess = createAction(
  '[Auth] Sign In With Gg Success',
  props<{ user: User }>()
);
export const signInWithGGFailure = createAction(
  '[Auth] Sign In With Gg Failure',
  props<{ error: string }>()
);

export const signOut = createAction('[Auth] Sign Out');
export const signOutSuccess = createAction('[Auth] Sign Out Success');
export const signOutFailure = createAction(
  '[Auth] Sign Out Failure',
  props<{ error: string }>()
);

export const getUserInfoWhenAlreadySignedIn = createAction(
  '[Auth] Get User Info',
  props<{ user: User }>()
);
