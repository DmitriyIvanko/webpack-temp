import { NgModule } from "@angular/core";

import { HeaderMenuModule } from "./header-menu";

const MODULES = [
    HeaderMenuModule,
];

@NgModule({
    exports: MODULES,
    imports: MODULES,
})
export class UserSharedModule { }
