import { Action } from "@ngrx/store";

export const INIT = "[SIGN_IN] INIT";

/* tslint:disable:max-classes-per-file */
export class InitAction implements Action {
    public readonly type = INIT;
}
/* tslint:enable:max-classes-per-file */

export type Actions =
    InitAction;
