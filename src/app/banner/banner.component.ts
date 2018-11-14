import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  providers: [DataService],
})
export class BannerComponent implements OnInit {
  banners:any;
  constructor(private servicio:DataService) { }

  ngOnInit() {
    this.banners=  this.servicio.getBanners();
  }
  
  
}
