import { NgModule } from "@angular/core";

import { UserComponent } from "./user.component";
import { UserRoutingModule } from "./user-routing.module";
import { SharedModule } from "../shared";

@NgModule({
    declarations: [
        UserComponent,
    ],
    imports: [
        SharedModule,
        UserRoutingModule,
    ],
})
export class UserModule { }
