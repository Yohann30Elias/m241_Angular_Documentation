import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { CarsComponent } from './cars/cars.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'cars', component: CarsComponent },
];
