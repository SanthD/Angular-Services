import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { DataService } from '../data.service';
import {LocalStorageService} from 'ngx-webstorage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private __dataService:DataService,
    private fb:FormBuilder,
    private storage:LocalStorageService,
    private __route:Router
    ) { }

  data:any;
  userForm = this.fb.group({
    username : [''],
    password: [''],

  });

  ngOnInit(): void {
    this.__dataService.getUserData().subscribe((dt:any)=>{
        this.data = dt;
        console.log(this.data)
    })
    
  }

  

  Login():any{
    console.log(this.userForm.value)
    this.data.forEach((element:any) => {
      if(element.email === this.userForm.value.username){
        this.storage.store('auth', this.userForm.value.username);
        localStorage.setItem('token','santh')
        sessionStorage.setItem('token','santh')
        this.__route.navigate(['/dashborad'])
      }
    });
  }

  

}
