import { Injectable } from "@angular/core";
import {
    Http,
    Request,
    Response,
} from "@angular/http";


@Injectable()
export class RequestHandler {

    constructor(
        private http: Http,
    ) { }


}
