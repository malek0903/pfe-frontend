import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentDto } from '../models/ComponentDto';
import { KeycloakService} from 'keycloak-angular'
@Injectable({
  providedIn: 'root'
})
export class WorkflowService {

  url = "http://localhost:8080/api/"
  headers
  constructor(private http: HttpClient,private kc: KeycloakService) {
   
   }
   
   setHeadersToToken(){
    this.kc.getToken()
    .then(token => {
       this.headers = new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      });
   })
   return this.headers ;
   }
  
   /** POST: add a new hero to the database */
   createWorflow(Workflow: ComponentDto) {
     return this.http.post<ComponentDto>(this.url + "components", Workflow);
    
  }
}
