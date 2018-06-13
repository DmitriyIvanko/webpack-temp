import { NgModule } from "@angular/core";

import { AuthenticationTicketService } from "./authentication-ticket.service";

@NgModule({
    providers: [
        AuthenticationTicketService,
    ]
})
export class AuthenticationTicketModule { }
