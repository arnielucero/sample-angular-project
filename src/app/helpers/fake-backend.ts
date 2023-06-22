import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';
import { SystemIntegration } from '../models';

// array in local storage for registered users
const usersKey = 'angular-14-registration-login-example-users';
let users: any[] =[{
    id: "1",
    username: "John_Doe",
    password: "password",
    firstName: "John",
    lastName: "Doe",
    token: "1323edsdfdfd",
    email: "email#mail.com"
}] || [];

let systemIntegrations: any[] = [{
    id: 1,
    middleware: "Test Middleware",
    accountName: "VUPICO",
    accountDetails: "account details",
    systemType: "system type",
    connectionType: "connection type",
    protocol: "https",
    hostName: "VUPICO.io",
    port: "8088",
    schemaSpecific: "system list table",
    connectionString: "connection string",
    certificate: "SSL",
    privateKey: "your API key",
    secureTunnel: "secure tunnel",
    status: "Active"
},
  {
    id:2,
    middleware: "Test Middleware 2",
    accountName: "Test Service 1",
    accountDetails: "account details",
    systemType: "type1",
    connectionType: "connection type",
    protocol: "https",
    hostName: "VUPICO.io",
    port: "8088",
    schemaSpecific: "system list table",
    connectionString: "connection string",
    certificate: "SSL",
    privateKey: "your API key",
    secureTunnel: "secure tunnel",
    status:"InActive"
  }
] || [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        return handleRoute();

        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users/register') && method === 'POST':
                    return register();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                case url.match(/\/users\/\d+$/) && method === 'GET':
                    return getUserById();
                case url.match(/\/users\/\d+$/) && method === 'PUT':
                    return updateUser();
                case url.match(/\/users\/\d+$/) && method === 'DELETE':
                    return deleteUser();
                case url.endsWith('/system-integration') && method === 'GET':
                    return getSystemIntegration();    
                
                case url.match(/\/system-integration\/\d+$/) && method === 'GET':
                    return getSystemIntegrationById();
                    
                case url.endsWith('/system-integration/create') && method === 'POST':
                        return createSystemIntegration();
                case url.match(/\/system-integration\/\d+$/) && method === 'DELETE':
                    return deleteSystemIntegration();

                case url.match(/\/system-integration\/\d+$/) && method === 'PUT':
                    return updateSystemIntegration();    
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }    
        }

        // route functions

        function authenticate() {
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password);
            if (!user) return error('Username or password is incorrect');
            return ok({
                ...basicDetails(user),
                token: 'fake-jwt-token'
            })
        }

        function register() {
            const user = body

            if (users.find(x => x.username === user.username)) {
                return error('Username "' + user.username + '" is already taken')
            }

            user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
            users.push(user);
            localStorage.setItem(usersKey, JSON.stringify(users));
            return ok();
        }

        function getUsers() {
            if (!isLoggedIn()) return unauthorized();
            return ok(users.map(x => basicDetails(x)));
        }

        function getUserById() {
            if (!isLoggedIn()) return unauthorized();

            const user = users.find(x => x.id === idFromUrl());
            return ok(basicDetails(user));
        }

        function updateUser() {
            if (!isLoggedIn()) return unauthorized();

            let params = body;
            let user = users.find(x => x.id === idFromUrl());

            // only update password if entered
            if (!params.password) {
                delete params.password;
            }

            // update and save user
            Object.assign(user, params);
            localStorage.setItem(usersKey, JSON.stringify(users));

            return ok();
        }

        function deleteUser() {
            if (!isLoggedIn()) return unauthorized();

            users = users.filter(x => x.id !== idFromUrl());
            localStorage.setItem(usersKey, JSON.stringify(users));
            return ok();
        }

        function getSystemIntegration() {
            //if (!isLoggedIn()) return unauthorized();
            return ok(systemIntegrations.map(item => systemIntegrationDetails(item)));
        }

        function deleteSystemIntegration() {
            systemIntegrations = systemIntegrations.filter(x => x.id !== idFromUrl());
            return ok(systemIntegrations.map(item => systemIntegrationDetails(item)));
        }

        function createSystemIntegration() {
            const systemIntegration = body

            if (systemIntegrations.find(x => x.accountName === systemIntegration.accountName)) {
                return error('Account Name "' + systemIntegration.accountName + '" is already taken')
            }

            systemIntegration.id = systemIntegrations.length ? Math.max(...systemIntegrations.map(x => x.id)) + 1 : 1;
            systemIntegrations.push(systemIntegration);
            return ok();
        }

        function updateSystemIntegration() {
            let params = body;
            let systemIntegration = systemIntegrations.find(x => x.id === idFromUrl());
            Object.assign(systemIntegration, params);
            return ok();
        }
        
        function getSystemIntegrationById() {
            const systemIntegration = systemIntegrations.filter(x => x.id == idFromUrl());
            return ok(systemIntegration[0]);
        } 
        // helper functions

        function ok(body?: any) {
            return of(new HttpResponse({ status: 200, body }))
                .pipe(delay(500)); // delay observable to simulate server api call
        }

        function error(message: string) {
            return throwError(() => ({ error: { message } }))
                .pipe(materialize(), delay(500), dematerialize()); // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648);
        }

        function unauthorized() {
            return throwError(() => ({ status: 401, error: { message: 'Unauthorized' } }))
                .pipe(materialize(), delay(500), dematerialize());
        }

        function basicDetails(user: any) {
            const { id, username, firstName, lastName } = user;
            return { id, username, firstName, lastName };
        }

        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }

        function systemIntegrationDetails(systemIntegration: any) {
            return { ...systemIntegration };
        }
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};