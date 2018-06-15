import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ScenarioTreeComponent } from "./scenario-tree.component";
import { ScenarioTreeContainer } from "./scenario-tree.container";
import { ScenarioTreeRoutingModule } from "./scenario-tree-routing.module";

@NgModule({
    declarations: [
        ScenarioTreeComponent,
        ScenarioTreeContainer,
    ],
    imports: [
        CommonModule,
        ScenarioTreeRoutingModule,
    ],
})
export class ScenarioTreeModule { }
