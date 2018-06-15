import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HeaderMenuComponent } from "./header-menu.component";

@NgModule({
    declarations: [
        HeaderMenuComponent,
    ],
    exports: [
        HeaderMenuComponent,
    ],
    imports: [
        RouterModule,
    ]
})
export class HeaderMenuModule { }
