import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Layout
import { Sidebar } from './layout/sidebar/sidebar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Sidebar],
  templateUrl: './app.html',
  styleUrls: ['./app.css'], // ✅ plural
})
export class App {
  // Estado del sidebar (abierto/cerrado)
  isSidebarOpen = signal(false);

  openSidebar() {
    this.isSidebarOpen.set(true);
  }

  closeSidebar() {
    this.isSidebarOpen.set(false);
  }
}