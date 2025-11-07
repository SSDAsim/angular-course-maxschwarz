import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() name?: string;
  // @Input() name: string | undefined; // this is the same as above

  // '?' is the other way of achieving the same as you do with '!'. the '?' is to tell typescript that this property may get an 'undefined' value
}
