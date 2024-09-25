import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent implements OnInit {
  title = 'Homepage';

  constructor(private router: Router) {}

  ngOnInit() {}

  clickhandler() {
    const confirm = prompt('Are you sure you want to see the cars?')

    if (confirm === 'yes') {
      this.router.navigate(['cars']); 
    }
  }

}
