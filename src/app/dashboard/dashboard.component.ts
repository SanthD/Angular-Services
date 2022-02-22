import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  events = new Array();
  constructor(
    private __dataService:DataService
  ) { }

  ngOnInit(): void {
    this.__dataService.getSpecialEventsData().subscribe((dt:any)=>{
      this.events = dt;

      console.log(this.events)
  })
  }

}
