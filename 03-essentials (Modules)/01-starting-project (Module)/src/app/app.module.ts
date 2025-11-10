import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';   


@NgModule({
    declarations: [AppComponent], // this array will contain all the components of this module
    bootstrap: [AppComponent], // bootstrap component to load the application from
    imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent], // this array includes the standalone components and other imported modules
})
export class AppModule {

}