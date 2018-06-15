import { NgModule } from "@angular/core";

import { UserComponent } from "./user.component";
import { UserRoutingModule } from "./user-routing.module";
import { SharedModule } from "../shared";
import { UserSharedModule } from "./user-shared";

@NgModule({
    declarations: [
        UserComponent,
    ],
    imports: [
        SharedModule,
        UserRoutingModule,
        UserSharedModule,
    ],
})
export class UserModule { }
