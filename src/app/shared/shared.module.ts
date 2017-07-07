import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { CityPipe } from "app/shared/pipes/city.pipe";
import { FlightValidationErrorsComponent } from "app/shared/validation/flight-validation-errors/flight-validation-errors.component";
import { CityValidationDirective } from "app/shared/validation/city-validation.directive";
import { RoundTripValidationDirective } from "app/shared/validation/roundtrip-validation.directive";
import { AsyncCityValidationDirective } from "app/shared/validation/async-city-validation.directive";
import { AuthGuard } from "app/shared/auth/auth.guard";
import { AuthService } from "app/shared/auth/auth.service";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CityPipe,
        FlightValidationErrorsComponent,
        CityValidationDirective,
        RoundTripValidationDirective,
        AsyncCityValidationDirective
    ],
    providers: [
      AuthGuard,
      // AuthService
    ],
    exports: [
        CityPipe,
        FlightValidationErrorsComponent,
        CityValidationDirective,
        RoundTripValidationDirective,
        AsyncCityValidationDirective
    ]
})
export class SharedModule { }
