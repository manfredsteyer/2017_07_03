

import { Injectable } from '@angular/core';
import { OAuthService } from "angular-oauth2-oidc/dist";

@Injectable()
export class AuthService {


  constructor(private oauthService: OAuthService) {

  }

  get userName(): string {
    let claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims['given_name'];
  }


  // Aufrufer: let x = service.isLogginIn;
  get isLoggedIn(): boolean {
    return this.oauthService.hasValidAccessToken() && this.oauthService.hasValidIdToken()
  }

  login(): void {
    this.oauthService.initImplicitFlow();
  }

  logout(): void {
    this.oauthService.logOut();
  }

  get authorizationHeader() {
    return this.oauthService.authorizationHeader();
  }

}
