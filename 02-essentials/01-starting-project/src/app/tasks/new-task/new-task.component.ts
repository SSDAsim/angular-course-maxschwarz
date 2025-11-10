import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  // properties to implement Two Way Binding - listen to the input or write data back to the input
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  // why these all are string ? cause inputs in HTML always yield a string

  @Output() cancel = new EventEmitter<void>();

  onCancel(){
    this.cancel.emit();
  }

  // prevent the default form submission (using FormsModule) and handle the logic here 
  onSubmit() {
    
  }
}
