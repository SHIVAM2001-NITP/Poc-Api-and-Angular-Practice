import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss']
})
export class PostDataComponent {

  constructor(private userData:UsersService){}


  getUserFormData(data:any){
  console.warn(data);
  this.userData.SaveUserFormData(data).subscribe((result)=>{
     console.warn(result);
  });
}

}
