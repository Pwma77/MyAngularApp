import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
//import http

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  //create this to connect to the api we're creating
  //next time we'll be able to publish our real apps
  serviceUrl = 'http://localhost:40000'

  constructor(

    private http: HttpClient

  ) { }

//http header
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

//to test
  public localTest(){
    try{
      let robot = {
        "name":"Eva01",
        "pilot":"Shinji"
      }
      return robot;

    }catch(ex){
      console.log(ex);
      return ex;
    }
  }

  public testGet(){
    let url = this.serviceUrl + '/api/hello'
    return this.http.get(url);//TO GET THROUGH URL
    //return this.http.get(this.serviceUrl + '/api/hello'); 
  }

  public testGetPlus(){
    let urlTwo = this.serviceUrl + '/api/runsp'
    return this.http.get(urlTwo);
  }

    /*
    try{
      return this.http.get(this.serviceUrl + '/api/hello');//this.the link + the rest of the link api based
    }catch(ex){
      console.log(ex);
      return ex;
    }
  }
  */

}
