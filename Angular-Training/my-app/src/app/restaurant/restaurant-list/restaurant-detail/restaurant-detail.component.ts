import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  @Input('bookingTimes') restaurantDetail = [];
  
  constructor() { }

  ngOnInit() {
    console.log(this.restaurantDetail);
  }

}
