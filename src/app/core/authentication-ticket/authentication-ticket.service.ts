import { Injectable } from "@angular/core";
import {
    Headers,
    Http,
    Request
} from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { AuthenticationTicketMapper } from "./authentication-ticket.mapper";
import { AuthenticationTicketModel } from "./authentication-ticket.model";
import { AppSettings } from "../../app.settings";


@Injectable()
export class AuthenticationTicketService {
    private authenticationTiketMapper: AuthenticationTicketMapper;

    constructor(
        private http: Http,
    ) {
        this.authenticationTiketMapper = new AuthenticationTicketMapper();
    }

    public getAuthenticationTiket(login: string, password: string): Observable<AuthenticationTicketModel> {
        const header = new Headers({ "Content-Type": "application/x-www-form-urlencoded" });
        const request = new Request({
            body: `grant_type=password&username=${login}&password=${password}&client_id=${AppSettings.clientId}`,
            headers: header,
            method: "POST",
            url: `${AppSettings.connectionString}api/token`,
        });

        return this.http.request(request).pipe(
            map((response) => this.authenticationTiketMapper.mapInstanceToClient(response.json())),
        );
    }

    public refreshAutenticationTicket(
        refreshToken: string,
        redirectUrl?: string,
    ): Observable<AuthenticationTicketModel> {
        const header = new Headers({ "Content-Type": "application/x-www-form-urlencoded" });
        const request = new Request({
            body: `grant_type=refresh_token&refresh_token=${refreshToken}&client_id=${AppSettings.clientId}`,
            headers: header,
            method: "POST",
            url: `${AppSettings.connectionString}api/token`,
        });

        return this.http.request(request).pipe(
            map((response) => {
                const ticket = this.authenticationTiketMapper.mapInstanceToClient(response.json());

                // to do: research more about this hack for redirect url:
                if (ticket) {
                    ticket.redirectUrl = redirectUrl;
                }

                return ticket;
            }),
        );
    }
}
