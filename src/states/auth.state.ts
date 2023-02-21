import { User } from "@angular/fire/auth";

export interface AuthState{
  user: User;
  error : string;
  isSuccess: boolean;
}
