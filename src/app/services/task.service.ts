import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service'
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService : WebRequestService) { }

  crateList(title : string){
    this.webReqService.post('lists', title).subscribe((response) => {
      console.log("list added" , response);
      
    });
  }

  crateTask(id : string, title : string){
    console.log("badll task view " ,id , title);
    this.webReqService.post(`lists/${id}/tasks`, title).subscribe((response) => {
      console.log('Task added:', response);
    });
  }

  getList(){
   return this.webReqService.get('lists');
  }

  getTask(id : string){
    return this.webReqService.get(`lists/${id}/tasks`);
   }

  updatList(lid : string , title : string){
    return this.webReqService.patch(`lists/${lid}`, {title});
  }

  updatTask(lid : string ,sid : string, title : string){
    return this.webReqService.patch(`lists/${lid}/tasks/${sid}`, {title});
  }
  
  deleteList(lid : string){
    return this.webReqService.delete(`lists/${lid}`);
  }

  deleteTask(lid : string, tid : string){
    return this.webReqService.delete(`lists/${lid}/tasks/${tid}`);
  }
}
