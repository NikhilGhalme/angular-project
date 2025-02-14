import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {TrafficComponent} from "./dashboard/traffic/traffic.component";
import {ServerStatusComponent} from "./dashboard/server-status/server-status.component";
import {TicketsComponent} from "./dashboard/tickets/tickets.component";
import {DashboardItemsComponent} from "./dashboard/dashboard-items/dashboard-items.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, TrafficComponent, ServerStatusComponent, TicketsComponent, DashboardItemsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

}
