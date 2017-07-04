import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { CityPipe } from "app/shared/pipes/city.pipe";
import { FlightValidationErrorsComponent } from "app/shared/validation/flight-validation-errors/flight-validation-errors.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CityPipe,
        FlightValidationErrorsComponent
    ],
    providers: [],
    exports: [
        CityPipe,
        FlightValidationErrorsComponent
    ]
})
export class SharedModule { }
