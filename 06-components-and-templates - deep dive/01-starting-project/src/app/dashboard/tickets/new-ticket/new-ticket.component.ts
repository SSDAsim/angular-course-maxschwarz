import { Component, ElementRef, viewChild, ViewChild, ViewChildren } from '@angular/core';

import { ControlComponent } from '../../../shared/control/control.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  /* in the paranthesis, you need to pass the name of the template variable assigned in the template file. */
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;

  /* let's achieve the same as we have done above using ViewChild Signal() */
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  /* .required assures typescript that such value will always be found. Alternatively while reading on the form(), place a '?' after the paranthesis which will imply that only read form() or executes any fucntion when form() is defined */
  
  /* to store multiple instances of an element or a component */ 
  // @ViewChildren(ButtonComponent) buttons:

   // capute the form input value(s) using Template Variables
  onSubmit(titleElement: string, textElement: string) {
    console.dir('TITLE: ' + titleElement);
    console.dir('TEXT: ' + textElement);

    // form.reset(); // if you pass the form element from the event binder in the template file

    this.form().nativeElement.reset();
  }
}
