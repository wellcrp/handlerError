import { ErrorHandler, Injectable } from "@angular/core";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    handleError(error) {
        console.log("ERRRRRROOO HANDLER", error);
    }
}