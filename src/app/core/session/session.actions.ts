import { Action } from "@ngrx/store";

export const SIGN_IN_USER = "[SESSION] SIGN_IN_USER";
export const SIGN_IN_USER_FAIL = "[SESSION] SIGN_IN_USER_FAIL";
export const SIGN_IN_USER_SUCCESS = "[SESSION] SIGN_IN_USER_SUCCESS";

/* tslint:disable:max-classes-per-file */
export class SignInUserAction implements Action {
    public readonly type = SIGN_IN_USER;

    constructor(public payload: { login: string, password: string }) { }
}

export class SignInUserFailAction implements Action {
    public readonly type = SIGN_IN_USER_FAIL;
}

export class SignInUserSuccessAction implements Action {
    public readonly type = SIGN_IN_USER_SUCCESS;
}
/* tslint:enable:max-classes-per-file */

export type SessionActions =
    SignInUserAction |
    SignInUserFailAction |
    SignInUserSuccessAction;
 