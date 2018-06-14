import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import { AuthenticationTicketService } from "./authentication-ticket.service";
import {
    ENTITY_KEY,
    reducer,
} from "./authentication-ticket.reducer";

@NgModule({
    providers: [
        AuthenticationTicketService,
    ],
    imports: [
        StoreModule.forFeature(ENTITY_KEY, reducer),
    ],
})
export class AuthenticationTicketModule { }
