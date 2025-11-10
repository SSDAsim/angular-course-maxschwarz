/*

import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

// import HeaderComponent, UserComponent
import {HeaderComponent} from './app/header/header.component'
import {UserComponent} from './app/user/user.component'

bootstrapApplication(AppComponent).catch((err) => console.error(err));

// bootstrapApplication(HeaderComponent).catch((err) => console.error(err));

//  this 'bootstrapApplication(componentName) tells the angular that there is a component with name 'componentName' and it should look index.html file for this component's tag to display the content of this tag on the screen 

// importing and bootstrapping individual component is not a good practice. rather in angular the idea is to use one basic app or root component and other components are nested under that root component in order to communicate with each other and exchange data 


*/


// the above approach will work if you are working with standalone components, but if you are working with modules the approach will be as

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);