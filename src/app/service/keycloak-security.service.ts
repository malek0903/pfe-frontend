import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {KeycloakInstance} from 'keycloak-js';

declare var keycloak : any;
@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {
  public kc :KeycloakInstance ;
  constructor(private http  : HttpClient) { }

  // public async init(){

  //   console.log("keycloak-security ..... ");
  //   this.kc = new keycloak({
  //     url : "http://localhost:9080/auth/",
  //     realm :"pfe-realm",
  //     clientId:"angular-pfe-client"
  //   });
  //   await this.kc.init({
  //     onLoad :"login-required",
  //   })

  //   console.log (this.kc.token);
  // }
}

