import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

const MODULES = [
    CommonModule,
    FormsModule,
];

@NgModule({
    exports: MODULES,
    imports: MODULES,
})
export class SharedModule { }
