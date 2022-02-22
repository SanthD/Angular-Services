import { Component, OnDestroy } from '@angular/core';
import { DataService } from './data.service';
import {LocalStorageService} from 'ngx-webstorage';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'services';

  constructor(
    public  dataService : DataService,
    private __storage:LocalStorageService,
    ){
  }


  logout():void{
    this.dataService.logoutUser()
  }

  ngOnDestroy(): void {
    this.__storage.clear('auth')
  }


}
