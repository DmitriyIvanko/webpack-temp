import { Actions } from "./sign-in.actions";

export const FEATURE_NAME = "[SIGN_IN]";

export interface State {
    login: string;
    password: string;
}

const initialState: State = {
    login: "",
    password: "",
};

export function reducer(
    state = initialState,
    action: Actions
): State {
    switch (action.type) {
        default: {
            return state;
        };
    };
};
