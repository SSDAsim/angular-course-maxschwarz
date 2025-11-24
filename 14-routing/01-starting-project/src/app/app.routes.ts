import { Routes } from "@angular/router";
import { TasksComponent } from "./tasks/tasks.component";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component";

export const routes: Routes = [    
    {
        path: 'tasks', //<domain>/tasks
        component: TasksComponent
    },
    {
        path: 'users/:userId', //<domain>/users/<uid>
        component: UserTasksComponent,
    },
    // routes are evaluated from top to bottom, so beware of the order of the tasks
    // order should be according to the increasing complexity from top to bottom
]