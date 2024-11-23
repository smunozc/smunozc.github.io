import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JsonToInterfacesComponent } from "./components/json-to-interfaces/json-to-interfaces.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonToInterfacesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myTools';
}
