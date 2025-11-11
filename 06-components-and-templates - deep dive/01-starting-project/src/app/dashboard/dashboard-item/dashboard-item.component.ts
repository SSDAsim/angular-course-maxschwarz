import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  // define an object for image src and image alt text
  // @Input({required: true}) img!: {src: string; altText: string};
  // @Input({required: true}) headingText!: string;

  // note: with @Input() -> you access the property as in component markup as img.src
  // while with the input() -> since it is a signal now, so you access the property as img().src

  // alternatively
  img = input.required<{src: string; altText: string}>();
  headingText = input.required<string>();
}
