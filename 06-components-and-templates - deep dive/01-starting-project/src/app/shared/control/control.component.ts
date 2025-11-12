import { afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, //disable the encapsulation to apply the component styles globally
  host: {
    class: 'control', // set property of the host
    '(click)': 'onClick()', // listen to the click event on the component
  },
})
export class ControlComponent {
  /* There is an alternative way to set host properties, this is discourged and exists only for backward compatibility reason */
  // @HostBinding('class') className = 'control';
  
  /* Alternate way to listen to an event occured on the host */
  // @HostListener('click') onClick() {
  //   console.log('Clicked!');
  // } 

  constructor() {

    afterNextRender(() => {
      console.log('After Next Render');
    });

    afterRender(() => {
      console.log("After Render");
    });
  }

  // access the host programmatically
  private el = inject(ElementRef);
  // 'el' will contain the information about the host <app-control /> in the DOM and you can manipulate that in this class. 
  // since 'el' is a private property so it can not be accessed outside of the class.

  label = input.required<string>();

  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  /* inside the paranthesis, give the name of the element or template variable to hold control of */

  /* signal alternative */
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  onClick() {
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control());
  }
}
