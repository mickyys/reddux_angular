import { Action } from '@ngrx/store'
import { type } from 'os';

export enum AuthActionTypes {
    LoggedUser = '[Auth] LOGGED_USER',
    LoginUser = '[Auth] LOGIN_USER',
    LoginUserError = '[Auth] LOGIN_USER_ERROR',
    LoggedIn = '[Auth] LOGGED_IN',
    LogoutAuth = '[Auth] LOGOUT_USER'
}

export class LoggedIn implements Action {
    readonly type = AuthActionTypes.LoggedIn;
    constructor(public paylod : { isLogin : boolean}){}
}

export class LogoutAuth implements Action {
    readonly type = AuthActionTypes.LogoutAuth;
    constructor(public paylod : { isLogin : boolean}){}
}

export class LoginUser implements Action {
    readonly type = AuthActionTypes.LoginUser;
    constructor(public paylod : { user : string, pass : string}){}
}

export class LoggedUser implements Action {
    readonly type = AuthActionTypes.LoggedUser;
    constructor(public paylod : any){}
}

export class LoginUserError implements Action {
    readonly type = AuthActionTypes.LoginUserError;
    constructor(public paylod : { error : string}){}
}

export type actions = LoggedIn | LogoutAuth | LoggedUser | LoginUserError | LoginUser;