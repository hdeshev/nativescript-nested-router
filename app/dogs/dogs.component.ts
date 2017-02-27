import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DogService } from '../dog.service';
import { componentNavigation } from "../animations";

@Component({
    selector: 'my-dogs',
    templateUrl: './dogs/dogs.component.html',
    animations: componentNavigation
})
export class DogsComponent {
  public dogs: Array<any>;

  constructor(private router: Router, private dogService: DogService) {
  }

  ngOnInit() {
    this.dogs = this.dogService.getDogs();
  }

  navigateToDetails(id: number) {
    this.router.navigate([
      '/home', { outlets: { dogoutlet: ['dogs', id] } }
    ])
  }
}
