import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { UserLayoutComponent } from "./user-layout.component";

@NgModule({
    declarations: [
        UserLayoutComponent,
    ],
    exports: [
        UserLayoutComponent,
    ],
    imports: [
        RouterModule,
    ],
})
export class UserLayoutModule { }
