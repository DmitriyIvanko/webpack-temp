import { NgModule } from "@angular/core";
import { BsDropdownModule } from "ngx-bootstrap";

import { HeaderMenuComponent } from "./header-menu.component";

@NgModule({
    declarations: [
        HeaderMenuComponent,
    ],
    exports: [
        HeaderMenuComponent,
    ],
    imports: [
        BsDropdownModule.forRoot(),
    ]
})
export class HeaderMenuModule { }
