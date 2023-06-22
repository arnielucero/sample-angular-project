import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SystemIntegration } from '../models/system-integration'
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class SystemIntegrationService {
    constructor(
        private http: HttpClient
    ) {
    }

    create(systemIntegration: SystemIntegration) {
        return this.http.post(`${environment.apiUrl}/system-integration/create`, systemIntegration);
    }

    getAll(): Observable<SystemIntegration[]> {
       
        return this.http.get<SystemIntegration[]>(`${environment.apiUrl}/system-integration`);
    }
   
    getById(id: string) {
        return this.http.get<SystemIntegration>(`${environment.apiUrl}/system-integration/${id}`);
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/system-integration/${id}`)
            .pipe(map(x => {
                return x;
            }));
    }
    
    update(id: string, params: any) {
        return this.http.put(`${environment.apiUrl}/system-integration/${id}`, params)
            .pipe(map(x => {
                return x;
            }));
    }
}