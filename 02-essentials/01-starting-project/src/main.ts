import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

// import HeaderComponent
import {HeaderComponent} from './app/header.component'

bootstrapApplication(AppComponent).catch((err) => console.error(err));

// bootstrapApplication(HeaderComponent).catch((err) => console.error(err));

//  this 'bootstrapApplication(componentName) tells the angular that there is a component with name 'componentName' and it should look index.html file for this component's tag to display the content of this tag on the screen 

// importing and bootstrapping individual component is not a good practice. rather in angular the idea is to use one basic app or root component and other components are nested under that root component in order to communicate with each other and exchange data 
