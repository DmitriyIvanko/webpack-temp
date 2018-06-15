import {
    Component,
    Input,
} from "@angular/core";
import { retry } from "rxjs/operators";

@Component({
    selector: "ab-scenario-tree",
    styles: [require("./scenario-tree.scss").toString()],
    template: require("./scenario-tree.template.html"),
})
export class ScenarioTreeComponent {

    @Input()
    public selectedScenarioType: string;

    public get isGfaSelected(): boolean {
        return this.selectedScenarioType === "gfa";
    }

    public get isNoSelected(): boolean {
        return this.selectedScenarioType === "no";
    }

    public get isSimSelected(): boolean {
        return this.selectedScenarioType === "sim";
    }

    public get isToSelected(): boolean {
        return this.selectedScenarioType === "to";
    }
}
