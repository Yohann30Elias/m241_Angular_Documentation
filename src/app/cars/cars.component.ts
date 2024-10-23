import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  cars = [
    { brand: "BMW", model: "e36", productionTime: "1990-2000", image: "https://i.auto-bild.de/ir_img/2/9/4/0/2/8/3/59a6b797a42c4a05.jpg?impolicy=leadteaser"},
    { brand: "Honda", model: "CRX", productionTime: "1983–1991", image: "https://www.tuningcars.org/wp-content/uploads/2022/03/01-Honda-CRX-Bull-Design.jpg"},
    { brand: "Audi", model: "RS6 C5", productionTime: "2002-2004" },
    { brand: "Toyota", model: "Supra (4th gen.)", productionTime: "1993-2002" },
  ];

  constructor() {}
}