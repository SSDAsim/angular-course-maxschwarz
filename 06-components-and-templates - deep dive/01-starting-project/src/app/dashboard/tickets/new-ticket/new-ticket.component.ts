import { Component, ElementRef, ViewChild } from '@angular/core';

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

  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  // in the paranthesis, you need to pass the name of the template variable assigned in the template file.

   // capute the form input value(s) using Template Variables
  onSubmit(titleElement: string, textElement: string) {
    console.dir('TITLE: ' + titleElement);
    console.dir('TEXT: ' + textElement);

    // form.reset(); // if you pass the form element from the event binder in the template file

    this.form?.nativeElement.reset();
  }
}
