import { Component, OnInit } from "@angular/core";
import { Restaurant } from "./restaurant.model";

@Component({
  selector: "app-restaurant",
  templateUrl: "./restaurant.component.html",
  styleUrls: ["./restaurant.component.css"]
})
export class RestaurantComponent implements OnInit {

  dataList = [
    {
      name: "Moo-Song-Chunn",
      tables: 20,
      statusOpen: true,
      bookingTimes: ["12:00", "13:00"]
    },
    {
      name: "Shabu De-Bear",
      tables: 20,
      statusOpen: true,
      bookingTimes: ["14:00", "15:00"]
    },
    {
      name: "Penguin Shabu",
      tables: 30,
      statusOpen: true,
      bookingTimes: ["16:00", "17:00"]
    },
    {
      name: "TWJ",
      tables: 50,
      statusOpen: true,
      bookingTimes: ["18:00", "19:00"]
    }
  ];

  restaurantList: Restaurant[] = this.dataList;

  constructor() {}

  ngOnInit() {
    console.log(this.restaurantList);
  }
}
