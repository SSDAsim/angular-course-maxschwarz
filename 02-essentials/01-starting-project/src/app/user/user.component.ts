import { Component, EventEmitter, Input, Output, output} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string; 
  // it is better if you declare the type of data you are expecting
  @Output() select = new EventEmitter<string>();

  // image path getter
  get imagePath() {
    return "assets/users/" + this.avatar;
  }

  // define a function that handles the event (the name of the function may start with 'on')
  onClickUser() {
    this.select.emit(this.id)
   }

}
