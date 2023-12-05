// frontend/angular_admin/src/app/airport-info/airport-info.component.ts

import { Component, OnInit } from '@angular/core';
import { AirportInfoService } from './airport-info.service';

@Component({
    selector: 'app-airport-info',
    templateUrl: './airport-info.component.html',
    styleUrls: ['./airport-info.component.css'],
})
export class AirportInfoComponent implements OnInit {
    airportCode: string = '';
    airportInfo: any = null;

    constructor(private airportInfoService: AirportInfoService) {}

    ngOnInit(): void {}

    fetchAirportInfo(): void {
        this.airportInfoService.getAirportInfo(this.airportCode).subscribe(
            (data) => {
                this.airportInfo = data;
            },
            (error) => {
                console.error('Error fetching airport info:', error);
            }
        );
    }
}
