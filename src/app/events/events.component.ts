import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events = new Array();
  constructor(
    private __dataService:DataService
  ) { }

  ngOnInit(): void {
    this.__dataService.getEventsData().subscribe((dt:any)=>{
      this.events = dt;

      console.log(this.events)
  })
  }

}
