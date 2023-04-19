import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

 url="https://localhost:7074/api/sample_data";
getData(){
 
  return this.http.get(this.url);
}
SaveUserFormData(data:any){
return this.http.post(this.url,data);
}
}
