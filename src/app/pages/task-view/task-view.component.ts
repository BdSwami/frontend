import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { CreateTitleComponent } from '../../components/create-title/create-title.component';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent {
  constructor (private taskService : TaskService) {
    this.getList();
  }


  todo : any;
  subTask : any;
  ListId !: string;
  ngOninit(){
    this.getList();
  }
  getList(){
    this.taskService.getList().subscribe((res : any) =>{
      console.log(res);
      this.todo = res;      
   });
  }

  getTask(id : string){
    this.ListId = id;
    this.taskService.getTask(id).subscribe((res : any) =>{
      console.log(this.ListId);
      this.subTask = res;      
   });
  }

  deleteList(id : string){
    console.log(this.ListId,"badal");
    this.taskService.deleteList(id).subscribe((res : any) =>{
      console.log('deleted');
      this.getList();
    });
  }

  deleteTask(lid : string, tid : string){
    this.taskService.deleteTask(lid,tid).subscribe((res : any) =>{
      console.log('deleted  task');
      this.getTask(lid);
    });
  }

  taskAll(task : any){
    this.subTask = task.Sub_task;
  }

  toolTip = false;
  CreateTask(){
    console.log('badallll')
    this.toolTip = true;
  }

  inputValue: string = '';
  crateList = false;

  getValue() {
    console.log('Input Value:', this.inputValue);
    if(this.crateList == false)
      {
        this.taskService.crateTask(this.ListId,this.inputValue);
        this.getTask(this.ListId);
      }
    else{
        this.taskService.crateList(this.inputValue);
        this.getList();
     } 
    this.toolTip = false;
  }
 
  createlist(){
    this.toolTip = true; 
    this.crateList = true; 
  }

  updateTask(id:string,sid:string){
    this.taskService.updatTask(id,sid,"badal swami").subscribe((res) =>{
      this.getTask(id);
    });
    this.getTask(id);
  }
}
