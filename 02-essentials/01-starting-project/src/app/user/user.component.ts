import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input() avatar!: string;
  @Input() name!: string;

  // the '!' with property name is to tell typescript that we are going to set the value of this property from outside and that we know we have not initialized this property with any value.

  // image path getter
  get imagePath() {
    return "assets/users/" + this.avatar;
  }

  // define a function that handles the event (the name of the function may start with 'on')
  onClickUser() { }

}
