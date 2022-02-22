import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registation',
  templateUrl: './registation.component.html',
  styleUrls: ['./registation.component.scss']
})
export class RegistationComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private __route:Router
  ) { }

  ngOnInit(): void {
  }

  userRegisterForm = this.fb.group({
    username : [''],
    password: [''],

  });

  register(){
    console.log(this.userRegisterForm.value)
    this.__route.navigate(['/login'])
  }
}
