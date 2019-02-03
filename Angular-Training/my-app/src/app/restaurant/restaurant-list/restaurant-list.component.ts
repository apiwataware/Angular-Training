import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  @Input() restaurantData = [];

  constructor() { }

  ngOnInit() {
    console.log(this.restaurantData);
  }

}
