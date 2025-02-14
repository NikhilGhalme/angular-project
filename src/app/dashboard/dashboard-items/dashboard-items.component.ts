import {Component, input} from '@angular/core';

@Component({
  selector: 'app-dashboard-items',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-items.component.html',
  styleUrl: './dashboard-items.component.css'
})
export class DashboardItemsComponent {
  // @input({required: true}) image!: { src: string; alt: string };
  // @input({required: true}) title!: string
  image =input.required<{ src:string; alt: string}>();
  title = input.required<string>();
}
