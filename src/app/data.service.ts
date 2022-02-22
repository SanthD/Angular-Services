import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {LocalStorageService} from 'ngx-webstorage';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public __userUrl = "https://jsonplaceholder.typicode.com/users";

  public _users = "../assets/user.json";
  public eventsData = "../assets/events.json";
  public specailEventsData = "../assets/specialEvents.json";


  constructor(
    private __http:HttpClient,
    private __storage:LocalStorageService,
    private __route:Router
    ) { }

  // get the users 
  getUserData(){
    return this.__http.get(this._users)
  }

  getEventsData(){
    return this.__http.get(this.eventsData)
  }

  // eitUser(data:any){
  //   return this.__http.put(this._users,data)
  // }

  getSpecialEventsData(){
    return this.__http.get(this.specailEventsData)
  }

  getUser(){
    return  this.__storage.retrieve('auth')
  }

  logoutUser(){
    this.__storage.clear('auth')
    this.__route.navigate(['/login'])
  }

  loggedIn() {
    return !!this.__storage.retrieve('auth')  
  }


}
