import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRegisterService } from 'src/app/services/login-register.service';
import { WebRequestService } from 'src/app/services/web-request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formData = {
    username: '',
    password: ''
  };
  message: string = '';
  constructor(private webReqService : WebRequestService, private register : LoginRegisterService, private router: Router) { }


  onSubmit(){
   
    console.log(this.formData.username,this.formData.password);
    
    this.webReqService.logregpost('login',this.formData.username,this.formData.password).subscribe((res)=>{
      console.log(res.valueOf);
      this.router.navigate(['/']);
    }) ;
    this.message = "error"; 
  }

}
