import { NgModule } from "@angular/core";

import { MainLayoutComponent } from "./main-layout.component";

@NgModule({
    declarations: [
        MainLayoutComponent,
    ],
    exports: [
        MainLayoutComponent,
    ],
})
export class MainLayoutModule { }
