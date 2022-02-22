import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor(private dataServe:CommonService) { }
  
  demoData :any;

  ngOnInit(): void {
    // this.demoData =  this.dataServe.getData();

     this.dataServe.getUserData().subscribe((dt:any)=>{
       this.demoData = dt;
     })

  }

}
