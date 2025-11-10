import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

@NgModule({
    declarations:[TasksComponent, TaskComponent, NewTaskComponent],
    exports: [TasksComponent], 
    // you do not need to export all the components but just only those which are being used by other modules and not the ones which work together.
    imports:[CommonModule, FormsModule, SharedModule],
    // if a module is using any other module, the module being used is to be imported in that particular module and not in the parent or child module 
})
export class TasksModule {}