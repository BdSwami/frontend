import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/final-services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent1 {
  formData = {
    username: '',
    password: ''
  };
  

  constructor(private router : Router, private authService: UserService) {
  }

  login() {
    console.log("login");
    
    this.authService.login(this.formData.username, this.formData.password).then(() => {
      window.alert("login sucsess");
      this.router.navigate(["/final/abcd"]);
    }).catch(err => {
      // Handle login error
      window.alert("login faild");
      console.log("login faild");
    });
  }
  register(){
    this.router.navigate(["/final/register"]);
  }
}
