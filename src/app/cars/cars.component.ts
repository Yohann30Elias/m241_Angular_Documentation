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
    { brand: "BMW", model: "e36", productionTime: "1990-2000" },
    { brand: "Honda", model: "CRX", productionTime: "1983–1991" },
    { brand: "Audi", model: "RS6 C5", productionTime: "2002-2004" },
    { brand: "Toyota", model: "Supra (4th gen.)", productionTime: "1993-2002" },
  ];

  car_images = [
    { image: "assets/bmw-e36-img.png" }, 
    { image: "assets/honda-crx-img.png" },
  ];

  constructor() {}
}