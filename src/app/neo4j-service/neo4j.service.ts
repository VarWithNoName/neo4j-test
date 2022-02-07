import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as neo4j from 'neo4j-driver';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root'
})
export class Neo4jService {

  driver:any;


  constructor(private httpclient: HttpClient,  private oidcSecurityService: OidcSecurityService) { 
   
    debugger;
    const auth  = neo4j.auth.bearer(oidcSecurityService.getAccessToken());

    this.driver = neo4j.driver("bolt://ip/", auth);
  }

  // beginTransaction():Observable<any>{
  //   return this.httpclient.post(this.configSettings.neo4jHost);
  // }


  disconnect() {
    if (this.driver) {
      this.driver.close();
      this.driver = null;
    }
  }
  /**
   * Create a new driver session
   */
  getSession() {
    if (!this.driver) {
      throw new Error(
        'Driver not initialized'
      );
    }

    return this.driver.session();
  }

  /**
   * Run a query on the current driver
   */
  run(query:string, params = null) {
    const session = this.getSession();

    return session.run(query, params).then((results:any)=> {
      debugger;
    })
  }

}
