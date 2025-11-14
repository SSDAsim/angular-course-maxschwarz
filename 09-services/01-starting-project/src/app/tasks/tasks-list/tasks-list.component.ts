import { Component, computed, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';
import {TASK_STATUS_OPTIONS, TaskStatusOptionsProvider} from '../task.model';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
  providers: [TaskStatusOptionsProvider]
  /* TASK_STATUS_OPTIONS is not a class rather a simple array so we used 'useValue:' and not 'useClass' */
})
export class TasksListComponent {
  private tasksService = inject(TasksService);

  selectedFilter = signal<string>('all');

  /* inject non-service value */
  taskStatusOption = inject(TASK_STATUS_OPTIONS);
   /*
   * inside paranthesis, there is Dependency Injection token (unique identifier for dependency) 
   * for a service class, usually the class name serves as the Dependency Injection Token 
   */

  
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
