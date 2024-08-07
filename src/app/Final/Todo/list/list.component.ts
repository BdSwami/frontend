import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/final-services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent1 implements OnInit {
  constructor(private userServic : UserService) {}

  user : any;

  ngOnInit(){
    this.getUser();
    // this.signUp();
  }

  getUser(){
    this.userServic.getUsers().subscribe((res : any) => {
      console.log(res ,"badal");
    });
  }

  signUp(){
    this.userServic.signUp("Badal swami","bdswami143@gmail.com", "Badal1234").subscribe((res : any) =>{
      console.log(res, "user created");
    })
  }
}
