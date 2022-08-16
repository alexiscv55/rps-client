import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Configuration } from '../configuration';
import { Link } from '../model/link';
import * as i0 from "@angular/core";
export declare class ActuatorService {
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
     * Actuator web endpoint &#x27;health&#x27;
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    health(observe?: 'body', reportProgress?: boolean): Observable<any>;
    health(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    health(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    /**
     * Actuator web endpoint &#x27;health-path&#x27;
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    healthPath(observe?: 'body', reportProgress?: boolean): Observable<any>;
    healthPath(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    healthPath(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    /**
     * Actuator root web endpoint
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    links(observe?: 'body', reportProgress?: boolean): Observable<{
        [key: string]: {
            [key: string]: Link;
        };
    }>;
    links(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{
        [key: string]: {
            [key: string]: Link;
        };
    }>>;
    links(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<{
        [key: string]: {
            [key: string]: Link;
        };
    }>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActuatorService, [null, { optional: true; }, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ActuatorService>;
}
