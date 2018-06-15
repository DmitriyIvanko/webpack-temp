import { NgModule } from "@angular/core";

import { HeaderMenuModule } from "./header-menu";
import { UserLayoutModule } from "./user-layout";

const MODULES = [
    HeaderMenuModule,
    UserLayoutModule,
];

@NgModule({
    exports: MODULES,
    imports: MODULES,
})
export class UserSharedModule { }
