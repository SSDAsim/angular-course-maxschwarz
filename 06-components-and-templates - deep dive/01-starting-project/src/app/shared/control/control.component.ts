import { Component, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, //disable the encapsulation to apply the component styles globally
  host: {
    class: 'control', // set property of the host
    // '(click)': 'onClick()', // listen to the click event on the component
  },
})
export class ControlComponent {
  /* There is an alternative way to set host properties, this is discourged and exists only for backward compatibility reason */
  // @HostBinding('class') className = 'control';
  
  /* Alternate way to listen to an event occured on the host */
  // @HostListener('click') onClick() {
  //   console.log('Clicked!');
  // } 

  label = input.required<string>();

  onClick() {
    console.log('Clicked!');
  }
}
