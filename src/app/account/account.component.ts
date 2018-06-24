import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  doctorName;
  doctorLastName;
  doctorNameBday;
  clinicName;
  clinicCity;
  clinicAddress;
  clinicFloor;
  clinicOpeningHours;
  deliveryMethod1;
  deliveryMethod2


  constructor() {

  }

  ngOnInit() {
  }

}
