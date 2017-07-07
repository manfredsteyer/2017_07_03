
import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthService } from "app/shared/auth/auth.service";

//  TODO: AuthService in diesen Ordner verschieben

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    // Components, Pipes, Directives
  ],
  providers: [], // Bleibt leer!!!
  exports: [
    // Components, Pipes, Directives
  ]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [AuthService]
    }
  }
}
