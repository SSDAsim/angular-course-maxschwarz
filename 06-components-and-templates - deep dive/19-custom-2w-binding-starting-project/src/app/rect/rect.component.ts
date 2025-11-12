import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding
  /*
  @Input({required: true}) size!: {width: string;height:string};
  @Output() sizeChange = new EventEmitter<{width: string;height:string}>();
  
  onReset() {

    this.sizeChange.emit({
      width: '100',
      height: '100',
    });
  }

  */

  /* Modern Way of Two-Way Binding (using Model Signal) */
  /* for Angular >= 17 */
  size = model.required<{width: string;height:string}>();
  /* size is now signal and in template file access or read it as size() */

  onReset() {
    this.size.set({
      width: '100',
      height: '100'
    });
  }
}
