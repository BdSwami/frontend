import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TaskService} from '../../services/task.service'
import { ListServiceService } from '../../services/list-service.service';
import { TaskNewService } from 'src/app/services/task-new.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  todo: any;
  countList: number[] = [];
  showInput: boolean = false;
  taskTitle: string = '';
  editingTaskId: string | null = null;

  map = new Map(); 


  constructor(private router: Router, public task : TaskService, private listService: ListServiceService,
    private tasknew : TaskNewService
  ){
    
  }

  ngOnInit(){
    this.getList();
  }

  getList(){
  //  let i = 0
    this.listService.getLists().subscribe((result: any) => {
      this.todo = result.data.getLists;
      // console.log(this.todo[i].id, this.todo ,"badal");
      // i++;
      // this.taskCount(this.todo[i].id)
      this.todo.forEach((element:any) => {
        this.taskCount(element.id);
      });
    });
  }


  goToTask(id : any){
    this.router.navigate(['/mobile/task',id]);
  }

  taskCount(id : any){
    this.listService.getCountTask(id).subscribe((data:any) => {
      this.map.set(id, data.data.getLegthSubTask);
      // console.log(this.map.get(this.todo[i].id), " dnksefnk" ,);
      console.log("data sucess", data.data.getLegthSubTask);
    })
  }

  createList(title : string) {
    this.listService.createList(title).subscribe(() => {
      this.ngOnInit(); // Refresh the list
    });
  }

  saveTask() {
    if (this.editingTaskId) {
      this.updateTask(this.editingTaskId, this.taskTitle);
    } else {
      this.createList(this.taskTitle);
    }
    this.showInput = false;
  }


  updateTask(id: string, title: string) {
    this.listService.updateList(id, title).subscribe(() => {
      this.getList(); // Refresh the list
    });
  }

  editTask(id: string, title: string) {
    this.taskTitle = title;
    this.editingTaskId = id;
    this.showInput = true;
  }

  toggleInput() {
    this.showInput = !this.showInput;
    this.taskTitle = '';
    this.editingTaskId = null;
  }

}
