import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class KeyProviderService {

  constructor(private http:HttpClient) { }
  getInfor(){ //returns data from the url(external file)
    return this.http.get("http://jsonplaceholder.typicode.com/users")
  }
}
