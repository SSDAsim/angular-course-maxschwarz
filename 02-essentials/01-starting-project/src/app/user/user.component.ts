import { Component, computed, signal } from '@angular/core';

import {DUMMY_USERS} from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // Define the variables here in order to access them in the component markup
  // by default the props are public, but if you want them to be accessible only inside class, define them as 'private'
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  // define a getter and you can use it as a property in the markup 
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  // getter function with signals
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  // the reason for this ? it's because Angular will associate a subscription to the selectUser signal, and only when this specifc signal i.e. selectedUser changed the value of the imagePath is computed again. regardless of the changes in other components and the overall UI. 

  // define a function that handles the event (the name of the function may start with 'on')
  onClickUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }

}
