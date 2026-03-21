import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  bienvenido = 'Henry Alejandro Forero Lopez';
  Estuduantes =['Cuadernos','Gorras','Gafas','Celulares']
}
