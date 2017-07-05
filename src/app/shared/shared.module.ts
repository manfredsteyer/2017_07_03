import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { CityPipe } from "app/shared/pipes/city.pipe";
import { FlightValidationErrorsComponent } from "app/shared/validation/flight-validation-errors/flight-validation-errors.component";
import { CityValidationDirective } from "app/shared/validation/city-validation.directive";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CityPipe,
        FlightValidationErrorsComponent,
        CityValidationDirective
    ],
    providers: [],
    exports: [
        CityPipe,
        FlightValidationErrorsComponent,
        CityValidationDirective
    ]
})
export class SharedModule { }
