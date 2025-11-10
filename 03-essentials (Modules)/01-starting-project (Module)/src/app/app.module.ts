import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent], // this array will contain all the components of this module
    bootstrap: [AppComponent], // bootstrap component to load the application from
    imports: [BrowserModule, SharedModule, TasksModule], // this array includes the standalone components and other imported modules
})
export class AppModule {

}

// BrowserModule must be imported only in the root module from where the app is being bootstrapped 