import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Notifications } from "./components/notifications/notifications";
import { Navbar } from "./components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Notifications, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'BrandFactory';
}
