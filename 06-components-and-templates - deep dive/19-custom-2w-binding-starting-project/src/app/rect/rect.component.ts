import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding
  // take size as input
  @Input({required: true}) size!: {width: string;height:string};
  @Output() sizeChange = new EventEmitter<{width: string;height:string}>();
  
  /*
  * in order to reset the size values, we can do that in onReset() by usually setting the width and height a specific value but that is not how we should do it. we should rather use Two Way Binding 
  * to implement Two Way Binding, we should use both @Input() and @Output, that is how Two Way Binding works.  
  * now for angular to understand to way binding the name of the @Output has to be very specific. 
  * if @Input() name is 'size', the @Output() must be 'sizeChange'. This @Input() and @Output() together makes Two-Way Bindable size property
   */
  
  onReset() {
    //this.size = {
    //   width: '100',
    //   height: '200',
    // }
    // the above code is right but not uses Two Way Binding 

    this.sizeChange.emit({
      width: '100',
      height: '100',
    });
  }
}
