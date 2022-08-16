import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeekModeResponse } from '../model/geekModeResponse';
import { Configuration } from '../configuration';
import * as i0 from "@angular/core";
export declare class RockPaperScissorsLizardSpockService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm;
    /**
     * Play a game
     *
     * @param play
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    play(play: string, observe?: 'body', reportProgress?: boolean): Observable<GeekModeResponse>;
    play(play: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GeekModeResponse>>;
    play(play: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GeekModeResponse>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RockPaperScissorsLizardSpockService, [null, { optional: true; }, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RockPaperScissorsLizardSpockService>;
}
