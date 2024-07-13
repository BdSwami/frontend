import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {LoginRegisterService} from './../../services/login-register.service';
import { WebRequestService } from './../../services/web-request.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  formData = {
    username: '',
    password: ''
  };
  message: string = '';

  constructor(private webReqService : WebRequestService, private register : LoginRegisterService, private router: Router) { }

  onSubmit(){
   
    console.log(this.formData.username,this.formData.password);
    
    this.webReqService.logregpost('register',this.formData.username,this.formData.password).subscribe((res)=>{
      console.log(res.valueOf);
      this.router.navigate(['/login']);
    //  this.message = ;
      // if(res.status == 201)
    // this.register.register(this.formData.username,this.formData.password);
    }) ;
    this.message = "error"; 
  }
}

