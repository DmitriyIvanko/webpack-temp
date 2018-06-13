import { CommonModule } from "@angular/common";
import {
    NgModule,
    Optional,
    SkipSelf,
} from "@angular/core";

import { AuthenticationTicketModule } from "./authentication-ticket";
import {
    sessionActions,
    SessionModule,
} from "./session";

@NgModule({
    imports: [
        CommonModule,
        AuthenticationTicketModule,
        SessionModule
    ],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error("CoreModule is already loaded. Import it in the AppModule only");
        }
    }
}
