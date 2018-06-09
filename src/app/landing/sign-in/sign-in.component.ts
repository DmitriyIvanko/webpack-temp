import {
    Component,
    Output,
    EventEmitter,
} from "@angular/core";

@Component({
    selector: "ab-sign-in",
    template: require("./sign-in.template.html"),
})
export class SignInComponent {
    public login: string;

    @Output()
    public signIn = new EventEmitter<{ login: string, password: string }>();
    
    public password: string;

    public onSignInClick(): void {
        this.signIn.emit({
            login: this.login,
            password: this.password,
        });
    }
}
