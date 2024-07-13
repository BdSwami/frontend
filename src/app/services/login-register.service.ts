import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service'
@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  constructor(private webReqService : WebRequestService) { }

  register(username : string, password : string){
    this.webReqService.logregpost('register',username,password).subscribe((res)=>{
      console.log(res);
      
    });
  }
}
