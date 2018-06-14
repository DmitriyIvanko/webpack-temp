import { AuthenticationTicketModel } from "./authentication-ticket.model";

import { rehydrate } from "../utils";

import { sessionActions } from "../session"

export const ENTITY_KEY = "AUTHENTICATION_TICKET";

export interface State {
    readonly entity: AuthenticationTicketModel;
}

function init(): State {
    const cachedState = JSON.parse(localStorage.getItem(ENTITY_KEY)) as State;
    const entity = new AuthenticationTicketModel(cachedState && cachedState.entity || undefined);

    return {
        entity,
    } as State;
}

export function reducer(
    state = init(),
    action: sessionActions.Actions
): State {
    switch (action.type) {
        case sessionActions.SIGN_IN_USER_SUCCESS: {
            return rehydrate(ENTITY_KEY, state, {
                entity: action.payload,
            }, "local");
        }
        default:
            return state;
    }
}
