import { Component, inject, signal } from '@angular/core';

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

  tasks = this.tasksService.allTasks; // get read-only signal from service

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
