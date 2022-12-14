import * as i0 from '@angular/core';
import { InjectionToken, Injectable, Optional, Inject, NgModule, SkipSelf } from '@angular/core';
import * as i1 from '@angular/common/http';
import { HttpHeaders, HttpUrlEncodingCodec, HttpParams } from '@angular/common/http';

const BASE_PATH = new InjectionToken('basePath');
const COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};

class Configuration {
    constructor(configurationParameters = {}) {
        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
    }
    /**
     * Select the correct content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param contentTypes - the array of content types that are available for selection
     * @returns the selected content-type or <code>undefined</code> if no selection could be made.
     */
    selectHeaderContentType(contentTypes) {
        if (contentTypes.length == 0) {
            return undefined;
        }
        let type = contentTypes.find(x => this.isJsonMime(x));
        if (type === undefined) {
            return contentTypes[0];
        }
        return type;
    }
    /**
     * Select the correct accept content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param accepts - the array of content types that are available for selection.
     * @returns the selected content-type or <code>undefined</code> if no selection could be made.
     */
    selectHeaderAccept(accepts) {
        if (accepts.length == 0) {
            return undefined;
        }
        let type = accepts.find(x => this.isJsonMime(x));
        if (type === undefined) {
            return accepts[0];
        }
        return type;
    }
    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */
    isJsonMime(mime) {
        const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    }
}

/**
 * Rock Paper Scissors
 * Randomly resolve rock paper scissors games
 *
 * OpenAPI spec version: 0.0.1-SNAPSHOT
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */ /* tslint:disable:no-unused-variable member-ordering */
class ActuatorService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://3.64.55.227/';
        this.defaultHeaders = new HttpHeaders();
        this.configuration = new Configuration();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    health(observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/vnd.spring-boot.actuator.v3+json',
            'application/vnd.spring-boot.actuator.v2+json',
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.request('get', `${this.basePath}/actuator/health`, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    healthPath(observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/vnd.spring-boot.actuator.v3+json',
            'application/vnd.spring-boot.actuator.v2+json',
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.request('get', `${this.basePath}/actuator/health/**`, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    links(observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/vnd.spring-boot.actuator.v3+json',
            'application/vnd.spring-boot.actuator.v2+json',
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.request('get', `${this.basePath}/actuator`, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
ActuatorService.??fac = i0.????ngDeclareFactory({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: ActuatorService, deps: [{ token: i1.HttpClient }, { token: BASE_PATH, optional: true }, { token: Configuration, optional: true }], target: i0.????FactoryTarget.Injectable });
ActuatorService.??prov = i0.????ngDeclareInjectable({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: ActuatorService });
i0.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: ActuatorService, decorators: [{
            type: Injectable
        }], ctorParameters: function () {
        return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                        type: Optional
                    }, {
                        type: Inject,
                        args: [BASE_PATH]
                    }] }, { type: Configuration, decorators: [{
                        type: Optional
                    }] }];
    } });

/**
* CustomHttpUrlEncodingCodec
* Fix plus sign (+) not encoding, so sent as blank space
* See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
*/
class CustomHttpUrlEncodingCodec extends HttpUrlEncodingCodec {
    encodeKey(k) {
        k = super.encodeKey(k);
        return k.replace(/\+/gi, '%2B');
    }
    encodeValue(v) {
        v = super.encodeValue(v);
        return v.replace(/\+/gi, '%2B');
    }
}

/**
 * Rock Paper Scissors
 * Randomly resolve rock paper scissors games
 *
 * OpenAPI spec version: 0.0.1-SNAPSHOT
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */ /* tslint:disable:no-unused-variable member-ordering */
class RockPaperScissorsService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://3.64.55.227/';
        this.defaultHeaders = new HttpHeaders();
        this.configuration = new Configuration();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    play1(play, observe = 'body', reportProgress = false) {
        if (play === null || play === undefined) {
            throw new Error('Required parameter play was null or undefined when calling play1.');
        }
        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (play !== undefined && play !== null) {
            queryParameters = queryParameters.set('play', play);
        }
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = [
            '*/*'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.request('get', `${this.basePath}/game`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
RockPaperScissorsService.??fac = i0.????ngDeclareFactory({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: RockPaperScissorsService, deps: [{ token: i1.HttpClient }, { token: BASE_PATH, optional: true }, { token: Configuration, optional: true }], target: i0.????FactoryTarget.Injectable });
RockPaperScissorsService.??prov = i0.????ngDeclareInjectable({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: RockPaperScissorsService });
i0.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: RockPaperScissorsService, decorators: [{
            type: Injectable
        }], ctorParameters: function () {
        return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                        type: Optional
                    }, {
                        type: Inject,
                        args: [BASE_PATH]
                    }] }, { type: Configuration, decorators: [{
                        type: Optional
                    }] }];
    } });

/**
 * Rock Paper Scissors
 * Randomly resolve rock paper scissors games
 *
 * OpenAPI spec version: 0.0.1-SNAPSHOT
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */ /* tslint:disable:no-unused-variable member-ordering */
class RockPaperScissorsLizardSpockService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://3.64.55.227/';
        this.defaultHeaders = new HttpHeaders();
        this.configuration = new Configuration();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    play(play, observe = 'body', reportProgress = false) {
        if (play === null || play === undefined) {
            throw new Error('Required parameter play was null or undefined when calling play.');
        }
        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (play !== undefined && play !== null) {
            queryParameters = queryParameters.set('play', play);
        }
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = [
            '*/*'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.request('get', `${this.basePath}/geek`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
RockPaperScissorsLizardSpockService.??fac = i0.????ngDeclareFactory({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: RockPaperScissorsLizardSpockService, deps: [{ token: i1.HttpClient }, { token: BASE_PATH, optional: true }, { token: Configuration, optional: true }], target: i0.????FactoryTarget.Injectable });
RockPaperScissorsLizardSpockService.??prov = i0.????ngDeclareInjectable({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: RockPaperScissorsLizardSpockService });
i0.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: RockPaperScissorsLizardSpockService, decorators: [{
            type: Injectable
        }], ctorParameters: function () {
        return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                        type: Optional
                    }, {
                        type: Inject,
                        args: [BASE_PATH]
                    }] }, { type: Configuration, decorators: [{
                        type: Optional
                    }] }];
    } });

const APIS = [ActuatorService, RockPaperScissorsService, RockPaperScissorsLizardSpockService];

/**
 * Rock Paper Scissors
 * Randomly resolve rock paper scissors games
 *
 * OpenAPI spec version: 0.0.1-SNAPSHOT
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var GeekModeResponse;
(function (GeekModeResponse) {
    GeekModeResponse.OpponentHandEnum = {
        ROCK: 'ROCK',
        PAPER: 'PAPER',
        SCISSORS: 'SCISSORS',
        LIZARD: 'LIZARD',
        SPOCK: 'SPOCK'
    };
    GeekModeResponse.ResultEnum = {
        VICTORY: 'VICTORY',
        DEFEAT: 'DEFEAT',
        DRAW: 'DRAW'
    };
})(GeekModeResponse || (GeekModeResponse = {}));

/**
 * Rock Paper Scissors
 * Randomly resolve rock paper scissors games
 *
 * OpenAPI spec version: 0.0.1-SNAPSHOT
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var RegularModeResponse;
(function (RegularModeResponse) {
    RegularModeResponse.OpponentHandEnum = {
        ROCK: 'ROCK',
        PAPER: 'PAPER',
        SCISSORS: 'SCISSORS'
    };
    RegularModeResponse.ResultEnum = {
        VICTORY: 'VICTORY',
        DEFEAT: 'DEFEAT',
        DRAW: 'DRAW'
    };
})(RegularModeResponse || (RegularModeResponse = {}));

class ApiModule {
    constructor(parentModule, http) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                'See also https://github.com/angular/angular/issues/20575');
        }
    }
    static forRoot(configurationFactory) {
        return {
            ngModule: ApiModule,
            providers: [{ provide: Configuration, useFactory: configurationFactory }]
        };
    }
}
ApiModule.??fac = i0.????ngDeclareFactory({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: ApiModule, deps: [{ token: ApiModule, optional: true, skipSelf: true }, { token: i1.HttpClient, optional: true }], target: i0.????FactoryTarget.NgModule });
ApiModule.??mod = i0.????ngDeclareNgModule({ minVersion: "14.0.0", version: "14.1.2", ngImport: i0, type: ApiModule });
ApiModule.??inj = i0.????ngDeclareInjector({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: ApiModule, providers: [
        ActuatorService,
        RockPaperScissorsService,
        RockPaperScissorsLizardSpockService
    ] });
i0.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: ApiModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [],
                    declarations: [],
                    exports: [],
                    providers: [
                        ActuatorService,
                        RockPaperScissorsService,
                        RockPaperScissorsLizardSpockService
                    ]
                }]
        }], ctorParameters: function () {
        return [{ type: ApiModule, decorators: [{
                        type: Optional
                    }, {
                        type: SkipSelf
                    }] }, { type: i1.HttpClient, decorators: [{
                        type: Optional
                    }] }];
    } });

/**
 * Generated bundle index. Do not edit.
 */

export { APIS, ActuatorService, ApiModule, BASE_PATH, COLLECTION_FORMATS, Configuration, GeekModeResponse, RegularModeResponse, RockPaperScissorsLizardSpockService, RockPaperScissorsService };
//# sourceMappingURL=rps-client.mjs.map
