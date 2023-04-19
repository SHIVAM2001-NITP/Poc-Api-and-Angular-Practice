import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent {
data:any=[];
  constructor(private user:UsersService) {
    this.user.getData().subscribe((data)=>{
console.warn(data);
this.data=data;
    });
  }

}
