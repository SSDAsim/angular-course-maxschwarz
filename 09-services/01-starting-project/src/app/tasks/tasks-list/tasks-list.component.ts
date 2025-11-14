import { Component, computed, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  private tasksService = inject(TasksService);

  selectedFilter = signal<string>('all');

  // tasks = this.tasksService.tasks;
  /* the above will be a writeable signal, however in some cases we want the logic to change such signal should reside only in the service and the signal should be read-only */
  /* the component should only read the service data and should not manipulate the service data, that's why the signal should be (not ideally but in some cases) read-only and should not be writeable */

  // tasks = this.tasksService.allTasks; // get read-only signal from service

  /* computed() returns a computed() signal who is dependent on other signals and which will be re-computed whenever the dependent signals change. */
  /* why computed() ? whenever the value of the related signals (e.g. filter or value of the this.selectedFilter() or value of allTasks()), compute will recompute */
  
  tasks = computed(() => {
    switch(this.selectedFilter()){
      case 'open':
        return this.tasksService
        .allTasks()
        .filter(task => task.status === 'OPEN');
      case 'in-progress':
        return this.tasksService
        .allTasks()
        .filter(task => task.status === 'IN_PROGRESS');
      case 'done':
        return this.tasksService
        .allTasks()
        .filter(task => task.status === 'DONE');
      default: 
        return this.tasksService.allTasks();
    } 
  });

  /* .filter() loops through each element of the array and you need to return true if you want to keep that element of the array. */

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
