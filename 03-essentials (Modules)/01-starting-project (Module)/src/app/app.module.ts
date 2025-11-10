import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

@NgModule({
    declarations: [AppComponent], // this array will contain all the components of this module
    bootstrap: [AppComponent], // bootstrap component to load the application from
})
export class AppModule {

}