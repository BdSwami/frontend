import { Injectable } from '@angular/core';
import { Work } from '../models/work.model';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  private works: Work[] = [];

  constructor() { }

  getWorks(): Work[] {
    return this.works;
  }

  addWork(work: Work): void {
    this.works.push(work);
  }

  updateWork(updatedWork: Work): void {
    const index = this.works.findIndex(w => w.id === updatedWork.id);
    if (index !== -1) {
      this.works[index] = updatedWork;
    }
  }

  deleteWork(workId: number): void {
    this.works = this.works.filter(w => w.id !== workId);
  }
}
