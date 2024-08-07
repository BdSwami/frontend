import { Component } from '@angular/core';

interface Task {
  text: string;
  completed: boolean;
}
@Component({
  selector: 'app-create-title',
  templateUrl: './create-title.component.html',
  styleUrls: ['./create-title.component.scss']
})
export class CreateTitleComponent {
  tasks: Task[] = [
    { text: 'Example task', completed: false }
  ];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ text: this.newTask, completed: false });
      this.newTask = '';
    }
  }

  toggleTask(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
