import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListServiceService } from 'src/app/services/list-service.service';
import { TaskNewService } from 'src/app/services/task-new.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  id! : string;
  subTask : any;
  constructor(private router: Router, private route: ActivatedRoute, private listService: ListServiceService,
    private tasknew : TaskNewService
  ) {
      this.route.params.subscribe(params => {
        this.id = params['id'];
        console.log(this.id);
        
      });
      this.getTask();
  }

  goBack(): void {
    this.router.navigate(['/mobile']); // Go back to the previous page
  }

  getTask(){
      this.tasknew.getTasks(this.id).subscribe((res : any) => {
        this.subTask = res.data.getTasks;
        // console.log(res.data.getTasks.length);
        
      })
  }

  addTask(){
    window.alert("Hi you wana to add task");
  }


}
