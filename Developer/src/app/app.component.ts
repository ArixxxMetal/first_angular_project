import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MiComponenteComponent, SegundoComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

//heres i can use variables
export class AppComponent {
  title = 'Developer';
  nombre:string = "first_angular_project"
}
