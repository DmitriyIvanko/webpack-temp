import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { MainLayoutModule } from "./main-layout";

const MODULES = [
    CommonModule,
    FormsModule,
    MainLayoutModule,
];

@NgModule({
    exports: MODULES,
    imports: MODULES,
})
export class SharedModule { }
