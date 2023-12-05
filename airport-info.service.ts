// frontend/angular_admin/src/app/airport-info/airport-info.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AirportInfoService {
    private baseUrl = 'http://localhost:5000/airport';

    constructor(private http: HttpClient) {}

    getAirportInfo(code: string): Observable<any> {
        return this.http.get(`${this.baseUrl}/${code}`);
    }
}
